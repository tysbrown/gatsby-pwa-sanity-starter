import { BsLink45Deg } from "react-icons/bs";

export default {
  name: "footerNavItem",
  title: "Footer Nav Item",
  icon: BsLink45Deg,
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      name: "singletonRef",
      title: "Singleton",
      type: "reference",
      to: [
        { type: "page" }
      ],
    },
  ],
};
