import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { ZoomInIcon } from "lucide-react";
import BoxReveal from "./magicui/box-reveal";
import { client } from "@/sanity/lib/client";

export type Certification = {
  name: string;
  thumbnail: string;
  company: string;
  description: string;
  completed: boolean;
};

export type Certifications = Certification[];

const fetchCertifications = async (): Promise<Certifications> => {
  const data =
    await client.fetch<Certifications>(`*[_type == "certifications"][0...5]{
  name,
  "thumbnail": thumbnail.asset->url,
  company,
  description,
  completed,
  }`);
  return data;
};

export default async function Certifications() {
  const certifications = await fetchCertifications();
  return (
    <main
      id="certifications"
      className="flex-1 py-12 md:py-24 inverted-mesh relative"
    >
      <div className="container grid gap-12 px-4 md:px-6">
        <div className="w-full grid place-items-center">
          <BoxReveal duration={0.5}>
            <h1>
              <span className="bg text-white px-1">Proof</span> of Knowledge,{" "}
              <br />{" "}
            </h1>
          </BoxReveal>
          <BoxReveal duration={0.5}>
            <h1>
              Driven by <span className="bg-text">Ambition</span>
            </h1>
          </BoxReveal>
        </div>
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {certifications.map((item, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <div className="bg-background rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <img
                        src={item.thumbnail}
                        alt="Certification"
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
                      <h2>{item.name}</h2>
                      <h3>Issued by {item.company}</h3>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="p-0 max-w-[800px] w-full">
                  <div className="aspect-[4/3] relative">
                    <img
                      src={item.thumbnail}
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
