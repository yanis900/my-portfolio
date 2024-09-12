"use client";
import React from "react";
import { projects } from "@/app/contants";
import { ArrowLeft, CheckIcon, ChevronDown, ExternalLink } from "lucide-react";
import Safari from "@/components/magicui/safari";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { StickyScroll } from "@/components/acerternityui/sticky-scroll-reveal";

interface Project {
  name: string;
  slug: string;
}

export default function Page({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const project = projects.find(
    (project: Project) => project.slug === params.slug
  );

  if (!project) {
    return <div>Project not found</div>;
  }

  const imagesContent = Object.values(project.images).map((image) => ({
    title: image.title,
    description: image.description,
    src: image.src,
  }));

  return (
    <div className="flex flex-col min-h-[100dvh] gap-5 relative">
      <Link
        className="absolute top-5 left-5 flex items-center justify-center"
        href={'/'}
      >
        <ArrowLeft />
      </Link>
      <section className="w-full py-12 md:py-24 lg:py-32 relative">
        <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4 flex flex-col gap-5 p-10">
            <div className="space-y-2">
              <h1>{project.name}</h1>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                Project Goal 🎯
              </h2>
              <h3 className="text-muted-foreground md:text-lg">
                This is where I explain the purpose of the project:
              </h3>
              <p className="grid gap-2 text-muted-foreground">{project.goal}</p>
              <Button>
                <Link
                  href={project.src || "/"}
                  className="flex items-center justify-center gap-2"
                >
                  View current deployment <ExternalLink />
                </Link>
              </Button>
            </div>
          </div>
          <div className="p-10 bg rounded-xl">
            <Safari
              url={`${project.slug}`}
              src={project.img}
              className="size-full"
            />
          </div>
        </div>
        <div className="absolute bottom-0 w-full flex items-center justify-center">
          <ChevronDown className="w-10 h-10" />
        </div>
      </section>
      <hr />
      <section className="w-full py-12 md:py-24 lg:py-32 container relative">
        <StickyScroll content={imagesContent} />
      </section>
      <hr />
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
              Skills Gained
            </h2>
            <p className="text-muted-foreground md:text-lg">
              Working on this project has helped me develop the following
              skills:
            </p>
            <ul className="grid gap-2 text-muted-foreground">
              {project.skills &&
                Object.values(project.skills).map((skill, index) => (
                  <li className="flex items-center gap-2" key={index}>
                    <CheckIcon className="w-4 h-4" />
                    {skill}
                  </li>
                ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
              Future Plans
            </h2>
            <p className="text-muted-foreground md:text-lg">
              Ideas I have for expanding and improving this project in the
              future:
            </p>
            <ul className="grid gap-2 text-muted-foreground">
              {project.plans &&
                Object.values(project.plans).map((skill, index) => (
                  <li className="flex items-center gap-2" key={index}>
                    <CheckIcon className="w-4 h-4" />
                    {skill}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
