import { SchemaTypeDefinition } from "sanity";

const projects: SchemaTypeDefinition = {
  type: "document",
  name: "projects",
  title: "Projects",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "description",
      type: "string",
      title: "Description",
    },
    {
      name: "thumbnail",
      type: "image",
      title: "Thumbnail",
    },
    {
      name: "src",
      type: "url",
      title: "Src",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: (doc) => `${doc.name}`,
        maxLength: 200,
      },
    },
    {
      name: "images",
      type: "array",
      title: "Images",
      of: [{ type: "image" }],
    },
    {
      name: "icons",
      type: "array",
      title: "Icons",
      of: [{ type: "image" }],
    },
  ],
};

export default projects;
