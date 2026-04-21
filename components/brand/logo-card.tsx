"use client";

import { ContextMenu, ContextMenuTrigger } from "@/components/ui/context-menu";
import { LogoContextMenuContent } from "./logo-context-menu";
import { SITE_CONTENT } from "@/lib/constants";
import {
  LOGO_VARIANTS,
  PNG_SIZES,
  type LogoVariantId,
  type PngSize,
} from "@/lib/brand/tokens";
import { downloadPng, downloadSvg } from "@/lib/brand/download";
import { useState } from "react";

type Props = { variant: LogoVariantId };

const DEFAULT_PNG_SIZE: PngSize = 1024;

export function LogoCard({ variant }: Props) {
  const copy = SITE_CONTENT.brandPage;
  const v = copy.logoVariants[variant];
  const meta = LOGO_VARIANTS.find((x) => x.id === variant)!;
  const [pngSize, setPngSize] = useState<PngSize>(DEFAULT_PNG_SIZE);

  const aspect = meta.width / meta.height;
  const isWide = aspect > 2;
  const isSquareish = aspect < 1.5;

  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <article className="group flex flex-col gap-5 rounded-sm border border-rule bg-bg-2 p-6 transition-colors hover:border-gold/40">
          {/* Preview */}
          <div
            className={[
              "flex items-center justify-center rounded-sm border border-rule/60 bg-bg-3 px-8",
              isSquareish ? "aspect-square py-10" : isWide ? "aspect-[4/1] py-8" : "aspect-[3/2] py-10",
            ].join(" ")}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={meta.svgPath}
              alt={v.name}
              className="max-h-full max-w-full text-ink"
              style={{ color: "var(--ink)" }}
            />
          </div>

          {/* Label */}
          <div className="flex flex-col gap-1">
            <h3 className="font-[family-name:var(--font-im-fell)] text-[11px] tracking-[0.3em] uppercase text-ink">
              {v.name}
            </h3>
            <p className="font-[family-name:var(--font-eb-garamond)] text-[13px] italic text-ink-3">
              {v.desc}
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => void downloadSvg(variant)}
              className="inline-flex items-center gap-1.5 rounded-sm border border-rule px-3 py-1.5 font-[family-name:var(--font-im-fell)] text-[10px] tracking-[0.3em] uppercase text-ink transition-colors hover:border-gold hover:text-gold"
            >
              {copy.actions.downloadSvg}
            </button>

            <button
              type="button"
              onClick={() => void downloadPng(variant, "light", pngSize)}
              className="inline-flex items-center gap-1.5 rounded-sm border border-rule px-3 py-1.5 font-[family-name:var(--font-im-fell)] text-[10px] tracking-[0.3em] uppercase text-ink transition-colors hover:border-gold hover:text-gold"
            >
              {copy.actions.downloadPng}
            </button>

            <div className="ml-1 flex items-center gap-1 font-[family-name:var(--font-jetbrains)] text-[10px] text-ink-3">
              {PNG_SIZES.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setPngSize(size)}
                  aria-pressed={pngSize === size}
                  className={[
                    "rounded-sm border px-1.5 py-1 transition-colors",
                    pngSize === size
                      ? "border-gold text-gold"
                      : "border-transparent hover:text-ink-2",
                  ].join(" ")}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </article>
      </ContextMenuTrigger>

      <LogoContextMenuContent variant={variant} showViewBrand={false} />
    </ContextMenu>
  );
}
