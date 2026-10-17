import { MailIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import { CurrentYear } from "@/components/current-year";
import Socials from "@/components/socials";
import {
  NAVIGATION_LINKS,
  SITE_DESCRIPTION,
  SITE_EMAIL,
  SITE_PHONE,
  SITE_TAGLINE,
  SITE_TITLE,
} from "@/lib/constants";

const SERVICE_LINKS = [
  "ID Lanyards",
  "T-Shirt Printing",
  "Net Caps",
  "Wristlets",
  "Tarpaulins",
  "Layout & Design",
];

const FOOTER_LINK_CLASS =
  "inline-flex min-h-6 items-center text-muted-foreground transition-colors hover:text-foreground";

function SiteFooter() {
  return (
    <footer className="mt-auto w-full border-t bg-muted/40">
      <div className="container-page grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4 sm:col-span-2 lg:col-span-1">
          <div>
            <p className="font-bold font-heading text-xl uppercase tracking-wide">
              {SITE_TITLE}
            </p>
            <p className="text-muted-foreground text-xs italic">
              {SITE_TAGLINE}
            </p>
          </div>
          <p className="max-w-xs text-muted-foreground text-sm">
            {SITE_DESCRIPTION}
          </p>
          <Socials />
        </div>

        <div>
          <h2 className="font-heading font-semibold text-sm uppercase tracking-wide">
            Services
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {SERVICE_LINKS.map((service) => (
              <li key={service}>
                <Link
                  className={FOOTER_LINK_CLASS}
                  href="/services"
                >
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-heading font-semibold text-sm uppercase tracking-wide">
            Explore
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link
                className={FOOTER_LINK_CLASS}
                href="/"
              >
                Home
              </Link>
            </li>
            {NAVIGATION_LINKS.map((link) => (
              <li key={link.url}>
                <Link
                  className={FOOTER_LINK_CLASS}
                  href={link.url}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-heading font-semibold text-sm uppercase tracking-wide">
            Get in touch
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                className="inline-flex min-h-6 items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                href={`mailto:${SITE_EMAIL}`}
              >
                <MailIcon className="size-4 shrink-0" />
                <span className="break-all">{SITE_EMAIL}</span>
              </a>
            </li>
            <li>
              <a
                className="inline-flex min-h-6 items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                href={`tel:${SITE_PHONE.replace(/\s/g, "")}`}
              >
                <PhoneIcon className="size-4 shrink-0" />
                <span>{SITE_PHONE}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-6 text-center text-muted-foreground text-xs sm:flex-row sm:text-left">
          <p>
            ©{" "}
            <Suspense fallback={<span className="inline-block w-7" />}>
              <CurrentYear />
            </Suspense>{" "}
            {SITE_TITLE} Print. All rights reserved.
          </p>
          <Link
            className="inline-flex min-h-6 items-center transition-colors hover:text-foreground hover:underline"
            href="/privacy-policy"
          >
            Privacy Policy
          </Link>
          <p>Crafted by Enfenety Dev</p>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
