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
    thumbnail: "/images/carapp4.png",
  },
  {
    title: "carapp",
    link: "https://yamotors.ltd",
    thumbnail: "/images/carapp2.png",
  },
  {
    title: "carapp",
    link: "https://yamotors.ltd",
    thumbnail: "/images/carapp1.png",
  },
  {
    title: "carapp",
    link: "https://yamotors.ltd",
    thumbnail: "/images/carapp3.png",
  },
  {
    title: "cryptoapp",
    link: "",
    thumbnail: "/images/cryptoapp1.png",
  },
  {
    title: "cryptoapp",
    link: "",
    thumbnail: "/images/cryptoapp2.png",
  },
  {
    title: "cryptoapp",
    link: "",
    thumbnail: "/images/cryptoapp3.png",
  },
  {
    title: "cryptoapp",
    link: "",
    thumbnail: "/images/cryptoapp4.png",
  },
];
