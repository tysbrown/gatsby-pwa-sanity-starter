import React from "react";
import { MdLink, MdFormatAlignLeft, MdFormatAlignCenter, MdFormatAlignRight } from "react-icons/md";

const centeredRender = (props) => (
  <div style={{ textAlign: "center" }}>{props.children}</div>
);
const rightRender = (props) => (
  <div style={{ textAlign: "right" }}>{props.children}</div>
);

export default {
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    {
      title: "Block",
      type: "block",
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [{ title: "Bullet", value: "bullet" }],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Underline", value: "underline" },
          {
            title: "Align Center",
            value: "alignCenter",
            blockEditor: { render: centeredRender, icon: MdFormatAlignCenter },
          },
          {
            title: "Align Right",
            value: "alignRight",
            blockEditor: { render: rightRender, icon: MdFormatAlignRight },
          },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: "External Link",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
              },
            ],
          },
          {
            title: "Internal Link",
            name: "internalLink",
            type: "object",
            blockEditor: { icon: MdLink },
            fields: [
              {
                title: "Link To",
                name: "internal",
                type: "reference",
                to: [{ type: "page" }],
              },
            ],
          },
        ],
      },
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    {
      type: "image",
      options: { hotspot: true },
    },
  ],
};
