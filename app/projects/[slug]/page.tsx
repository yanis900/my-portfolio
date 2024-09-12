"use client";
import React, { useEffect, useRef } from "react";
import { projects } from "@/app/contants";
import { ArrowLeft, CheckIcon, ExternalLink } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Safari from "@/components/magicui/safari";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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

  const previousRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" && previousRef.current) {
        previousRef.current.click();
      } else if (e.key === "ArrowRight" && nextRef.current) {
        nextRef.current.click();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="flex flex-col min-h-[100dvh] gap-5 relative">
      <Link
        className="absolute top-5 left-5 flex items-center justify-center"
        href="/"
      >
        <ArrowLeft />
      </Link>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4 flex flex-col gap-5">
            <div className="space-y-2">
              <h1>{project.name}</h1>
              <Button>
                <Link
                  href={project.src || "/"}
                  className="flex items-center justify-center gap-2"
                >
                  View current deployment <ExternalLink />
                </Link>
              </Button>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                Project Goal
              </h2>
              <h3 className="text-muted-foreground md:text-lg">
                This is where I explain the purpose of the project:
              </h3>
              <p className="grid gap-2 text-muted-foreground">
                {project.goal}
              </p>
            </div>
          </div>
          <Safari
            url={`${project.slug}`}
            src={project.img}
            className="size-full"
          />
        </div>
      </section>
      <hr />
      <section>
        <div className="container relative grid place-content-center p-5 w-full max-w-3xl mx-auto">
          <Carousel>
            <CarouselContent>
              {project.images &&
                Object.values(project.images).map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="flex flex-col items-center gap-2">
                      <img
                        width={800}
                        src={image.src}
                        className="mx-auto aspect-video overflow-hidden rounded-xl object-contain border"
                      />
                      <hr />
                      <p className="text-sm text-muted-foreground mt-2 max-w-3xl text-center border p-2 rounded-xl">
                        {image.description}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious ref={previousRef} />
            <CarouselNext ref={nextRef} />
          </Carousel>
        </div>
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
