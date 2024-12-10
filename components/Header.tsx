"use client";
import React from "react";
import { Terminal } from "lucide-react";
import { FloatingNav } from "./magicui/floating-nav";
import ScrollBar from "./ScrollBar";

type NavItems = {
  name: string;
  link: string;
};

const navItems: NavItems[] = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Certifications", link: "#certifications" },
];

export default function Header() {
  return (
    <div className="w-screen flex items-center justify-between flex-row p-5 font-bold container">
      <ScrollBar />
      <ul>
        <Terminal />
      </ul>
      <FloatingNav navItems={navItems}/>
    </div>
  );
}
