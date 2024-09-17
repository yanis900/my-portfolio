import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import BoxReveal from "./magicui/box-reveal";
import { AuroraBackground } from "./acerternityui/aurora-background";
import { Button } from "./ui/button";
import Header from "./Header";

export default function About() {
  return (
    <div id="about" className="mesh">
      <AuroraBackground>
        <Header />
        <div className="relative w-screen h-screen z-10">
          <div className="h-[80vh] grid grid-cols-1 md:grid-cols-2 w-full max-w-4xl mx-auto">
            <div className="flex flex-col gap-4 items-center justify-center md:items-start">
              <BoxReveal duration={0.5}>
                <h1 className="text-center md:text-left">
                  <span className="bg-black text-white px-2">Full-Stack</span>{" "}
                  Developer
                </h1>
              </BoxReveal>
              <BoxReveal duration={0.5}>
                <p className="text-muted-foreground text-center md:text-left p-2">
                  Hi 👋 I am Yanis Aityounes, a Full-Stack Developer based in
                  London, United Kingdom 📍
                </p>
              </BoxReveal>
              <BoxReveal duration={0.5}>
                <div className="flex gap-2">
                  <Button size={"icon"} variant={"ghost"}>
                    <a href="https://www.linkedin.com/in/yanis-aityounes/">
                      <Linkedin />
                    </a>
                  </Button>
                  <Button size={"icon"} variant={"ghost"}>
                    <a href="https://github.com/yanis900">
                      <Github />
                    </a>
                  </Button>
                </div>
              </BoxReveal>
            </div>
            <div className="flex justify-center items-center md:justify-end w-full h-full">
              <Image
                className="rounded-xl"
                src={"/images/profile.png"}
                alt={"profile"}
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
      </AuroraBackground>
    </div>
  );
}
