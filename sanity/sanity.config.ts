import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemaTypes";

export default defineConfig({
  name: "default",
  title: "1st-call-uk-immigration-cms",

  projectId: "gwozhq55",
  dataset: "production",

  basePath: "/studio",   // ← added line (mount Studio at /studio in all environments)

  plugins: [
    deskTool(),
  ],

  schema: {
    types: schemaTypes,
  },

  // Keep default document actions
  document: {
    actions: (prev) => prev,
  },
});
