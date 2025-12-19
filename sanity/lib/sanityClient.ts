import { createClient } from "@sanity/client";

export const immigrationClient = createClient({
  projectId: "gwozhq55", // ✅ CORRECT (letter o)
  dataset: "production", // or whatever dataset you created
  apiVersion: "2024-01-01",
  useCdn: true,
});
