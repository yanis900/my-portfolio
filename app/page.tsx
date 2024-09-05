import React from "react";
import About from "@/components/About";
import Projects from "@/components/Projects";
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
