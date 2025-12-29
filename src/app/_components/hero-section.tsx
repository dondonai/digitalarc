"use client";

import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import { PhoneCallIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { heroData } from "./hero-data";

function HeroSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "center",
        loop: true,
        containScroll: false,
      }}
      plugins={[
        Fade({}),
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <CarouselContent className="h-[70vh]">
        {heroData.map((hero, index) => (
          <CarouselItem
            className="relative flex items-end bg-primary md:items-center"
            key={`${hero.title}${index}`}
          >
            <div className="z-20 w-5/6 space-y-4 p-4 pb-12 text-white leading-none md:w-1/2 lg:mx-auto lg:w-full lg:max-w-6xl">
              <h3 className="font-bold font-heading text-2xl leading-none md:text-4xl lg:max-w-lg">
                {hero.title}
              </h3>
              {hero.newTab ? (
                <a
                  className={buttonVariants({
                    className: "uppercase font-semibold",
                    size: "lg",
                  })}
                  href={hero.social}
                  rel={"noopener noreferrer"}
                  target={"_blank"}
                >
                  {hero.uri && <PhoneCallIcon />} {hero.description}
                </a>
              ) : (
                <Link
                  className={buttonVariants({
                    className: "uppercase font-semibold",
                    size: "lg",
                  })}
                  href={hero.uri}
                >
                  {hero.uri && <PhoneCallIcon />} {hero.description}
                </Link>
              )}
            </div>
            <div className="absolute aspect-auto h-[70vh] w-full md:right-0 md:w-1/2">
              <Image
                alt="Promo"
                className="h-full w-full object-cover object-center"
                fill
                src={hero.image}
              />
              <div className="absolute top-0 left-0 h-full w-full bg-linear-to-t from-black to-transparent md:hidden" />
              <div className="absolute top-0 left-0 hidden h-full w-full bg-linear-to-r from-primary to-transparent md:block" />
            </div>
            <div className="absolute top-0 left-0 hidden h-full w-full bg-linear-to-r from-black to-transparent md:block" />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute w-full bottom-4 z-20 text-muted-foreground py-2 text-center flex justify-center gap-2 text-sm">
        {Array.from({ length: count }).map((_, index) => (
          <div
            data-current={current === index + 1}
            className="size-2 rounded-full bg-accent/50 data-[current=true]:scale-200 transition-all duration-150 data-[current=true]:bg-accent"
            key={index}
          />
        ))}
      </div>
    </Carousel>
  );
}

export default HeroSection;
