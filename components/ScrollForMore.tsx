"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import { Badge } from "./ui/badge";

export default function ScrollForMore() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 50) setVisible(false);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

return (
    <div
        className="fixed top-8 left-1/2 z-50 -translate-x-1/2 flex flex-col items-center pointer-events-none"
        style={{
            backdropFilter: "blur(16px) saturate(180%)",
            backgroundColor: "",
            borderRadius: "12px",
            border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
    >
        <Badge variant={'outline'} className="px-4 py-2 rounded-full text-sm shadow-lg flex items-center justify-center" style={{
            backdropFilter: "blur(16px) saturate(180%)",
            backgroundColor: "",
            borderRadius: "12px",
            border: "1px solid rgba(255, 255, 255, 0.125)",
        }}>
            Scroll for next project
            <Image src="/icons/MouseScrollDown.gif" alt="" width={40} height={40} />
        </Badge>
        <svg
            className="w-6 h-6 mt-2 text-black drop-shadow-lg"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
    </div>
);
}
