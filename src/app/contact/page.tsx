import { MailIcon, PhoneIcon } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Socials from "@/components/socials";
import {
  SITE_DESCRIPTION,
  SITE_EMAIL,
  SITE_PHONE,
  SITE_TAGLINE,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description: SITE_DESCRIPTION,
};

const CONTACT_LINKS = [
  {
    icon: MailIcon,
    label: "Email",
    value: SITE_EMAIL,
    href: `mailto:${SITE_EMAIL}`,
  },
  {
    icon: PhoneIcon,
    label: "Call or text",
    value: SITE_PHONE,
    href: `tel:${SITE_PHONE.replace(/\s/g, "")}`,
  },
];

const ContactPage = () => {
  return (
    <div className="w-full">
      <div className="relative h-[40svh] min-h-[280px] w-full">
        <Image
          alt="Digital Arc printing workspace"
          className="object-cover object-center"
          fill
          priority
          sizes="100vw"
          src="https://storage.enfenetydev.com/wp-content/uploads/2025/12/digitalarc-contact-02.jpg"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/35 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container-page pb-8">
            <h1 className="font-bold font-heading text-3xl text-white md:text-5xl">
              Get in touch
            </h1>
          </div>
        </div>
      </div>

      <div className="container-page space-y-10 py-12">
        <p className="max-w-2xl text-muted-foreground">
          {SITE_TAGLINE}. Reach us on any channel below and we&apos;ll get back
          to you as soon as we can.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          {CONTACT_LINKS.map(({ icon: Icon, label, value, href }) => (
            <a
              className="flex items-center gap-4 rounded-2xl border bg-card p-6 shadow-soft transition-colors hover:bg-muted/50"
              href={href}
              key={label}
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <Icon className="size-6" />
              </span>
              <span className="min-w-0">
                <span className="block text-muted-foreground text-sm">
                  {label}
                </span>
                <span className="block break-all font-heading font-semibold">
                  {value}
                </span>
              </span>
            </a>
          ))}
        </div>

        <div className="flex flex-col items-start gap-3">
          <p className="font-heading font-semibold text-lg">Connect with us</p>
          <Socials />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
