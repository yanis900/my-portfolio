import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import { Separator } from "./ui/separator";
import BoxReveal from "./magicui/box-reveal";
import { AuroraBackground } from "./acerternityui/aurora-background";
import Header from "./Header";
import { Button } from "./ui/button";

export default function About() {
  return (
    <div id="about" className="mesh">
      <AuroraBackground>
        <Header />
        <div className="relative w-screen h-full flex flex-col-reverse sm:flex-row items-center justify-center sm:pb-36 z-10">
          <div>
            <BoxReveal duration={0.5}>
              <h1><span className="bg-black text-white px-1">Software</span> Engineer</h1>
            </BoxReveal>
            <Separator className="my-2" />

            <BoxReveal duration={0.5}>
              <h3 className="py-2">
                Hi 👋 I am Yanis Aityounes, a Softare Engineer based in <br />
                London, United Kingdom 📍
              </h3>
            </BoxReveal>
            <BoxReveal duration={0.5}>
              <div className="flex gap-2 py-2 items-center">
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
          <div>
            <Image
              className="rounded-full"
              src={"/images/profile.png"}
              alt={"profile"}
              width={300}
              height={300}
            />
          </div>
        </div>
      </AuroraBackground>
    </div>
  );
}
