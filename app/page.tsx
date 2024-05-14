import React from "react";
import About from "@/components/About";
import Projects from "@/components/Projects";
import ScrollBar from "@/components/ScrollBar";

export default function Home() {
  return (
    <>
      <ScrollBar />      
      <About />
      <Projects />
    </>
  );
}
