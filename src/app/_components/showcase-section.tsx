"use client";

import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface IProps {
  title: string;
  data: {
    image: string;
    description: string;
  }[];
}

function ShowcaseSection({ title, data }: IProps) {
  return (
    <section aria-label={title} className="@container container-page space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-2">
        <h2 className="font-bold font-heading text-2xl md:text-3xl">{title}</h2>
        <Link
          className="inline-flex items-center gap-1 font-semibold text-primary text-sm hover:underline"
          href="/services"
        >
          Explore services
          <ArrowRightIcon className="size-4" />
        </Link>
      </div>

      <Carousel
        aria-label={`${title} showcase`}
        className="w-full"
        opts={{ align: "start", loop: true }}
      >
        <CarouselContent>
          {data.map((item, index) => (
            <CarouselItem
              className="basis-[85%] sm:basis-1/2 lg:basis-1/3"
              key={`${title}-${index}`}
            >
              <Card className="group h-full overflow-hidden rounded-2xl py-0 ring-1 ring-border">
                <CardContent className="relative h-[320px] p-0 sm:h-[360px]">
                  <Image
                    alt={item.description || title}
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    fill
                    sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 33vw"
                    src={item.image}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-transparent" />
                  {item.description ? (
                    <p className="absolute inset-x-0 bottom-0 z-10 p-5 font-heading font-semibold text-lg text-white leading-tight">
                      {item.description}
                    </p>
                  ) : null}
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 hidden border-0 bg-background/80 backdrop-blur hover:bg-background sm:inline-flex" />
        <CarouselNext className="right-2 hidden border-0 bg-background/80 backdrop-blur hover:bg-background sm:inline-flex" />
      </Carousel>
    </section>
  );
}

export default ShowcaseSection;
