import { type SchemaTypeDefinition } from "sanity";
import projects from "./schema/projects";

import certifications from "./schema/certifications";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projects, certifications],
};
