export default {
  name: "singletonNavItem",
  title: "Singleton Navigation Item",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "isNewTab",
      title: "Open in new tab",
      type: "boolean",
    },
    {
      name: "isBtn",
      title: "Style as a button",
      type: "boolean",
    },
    {
      name: "btnType",
      title: "Button Type",
      type: "string",
      options: {
        list: [
          {title: "Primary", value: "primary"},
          {title: "Secondary", value: "secondary"},
          {title: "Tertiary", value: "tertiary"},
          {title: "Highlight", value: "highlight"},
          {title: "Success", value: "success"},
          {title: "Warning", value: "warning"},
          {title: "Error", value: "error"},
          {title: "White", value: "white"},
          {title: "Black", value: "black"},
        ],
      },
      hidden: ({ parent }) => !parent?.isBtn,
    },
    {
      name: "linkTo",
      title: "Link To",
      type: "reference",
      to: [{ type: "page" }],
    },
  ],
};
