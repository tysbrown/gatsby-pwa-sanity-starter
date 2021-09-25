import { BsLink45Deg } from "react-icons/bs";
export default {
  name: "dropdownChildNavItem",
  title: "Dropdown Child Item",
  icon: BsLink45Deg,
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "isExternal",
      title: "Link to an external page",
      type: "boolean",
    },
    {
      name: "url",
      title: "External URL",
      type: "url",
      hidden: ({ parent }) => !parent?.isExternal,
    },
    {
      title: "Page",
      name: "page",
      type: "reference",
      to: [{ type: "page" }],
      hidden: ({ parent, value }) => !value && parent?.isExternal,
    },
  ],
};
