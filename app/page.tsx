import React from "react";
import About from "@/components/About";
import ScrollBar from "@/components/ScrollBar";
import Projects from "@/components/Projects";
import { FloatingNav } from "@/components/magicui/floating-nav";
import { navItems } from "./contants";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <ScrollBar />
      <FloatingNav navItems={navItems} />
      <About />
      <Skills />
      <Projects />
    </>
  );
}
