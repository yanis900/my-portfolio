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
      <div className="flex justify-center mt-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-700">Certifications</h2>
          <p className="mt-2 text-gray-500 text-base tracking-wide">
            A selection of certifications I have completed, showcasing my skills
            and achievements.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-4xl space-y-8 px-4 py-12 grid gap-6">
        {certifications.map((c, index) => (
          <Card
            className="group relative overflow-hidden transition-all hover:shadow-lg"
            key={index}
          >
            <BorderBeam colorFrom="#0f172a" colorTo="#475569" />
            <div className="flex items-center gap-6 p-6">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="relative aspect-square w-20 shrink-0 bg-gray-100 cursor-pointer border rounded-lg group">
                    <Image
                      src={c.thumbnail}
                      alt=""
                      width={80}
                      height={80}
                      className="size-full object-cover rounded-lg"
                      style={{ width: "100%", height: "100%" }}
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none px-2 py-2">
                      <span className="text-xs text-white/90 bg-black/80 px-3 py-3 rounded shadow transition-all duration-300 group-hover:opacity-100 opacity-90 mt-1 flex items-center justify-center">
                        <ZoomInIcon className="inline w-5 h-5 transform transition-transform duration-300 group-hover:scale-125" />
                      </span>
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
    </main>
  );
}
