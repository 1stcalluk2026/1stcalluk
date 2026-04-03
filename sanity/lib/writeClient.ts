import { createClient } from "@sanity/client";

export const writeClient = createClient({
  // Matches your .env file exactly
  projectId: process.env.NEXT_PUBLIC_SANITY_IMMIGRATION_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: "2025-01-01",
  token: process.env.SANITY_WRITE_TOKEN,   // MUST be set in .env.local
  useCdn: false, // no caching for mutations
});