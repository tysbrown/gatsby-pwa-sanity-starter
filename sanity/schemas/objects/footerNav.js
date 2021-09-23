export default {
  name: "footerNav",
  title: "Footer Navigation Items",
  type: "object",
  fields: [
    {
      name: "navItem",
      title: "NavItem",
      type: "array",
      of: [
        {
          type: "footerNavItem",
        },
      ],
      validation: Rule => Rule.required().max(13),
    },
  ],
};
