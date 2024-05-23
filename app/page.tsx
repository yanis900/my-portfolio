import React from "react";
import About from "@/components/About";
import ScrollBar from "@/components/ScrollBar";
import RecentProjects from "@/components/RecentProjects";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <ScrollBar />
      <Header />
      <About />
      {/* <Projects /> */}
      <RecentProjects />
    </>
  );
}
