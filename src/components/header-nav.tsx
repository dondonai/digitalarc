"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAVIGATION_LINKS } from "@/lib/constants";

function HeaderNavigation() {
  const pathname = usePathname();
  const currentPath = pathname || "/";

  return (
    <nav className="@container flex-1 hidden w-full items-center md:block">
      <ul className="flex flex-1 items-center justify-end gap-6 py-4 font-sans font-semibold text-lg text-white uppercase">
        {NAVIGATION_LINKS.map((link) => (
          <li key={link.url}>
            <Link
              className={currentPath === link.url ? "md:block" : "md:block"}
              href={link.url}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default HeaderNavigation;
