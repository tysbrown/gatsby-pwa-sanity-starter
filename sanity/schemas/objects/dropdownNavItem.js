export default {
  name: "dropdownNavItem",
  title: "Dropdown Navigation Item",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "isLink",
      title: "Make dropdown title a link",
      type: "boolean",
    },
    {
      name: "isExternal",
      title: "Link to an external page",
      type: "boolean",
      hidden: ({ parent }) => !parent?.isLink,
    },
    {
      name: "url",
      title: "External URL",
      type: "url",
      description: "Must be typed in https://forexample.com format.",
      hidden: ({ parent }) => !parent?.isExternal,
    },
    {
      name: "linkTo",
      title: "Link Title To",
      type: "reference",
      to: [{ type: "page" }],
      hidden: ({ parent }) => !parent?.isLink,
      hidden: ({ parent, value }) => !value && parent?.isExternal,
    },
    {
      name: "dropdownChildren",
      title: "Dropdown Children",
      type: "array",
      of: [{ type: "dropdownChildNavItem" }],
    },
  ],
};
