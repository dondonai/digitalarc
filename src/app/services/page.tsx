import { ArrowRightIcon, CheckIcon } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Custom printing services by Digital Arc — ID lanyards, t-shirt printing, net caps, and wristlets. Quality materials, affordable pricing.",
};

const SERVICES = [
  {
    title: "ID Lanyards",
    image:
      "https://storage.enfenetydev.com/wp-content/uploads/2025/12/digitalarc-lanyards-01.jpg",
    description:
      "Durable, fully customized lanyards for schools, offices, and events.",
    features: [
      '1" and 3/4" polyester',
      "Buckle, g-hook, or safety clip",
      "Single or double-sided print",
    ],
  },
  {
    title: "T-Shirt Printing",
    image:
      "https://storage.enfenetydev.com/wp-content/uploads/2025/12/digitalarc-tshirt-01.jpg",
    description:
      "Vibrant, long-lasting prints on quality shirts for any occasion.",
    features: [
      "Dri-fit, cotton, and more",
      "Single or bulk orders",
      "Full-color custom designs",
    ],
  },
  {
    title: "Net Caps",
    image:
      "https://storage.enfenetydev.com/wp-content/uploads/2025/12/digitalarc-netcap-01.jpg",
    description:
      "Breathable custom caps that put your brand front and center.",
    features: [
      "Embroidery or print",
      "Adjustable fit",
      "Great for teams and giveaways",
    ],
  },
  {
    title: "Wristlets",
    image:
      "https://storage.enfenetydev.com/wp-content/uploads/2025/12/digitalarc-wristlet-01-768x576.jpg",
    description:
      "Stylish custom wristlets and accessories for events and promotions.",
    features: [
      "Custom designs",
      "Variety of materials",
      "Ideal for events and promos",
    ],
  },
];

const ServicesPage = () => {
  return (
    <div className="container-page space-y-10 py-12">
      <header className="flex flex-col gap-3">
        <h1 className="font-bold font-heading text-3xl md:text-4xl">
          Our Services
        </h1>
        <p className="max-w-2xl text-muted-foreground">
          We customize a variety of products to meet your needs. Every order is
          designed in-house and printed with quality materials.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {SERVICES.map((service) => (
          <Card
            className="group gap-0 overflow-hidden rounded-2xl py-0 ring-1 ring-border"
            key={service.title}
          >
            <div className="relative h-60">
              <Image
                alt={service.title}
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                src={service.image}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/25 to-transparent" />
              <CardTitle className="absolute inset-x-0 bottom-0 z-10 p-5 font-bold font-heading text-2xl text-white">
                {service.title}
              </CardTitle>
            </div>
            <CardContent className="space-y-4 p-6">
              <CardDescription className="text-base">
                {service.description}
              </CardDescription>
              <ul className="space-y-2 text-sm">
                {service.features.map((feature) => (
                  <li className="flex items-center gap-2" key={feature}>
                    <CheckIcon className="size-4 shrink-0 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                className={buttonVariants({ size: "sm" })}
                href="/contact"
              >
                Request a quote
                <ArrowRightIcon />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
