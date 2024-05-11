"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

export default function Projects() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"]);

  const projects = [
    {
      name: "Ya Motors",
      type: "Car Viewer App",
      img: "/placeholder.svg",
      src: "https://www.yamotors.ltd/",
      description: "",
    },
    {
      name: "Drip Catalogue",
      type: "E-Commerce App",
      img: "/placeholder.svg",
      src: "",
      description: "",
    },
    {
      name: "Cyber",
      type: "Crypto Dashboard App",
      img: "/placeholder.svg",
      src: "",
      description: "",
    },
  ];
  return (
    <main ref={targetRef} className="h-[200vh] relative">
      <section className="w-screen h-screen sticky top-0 flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-5">
          {projects.map((project, index) => (
            <div key={index} className="w-[90vw] h-[60%] flex flex-col sm:flex-row p-5">
              <div className="h-full sm:w-1/2 w-full border">
                <Image
                  src={project.img}
                  alt=""
                  width={1800}
                  height={1000}
                  className="w-full h-full rounded-xl"
                />
              </div>
              <div className="flex flex-col items-center justify-center gap-2 h-full sm:w-1/2 w-full p-5">
                <div className="flex flex-col gap-2 items-center justify-center text-center">
                  <span className="font-extrabold text-xl">{project.type}</span>
                  <h3 className="text-2xl">{project.name}</h3>
                  <p className="sm:text-lg text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                    Inventore qui temporibus necessitatibus corporis dolore
                    dignissimos autem eaque laborum blanditiis id explicabo,
                    cumque nam neque, quis possimus distinctio aspernatur animi
                    placeat.
                  </p>
                </div>
                <div className="flex gap-2">
                  <Badge>NextJS</Badge>
                  <Badge>MongoDB</Badge>
                  <Badge>Sanity</Badge>
                </div>
                <div className="flex gap-2">
                  <Button variant={"outline"} className="grid">
                    <a
                      href={project.src}
                      className="flex items-center justify-center gap-2"
                    >
                      View
                      <ExternalLink />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
