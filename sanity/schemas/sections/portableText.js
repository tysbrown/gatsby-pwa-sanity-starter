export default {
  name: "portableText",
  title: "Portable Text",
  type: "object",
  fields: [
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: "Portable Text",
      };
    },
  },
};
