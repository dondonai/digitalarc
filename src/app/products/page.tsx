import { ArrowUpRightIcon, Music2Icon, ShoppingBagIcon, StoreIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { SITE_SOCIALS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Shop Digital Arc products online via Shopee or TikTok, or message us for custom printing orders.",
};

const STORES = [
  {
    name: "Shopee",
    icon: ShoppingBagIcon,
    description:
      "Browse and order ready-made prints and lanyards directly from our official Shopee store.",
    href: SITE_SOCIALS.shoppee,
    cta: "Visit Shopee store",
  },
  {
    name: "TikTok",
    icon: Music2Icon,
    description:
      "Order through TikTok or get in touch to ask about the latest designs and promos.",
    href: SITE_SOCIALS.tiktok,
    cta: "Visit TikTok store",
  },
];

const ProductsPage = () => {
  return (
    <div className="container-page space-y-10 py-12">
      <header className="flex flex-col gap-3">
        <h1 className="font-bold font-heading text-3xl md:text-4xl">
          Products
        </h1>
        <p className="max-w-2xl text-muted-foreground">
          Shop our products online, or contact us for fully customized printing
          tailored to your needs.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2">
        {STORES.map(({ name, icon: Icon, description, href, cta }) => (
          <Card className="gap-0 rounded-2xl ring-1 ring-border" key={name}>
            <CardContent className="space-y-4 p-6">
              <span className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary">
                <Icon className="size-6" />
              </span>
              <CardTitle className="font-heading text-2xl">{name}</CardTitle>
              <CardDescription className="text-base">
                {description}
              </CardDescription>
              <a
                className={buttonVariants({ size: "sm" })}
                href={href}
                rel="noopener noreferrer"
                target="_blank"
              >
                {cta}
                <ArrowUpRightIcon />
              </a>
            </CardContent>
          </Card>
        ))}
      </div>

      <section className="flex flex-col items-start gap-4 rounded-2xl bg-muted/50 p-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <StoreIcon className="size-6 text-primary" />
          <p className="font-heading font-semibold text-lg">
            Looking for something custom?
          </p>
        </div>
        <Link className={buttonVariants({})} href="/contact">
          Message us for a custom order
        </Link>
      </section>
    </div>
  );
};

export default ProductsPage;
