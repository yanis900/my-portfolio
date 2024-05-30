"use client";

import React from "react";
import { ContactDialog } from "./ContactDialog";
import { Button } from "./ui/button";
import { Terminal } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Header() {
  return (
    <div className="w-screen flex items-center justify-between flex-row p-5 font-bold container">
      <ul>
        <Terminal />
      </ul>
      <ul className="flex gap-5">
        <ContactDialog />
      </ul>
    </div>
  );
}
