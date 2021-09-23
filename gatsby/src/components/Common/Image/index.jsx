import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "./styles.scss";

const getImageType = (url) => {
  if (!url) return null;
  return url.split(".").pop();
};

const Image = (props) => {
  const { image, alt, className = "", imgStyle, loading, debug } = props;
  // Log image object when debugging
  if (debug) {
    console.log("Debugging image", image);
  }

  if (!image)
    return <div className={`gatsby-image placeholder ${className}`} />;

  const imageData = getImage(image);
  const imageType = getImageType(image?.url);

  if (imageData && imageType !== "svg") {
    return (
      <GatsbyImage
        className={`gatsby-image ${className}`}
        loading={loading || "eager"}
        image={imageData}
        alt={image.alt || alt || ""}
        imgStyle={imgStyle}
      />
    );
  }

  if (image.url) {
    return (
      <img
        className={`gatsby-image ${className}`}
        src={image.url}
        alt={image.alt || alt || ""}
        style={imgStyle}
      />
    );
  }

  return <div className={`gatsby-image placeholder ${className}`} />;
};

export default Image;
