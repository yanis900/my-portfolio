import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import { Separator } from "./ui/separator";
import { stack } from "../app/contants";
import BoxReveal from "./magicui/box-reveal";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

export default function About() {
  return (
    <main className="w-screen h-screen mesh">
      <div className="relative w-screen h-full flex flex-col-reverse sm:flex-row items-center justify-center sm:pb-36">
        <div>
          <BoxReveal duration={0.5}>
            <h1>Full-Stack Developer</h1>
          </BoxReveal>
          <BoxReveal duration={0.5}>
            <h3 className="py-2">
              Hi 👋 I am Yanis Aityounes, a developer based in <br />
              London, United Kingdom 📍
            </h3>
          </BoxReveal>
          <BoxReveal duration={0.5}>
            <div className="flex gap-2 py-2">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <a href="https://www.linkedin.com/in/yanis-aityounes/">
                    <Linkedin />
                  </a>
                </HoverCardTrigger>
                <HoverCardContent>
                  <div>LinkedIn</div>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <a href="https://github.com/yanis900">
                    <Github className="hover:opacity-50" />
                  </a>
                </HoverCardTrigger>
                <HoverCardContent>
                  <div>Github</div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </BoxReveal>
          <Separator className="my-2" />
          <div className="flex gap-2 items-center space-x-2">
            <BoxReveal duration={0.5}>
              <p className="font-bold">Tech Stack:</p>
            </BoxReveal>
            <div className="bg-border w-[1px] h-5"></div>
            <BoxReveal duration={0.5}>
              <div className="flex gap-2">
                {stack.map((item, index) => (
                  <div className="w-7 h-7" key={index}>
                    <Image
                      className="w-full h-full"
                      key={index}
                      src={item.src}
                      alt={item.name}
                      width={35}
                      height={35}
                    />
                  </div>
                ))}
              </div>
            </BoxReveal>
          </div>
        </div>
        <div>
          <Image
            className="rounded-full"
            src={"/profile.png"}
            alt={"profile"}
            width={300}
            height={300}
          />
        </div>
      </div>
    </main>
  );
}
