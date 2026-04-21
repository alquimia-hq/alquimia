"use client";

import Link from "next/link";
import { AlquimiaLogo } from "@/components/icons";
import { ContextMenu, ContextMenuTrigger } from "@/components/ui/context-menu";
import { SITE_CONTENT } from "@/lib/constants";
import { LogoContextMenuContent } from "./logo-context-menu";

export function HeaderLogoTrigger() {
  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <Link
          aria-label={SITE_CONTENT.brand}
          className="flex w-fit select-none items-center gap-3 font-[family-name:var(--font-im-fell)] text-[11px] text-ink uppercase tracking-[0.34em] transition-colors hover:text-ink-2"
          href="/"
        >
          <AlquimiaLogo className="h-[26px] w-[26px] text-gold transition-colors group-hover:text-gold-2" />
          <span>{SITE_CONTENT.brand}</span>
        </Link>
      </ContextMenuTrigger>
      <LogoContextMenuContent showViewBrand variant="horizontal" />
    </ContextMenu>
  );
}
