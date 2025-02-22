import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border border-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <a href="https://www.linkedin.com/in/yanis-aityounes/" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-6 w-6" aria-hidden="true" />
          </a>
          <a href="https://github.com/yanis900" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Github</span>
            <Github className="h-6 w-6" aria-hidden="true" />
          </a>
        </div>
        <p className="text-center text-base text-gray-400">
          &copy; 2024 Yanis Aityounes. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
