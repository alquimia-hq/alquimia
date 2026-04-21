"use client";

import { useEffect, useRef } from "react";

export function ScrollReveal({
  children,
  className = "",
  stagger = 0,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  id?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) {
      return;
    }

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      el.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (stagger > 0) {
            setTimeout(() => el.classList.add("is-visible"), stagger);
          } else {
            el.classList.add("is-visible");
          }
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [stagger]);

  return (
    <div className={`scroll-reveal ${className}`} id={id} ref={ref}>
      {children}
    </div>
  );
}
