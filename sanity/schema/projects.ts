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
      name: "date",
      type: "string",
      title: "Date",
    },
    {
      name: "description",
      type: "string",
      title: "Description",
    },
    {
      name: "content",
      type: "text",
      title: "Content",
    },
    {
      name: "tags",
      type: "array",
      title: "Tags",
      of: [{ type: "string" }],
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
      name: "role",
      type: "string",
      title: "Role",
    },
    {
      name: "who",
      type: "string",
      title: "Who",
    },
    {
      name: "type",
      type: "string",
      title: "Type",
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
