"use client";
import React from "react";
import { HeroParallax } from "./acerternityui/hero-parallax";

export function Parallax() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "carapp",
    link: "https://yamotors.ltd",
    thumbnail: "/web/carapp3.png",
  },
  {
    title: "carapp",
    link: "https://yamotors.ltd",
    thumbnail: "/web/carapp2.png",
  },
  {
    title: "carapp",
    link: "https://yamotors.ltd",
    thumbnail: "/web/carapp1.png",
  },
];
