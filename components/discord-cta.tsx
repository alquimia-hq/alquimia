"use client";

import { useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import { DiscordIcon } from "./icons";
import { SITE_CONTENT } from "@/lib/constants";

const PARTICLE_COUNT = 18;

function spawnParticles(container: HTMLElement) {
  const rect = container.getBoundingClientRect();
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const particle = document.createElement("span");
    particle.className = "cta-particle";

    const angle = (Math.PI * 2 * i) / PARTICLE_COUNT + (Math.random() - 0.5) * 0.4;
    const distance = 40 + Math.random() * 60;
    const tx = Math.cos(angle) * distance;
    const ty = Math.sin(angle) * distance - 30 - Math.random() * 40;
    const size = 3 + Math.random() * 4;
    const delay = Math.random() * 120;

    particle.style.cssText = `
      left: ${centerX}px;
      top: ${centerY}px;
      width: ${size}px;
      height: ${size}px;
      --tx: ${tx}px;
      --ty: ${ty}px;
      animation-delay: ${delay}ms;
    `;

    container.appendChild(particle);
    particle.addEventListener("animationend", () => particle.remove(), { once: true });
  }
}

export function DiscordCta() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleClick = useCallback(() => {
    if (!wrapperRef.current) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    spawnParticles(wrapperRef.current);
  }, []);

  return (
    <div
      className="animate-entrance animate-fade-up flex flex-col items-center"
      style={{ "--delay": "750ms" } as React.CSSProperties}
    >
      <div ref={wrapperRef} className="relative">
        <Button
          asChild
          className="btn-discord cta-idle inline-flex items-center gap-4.5 px-11 py-5 h-auto bg-gold text-primary-foreground border border-gold font-[family-name:var(--font-im-fell)] tracking-[0.3em] uppercase text-[13px] cursor-pointer"
          onClick={handleClick}
        >
          <a
            href={SITE_CONTENT.cta.discordUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <DiscordIcon className="w-[18px] h-[18px]" />
            <span>{SITE_CONTENT.cta.button}</span>
            <span className="font-serif text-[20px] tracking-normal italic">
              ⟶
            </span>
          </a>
        </Button>
      </div>
      <p className="font-[family-name:var(--font-eb-garamond)] italic text-[13px] text-ink-3 mt-4.5">
        <span className="inline-block w-[3px] h-[3px] bg-gold rotate-45 mx-2.5 align-middle" />
        {SITE_CONTENT.cta.note}
        <span className="inline-block w-[3px] h-[3px] bg-gold rotate-45 mx-2.5 align-middle" />
      </p>
    </div>
  );
}
