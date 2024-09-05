import React from "react";
import { projects } from "@/app/contants";
import { CheckIcon } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Safari from "@/components/magicui/safari";

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
    <div className="flex flex-col min-h-[100dvh] border">
      <section className="w-full py-12 md:py-24 lg:py-32 border">
        <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <h1>{project.name}</h1>
            <p className="text-muted-foreground md:text-xl">
              {project.description}
            </p>
          </div>
          <Safari
            url={`${project.slug}`}
            src={project.img}
            className="size-full"
          />
        </div>
      </section>
      <section>
        <div className="container grid gap-8 px-4 md:px-6">
          <div className="grid place-content-center">
            <Carousel className="w-full max-w-md">
              <CarouselContent>
                <CarouselItem>
                  <img
                    src="/icons/placeholder.svg"
                    width={800}
                    height={450}
                    alt="Project Image 1"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                  />
                  <p className="text-sm text-muted-foreground mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi impedit recusandae cum sed voluptate. Error debitis et
                    suscipit minus doloribus, ex voluptatibus cum aliquam
                    tenetur facere harum blanditiis aliquid quas!
                  </p>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>
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
              <li className="flex items-center gap-2">
                <CheckIcon className="w-4 h-4" />
                Advanced CSS and Tailwind skills.
              </li>
            </ul>
          </div>
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
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
