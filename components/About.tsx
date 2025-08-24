"use client";

import { Github, Linkedin } from "lucide-react";
import BoxReveal from "./magicui/box-reveal";
import { Button } from "./ui/button";
import { LinkPreview } from "./acerternityui/link-preview";
import { BackgroundLines } from "./acerternityui/background-line";
import Featured from "./Featured";
import { Badge } from "./ui/badge";
import Image from "next/image";

export default function About() {
  // console.log(`
  //      ██     ██ ███████ ██      ███████  ██████  ███    ███ ███████
  //      ██     ██ ██      ██      ██      ██    ██ ████  ████ ██
  //      ██  █  ██ █████   ██      ██      ██    ██ ██ ████ ██ █████
  //      ██ ███ ██ ██      ██      ██      ██    ██ ██  ██  ██ ██
  //       ███ ███  ███████ ███████ ███████  ██████  ██      ██ ███████
  //                          to My Portfolio!
  //     `);
  return (
    <div id="about" className="mesh">
      <BackgroundLines className="relative w-screen h-screen z-10">
        <div className="h-[80vh] grid grid-cols-1 w-full place-items-center">
          <div className="flex flex-col gap-4 items-center justify-center">
            <BoxReveal duration={0.5}>
              <Featured />
            </BoxReveal>
            <BoxReveal duration={0.5}>
              <h1 className="text-center">
                <span className="bg-black text-white px-2">Full-Stack</span>{" "}
                Developer
              </h1>
            </BoxReveal>
            <BoxReveal duration={0.5}>
              <div className="text-muted-foreground text-center p-2 space-y-3">
                Hi 👋 I am Yanis, a Full-Stack Developer based in London, United
                Kingdom 📍. <br />
                <div className="flex justify-center">
                  <Badge variant={"secondary"} className="flex gap-2 w-fit">
                    <Image
                      src="icons/mongodb_full.svg"
                      alt="MongoDB"
                      width={18}
                      height={18}
                    />
                    <Image
                      src="icons/express.svg"
                      alt="Express.js"
                      width={18}
                      height={18}
                      style={{
                        filter:
                          "invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)",
                      }}
                    />
                    <Image
                      src="icons/react.svg"
                      alt="React.js"
                      width={18}
                      height={18}
                      style={{
                        filter:
                          "invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)",
                      }}
                    />
                    <Image
                      src="icons/nodejs.svg"
                      alt="Node.js"
                      width={18}
                      height={18}
                      style={{
                        filter:
                          "invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)",
                      }}
                    />
                              <hr className="mx-2 h-4 w-px shrink-0 bg-black inline-block"/>

                    <Image
                      src="icons/nextjs.svg"
                      alt="Next.js"
                      width={18}
                      height={18}
                      style={{
                        filter:
                          "invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)",
                      }}
                    />
                  </Badge>
                </div>
              </div>
            </BoxReveal>
            <BoxReveal duration={0.5}>
              <div className="flex gap-2">
                <Button size={"icon"} variant={"ghost"}>
                  <LinkPreview url="https://www.linkedin.com/in/yanis-aityounes/">
                    <Linkedin />
                  </LinkPreview>
                </Button>
                <Button size={"icon"} variant={"ghost"}>
                  <LinkPreview url="https://github.com/yanis900">
                    <Github />
                  </LinkPreview>
                </Button>
              </div>
            </BoxReveal>
          </div>
        </div>
      </BackgroundLines>
    </div>
  );
}
