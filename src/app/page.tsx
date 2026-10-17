import CTASection from "./_components/cta-section";
import HeroSection from "./_components/hero-section";
import {
  idLanyards,
  netcaps,
  tshirts,
  wristlets,
} from "./_components/showcase-data";
import ShowcaseSection from "./_components/showcase-section";
import ValueProps from "./_components/value-props";

export default function Home() {
  return (
    <div className="flex flex-col gap-14 pb-16 md:gap-20">
      <h1 className="sr-only">
        Digital Arc Print — Custom Printing Services in the Philippines
      </h1>
      <HeroSection />
      <ValueProps />
      <ShowcaseSection data={idLanyards} title="ID Lanyards" />
      <ShowcaseSection data={tshirts} title="T-Shirt Printing" />
      <ShowcaseSection data={netcaps} title="Net Caps" />
      <ShowcaseSection data={wristlets} title="Wristlets" />
      <CTASection />
    </div>
  );
}
