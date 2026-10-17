"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function StickyHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-shadow duration-300",
        scrolled && "shadow-elevated",
        className,
      )}
    >
      {children}
    </header>
  );
}
