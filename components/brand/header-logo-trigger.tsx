"use client";

import Link from "next/link";
import { ContextMenu, ContextMenuTrigger } from "@/components/ui/context-menu";
import { LogoContextMenuContent } from "./logo-context-menu";
import { AlquimiaLogo } from "@/components/icons";
import { SITE_CONTENT } from "@/lib/constants";

export function HeaderLogoTrigger() {
  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <Link
          href="/"
          aria-label={SITE_CONTENT.brand}
          className="flex w-fit items-center gap-3 font-[family-name:var(--font-im-fell)] tracking-[0.34em] uppercase text-[11px] text-ink select-none transition-colors hover:text-ink-2"
        >
          <AlquimiaLogo className="h-[26px] w-[26px] text-gold transition-colors group-hover:text-gold-2" />
          <span>{SITE_CONTENT.brand}</span>
        </Link>
      </ContextMenuTrigger>
      <LogoContextMenuContent variant="horizontal" showViewBrand />
    </ContextMenu>
  );
}
