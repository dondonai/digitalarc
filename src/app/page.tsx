import type { Metadata } from "next";
import HeroSection from "./_components/hero-section";
import {
  idLanyards,
  netcaps,
  showcaseData,
  tshirts,
  wristlets,
} from "./_components/showcase-data";
import ShowcaseSection from "./_components/showcase-section";

export const metadata: Metadata = {
  title:
    "DigitalArk - Custom Printing Services | ID Lanyards, T-Shirts, Mugs & More",
  description:
    "We Create, We Design, We print. Quality and affordable custom printing services including ID lanyards, t-shirt printing, mugs, net caps, and wristlets. Print your imagination with DigitalArk.",
  keywords: [
    "custom printing",
    "ID lanyards",
    "t-shirt printing",
    "custom mugs",
    "net caps",
    "wristlets",
    "affordable printing services",
  ],
  openGraph: {
    title: "DigitalArk - Custom Printing Services",
    description:
      "Quality and affordable custom printing services. We can print your imagination.",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="@container/main flex flex-col gap-8">
      <HeroSection />
      <section className="@container w-full text-2xl font-semibold p-4 space-y-4 max-w-4xl mx-auto">
        <p className="text-center">
          We Create, We Design, We print. We can print your Imagination. Quality
          and Affordable Sevices!
        </p>
      </section>
      <ShowcaseSection title="ID Lanyards" data={idLanyards} />
      <ShowcaseSection title="T-Shirt Printing" data={tshirts} />
      <ShowcaseSection title="Net Caps" data={netcaps} />
      <ShowcaseSection title="Wristlets" data={wristlets} />
    </div>
  );
}
