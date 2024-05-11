import React from "react";
import About from "@/components/About";
import Projects from "@/components/Projects";
import CirclesAnimation from "@/components/CirclesAnimation";
import ScrollBar from "@/components/ScrollBar";

export default function Home() {
  return (
    <>
      {/* <CirclesAnimation /> */}
      <ScrollBar />
      <About />
      <Projects />
    </>
  );
}
