"use client";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { heroData } from "./hero-data";

interface IProps {
  title: string;
  data: {
    image: string;
  }[];
}

function ShowcaseSection({ title, data }: IProps) {
  return (
    <div className="@container space-y-4">
      <h2 className="p-4 text-2xl font-semibold font-heading bg-primary text-accent">
        {title}
      </h2>
      <Carousel
        className="w-full max-w-6xl mx-auto"
        opts={{
          align: "center",
          loop: true,
        }}
      >
        <CarouselContent className="pl-2">
          {data.map((item, index) => (
            <CarouselItem
              className="relative basis-1/2 pl-1 rounded-lg md:basis-1/3 "
              key={`${index}`}
            >
              <div className="p-1">
                <Card className="py-0 overflow-hidden">
                  <CardContent className="flex flex-col justify-end h-[350px] relative p-6">
                    {/* <h3 className="relative z-20 font-bold font-heading text-2xl leading-none text-accent">
                      {hero.title}
                    </h3> */}
                    <div className="absolute aspect-auto left-0 top-0 h-[350px] w-full">
                      <Image
                        alt={title}
                        className="h-full w-full object-cover object-center"
                        fill
                        // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        src={item.image}
                        // unoptimized
                      />
                      {/* <div className="absolute top-0 left-0 h-full w-full bg-linear-to-t from-black to-transparent" /> */}
                      {/* <div className="absolute top-0 left-0 hidden h-full w-full bg-linear-to-r from-primary to-transparent md:block" /> */}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* <div className="absolute top-0 left-0 hidden h-full w-full bg-linear-to-r from-black to-transparent md:block" /> */}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-8" />
        <CarouselNext className="right-8" />
      </Carousel>
    </div>
  );
}

export default ShowcaseSection;
