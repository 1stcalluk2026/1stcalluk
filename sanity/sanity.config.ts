import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemaTypes";
import { EyeOpenIcon } from "@sanity/icons";

export default defineConfig({
  name: "default",
  title: "1st-call-uk-immigration-cms",

  projectId: "gwozhq55",
  dataset: "production",

  basePath: "/studio",

  plugins: [
    deskTool(),
  ],

  schema: {
    types: schemaTypes,
  },

  // ✅ Native Preview Button (Official Sanity v3 Method - Type Safe)
  document: {
    actions: (prev, context) => {
      if (context.schemaType === "blogPost") {
        return [
          ...prev,
          ({ draft, published }) => {
            const doc = draft ?? published;
            const slug = (doc as any)?.slug?.current;

            return {
              name: "openPreview",
              label: "Preview",
              icon: EyeOpenIcon,
              onHandle: () => {
                if (!slug) {
                  alert("Please add a slug before previewing.");
                  return;
                }

                // 👉 CURRENT TEMP PREVIEW URL (Vercel)
                const url = `https://1stcalluk-96op.vercel.app/blog/${slug}?preview=true`;

                // When the site is live on the final domain, change ONLY this line to:
                // const url = `https://www.1stcalluk.com/blog/${slug}?preview=true`;

                window.open(url, "_blank");
              },
            };
          },
        ];
      }

      return prev;
    },
  },
});
