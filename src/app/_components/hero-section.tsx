"use client";

import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { heroData } from "./hero-data";

const HERO_HEIGHT = "h-[min(70svh,51rem)] min-h-[30rem]";

function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return reducedMotion;
}

function HeroSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  const plugins = useMemo(() => {
    if (reducedMotion) {
      return [];
    }

    return [
      Fade(),
      Autoplay({
        delay: 5000,
        stopOnInteraction: true,
        stopOnFocusIn: true,
        stopOnMouseEnter: true,
      }),
    ];
  }, [reducedMotion]);

  useEffect(() => {
    if (!api) {
      return;
    }

    const autoplay = api.plugins()?.autoplay;
    if (
      typeof autoplay?.play !== "function" ||
      typeof autoplay?.stop !== "function"
    ) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          autoplay.play();
        } else {
          autoplay.stop();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(api.rootNode());
    return () => observer.disconnect();
  }, [api]);

  return (
    <Carousel
      aria-label="Featured promotions"
      className="bg-primary"
      opts={{ align: "center", loop: true, containScroll: false }}
      plugins={plugins}
      setApi={setApi}
    >
      <CarouselContent className={HERO_HEIGHT}>
        {heroData.map((hero, index) => (
          <CarouselItem className="relative" key={`${hero.title}${index}`}>
            <div className="absolute inset-0">
              <Image
                alt={hero.title}
                className="object-cover object-center"
                fill
                priority={index === 0}
                sizes="100vw"
                src={hero.image}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/40 to-transparent md:hidden" />
              <div className="absolute inset-0 hidden bg-linear-to-r from-black/85 via-black/45 to-transparent md:block" />
            </div>

            <div className="relative z-20 flex h-full items-end pb-20 md:items-center md:pb-0">
              <div className="container-page w-full space-y-5 text-white">
                <h2 className="max-w-xl text-balance font-bold font-heading text-3xl leading-tight md:text-5xl">
                  {hero.title}
                </h2>
                {hero.newTab && hero.social ? (
                  <a
                    className={buttonVariants({
                      className: "font-semibold uppercase",
                      size: "lg",
                    })}
                    href={hero.social}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {hero.description}
                    <ArrowRightIcon />
                  </a>
                ) : (
                  <Link
                    className={buttonVariants({
                      className: "font-semibold uppercase",
                      size: "lg",
                    })}
                    href={hero.uri}
                  >
                    {hero.description}
                    <ArrowRightIcon />
                  </Link>
                )}
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {count > 1 ? (
        <div
          aria-label="Choose slide"
          className="absolute inset-x-0 bottom-4 z-20 flex justify-center gap-1"
          role="group"
        >
          {Array.from({ length: count }).map((_, index) => {
            const isActive = current === index;
            return (
              <button
                aria-current={isActive ? "true" : undefined}
                aria-label={`Go to slide ${index + 1} of ${count}`}
                className="group grid size-8 place-items-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                key={index}
                onClick={() => api?.scrollTo(index)}
                type="button"
              >
                <span
                  className={cn(
                    "size-2.5 rounded-full bg-white/70 transition-all group-hover:bg-white/90",
                    isActive && "scale-150 bg-white",
                  )}
                />
              </button>
            );
          })}
        </div>
      ) : null}
    </Carousel>
  );
}

export default HeroSection;
