"use client";

import { Fragment } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
} from "@/components/ui/context-menu";
import { SITE_CONTENT } from "@/lib/constants";
import {
  PNG_COLORS,
  PNG_SIZES,
  type LogoVariantId,
  type PngColorKey,
} from "@/lib/brand/tokens";
import { copySvgMarkup, downloadPng, downloadSvg } from "@/lib/brand/download";

type Props = {
  variant: LogoVariantId;
  showViewBrand?: boolean;
};

export function LogoContextMenuContent({ variant, showViewBrand = true }: Props) {
  const router = useRouter();
  const a = SITE_CONTENT.brandPage.actions;
  const colorKeys = Object.keys(PNG_COLORS) as PngColorKey[];

  return (
    <ContextMenuContent className="w-56">
      <ContextMenuItem onSelect={() => void downloadSvg(variant)}>
        {a.downloadSvg}
      </ContextMenuItem>

      <ContextMenuSeparator />

      {colorKeys.map((color) => (
        <Fragment key={color}>
          <ContextMenuLabel className="text-ink-3 text-[10px] tracking-[0.25em] uppercase">
            {a.downloadPng} · {color === "light" ? a.downloadPngLight : a.downloadPngDark}
          </ContextMenuLabel>
          {PNG_SIZES.map((size) => (
            <ContextMenuItem
              key={`${color}-${size}`}
              onSelect={() => void downloadPng(variant, color, size)}
              className="pl-4"
            >
              {size} px
            </ContextMenuItem>
          ))}
        </Fragment>
      ))}

      <ContextMenuSeparator />

      <ContextMenuItem onSelect={() => void copySvgMarkup(variant)}>
        {a.copySvg}
      </ContextMenuItem>

      {showViewBrand ? (
        <>
          <ContextMenuSeparator />
          <ContextMenuItem asChild>
            <Link
              href="/brand"
              onClick={(e) => {
                e.preventDefault();
                router.push("/brand");
              }}
            >
              {a.viewBrand}
            </Link>
          </ContextMenuItem>
        </>
      ) : null}
    </ContextMenuContent>
  );
}
