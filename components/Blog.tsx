"use client"

import { useState } from "react"
import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"
import BoxReveal from "./magicui/box-reveal"
import { Card } from "./ui/card"
import { Badge } from "./ui/badge"

interface BlogPost {
  title: string
  date: string
  slug: string
  tag: string
}

const blogPosts: BlogPost[] = [
  {
    title: "Coming soon...",
    date: "2024-03-01",
    slug: "Coming soon...",
    tag: "Coming soon...",
  },
//   {
//     title: "Modern State Management in React",
//     date: "2024-02-18",
//     slug: "modern-state-management",
//     tag: "React",
//   },
//   {
//     title: "TypeScript Best Practices",
//     date: "2024-02-15",
//     slug: "typescript-best-practices",
//     tag: "TypeScript",
//   },
//   {
//     title: "Optimizing React Performance",
//     date: "2024-02-12",
//     slug: "optimizing-react-performance",
//     tag: "React",
//   },
]

export default function Blog() {
  const [hoveredPost, setHoveredPost] = useState<string | null>(null)

  return (
      <div className="py-20 space-y-16 mesh relative">

        <div className="w-full grid place-items-center">
                <BoxReveal duration={0.5}>
                  <h1>
                    <span className="bg-black text-white px-1">Embracing</span>{" "}
                    Learning, <br />{" "}
                  </h1>
                </BoxReveal>
                <BoxReveal duration={0.5}>
                  <h1>
                    Inspired By <span className="bg-black text-white px-1">Writing.</span>
                  </h1>
                </BoxReveal>
              </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {blogPosts.map((post) => (
            <Link
              href={`/blog/${post.slug}`}
              key={post.slug}
              className={`block group relative overflow-hidden transition-all duration-300 ${
                hoveredPost === post.slug ? "scale-[1.02]" : "scale-100"
              }`}
              onMouseEnter={() => setHoveredPost(post.slug)}
              onMouseLeave={() => setHoveredPost(null)}
            >
              <Card className="p-6">
                <Badge className="inline-block px-3 py-1 text-sm rounded-full bg-opacity-10 mb-3" variant={'secondary'}>
                  {post.tag}
                </Badge>
                <h3 className="text-lg font-bold mb-3 group-hover:text-[#00DFB7] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Calendar size={16} className="text-[#00DFB7]" />
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
                    className="text-[#00DFB7] transform transition-transform group-hover:translate-x-1"
                  />
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="inline-block px-6 py-3 rounded-full  font-semibold transition-all duration-300 hover:bg-white hover:text-black"
          >
            See More Posts...
          </Link>
        </div>
      </div>
  )
}

