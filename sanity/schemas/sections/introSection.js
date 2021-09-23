export default {
  name: "introSection",
  title: "Intro Section",
  type: "object",
  fields: [
    {
      name: `title`,
      title: `Title`,
      type: `string`,
    },
    {
      name: `subtitle`,
      title: `Subtitle`,
      type: `string`,
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
