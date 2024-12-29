"use client";
import React from "react";
import { FloatingNav } from "./magicui/floating-nav";
import ScrollBar from "./ScrollBar";
import { Newspaper, PanelsTopLeft, Settings, SquareUser, Terminal } from "lucide-react";

export type NavItems = {
  name: string;
  link: string;
  icon?: JSX.Element;
};

const navItems: NavItems[] = [
  { name: "About", link: "#about", icon: <SquareUser className="sm:w-4 sm:h-4 w-6 h-6" />},
  { name: "Skills", link: "#skills", icon: <Settings className="sm:w-4 sm:h-4 w-6 h-6" />},
  { name: "Projects", link: "#projects", icon: <PanelsTopLeft className="sm:w-4 sm:h-4 w-6 h-6" /> },
  { name: "Certifications", link: "#certifications", icon: <Newspaper className="sm:w-4 sm:h-4 w-6 h-6" /> },
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
