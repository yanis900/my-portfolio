"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import BoxReveal from "./magicui/box-reveal";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

interface BlogPost {
  title: string;
  date: string;
  url: string;
  tag: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "640 @ Makers (Coming Soon)",
    date: new Date(2025, 2, 9).toISOString(), // March is month 2 (0-indexed)
    url: "https://medium.com/@yanis900",
    tag: "My First Post",
  },
];

export default function Blog() {
  const [hoveredPost, setHoveredPost] = useState<string | null>(null);

  return (
    <div id='blog' className="py-20 space-y-16 mesh relative">ß
      <div className="w-full grid place-items-center">
        <BoxReveal duration={0.5}>
          <h1>
            <span className="bg-black text-white px-1">Embracing</span>{" "}
            Learning, <br />{" "}
          </h1>
        </BoxReveal>
        <BoxReveal duration={0.5}>
          <h1>
            Inspired By{" "}
            <span className="bg-black text-white px-1">Writing.</span>
          </h1>
        </BoxReveal>
      </div>
      <div className="flex justify-center mt-12">
        <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-700">Blog Posts</h2>
            <p className="mt-2 text-gray-500 text-base tracking-wide">
            A selection of blog posts I have written, sharing my knowledge and experiences.
            </p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 gap-y-8 px-4 py-12 md:grid-cols-2 gap-6 mb-12">
        {blogPosts.map((post) => (
          <Link
            href={`${post.url}`}
            key={post.url}
            className={`block group relative overflow-hidden transition-all duration-300 ${
              hoveredPost === post.url ? "scale-[1.02]" : "scale-100"
            }`}
            onMouseEnter={() => setHoveredPost(post.url)}
            onMouseLeave={() => setHoveredPost(null)}
          >
            <Card className="p-6">
              <Badge
                className="inline-block px-3 py-1 text-sm rounded-full bg-opacity-10 mb-3"
                variant={"secondary"}
              >
                {post.tag}
              </Badge>
              <h3 className="text-lg font-bold mb-3 group-hover:gradient-text transition-colors line-clamp-2">
                {post.title}
              </h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Calendar size={16} className="text-cyan-500" />
                  <span>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <ArrowRight
                  size={20}
                  className="text-green-500 transform transition-transform group-hover:translate-x-1"
                />
              </div>
            </Card>
          </Link>
        ))}
      </div>

      {/* <div className="text-center">
        <Link
          href="/blog"
          className="inline-block px-6 py-3 rounded-full  font-semibold transition-all duration-300 hover:bg-white hover:text-black"
        >
          See More Posts...
        </Link>
      </div> */}
    </div>
  );
}
