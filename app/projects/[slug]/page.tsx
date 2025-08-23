import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchProjects, Project, Projects } from "@/components/Projects";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import DotPattern from "@/components/magicui/dot-pattern";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  ExternalLink,
  Github,
  Mail,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { SlideShow } from "@/components/SlideShow";
import FullScreenSlideShow from "@/components/FullScreenSlideShow";
import ScrollForMore from "@/components/ScrollForMore";


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
      <ScrollForMore />
      <div className="space-y-8">
        <div className="flex justify-between">
          <div>
            <span className="text-muted-foreground">{project.date}</span>
            <h1 className="text-3xl font-bold mt-2">{project.name}</h1>
            {/* <p className="text-xl text-muted-foreground mt-1 right-0">Open Source</p> */}
            <div className="flex flex-wrap gap-2 mt-3">
              {project.tags &&
                project.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary">
                    {tag}
                  </Badge>
                ))}
            </div>
          </div>
          <div className="flex items-center gap-3">
            {project.repo ? (
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2 hover:bg-accent transition-colors bg-transparent"
                asChild
              >
                <Link
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View GitHub repository"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </Link>
              </Button>
            ) : (
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2 hover:bg-accent transition-colors bg-transparent"
                asChild
              >
                <a
                  href="mailto:yanis8y@hotmail.com"
                  aria-label="Contact me about this project"
                >
                  <Mail className="h-4 w-4" />
                  Contact Me
                </a>
              </Button>
            )}

            {project.src ? (
              <Button
                className="flex items-center gap-2 bg-primary hover:bg-primary/90 transition-colors"
                size="sm"
                asChild
              >
                <Link
                  href={project.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View live website"
                >
                  <ExternalLink className="h-4 w-4" />
                  View my website here
                </Link>
              </Button>
            ) : (
              <Button
                className="flex items-center gap-2 bg-muted hover:bg-muted/80 transition-colors text-muted-foreground cursor-default"
                size="sm"
                disabled
              >
                <Clock className="h-4 w-4" />
                Coming Soon
              </Button>
            )}
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
              {project.content ? project.content : ""}
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
            {project.repos && project.repos.length > 0 && (
              <div className="flex flex-col gap-6 mt-6">
                {project.repos.map((repo, idx) => (
                  <Card
                    key={idx}
                    className="group hover:shadow-lg transition-all duration-200 border-0 shadow-md"
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl group-hover:text-primary transition-colors m-0">
                          {repo.name}
                        </CardTitle>
                        <Badge
                          variant={"outline"}
                          className="text-xs flex items-center"
                        >
                          <div className="w-2 h-2 rounded-full mr-1.5 bg-green-500"></div>
                          active
                        </Badge>
                      </div>
                      {repo.description && (
                        <div className="text-sm leading-relaxed text-muted-foreground mt-2">
                          {repo.description}
                        </div>
                      )}
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex flex-col gap-3">
                        {/* API Endpoint */}
                        {repo.api && (
                          <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                            <Badge
                              variant="outline"
                              className="text-xs font-mono"
                            >
                              {repo.method || "GET"}
                            </Badge>
                            <code className="text-xs text-muted-foreground font-mono flex-1 truncate">
                              {repo.api}
                            </code>
                          </div>
                        )}
                        {/* Action Buttons */}
                        <div className="flex gap-2">
                          {repo.repo && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="flex-1 bg-transparent"
                              asChild
                            >
                              <a
                                href={repo.repo}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Github className="h-4 w-4 mr-2" />
                                GitHub
                              </a>
                            </Button>
                          )}
                          {repo.api && (
                            <Button size="sm" className="flex-1" asChild>
                              <a
                                href={repo.api}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Zap className="h-4 w-4 mr-2" />
                                API
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
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
