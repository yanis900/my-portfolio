import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Featured() {
  return (
    <Link
      href={"https://www.npmjs.com/package/pleasereadme"}
      className="flex items-center justify-center border rounded-full py-1 px-2 cursor-pointer z-10"
    >
      ✨ <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
      <p className=" text-xs font-medium">
        <span className="font-semibold">Featured: </span>
        &quot;pleasereadme&quot; README AI npm package{" "}
      </p>
      <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
    </Link>
  );
}
