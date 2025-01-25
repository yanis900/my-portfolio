import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchProjects, Project, Projects } from "@/components/Projects";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import DotPattern from "@/components/magicui/dot-pattern";

const tags = ["NEXTJS", "TYPESCRIPT", "REACT", "VUE", "SVELTE"];

export default async function Page({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  let data: Projects;
  let project: Project | undefined;

  try {
    data = await fetchProjects();
    project = data.find((project) => project.slug === params.slug);
  } catch (error) {
    console.error(error);
  }

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-8 flex items-center justify-center min-h-screen">
        <DotPattern
                className={
                  "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]"
                }
              />
        <Card className="w-full max-w-md z-10">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Project Not Found
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center">
              The project you are looking for does not exist or may have been
              removed.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="space-y-8">
        <div>
          <span className="text-muted-foreground">2021 - PRESENT</span>
          <h1 className="text-3xl font-bold mt-2">{project.name}</h1>
          <p className="text-xl text-muted-foreground mt-1">Open Source</p>
          <div className="flex flex-wrap gap-2 mt-3">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        {/* /* -------------------------------------------------------------------------- */
        /*                                 Description                                */
        /* -------------------------------------------------------------------------- */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="relative">
            <div className="absolute inset-0 z-[-1]">
              <Image
                src={"/images/brush.jpg"}
                alt="Project cover"
                layout="fill"
                className="rounded-lg opacity-5"
              />
            </div>
            <p className="text-muted-foreground">
              {project.description} Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Maiores blanditiis corporis tempore iusto
              incidunt earum pariatur! Pariatur dolores nemo rerum tempore
              ratione possimus porro in quo debitis! Alias, commodi expedita.
            </p>
            <p className="text-muted-foreground mb-2">
              {project.description} Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Maiores blanditiis corporis tempore iusto
              incidunt earum pariatur! Pariatur dolores nemo rerum tempore
              ratione possimus porro in quo debitis! Alias, commodi expedita.
            </p>
            <p className="text-muted-foreground mb-2">
              {project.description} Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Maiores blanditiis corporis tempore iusto
              incidunt earum pariatur! Pariatur dolores nemo rerum tempore
              ratione possimus porro in quo debitis! Alias, commodi expedita.
            </p>
          </div>
          {/* /* -------------------------------------------------------------------------- */
          /*                                  Slideshow                                 */
          /* -------------------------------------------------------------------------- */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-green-500 rounded-lg opacity-50 blur-3xl" />
            <div className="relative bg-white/80 backdrop-blur-sm rounded-lg border shadow-2xl">
              <div className="flex items-center gap-2 border-b p-2">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>
              </div>
              <div className="relative w-full aspect-video">
                {project.images &&
                  project.images.map((image, index) => (
                    <Image
                      key={index}
                      src={image}
                      alt={`Project slide ${index + 1}`}
                      fill
                      className="object-cover rounded-lg"
                    />
                  ))}
                {/* <Button
                  size="icon"
                  variant="secondary"
                  className="absolute top-4 right-4"
                >
                  <Maximize2 className="h-4 w-4" />
                </Button> */}
                {/* <div className="absolute flex justify-center gap-2 bottom-0 right-72">
                  <Button size="icon" variant="outline">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="outline">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* /* -------------------------------------------------------------------------- */
        /*                               Project Details                              */
        /* -------------------------------------------------------------------------- */}
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold mb-8 text-center">
            Project Details
          </h1>
          <Card className="p-6 bg-secondary">
            <dl className="grid grid-cols-1 gap-4">
              <div>
                <dt className="font-medium">My role</dt>
                <dd className="text-muted-foreground">
                  Maintainer, Engineering software packages
                </dd>
              </div>
              <div>
                <dt className="font-medium">Developed for/at</dt>
                <dd className="text-muted-foreground">Personal project</dd>
              </div>
              <div>
                <dt className="font-medium">Application type</dt>
                <dd className="text-muted-foreground">
                  Icon Library, Open Source
                </dd>
              </div>
            </dl>
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4">Application Stack</h3>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
                {project.icons &&
                  project.icons.map((icon, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-center gap-2 rounded-lg p-2 bg-white"
                    >
                      <Image
                        src={icon || "/placeholder.svg"}
                        alt={`icon ${index + 1}`}
                        width={40}
                        height={40}
                        className="rounded"
                      />
                    </div>
                  ))}
              </div>
            </div>
          </Card>
        </div>

        {/* <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold mb-8 text-center">Next Project</h1>
          <Card className="p-6 bg-secondary"></Card>
        </div> */}
      </div>
    </div>
  );
}
