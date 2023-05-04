import React from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const SITE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5137"
    : "https://asadbeck.uz";

const defaultTitle = "Turon Ticketing System";
const defaultDescription = "Turon Ticketing System";

const defaultSep = " .::. ";

const AppPageMetadata = ({ children, ...rest }) => {
  const { pathname } = useLocation();
  const getMetaTags = (
    { title, description, contentType, published = "20.01.2023", updated },
    pathname
  ) => {
    const theTitle = title
      ? (title + defaultSep + defaultTitle).substring(0, 60)
      : defaultTitle;
    const theDescription = description
      ? description.substring(0, 155)
      : defaultDescription;

    const metaTags = [
      { itemprop: "name", content: theTitle },
      { itemprop: "description", content: theDescription },
      { name: "description", content: theDescription },
      { property: "og:title", content: theTitle },
      { property: "og:type", content: contentType || "website" },
      { property: "og:url", content: SITE_URL + pathname },
      { property: "og:description", content: theDescription },
      { property: "og:site_name", content: defaultTitle },
      { name: "robots", content: "noindex, nofollow" },
    ];

    if (published) {
      metaTags.push({ name: "article:published_time", content: published });
    }
    if (updated) {
      metaTags.push({ name: "article:modified_time", content: updated });
    }

    return metaTags;
  };

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: "ru",
          itemscope: undefined,
        }}
        title={
          rest.title ? rest.title + defaultSep + defaultTitle : defaultTitle
        }
        link={[
          {
            rel: "canonical",
            href: SITE_URL + pathname,
          },
        ]}
        meta={getMetaTags(rest, pathname)}
      />
      {children}
    </>
  );
};

export default AppPageMetadata;
