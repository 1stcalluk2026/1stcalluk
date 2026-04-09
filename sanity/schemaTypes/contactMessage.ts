import { defineType } from "sanity";

export const contactMessage = defineType({
  name: "contactMessage",
  title: "Contact Messages",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Full Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    },
    {
      name: "phone", // Added phone field
      title: "Phone Number",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "message",
      title: "Message",
      type: "text",
      validation: (Rule) => Rule.required().min(10),
    },
    {
      name: "submittedAt",
      title: "Submitted At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    },
  ],
});