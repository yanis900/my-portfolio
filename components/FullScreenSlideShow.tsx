"use client"

import { useState } from "react"
import { Maximize2, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"

export default function FullScreenSlideShow( { images }: { images: string[] } ) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" size="icon" className="absolute -top-5 -right-5 w-12 h-12">
            <Maximize2 className="h-4 w-4" />
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-none w-screen h-screen border-0 p-0 bg-transparent backdrop-blur-sm">
          <div className="absolute inset-0" />
          <Button
            onClick={() => setOpen(false)}
            variant={"ghost"}
            size={"icon"}
            className="absolute h-12 w-12 bg-white right-6 top-6 z-50"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
          <div className="relative w-full h-full flex items-center justify-center">
            <Carousel
              className="w-full"
              opts={{
                align: "center",
                containScroll: false,
                dragFree: true,
              }}
            >
              <CarouselContent className="-ml-4">
                {images.map((src, index) => (
                  <CarouselItem key={index} className="pl-4 basis-1/2">
                    <div className="relative aspect-video w-full rounded-lg border bg-white">
                      <Image
                        src={src || "/placeholder.svg"}
                        alt={`Slide ${index + 1}`}
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-6" />
              <CarouselNext className="right-6" />
            </Carousel>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
