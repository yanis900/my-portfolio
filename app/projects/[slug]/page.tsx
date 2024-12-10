import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchProjects, Project, Projects } from "@/components/Projects";
import Safari from "@/components/magicui/safari";

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
        <Card className="w-full max-w-md">
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
    <div className="container mx-auto px-4 py-8 flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            {project.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden">
            <Safari
              src={project.thumbnail}
              className="size-full"
            />
          </div>
          {/* <div className="flex flex-wrap justify-center gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div> */}
          <p className="text-muted-foreground text-center">
            {project.description}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
