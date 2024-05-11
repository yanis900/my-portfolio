import React from "react";
import Header from "@/components/Header";
import { ChevronsLeft, ChevronsRight, Github, Linkedin } from "lucide-react";
import Image from "next/image";

export default function About() {
  const stack = [
    { name: "nextJS", src: "nextjs.svg" },
    { name: "mongoDB", src: "mongodb.svg" },
    { name: "nodeJS", src: "nodejs.svg" },
    { name: "tailwind", src: "tailwind.svg" },
  ];

  return (
    <main className="w-screen h-screen mesh">
      <Header />
      <div className="w-screen h-full flex flex-col-reverse sm:flex-row items-center justify-center gap-[80px] sm:pb-36 ">
        <div className="">
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
          <div className="w-12 h-0.5 bg-black my-2"></div>
          <div className="flex gap-2 items-center">
            <h2 className="font-bold">Tech Stack</h2>
            <div className="w-0.5 h-5 bg-black"></div>
            <div className="flex gap-2">
              {stack.map((item, index) => (
                <div className="w-8 h-8" key={index}>
                  <Image
                    className="w-full h-full"
                    key={index}
                    src={item.src}
                    alt={item.name}
                    width={25}
                    height={25}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <Image
            className="rounded-2xl accent"
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