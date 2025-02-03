import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function SlideShow({
  image,
  previousRef,
  nextRef,
}: {
  image: string[];
  previousRef: any;
  nextRef: any;
}) {
  return (
    <Carousel>
      <CarouselContent>
        {Array.from({ length: image.length }).map((_, index) => (
          <CarouselItem key={index}>
            <Image
              alt="Image"
              className="object-cover"
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
