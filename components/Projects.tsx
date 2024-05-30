import React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { projects } from "@/app/contants";
import { BorderBeam } from "./magicui/border-beam";
import BoxReveal from "./magicui/box-reveal";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function Projects() {
  return (
    <main id="projects" className="relative w-screen h-screen flex flex-col items-center justify-center space-y-10 mesh">
      <div className="w-full grid place-items-center absolute top-10">
        <BoxReveal duration={0.5}>
          <h1>
            <span className="gradient-text">Passion</span> For Learning, <br />{" "}
          </h1>
        </BoxReveal>
        <BoxReveal duration={0.5}>
          <h1>
            Crafted in <span className="gradient-text">Code.</span>
          </h1>
        </BoxReveal>
      </div>

      <div className="flex flex-row flex-wrap items-center justify-center gap-5 h-[25rem]">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="relative w-[25rem] p-5 h-full flex flex-col"
          >
            <BorderBeam />
            <div className="w-full h-1/2 relative overflow-hidden">
              <div className="absolute w-full h-full rounded-3xl bg"></div>
              <Image
                src={project.img}
                alt=""
                width={500}
                height={500}
                className="z-100 absolute bottom-[-2rem] rotate-3 rounded-lg left-[15%]"
              />
            </div>
            <div className="pt-5 space-y-2">
              <BoxReveal duration={0.5}>
                <h2>{project.type}</h2>
              </BoxReveal>
              <BoxReveal duration={0.5}>
                <p>{project.description}</p>
              </BoxReveal>
              <div className="flex justify-between items-center">
                <BoxReveal duration={0.5}>
                  <div className="flex flex-row space-x-[-15px]">
                    {project.icons && Object.values(project.icons).map((icon, index) => (
                      <Avatar key={index}>
                        <AvatarFallback />
                        <AvatarImage src={icon} />
                      </Avatar>
                    ))}
                  </div>
                </BoxReveal>
                <BoxReveal duration={0.5}>
                  <Button variant={"outline"} className="grid">
                    <a
                      href={project.src}
                      className="flex items-center justify-center gap-2"
                    >
                      View
                      <ExternalLink />
                    </a>
                  </Button>
                </BoxReveal>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}
