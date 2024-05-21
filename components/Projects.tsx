"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Badge } from "./ui/badge";

export const projects = [
  {
    name: "Ya-Motors",
    type: "Car Viewer App",
    img: "/carapp.png",
    src: "https://www.yamotors.ltd/",
    description:
      "Experience seamless car browsing with our Car Viewing App. Using dynamic routes, the app offers an intuitive interface to display detailed information for each vehicle. Explore specifications, images, and features of cars with ease, making your car search efficient and enjoyable.",
  },
  {
    name: "Drip-Catalogue",
    type: "E-Commerce App",
    img: "/ecommerce.png",
    src: "https://dripcatalogue.shop/",
    description:
      "Shop the latest fashion trends with our E-commerce Clothing Store. Offering a wide range of clothing options, the store provides a user-friendly shopping experience, complete with secure checkout and personalized recommendations.",
  },
  {
    name: "Cyber",
    type: "Crypto Dashboard App",
    img: "/cryptoapp.png",
    src: "",
    description:
      "Stay on top of your crypto investments with our Crypto Dashboard. The app provides a comprehensive overview of your wallet, displaying current trades, balances, and transaction history. With real-time updates and insightful analytics, managing your cryptocurrency portfolio has never been easier.",
  },
];

export default function Projects() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"]);

  return (
    <main ref={targetRef} className="h-[200vh] relative">
      <section
        id="projects"
        className="w-screen h-screen sticky top-0 flex items-center overflow-hidden"
      >
        <motion.div style={{ x }} className="flex gap-10 h-[90vh] items-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-[90vw] h-[60%] flex flex-col sm:flex-row p-5"
              id={project.name}
            >
              <div className="h-full sm:w-1/2 w-full">
                <Image
                  src={project.img}
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-full h-full rounded-xl"
                />
              </div>
              <div className="flex flex-col items-center justify-center gap-2 h-full sm:w-1/2 w-full p-5">
                <div className="flex flex-col gap-2 items-center justify-center text-center">
                  <span className="font-extrabold text-xl">{project.type}</span>
                  <h3 className="text-2xl uppercase">{project.name}</h3>
                  <p className="sm:text-lg text-base">{project.description}</p>
                </div>
                <div className="flex gap-2">
                  <Badge>NextJS</Badge>
                  <Badge>MongoDB</Badge>
                  <Badge>Sanity</Badge>
                </div>
                <div className="flex gap-2">
                  <Button variant={"secondary"}>Preview</Button>
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
