import React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { projects } from "@/app/contants";

export default function RecentProjects() {
  return (
    <main className="w-screen h-screen flex flex-col items-center justify-center space-y-5">
      <h1 className="heading mb-10">
        {" "}
        <span className="bg-gradient-to-r from-cyan-500 to-green-500 bg-clip-text text-transparent">
          Passion
        </span>{" "}
        For Learning, <br /> Crafted in{" "}
        <span className="bg-gradient-to-r from-cyan-500 to-green-500 bg-clip-text text-transparent">
          Code
        </span>
        .
      </h1>
      <section className="flex gap-5">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="w-[26vw] h-[60vh] flex flex-col p-5 shadow-lg"
            id={project.name}
          >
            <div className="w-full h-1/2 relative overflow-hidden">
              <div className="absolute w-full h-full rounded-3xl bg border border-white"></div>
              <Image
                src={project.img}
                alt=""
                width={500}
                height={500}
                className="z-100 absolute bottom-[-2rem] rotate-3 rounded-lg left-[15%] hover:rotate-0 hover:w-full hover:h-full hover:static hover:rounded-3xl"
              />
            </div>

            <div className="pt-5 space-y-2">
                <h3 className="font-extrabold text-2xl">{project.type}</h3>
                <p> {project.description} </p>
              <div className="flex justify-between items-center">
                <div className="flex flex-row space-x-[-15px]">
                  <div className="bg-primary border-white border rounded-full size-10"></div>
                  <div className="bg-primary border-white border rounded-full size-10"></div>
                  <div className="bg-primary border-white border rounded-full size-10"></div>
                  <div className="bg-primary border-white border rounded-full size-10"></div>
                  <div className="bg-primary border-white border rounded-full size-10"></div>
                </div>
                <Button variant={"outline"} className="grid">
                  <a
                    href={project.src}
                    className="flex items-center justify-center gap-2"
                  >
                    View
                    <ExternalLink />
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </section>
    </main>
  );
}
