"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useRef } from "react";

export function SlideShow({ image }: { image: string[] }) {
  const previousRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  console.log(image)
  return (
    <Carousel>
      <CarouselContent>
        {Array.from({ length: image.length }).map((_, index) => (
          <CarouselItem key={index}>
            <Image
              alt="Image"
              className="object-cover aspect-video"
              height={800}
              src={image[index]}
              width={800}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious ref={previousRef} />
      <CarouselNext ref={nextRef} />
    </Carousel>
  );
}
