import {
  LOGO_VARIANTS,
  type LogoVariantId,
  PNG_COLORS,
  type PngColorKey,
  type PngSize,
} from "./tokens";

const variantById = (id: LogoVariantId) => {
  const v = LOGO_VARIANTS.find((x) => x.id === id);
  if (!v) {
    throw new Error(`Unknown logo variant: ${id}`);
  }
  return v;
};

export const svgFilename = (id: LogoVariantId) => `alquimia-${id}.svg`;
export const pngFilename = (
  id: LogoVariantId,
  color: PngColorKey,
  size: PngSize
) => `alquimia-${id}-${color}-${size}.png`;

async function fetchSvg(id: LogoVariantId): Promise<string> {
  const v = variantById(id);
  const res = await fetch(v.svgPath);
  if (!res.ok) {
    throw new Error(`Failed to fetch ${v.svgPath}`);
  }
  return res.text();
}

const COLOR_ATTR_RE = /color="#[0-9a-fA-F]{3,8}"/;

function recolorSvg(svg: string, color: string): string {
  return svg.replace(COLOR_ATTR_RE, `color="${color}"`);
}

function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.style.position = "fixed";
  a.style.left = "-9999px";
  a.rel = "noopener";
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 0);
}

export async function downloadSvg(id: LogoVariantId) {
  const text = await fetchSvg(id);
  downloadBlob(new Blob([text], { type: "image/svg+xml" }), svgFilename(id));
}

export async function downloadPng(
  id: LogoVariantId,
  color: PngColorKey,
  size: PngSize
) {
  const variant = variantById(id);
  const svg = recolorSvg(await fetchSvg(id), PNG_COLORS[color]);
  const blob = await rasterize(svg, variant.width, variant.height, size);
  downloadBlob(blob, pngFilename(id, color, size));
}

export async function copySvgMarkup(id: LogoVariantId) {
  const text = await fetchSvg(id);
  await navigator.clipboard.writeText(text);
}

export async function copyText(text: string) {
  await navigator.clipboard.writeText(text);
}

function rasterize(
  svgText: string,
  srcWidth: number,
  srcHeight: number,
  longestSide: number
): Promise<Blob> {
  const aspect = srcWidth / srcHeight;
  const outWidth = aspect >= 1 ? longestSide : Math.round(longestSide * aspect);
  const outHeight =
    aspect >= 1 ? Math.round(longestSide / aspect) : longestSide;

  return new Promise((resolve, reject) => {
    const svgBlob = new Blob([svgText], {
      type: "image/svg+xml;charset=utf-8",
    });
    const url = URL.createObjectURL(svgBlob);
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = outWidth;
      canvas.height = outHeight;
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        URL.revokeObjectURL(url);
        reject(new Error("Canvas 2D context not available"));
        return;
      }
      ctx.drawImage(img, 0, 0, outWidth, outHeight);
      URL.revokeObjectURL(url);
      canvas.toBlob((blob) => {
        if (blob) {
          resolve(blob);
        } else {
          reject(new Error("Canvas toBlob returned null"));
        }
      }, "image/png");
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Failed to load SVG into Image"));
    };
    img.src = url;
  });
}
