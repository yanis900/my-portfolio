import React from "react";
import About from "@/components/About";
import Projects from "@/components/Projects";
import { Parallax } from "@/components/Parallax";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <About />
      <Parallax />
      <Projects />
      <Certifications />
      <Footer />
    </>
  );
}
