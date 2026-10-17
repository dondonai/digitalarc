import Image from "next/image";
import Link from "next/link";
import HeaderNavigation from "@/components/header-nav";
import ModeToggle from "@/components/mode-toggle";
import CustomTrigger from "@/components/sidebar/custom-trigger";
import { StickyHeader } from "@/components/sticky-header";
import { SITE_TAGLINE, SITE_TITLE } from "@/lib/constants";

function SiteHeader() {
  return (
    <StickyHeader className="border-b bg-primary text-primary-foreground">
      <div className="container-page flex h-16 items-center justify-between gap-3">
        <Link className="flex min-w-0 items-center gap-3" href="/">
          <span className="relative size-11 shrink-0 overflow-hidden rounded-full ring-1 ring-primary-foreground/20">
            <Image
              alt="Digital Arc Print logo"
              className="object-cover"
              fill
              sizes="44px"
              src="/logo.png"
            />
          </span>
          <span className="min-w-0">
            <span className="block truncate font-bold font-heading text-xl uppercase leading-none tracking-wide sm:text-2xl">
              {SITE_TITLE}
            </span>
            <span className="hidden truncate font-semibold text-primary-foreground/80 text-xs italic sm:block">
              {SITE_TAGLINE}
            </span>
          </span>
        </Link>

        <HeaderNavigation />

        <div className="flex shrink-0 items-center gap-1">
          <ModeToggle className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground dark:hover:bg-primary-foreground/10" />
          <CustomTrigger />
        </div>
      </div>
    </StickyHeader>
  );
}

export default SiteHeader;
