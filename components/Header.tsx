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
import Image from "next/image";
import { projects } from "./Projects";
import { Card } from "./ui/card";

export default function Header() {
  return (
    <div className="w-screen flex items-center justify-between flex-row p-5 font-bold container">
      <ul>
        <Terminal />
      </ul>
      <ul className="flex gap-5">
        <Button variant={"secondary"}>
          <a href="#about">About</a>
        </Button>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex flex-col w-[208px] p-5 gap-2">
                  {projects.map((project, index) => (
                    <Card key={index} className="flex flex-row items-center w-full relative p-2 rounded-lg bg-gray-100 hover:cursor-pointer group">
                        <Image
                        className="w-full rounded-lg"
                          src={project.img}
                          alt=""
                          width={150}
                          height={150}
                        />
                        <div className="bg-gray-100 absolute bottom-2 right-2 rounded-lg">
                        </div>
                    </Card>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <ContactDialog />
      </ul>
    </div>
  );
}
