"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Fragment } from "react";
import {
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
} from "@/components/ui/context-menu";
import { copySvgMarkup, downloadPng, downloadSvg } from "@/lib/brand/download";
import {
  type LogoVariantId,
  PNG_COLORS,
  PNG_SIZES,
  type PngColorKey,
} from "@/lib/brand/tokens";
import { SITE_CONTENT } from "@/lib/constants";

interface Props {
  showViewBrand?: boolean;
  variant: LogoVariantId;
}

export function LogoContextMenuContent({
  variant,
  showViewBrand = true,
}: Props) {
  const router = useRouter();
  const a = SITE_CONTENT.brandPage.actions;
  const colorKeys = Object.keys(PNG_COLORS) as PngColorKey[];

  return (
    <ContextMenuContent className="w-56">
      <ContextMenuItem
        onSelect={() => {
          downloadSvg(variant);
        }}
      >
        {a.downloadSvg}
      </ContextMenuItem>

      <ContextMenuSeparator />

      {colorKeys.map((color) => (
        <Fragment key={color}>
          <ContextMenuLabel className="text-[10px] text-ink-3 uppercase tracking-[0.25em]">
            {a.downloadPng} ·{" "}
            {color === "light" ? a.downloadPngLight : a.downloadPngDark}
          </ContextMenuLabel>
          {PNG_SIZES.map((size) => (
            <ContextMenuItem
              className="pl-4"
              key={`${color}-${size}`}
              onSelect={() => {
                downloadPng(variant, color, size);
              }}
            >
              {size} px
            </ContextMenuItem>
          ))}
        </Fragment>
      ))}

      <ContextMenuSeparator />

      <ContextMenuItem
        onSelect={() => {
          copySvgMarkup(variant);
        }}
      >
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
