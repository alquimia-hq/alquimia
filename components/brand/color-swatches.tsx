"use client";

import { useState } from "react";
import { SITE_CONTENT } from "@/lib/constants";
import { COLOR_TOKENS, type ColorToken } from "@/lib/brand/tokens";
import { copyText } from "@/lib/brand/download";

const GROUP_ORDER: ColorToken["group"][] = ["backgrounds", "ink", "accents"];

export function ColorSwatches() {
  const copy = SITE_CONTENT.brandPage;

  return (
    <div className="flex flex-col gap-10">
      {GROUP_ORDER.map((group) => {
        const items = COLOR_TOKENS.filter((t) => t.group === group);
        return (
          <section key={group} className="flex flex-col gap-4">
            <h3 className="font-[family-name:var(--font-im-fell)] text-[11px] tracking-[0.3em] uppercase text-ink-2">
              {copy.colorGroups[group]}
            </h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((t) => (
                <Swatch key={t.name} token={t} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

function Swatch({ token }: { token: ColorToken }) {
  const copy = SITE_CONTENT.brandPage;
  const [copied, setCopied] = useState(false);
  const isBg = token.group === "backgrounds";

  async function handleCopy() {
    try {
      await copyText(token.hex);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      // noop — clipboard unavailable
    }
  }

  const badge =
    token.contrast === "AAA"
      ? copy.aaaLabel
      : token.contrast === "AA"
        ? copy.aaLabel
        : token.contrast === "AA-Large"
          ? `${copy.aaLabel}·lg`
          : null;

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="group relative flex items-stretch gap-4 rounded-sm border border-rule bg-bg-2 p-3 text-left transition-colors hover:border-gold/40 focus:outline-none focus-visible:border-gold"
      aria-label={`${copy.actions.copy} ${token.hex}`}
    >
      <div
        className={[
          "h-16 w-16 shrink-0 rounded-sm",
          isBg ? "border border-rule" : "",
        ].join(" ")}
        style={{ background: token.hex }}
      />
      <div className="flex min-w-0 flex-1 flex-col justify-center gap-1">
        <div className="flex items-center gap-2">
          <span className="font-[family-name:var(--font-im-fell)] text-[11px] tracking-[0.25em] uppercase text-ink">
            {token.name}
          </span>
          {token.decorative ? (
            <span className="rounded-sm border border-rule px-1.5 py-0.5 font-[family-name:var(--font-im-fell)] text-[9px] tracking-[0.2em] uppercase text-ink-3">
              {copy.decorativeLabel}
            </span>
          ) : badge ? (
            <span className="rounded-sm border border-rule px-1.5 py-0.5 font-[family-name:var(--font-im-fell)] text-[9px] tracking-[0.2em] uppercase text-ink-3">
              {badge}
            </span>
          ) : null}
        </div>
        <span className="font-[family-name:var(--font-jetbrains)] text-[12px] text-ink-2">
          {copied ? copy.actions.copied : token.hex}
        </span>
        {token.notes ? (
          <span className="font-[family-name:var(--font-eb-garamond)] text-[12px] italic text-ink-3">
            {token.notes}
          </span>
        ) : null}
      </div>
    </button>
  );
}
