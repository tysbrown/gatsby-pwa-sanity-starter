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
      name: "linkTo",
      title: "Link Title To",
      type: "reference",
      to: [{ type: "page" }],
      hidden: ({ parent }) => !parent?.isLink,
    },
    {
      name: "dropdownChildren",
      title: "Dropdown Children",
      type: "array",
      of: [{ type: "dropdownChildNavItem" }],
    },
  ],
};
