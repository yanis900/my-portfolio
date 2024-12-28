"use client";
import React from "react";
import { FloatingNav } from "./magicui/floating-nav";
import ScrollBar from "./ScrollBar";
import { Newspaper, PanelsTopLeft, SquareUser, Terminal } from "lucide-react";

export type NavItems = {
  name: string;
  link: string;
  icon?: JSX.Element;
};

const navItems: NavItems[] = [
  { name: "About", link: "#about", icon: <SquareUser />},
  { name: "Projects", link: "#projects", icon: <PanelsTopLeft /> },
  { name: "Certifications", link: "#certifications", icon: <Newspaper /> },
];

export default function Header() {
  return (
    <div className="w-screen flex items-center justify-between flex-row p-5 font-bold container">
      <ScrollBar />
      <ul>
        <Terminal />
      </ul>
      <FloatingNav navItems={navItems} />
    </div>
  );
}
