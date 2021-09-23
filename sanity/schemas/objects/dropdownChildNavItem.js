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
      title: "Page",
      name: "page",
      type: "reference",
      to: [{ type: "page" }],
    },
  ],
};
