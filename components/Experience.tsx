"use client"

import { useState } from "react"
import BoxReveal from "./magicui/box-reveal"

interface Experience {
  title: string
  company: string
  period: string
  description: string[]
}

const experiences: Experience[] = [
  {
    title: "Senior Software Engineer",
    company: "Tech Innovators Inc.",
    period: "2021 - Present",
    description: [
      "Led development of a high-performance web application using Next.js and TypeScript",
      "Implemented CI/CD pipelines, reducing deployment time by 40%",
      "Mentored junior developers and conducted code reviews",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    period: "2018 - 2021",
    description: [
      "Developed and maintained multiple client-facing web applications",
      "Optimized database queries, improving application response time by 30%",
      "Collaborated with UX designers to implement responsive designs",
    ],
  },
  {
    title: "Junior Web Developer",
    company: "WebCraft Studios",
    period: "2016 - 2018",
    description: [
      "Assisted in the development of e-commerce websites using React",
      "Implemented RESTful APIs for seamless front-end and back-end integration",
      "Participated in daily stand-ups and sprint planning meetings",
    ],
  },
]

export default function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-16 overflow-hidden">
      <div className="container mx-auto px-4 space-y-10">

   <div className="w-full grid place-items-center code">
        <BoxReveal duration={0.5}>
          <h1>
            <span className="gradient text-white px-1">Passion</span> For
            Learning, <br />{" "}
          </h1>
        </BoxReveal>
        <BoxReveal duration={0.5}>
          <h1>
            Crafted in <span className="gradient-text">Code.</span>
          </h1>
        </BoxReveal>
      </div>

        <div className="relative max-w-3xl mx-auto">
          <svg className="absolute left-0 top-0 h-full w-8" viewBox="0 0 10 100" preserveAspectRatio="none">
            <line x1="5" y1="0" x2="5" y2="100" stroke="currentColor" strokeWidth="2" className="text-gray-300" />
          </svg>
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`mb-12 pl-12 transition-all duration-300 ease-in-out ${
                hoveredIndex === null || hoveredIndex === index ? "opacity-100 scale-100" : "opacity-50 scale-95"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative">
                <div
                  className={`absolute -left-[39px] top-0 w-6 h-6 bg-primary rounded-full border-4 border-white transition-all duration-300 ${hoveredIndex === index ? "scale-125" : ""}`}
                />
                <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                <p className="text-gray-600 mb-2">{exp.company}</p>
                <p className="text-sm text-gray-500 mb-3">{exp.period}</p>
                <ul className="list-disc list-inside text-gray-700">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="mb-1">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          {hoveredIndex !== null && (
            <div className="fixed top-1/2 right-8 transform -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg transition-all duration-300 ease-in-out">
              <h4 className="text-lg font-semibold mb-2">{experiences[hoveredIndex].title}</h4>
              <p className="text-gray-600">{experiences[hoveredIndex].company}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

