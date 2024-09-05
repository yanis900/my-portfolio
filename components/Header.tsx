"use client";
import React from "react";
import { ContactDialog } from "./ContactDialog";
import { Terminal } from "lucide-react";
import { FloatingNav } from "./magicui/floating-nav";
import { navItems } from "@/app/contants";
import ScrollBar from "./ScrollBar";

export default function Header() {
  return (
    <div className="w-screen flex items-center justify-between flex-row p-5 font-bold container">
      <ScrollBar />
      <ul>
        <Terminal />
      </ul>
      <ul className="flex gap-5 z-[1]">
        <ContactDialog />
      </ul>
      <FloatingNav navItems={navItems} />
    </div>
  );
}
