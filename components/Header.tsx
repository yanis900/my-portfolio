"use client";
import React from "react";
import { FloatingNav } from "./magicui/floating-nav";
import ScrollBar from "./ScrollBar";
import {
  ArrowRight,
  Github,
  Linkedin,
  Newspaper,
  PanelsTopLeft,
  SquareUser,
  Terminal,
} from "lucide-react";
import Link from "next/link";

export type NavItems = {
  name: string;
  link: string;
  icon?: JSX.Element;
};

const navItems: NavItems[] = [
  {
    name: "About",
    link: "#about",
    icon: <SquareUser className="sm:w-4 sm:h-4 w-6 h-6" />,
  },
  // {
  //   name: "Skills",
  //   link: "#skills",
  //   icon: <Settings className="sm:w-4 sm:h-4 w-6 h-6" />,
  // },
  {
    name: "Projects",
    link: "#projects",
    icon: <PanelsTopLeft className="sm:w-4 sm:h-4 w-6 h-6" />,
  },
  {
    name: "Certifications",
    link: "#certifications",
    icon: <Newspaper className="sm:w-4 sm:h-4 w-6 h-6" />,
  },
  {
    name: "Blog",
    link: "#blog",
    icon: <Terminal className="sm:w-4 sm:h-4 w-6 h-6" />, // Changed to Terminal for blog
  },
  {
    name: "",
    link: "#certifications",
    icon: <Linkedin className="sm:w-4 sm:h-4 w-6 h-6" />,
  },
  {
    name: "",
    link: "#certifications",
    icon: <Github className="sm:w-4 sm:h-4 w-6 h-6" />,
  },
];

export default function Header() {
  return (
    <div className="w-screen flex items-center justify-between flex-row p-5 font-bold container">
      <ScrollBar />
      <ul>
        <Terminal />
      </ul>
      <FloatingNav navItems={navItems} />
      <Link
        href="https://api.yanait.com/"
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r gradient text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-200"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="whitespace-nowrap flex items-center">
          🚀
          <hr className="mx-2 h-4 w-px shrink-0 bg-white inline-block"/>
          Check out my API library
        </span>
        <ArrowRight className="w-5 h-5" />
      </Link>
    </div>
  );
}
