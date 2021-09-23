export default {
  name: "socialMediaItem",
  title: "Social Media Item",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "url",
      title: "URL",
      type: "url",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "icon",
      title: "Icon",
      type: "mainImage",
      description: "The social media brand icon to use for this item.",
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "icon",
    },
  },
};
