import React, { useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Facebook from './Facebook';
import Twitter from './Twitter';
import useDarkMode from '../../../hooks/useDarkMode';

// Complete tutorial: https://www.gatsbyjs.org/docs/add-seo-component/

const SEO = ({ title, desc, keywords, banner, schema, pathname, article, node }) => {
  const { site } = useStaticQuery(query);

  const {
    buildTime,
    siteMetadata: {
      siteUrl,
      defaultTitle,
      defaultDescription,
      defaultBanner,
      siteName,
      siteLanguage,
      ogLanguage,
      author,
      twitter,
    },
  } = site;

  const darkMode = useDarkMode();

  useEffect(() => {
    const favicon = document.querySelectorAll('[rel="icon"]')[0];
    if (darkMode) {
      if (favicon) favicon.href = '/favicon-dark-mode.png';
    }
  }, [darkMode]);

  const ogImage = banner || `${siteUrl}${defaultBanner}`;

  const seo = {
    title: title || defaultTitle,
    description: desc || defaultDescription,
    keywords,
    image: ogImage,
    url: `${siteUrl}/${pathname || ''}`,
  };

  // schema.org in JSONLD format
  // https://developers.google.com/search/docs/guides/intro-structured-data
  // You can fill out the 'author', 'creator' with more data or another type (e.g. 'Organization')

  const schemaOrgWebPage = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    url: seo.url,
    headline: seo.title,
    inLanguage: siteLanguage,
    mainEntityOfPage: siteUrl,
    description: seo.description,
    keywords: keywords.join(', '),
    name: siteName,
    author: {
      '@type': 'Person',
      name: author,
    },
    copyrightHolder: {
      '@type': 'Person',
      name: author,
    },
    copyrightYear: '2021',
    creator: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Person',
      name: author,
    },
    datePublished: '2019-01-18T10:30:00+01:00',
    dateModified: buildTime,
    image: {
      '@type': 'ImageObject',
      url: ogImage,
    },
  };

  // Initial breadcrumb list

  const itemListElement = [
    {
      '@type': 'ListItem',
      item: {
        '@id': siteUrl,
        name: 'Homepage',
      },
      position: 1,
    },
  ];

  let schemaArticle = null;

  if (article) {
    schemaArticle = {
      '@context': 'http://schema.org',
      '@type': 'Article',
      author: {
        '@type': 'Person',
        name: author,
      },
      copyrightHolder: {
        '@type': 'Person',
        name: author,
      },
      copyrightYear: '2021',
      creator: {
        '@type': 'Person',
        name: author,
      },
      publisher: {
        '@type': 'Organization',
        name: author,
        logo: {
          '@type': 'ImageObject',
          url: ogImage,
        },
      },
      datePublished: node.first_publication_date,
      dateModified: node.last_publication_date,
      description: seo.description,
      headline: seo.title,
      inLanguage: 'en',
      url: seo.url,
      name: seo.title,
      image: {
        '@type': 'ImageObject',
        url: seo.image,
      },
      mainEntityOfPage: seo.url,
    };
    // Push current blogpost into breadcrumb list
    itemListElement.push({
      '@type': 'ListItem',
      item: {
        '@id': seo.url,
        name: seo.title,
      },
      position: 2,
    });
  }

  const breadcrumb = {
    '@context': 'http://schema.org',
    '@type': 'BreadcrumbList',
    description: 'Breadcrumbs list',
    name: 'Breadcrumbs',
    itemListElement,
  };

  return (
    <>
      <Helmet title={seo.title}>
        <html lang={siteLanguage} />
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
        <meta name="gatsby-starter" content="Gatsby Starter Sanity" />
        {/* Insert schema.org data conditionally (webpage/article) + everytime (breadcrumbs) */}
        {!article && <script type="application/ld+json">{JSON.stringify(schema || schemaOrgWebPage)}</script>}
        {article && <script type="application/ld+json">{JSON.stringify(schema || schemaArticle)}</script>}
        <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
        <link rel="icon" type="image/png" href="/favicon-light-mode.png" />
      </Helmet>
      <Facebook
        desc={seo.description}
        image={seo.image}
        title={seo.title}
        type={article ? 'article' : 'website'}
        url={seo.url}
        locale={ogLanguage}
        name={siteName}
      />
      <Twitter title={seo.title} image={seo.image} desc={seo.description} username={twitter} />
    </>
  );
};

export default SEO;

const query = graphql`
  query SEO {
    site {
      buildTime(formatString: "YYYY-MM-DD")
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        defaultBanner: banner
        siteUrl
        siteName
        siteLanguage
        ogLanguage
        author
        twitter
      }
    }
  }
`;
