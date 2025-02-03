import React from "react";
import BoxReveal from "./magicui/box-reveal";
import { PinContainer } from "./acerternityui/3d-pin";
import { client } from "@/sanity/lib/client";
import DotPattern from "./magicui/dot-pattern";
import Image from "next/image";
import { Card } from "./ui/card";

export type Project = {
  name: string;
  date: string;
  description: string;
  content: string;
  tags: string[];
  thumbnail: string;
  src: string;
  slug: string;
  images: string[];
  role: string;
  who: string;
  type: string;
  icons: string[];
};

export type Projects = Project[];

export const fetchProjects = async (): Promise<Projects> => {
  const data = await client.fetch<Projects>(`*[_type == "projects"][0...5]{
  name,
  date,
  description,
  content,
  "tags": tags[],
  "thumbnail": thumbnail.asset->url,
  src,
  "slug": slug.current,
  "images": images[].asset->url,
  role,
  who,
  type,
  "icons": icons[].asset->url,
  }`);
  return data;
};

export default async function Projects() {
  const projects = await fetchProjects();
  return (
    <div id="projects" className="py-20 space-y-10 relative">
      <div className="w-full grid place-items-center code">
        <BoxReveal duration={0.5}>
          <h1>
            <span className="gradient text-white px-1">Passion</span> For
            Learning, <br />{" "}
          </h1>
        </BoxReveal>
        <BoxReveal duration={0.5}>
          <h1>
            Crafted in <span className="gradient-text">Code.</span>
          </h1>
        </BoxReveal>
      </div>

      <div className="mx-auto max-w-6xl flex flex-wrap justify-center items-center gap-x-[16rem] gap-y-[8rem]">
        {projects.map((project, index) => (
          <PinContainer
            title={"View"}
            href={`/projects/${project.slug}`}
            key={index}
          >
            <div className="relative flex items-center justify-center sm:w-[32rem] w-[80vw] overflow-hidden h-[20vh] lg:h-[25vh]">
              <div className="relative w-full h-full overflow-hidden rounded-3xl bg"></div>
              <img
                src={project.thumbnail}
                alt="cover"
                className="z-10 absolute -bottom-4 w-5/6 rounded-lg rotate-2"
              />
            </div>
            <BoxReveal duration={0.5}>
              <h2 className="text-2xl font-semibold tracking-tight pt-2">
                {project.name}
              </h2>
            </BoxReveal>
            <BoxReveal duration={0.5}>
              <h3>{project.description}</h3>
            </BoxReveal>
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center">
                {project.icons &&
                  project.icons.map((icon, index) => (
                    <div
                      key={index}
                      className="border-white border-2 bg bg-slate-500 rounded-full lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center overflow-hidden"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img
                        src={icon}
                        alt="icon5"
                        className="p-1.5 rounded-lg"
                      />
                    </div>
                  ))}
              </div>
            </div>
          </PinContainer>
        ))}
      </div>
    </div>
  );
}
