import S from "@sanity/desk-tool/structure-builder";
import React from "react";
import EyeIcon from "part:@sanity/base/eye-icon";
import {
  FcTreeStructure,
  FcLink,
} from "react-icons/fc";

// Web preview
const url = "webpreviewurl";
const WebPreview = ({ document }) => {
  const { displayed } = document;
  const path = displayed.slug.current === "home" ? "/" : displayed.slug.current;
  if (!displayed) {
    return (
      <div>
        <p>There is no document to preview</p>
      </div>
    );
  }
  if (!url) {
    return (
      <div>
        <p>Hmm. Having problems constructing the web front-end URL.</p>
      </div>
    );
  }
  return (
    <div>
      <iframe
        src={url + path}
        frameBorder={0}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "0",
          left: "0",
        }}
      />
    </div>
  );
};

export const getDefaultDocumentNode = ({ schemaType }) => {
  // Conditionally return a different configuration based on the schema type
  if (schemaType === "page") {
    return S.document().views([
      S.view.form(),
      S.view.component(WebPreview).icon(EyeIcon).title("Web"),
    ]);
  }
};

// Prevent from displaying twice
const hiddenDocTypes = (listItem) =>
  ![
    "page",
    "routing",
    "media.tag",
  ].includes(listItem.getId());

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Pages")
        .icon(FcTreeStructure)
        .schemaType("page")
        .child(S.documentTypeList("page").title("Pages")),
      S.listItem()
        .title("Routing")
        .icon(FcLink)
        .child(
          S.editor()
            .id("routing")
            .schemaType("routing")
            .documentId("routing")
        ),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);
