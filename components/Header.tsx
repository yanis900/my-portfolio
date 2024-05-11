import React from "react";
import { ContactDialog } from "./ContactDialog";
import { Button } from "./ui/button";
import { Terminal } from "lucide-react";

export default function Header() {
  return (
    <div className="w-screen flex items-center justify-between flex-row p-5 font-bold container">
      <ul>
        <Terminal />
      </ul>
      <ul className="flex gap-5">
        <Button variant={"secondary"}>About</Button>
        <Button variant={"secondary"}>Projects</Button>
        <ContactDialog />
      </ul>
    </div>
  );
}