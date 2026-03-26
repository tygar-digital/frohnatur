#!/usr/bin/env python3
"""Image → SVG: Potrace (smooth bezier) with OpenCV fallback (polygon)."""
import cv2
import numpy as np
import os, argparse

# --- Potrace Backend ---

def trace_potrace(binary, fill_color, scale_x, scale_y):
    """Trace binary image using Potrace. Returns SVG path d-attribute."""
    from potrace import Bitmap
    bm = Bitmap(binary > 0)
    plist = bm.trace(
        turdsize=2,
        alphamax=1.0,
        opticurve=True,
        opttolerance=0.2,
    )
    all_parts = []
    for curve in plist:
        sp = curve.start_point
        parts = [f"M{sp.x * scale_x:.1f},{sp.y * scale_y:.1f}"]
        for seg in curve.segments:
            ep = seg.end_point
            if seg.is_corner:
                c = seg.c
                parts.append(f"L{c.x*scale_x:.1f},{c.y*scale_y:.1f}")
                parts.append(f"L{ep.x*scale_x:.1f},{ep.y*scale_y:.1f}")
            else:
                parts.append(
                    f"C{seg.c1.x*scale_x:.1f},{seg.c1.y*scale_y:.1f} "
                    f"{seg.c2.x*scale_x:.1f},{seg.c2.y*scale_y:.1f} "
                    f"{ep.x*scale_x:.1f},{ep.y*scale_y:.1f}"
                )
        parts.append("Z")
        all_parts.append(" ".join(parts))

    combined_d = " ".join(all_parts)
    return f'<path d="{combined_d}" fill="{fill_color}" fill-rule="evenodd"/>'


# --- OpenCV Fallback ---

def trace_opencv(binary, fill_color, scale_x, scale_y, epsilon=0.002, min_area=100):
    """Trace binary image using OpenCV contours. Returns list of SVG path elements."""
    contours, hierarchy = cv2.findContours(binary, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)
    if hierarchy is not None:
        hierarchy = hierarchy[0]

    filtered = [(i, c) for i, c in enumerate(contours) if cv2.contourArea(c) >= min_area]
    used = set()
    paths = []

    for idx, cnt in filtered:
        if idx in used:
            continue
        peri = cv2.arcLength(cnt, True)
        approx = cv2.approxPolyDP(cnt, epsilon * peri, True)
        if len(approx) < 3:
            continue

        pts = approx.reshape(-1, 2)
        d = f"M{pts[0][0]*scale_x:.1f},{pts[0][1]*scale_y:.1f}"
        for pt in pts[1:]:
            d += f" L{pt[0]*scale_x:.1f},{pt[1]*scale_y:.1f}"
        d += "Z"
        used.add(idx)

        # Child holes
        if hierarchy is not None:
            child_idx = hierarchy[idx][2]
            while child_idx != -1:
                if child_idx not in used:
                    child_cnt = contours[child_idx]
                    if cv2.contourArea(child_cnt) >= min_area:
                        child_peri = cv2.arcLength(child_cnt, True)
                        child_approx = cv2.approxPolyDP(child_cnt, epsilon * child_peri, True)
                        if len(child_approx) >= 3:
                            child_pts = child_approx.reshape(-1, 2)
                            d += f" M{child_pts[0][0]*scale_x:.1f},{child_pts[0][1]*scale_y:.1f}"
                            for pt in child_pts[1:]:
                                d += f" L{pt[0]*scale_x:.1f},{pt[1]*scale_y:.1f}"
                            d += "Z"
                            used.add(child_idx)
                child_idx = hierarchy[child_idx][0]

        paths.append(f'<path d="{d}" fill="{fill_color}" fill-rule="evenodd"/>')
    return paths


# --- Main Pipeline ---

def image_to_svg(input_path, output_path, width=800, height=0, blur=5,
                 threshold=127, invert=False, adaptive=False,
                 epsilon=0.002, min_area=100, max_contours=500,
                 auto_crop=False, crop_padding=10,
                 fill_color="#000000", debug=False):

    img = cv2.imread(input_path, cv2.IMREAD_UNCHANGED)
    if img is None:
        raise ValueError(f"Could not load: {input_path}")

    # RGBA → white composite
    if len(img.shape) == 3 and img.shape[2] == 4:
        alpha = img[:, :, 3] / 255.0
        bg = np.ones_like(img[:, :, :3], dtype=np.uint8) * 255
        for c in range(3):
            bg[:, :, c] = (img[:, :, c] * alpha + 255 * (1 - alpha)).astype(np.uint8)
        img = bg

    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY) if len(img.shape) == 3 else img

    if blur > 0:
        blur = blur if blur % 2 == 1 else blur + 1
        gray = cv2.GaussianBlur(gray, (blur, blur), 0)

    if adaptive:
        binary = cv2.adaptiveThreshold(gray, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C,
                                        cv2.THRESH_BINARY_INV, 11, 2)
    else:
        _, binary = cv2.threshold(gray, threshold, 255, cv2.THRESH_BINARY)

    if invert:
        binary = cv2.bitwise_not(binary)

    if debug:
        os.makedirs('debug', exist_ok=True)
        cv2.imwrite('debug/01_binary.png', binary)

    if auto_crop:
        coords = cv2.findNonZero(binary)
        if coords is not None:
            x, y, wc, hc = cv2.boundingRect(coords)
            x = max(0, x - crop_padding)
            y = max(0, y - crop_padding)
            wc = min(binary.shape[1] - x, wc + 2 * crop_padding)
            hc = min(binary.shape[0] - y, hc + 2 * crop_padding)
            binary = binary[y:y+hc, x:x+wc]

    img_h, img_w = binary.shape
    if height == 0:
        height = int(width * img_h / img_w)
    scale_x = width / img_w
    scale_y = height / img_h

    # Try Potrace first, fall back to OpenCV
    try:
        from potrace import Bitmap
        path_element = trace_potrace(binary, fill_color, scale_x, scale_y)
        svg_body = f"  {path_element}"
        backend = "potrace"
    except ImportError:
        print("Potrace nicht verfügbar, verwende OpenCV-Fallback (Polygone)")
        path_elements = trace_opencv(binary, fill_color, scale_x, scale_y,
                                      epsilon=epsilon, min_area=min_area)
        svg_body = "\n".join(f"  {p}" for p in path_elements)
        backend = "opencv"

    svg = (
        f'<svg xmlns="http://www.w3.org/2000/svg" '
        f'viewBox="0 0 {width} {height}" width="{width}" height="{height}">\n'
        f'{svg_body}\n'
        f'</svg>'
    )

    with open(output_path, 'w') as f:
        f.write(svg)

    size = os.path.getsize(output_path)
    c_count = svg.count(' C')
    l_count = svg.count(' L')
    print(f"[{backend}] {output_path}: {c_count} curves, {l_count} lines, {size} bytes")


if __name__ == '__main__':
    p = argparse.ArgumentParser(description='Image to SVG (Potrace + OpenCV)')
    p.add_argument('input', help='Input image (PNG, JPG, WebP)')
    p.add_argument('-o', '--output', help='Output SVG path')
    p.add_argument('-W', '--width', type=int, default=800)
    p.add_argument('-H', '--height', type=int, default=0)
    p.add_argument('-b', '--blur', type=int, default=5)
    p.add_argument('-t', '--threshold', type=int, default=127)
    p.add_argument('--invert', action='store_true')
    p.add_argument('--adaptive', action='store_true')
    p.add_argument('-e', '--epsilon', type=float, default=0.002)
    p.add_argument('-m', '--min-area', type=int, default=100)
    p.add_argument('--max-contours', type=int, default=500)
    p.add_argument('--auto-crop', action='store_true')
    p.add_argument('--crop-padding', type=int, default=10)
    p.add_argument('--fill-color', default='#000000')
    p.add_argument('--debug', action='store_true')
    args = p.parse_args()

    if not args.output:
        args.output = os.path.splitext(args.input)[0] + '.svg'

    image_to_svg(
        args.input, args.output,
        width=args.width, height=args.height,
        blur=args.blur, threshold=args.threshold,
        invert=args.invert, adaptive=args.adaptive,
        epsilon=args.epsilon, min_area=args.min_area,
        max_contours=args.max_contours,
        auto_crop=args.auto_crop, crop_padding=args.crop_padding,
        fill_color=args.fill_color, debug=args.debug,
    )
