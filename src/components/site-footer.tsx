import { CoffeeIcon, HeartIcon } from "lucide-react";
import Link from "next/link";
import { SITE_SOCIALS, SITE_TITLE } from "@/lib/constants";
import Socials from "./socials";

function SiteFooter() {
  return (
    <footer className="@container/footer mt-auto flex w-full flex-col items-center justify-end gap-2 p-4 font-sans">
      <Link
        className="font-semibold text-muted-foreground text-sm hover:underline"
        href="/privacy-policy"
      >
        Privacy Policy
      </Link>
      <Socials />
      <div className="flex flex-col items-center font-poppins">
        <div className="text-muted-foreground text-sm">
          &copy; 2025 &middot; {SITE_TITLE} &middot; All rights reserved.
        </div>
        <small className="flex items-center gap-1 text-muted-foreground text-xs">
          Built with <HeartIcon className="text-rose-500" size={16} /> &{" "}
          <CoffeeIcon className="text-amber-500" size={16} /> by{" "}
          <a
            className="underline hover:text-primary"
            href="https://enfenetydev.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            Enfenety Dev
          </a>
        </small>
      </div>
    </footer>
  );
}

export default SiteFooter;
