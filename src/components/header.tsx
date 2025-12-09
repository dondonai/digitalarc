import Image from "next/image";
import Link from "next/link";
import HeaderNavigation from "@/components/header-nav";
import CustomTrigger from "@/components/sidebar/custom-trigger";
import { SITE_TAGLINE, SITE_TITLE } from "@/lib/constants";

function SiteHeader() {
  return (
    <header className="@container/header sticky top-0 z-40 flex max-h-20 w-full border-b bg-primary p-4 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/">
            <div className="relative aspect-auto size-14 rounded-full overflow-hidden">
              <Image
                alt="Digital Arc Print"
                className="h-full w-full object-cover object-center"
                fill
                src="/logo.png"
                unoptimized
              />
            </div>
          </Link>
          <div>
            <h1 className="wrap-break-word font-bold font-heading text-3xl text-accent uppercase leading-6 tracking-wide">
              {SITE_TITLE}
            </h1>
            <p className="text-accent/70 font-semibold text-sm italic">
              {SITE_TAGLINE}
            </p>
          </div>
        </div>
        <HeaderNavigation />
        <CustomTrigger />
      </div>
    </header>
  );
}

export default SiteHeader;
