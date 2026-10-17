"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAVIGATION_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

function HeaderNavigation() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main" className="hidden flex-1 items-center md:flex">
      <ul className="flex flex-1 items-center justify-end gap-1 font-semibold font-sans text-sm uppercase tracking-wide">
        {NAVIGATION_LINKS.map((link) => {
          const isActive = pathname === link.url;
          return (
            <li key={link.url}>
              <Link
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "inline-flex h-9 items-center rounded-md px-3 transition-colors hover:bg-primary-foreground/10",
                  isActive
                    ? "text-primary-foreground"
                    : "text-primary-foreground/80 hover:text-primary-foreground",
                )}
                href={link.url}
              >
                {link.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default HeaderNavigation;
