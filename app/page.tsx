import React from "react";
import About from "@/components/About";
import ScrollBar from "@/components/ScrollBar";
import Projects from "@/components/Projects";
import { FloatingNav } from "@/components/magicui/floating-nav";
import { navItems } from "./contants";
import { Parallax } from "@/components/Parallax";

export default function Home() {
  return (
    <>
      <About />
      <Parallax />
      <Projects />
    </>
  );
}
