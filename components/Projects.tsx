import React from "react";
import { projects } from "@/app/contants";
import BoxReveal from "./magicui/box-reveal";
import { PinContainer } from "./acerternityui/3d-pin";
import GridPattern from "./magicui/grid-pattern";

export default function Projects() {
  return (
    <div id="projects" className="py-20 relative">
      <GridPattern className="z[-10]"/>
      
      <div className="w-full grid place-items-center">
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

      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((project, index) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={index}
          >
            <PinContainer
              title="/ui.aceternity.com"
              href="https://twitter.com/mannupaaji"
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[25vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg"></div>
                <img
                  src={project.img}
                  alt="cover"
                  className="z-10 absolute -bottom-4 w-5/6 rounded-lg rotate-2 "
                />
              </div>
              <BoxReveal duration={0.5}>
                <h2>{project.type}</h2>
              </BoxReveal>
              <BoxReveal duration={0.5}>
                <h3>{project.description}</h3>
              </BoxReveal>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {project.icons &&
                    Object.values(project.icons).map((icon, index) => (
                      <div
                        key={index}
                        className="border-white border-2 bg bg-slate-500 rounded-full lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon5" className="p-1" />
                      </div>
                    ))}
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
}
