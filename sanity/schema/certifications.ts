import { SchemaTypeDefinition } from "sanity";

const certifications: SchemaTypeDefinition = {
  type: "document",
  name: "certifications",
  title: "Certifications",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "company",
      type: "string",
      title: "Company",
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
        name: "completed",
        type: "boolean",
        title: "Completed",
      },
  ],
};

export default certifications;
