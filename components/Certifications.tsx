import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { ZoomInIcon } from "lucide-react";
import { certifications } from "@/app/contants";
import { Badge } from "./ui/badge";

export default function Certifications() {
  return (
    <main className="flex-1 py-12 md:py-24 inverted-mesh relative">
      <div className="container grid gap-12 px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h1>
            My <span className="text-white bg px-2">Certifications</span>
          </h1>
          <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed">
            I&apos;m proud to showcase the certifications I&apos;ve earned through my
            dedication and hard work.
          </p>
        </div>
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {certifications.map((item, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <div className="bg-background rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
                    <div className="aspect-[4/3] relative">
                      <img
                        src={item.src}
                        alt="Certification 1"
                        width={600}
                        height={450}
                        className="object-cover w-full h-full"
                        style={{ aspectRatio: "600/450", objectFit: "cover" }}
                      />
                      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center">
                        <ZoomInIcon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="p-4 sm:p-6">
                      <h3 className="text-xl font-semibold">{item.name}</h3>
                      <p className="text-muted-foreground text-sm">
                        Issued by {item.company}
                      </p>
                      {item.completed ? (
                        <Badge>Completed</Badge>
                      ) : (
                        <Badge variant={"outline"}>Pursuing</Badge>
                      )}
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="p-0 max-w-[800px] w-full">
                  <div className="aspect-[4/3] relative">
                    <img
                      src={item.src}
                      alt="Certification 1"
                      width={800}
                      height={600}
                      className="object-cover w-full h-full"
                      style={{ aspectRatio: "800/600", objectFit: "cover" }}
                    />
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
