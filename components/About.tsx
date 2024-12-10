"use client";

import { Github, Linkedin } from "lucide-react";
import BoxReveal from "./magicui/box-reveal";
import { Button } from "./ui/button";
import Header from "./Header";
import { LinkPreview } from "./acerternityui/link-preview";
import { BackgroundLines } from "./acerternityui/background-line";
// import { toast } from "sonner";

export default function About() {
  // if (!localStorage.getItem('refresh'))
  // window.onload = (e) => {
  //   toast("Welcome To My Portfolio");
  //   window.localStorage.setItem('refresh','1')
  // };
  return (
    <div id="about" className="mesh" >
      <Header />
      <BackgroundLines className="relative w-screen h-screen z-10">
        <div className="h-[80vh] grid grid-cols-1 w-full place-items-center">
          <div className="flex flex-col gap-4 items-center justify-center">
            <BoxReveal duration={0.5}>
              <h1 className="text-center">
                <span className="bg-black text-white px-2">Full-Stack</span>{" "}
                Developer
              </h1>
            </BoxReveal>
            <BoxReveal duration={0.5}>
              <p className="text-muted-foreground text-center p-2">
                Hi 👋 I am Yanis Aityounes, a Full-Stack Developer based in
                London, United Kingdom 📍
              </p>
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
