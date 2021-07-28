import React from 'react';
import { graphql } from 'gatsby';
import { Layout, SanitySection } from 'components';

const Page = ({ location, data: staticData }) => {
  const { sanityPage } = staticData;
  const { sections: pageSections, seoDescription, seoKeywords } = sanityPage;
  const seo = { seoDescription, seoKeywords };

  return (
    <Layout location={location} seo={seo}>
      {pageSections.map((section) => (
        <SanitySection data={section} key={section._key} />
      ))}
    </Layout>
  );
};

export default Page;

export const query = graphql`
  query Page($slug: String!) {
    sanityPage(title: { eq: $slug }) {
      seoDescription
      seoKeywords

      sections {
        ... on SanityAnchorPoint {
          _type
          _key
          title
        }

        #

        ... on SanityIntroSection {
          _type
          _key
          title
          subtitle
        }
      }
    }
  }
`;
