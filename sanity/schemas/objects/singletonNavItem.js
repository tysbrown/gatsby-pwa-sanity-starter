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
      name: "isExternal",
      title: "Link to an external page",
      type: "boolean",
      hidden: ({ parent, value }) => !value && parent?.linkTo
    },
    {
      name: "url",
      title: "External URL",
      type: "url",
      hidden: ({ parent }) => !parent?.isExternal,
    },
    {
      name: "linkTo",
      title: "Link To",
      type: "reference",
      to: [{ type: "page" }],
      hidden: ({ parent, value }) => !value && parent?.isExternal
    },
  ],
};
