export default {
  name: `page`,
  title: `Page`,
  type: `document`,
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
    {
      name: `slug`,
      title: `URL`,
      type: `slug`,
      options: {
        source: `title`
      }
    },
    {
      name: `sections`,
      title: `Sections`,
      type: `array`,
      of: [
        { type: `anchorPoint`},
        { type: `introSection` },
      ]
    },
    {
      name: `seoDescription`,
      title: `SEO Description`,
      type: `string`
    },
    {
      name: `seoKeywords`,
      title: `SEO Keywords`,
      type: `array`,
      of: [
        {
          type: `string`
        }
      ],
      options: {
        layout: `tags`
      }
    }
  ]
};
