import { createClient } from "@sanity/client";

export const writeClient = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: "2025-01-01",
  token: process.env.SANITY_WRITE_TOKEN,   // MUST be set in .env.local
  useCdn: false, // no caching for mutations
});