import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: "2023-08-01",

  token: process.env.SANITY_WRITE_TOKEN,

  useCdn: false,

  perspective:
    process.env.NEXT_PUBLIC_SANITY_PREVIEW === "true"
      ? "previewDrafts"
      : "published",
});
