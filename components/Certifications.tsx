import React from "react";
import { ZoomInIcon } from "lucide-react";
import BoxReveal from "./magicui/box-reveal";
import { client } from "@/sanity/lib/client";
import { Card } from "./ui/card";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { BorderBeam } from "./magicui/border-beam";
import Image from "next/image";

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
    <main id="certifications" className="py-20 inverted-mesh relative">
      
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

      <div className="mx-auto max-w-4xl space-y-8 px-4 py-12">
        <div className="grid gap-6">
          {certifications.map((c, index) => (
            <Card
            className="group relative overflow-hidden transition-all hover:shadow-lg"
            key={index}
            >
              <BorderBeam colorFrom="#0f172a" colorTo="#475569"/>
              <div className="flex items-center gap-6 p-6">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="relative aspect-square w-24 shrink-0 bg-gray-100 cursor-pointer border rounded-lg">
                      <img
                        src={c.thumbnail}
                        alt=""
                        className="size-full object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 grid place-items-center bg-black/5 opacity-0 transition-opacity group-hover:opacity-100 rounded-lg">
                        <ZoomInIcon className="size-6 text-white drop-shadow" />
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="p-0 max-w-[800px] w-full overflow-hidden">
                    <div className="aspect-[4/3] relative">
                      <Image
                        src={c.thumbnail}
                        alt={`Certification ${index}`}
                        width={800}
                        height={600}
                        className="object-cover w-full h-full"
                        style={{ aspectRatio: "800/600", objectFit: "cover" }}
                      />
                    </div>
                  </DialogContent>
                </Dialog>
                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold tracking-tight">
                    {c.name}
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Issued by {c.company}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}