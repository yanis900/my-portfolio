import React from "react";
import { projects } from "@/app/contants";
import { CheckIcon } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface Project {
  name: string;
  slug: string;
  description: string;
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
  // project.name
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Minimalist Portfolio Project
            </h1>
            <p className="text-muted-foreground md:text-xl">
              A clean and modern portfolio project showcasing my design and
              development skills.
            </p>
          </div>
          <img
            src="/placeholder.svg"
            width="800"
            height="450"
            alt="Featured Project"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
          />
        </div>
      </section>
      <section>
        <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
          <div className="grid gap-6">
            <Carousel className="w-full max-w-md">
              <CarouselContent>
                <CarouselItem>
                  <img
                    src="/placeholder.svg"
                    width={800}
                    height={450}
                    alt="Project Image 1"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                  />
                  <p className="text-sm text-muted-foreground mt-2">
                    Responsive and mobile-friendly design.
                  </p>
                </CarouselItem>
                <CarouselItem>
                  <img
                    src="/placeholder.svg"
                    width={800}
                    height={450}
                    alt="Project Image 2"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                  />
                  <p className="text-sm text-muted-foreground mt-2">
                    Clean and modern user interface.
                  </p>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
              Project Images
            </h2>
            <p className="text-muted-foreground md:text-lg">
              Take a closer look at the various components and features of this
              project.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
              Future Plans
            </h2>
            <p className="text-muted-foreground md:text-lg">
              Here are some ideas I have for expanding and improving this
              project in the future.
            </p>
            <ul className="grid gap-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <CheckIcon className="w-4 h-4" />
                Implement a more robust content management system.
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="w-4 h-4" />
                Add more interactive features and animations.
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="w-4 h-4" />
                Optimize the project for better performance and SEO.
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
              Skills Gained
            </h2>
            <p className="text-muted-foreground md:text-lg">
              Working on this project has helped me develop the following
              skills:
            </p>
            <ul className="grid gap-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <CheckIcon className="w-4 h-4" />
                Advanced CSS and Tailwind skills.
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="w-4 h-4" />
                Responsive design and mobile-first development.
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="w-4 h-4" />
                Effective use of React components and hooks.
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="w-4 h-4" />
                Optimizing web performance and SEO.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
