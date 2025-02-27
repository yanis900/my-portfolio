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
import { useEffect, useState } from "react";

export function SlideShow({ image }: { image: string[] }) {
  const previousRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      };

      handleResize();
      window.addEventListener("resize", handleResize);

      return () => {
      window.removeEventListener("resize", handleResize);
      };
    }, []);

    return (
      <Carousel>
      <CarouselContent>
        {Array.from({ length: image.length }).map((_, index) => (
        <CarouselItem key={index} className="bg-white">
          <Image
          alt="Image"
          className="object-contain aspect-video"
          height={800}
          src={image[index]}
          width={800}
          />
        </CarouselItem>
        ))}
      </CarouselContent>
      {!isMobile && <CarouselPrevious ref={previousRef} />}
      {!isMobile && <CarouselNext ref={nextRef} />}
      </Carousel>
    );
}
