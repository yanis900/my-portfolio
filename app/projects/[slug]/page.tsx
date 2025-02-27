import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchProjects, Project, Projects } from "@/components/Projects";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import DotPattern from "@/components/magicui/dot-pattern";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { SlideShow } from "@/components/SlideShow";
import FullScreenSlideShow from "@/components/FullScreenSlideShow";

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

  function getNextProjectSlug(slug: string) {
    const projectIndex = data.findIndex((p) => p.slug === slug);
    if (projectIndex === -1 || projectIndex === data.length - 1) {
      return data[0]?.slug || "";
    }
    return data[projectIndex + 1].slug;
  }

  function getNextProjectThumbnail(slug: string) {
    const projectIndex = data.findIndex((p) => p.slug === slug);
    if (projectIndex === -1 || projectIndex === data.length - 1) {
      return data[0]?.thumbnail || "";
    }
    return data[projectIndex + 1].thumbnail;
  }

  function getNextProjectTags(slug: string) {
    const projectIndex = data.findIndex((p) => p.slug === slug);
    if (projectIndex === -1 || projectIndex === data.length - 1) {
      return data[0]?.tags || "";
    }
    return data[projectIndex + 1].tags;
  }
  function getNextProjectName(slug: string) {
    const projectIndex = data.findIndex((p) => p.slug === slug);
    if (projectIndex === -1 || projectIndex === data.length - 1) {
      return data[0]?.name || "";
    }
    return data[projectIndex + 1].name;
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
        <div className="flex justify-between">
          <div>
            <span className="text-muted-foreground">{project.date}</span>
            <h1 className="text-3xl font-bold mt-2">{project.name}</h1>
            {/* <p className="text-xl text-muted-foreground mt-1">Open Source</p> */}
            <div className="flex flex-wrap gap-2 mt-3">
              {project.tags &&
                project.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary">
                    {tag}
                  </Badge>
                ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="relative">
            <div className="absolute inset-0 z-[-1]">
              <Image
                src={"/images/brush.jpg"}
                alt="Project cover"
                fill
                className="rounded-lg opacity-5"
              />
            </div>
            <p className="text-muted-foreground">
              {project.content
                ? project.content
                : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ipsam maxime magnam facere numquam cupiditate unde architecto magni excepturi temporibus vitae aspernatur, natus enim, deleniti, labore dolorum est voluptate ratione!"}
            </p>
            <Button variant={"ghost"} className="mt-4">
              <Link
                href={"/"}
                className="flex items-center justify-center gap-2"
              >
                <ArrowLeft />
                Back
              </Link>
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-green-500 rounded-lg opacity-50 blur-3xl" />
            <div className="relative bg-white/80 backdrop-blur-sm rounded-lg border shadow-2xl">
              <FullScreenSlideShow images={project.images} />
              <div className="flex items-center gap-2 border-b p-2">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>
              </div>
              <div className="relative w-full aspect-video">
                <SlideShow image={project.images} />
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold mb-8 text-center">
            Project Details
          </h1>
          <Card className="p-6 bg-secondary">
            <dl className="grid grid-cols-1 gap-4">
              <div>
                <dt className="font-medium">My Role</dt>
                <dd className="text-muted-foreground">
                  {project.role || "Developer"}
                </dd>
              </div>
              <div>
                <dt className="font-medium">Developed for/at</dt>
                <dd className="text-muted-foreground">{project.who}</dd>
              </div>
              <div>
                <dt className="font-medium">Application type</dt>
                <dd className="text-muted-foreground">
                  {project.type || "Web Application"}
                </dd>
              </div>
            </dl>
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4">Application Stack</h3>
                <div className="flex flex-wrap items-center justify-start gap-4">
                {project.icons &&
                  project.icons.map((icon, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center rounded-2xl bg-white shadow-md aspect-square w-24 h-24"
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
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold mb-8 text-center">Next Project</h1>
          <Link href={`/projects/${getNextProjectSlug(project.slug)}`}>
            <Card className="p-6 bg-secondary flex items-center justify-center gradient transition-transform duration-300 ease-in-out hover:scale-105 border-inherit">
              <div className="flex flex-col gap-2">
                <h2 className="tracking-tighter text-white">
                  {getNextProjectName(project.slug)}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {getNextProjectTags(project.slug).map((tag, index) => (
                    <Badge key={index} variant={"default"}>
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="relative bg-white/80 backdrop-blur-sm rounded-lg border shadow-2xl">
                  <div className="flex items-center gap-2 border-b p-2">
                    <div className="flex gap-1.5">
                      <div className="h-3 w-3 rounded-full bg-red-500" />
                      <div className="h-3 w-3 rounded-full bg-yellow-500" />
                      <div className="h-3 w-3 rounded-full bg-green-500" />
                    </div>
                  </div>
                  <div className="relative w-full aspect-video">
                    <Image
                      alt="Image"
                      className="object-contain aspect-video"
                      height={400}
                      src={getNextProjectThumbnail(project.slug)}
                      width={400}
                    />
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}
