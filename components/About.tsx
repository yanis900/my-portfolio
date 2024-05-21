import React from "react";
import Header from "@/components/Header";
import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import { Separator } from "./ui/separator";
import { stack } from "../app/contants";
export default function About() {
  return (
    <main className="w-screen h-screen mesh">
      <Header />
      <div className="w-screen h-full flex flex-col-reverse sm:flex-row items-center justify-center gap-[80px] sm:pb-36">
        <div>
          <h1 className="sm:text-5xl text-3xl font-bold">
            Full-Stack Developer
          </h1>
          <h2 className="text-slate-500 py-2 leading-snug sm:text-lg text-base">
            Hi I am Yanis Aityounes, a developer based in <br />
            London, United Kingdom 📍
          </h2>
          <div className="flex gap-2 py-2">
            <a href="https://www.linkedin.com/in/yanis-aityounes/">
              <Linkedin className="hover:opacity-50" />
            </a>
            <a href="https://github.com/yanis900">
              <Github className="hover:opacity-50" />
            </a>
          </div>
          <Separator className="my-2"  />
          <div className="flex gap-2 items-center space-x-2">
            <h2 className="font-bold">Tech Stack:</h2>
            <div className="bg-border w-[1px] h-5"></div>
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
          </div>
        </div>

        <div className="frame relative">
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
