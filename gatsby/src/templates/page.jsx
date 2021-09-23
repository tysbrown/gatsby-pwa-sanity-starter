import React from 'react';
import { graphql } from 'gatsby';
import { Layout, SanitySection, GraphQLErrorList } from 'components';

const Page = ({ location, data: staticData, errors }) => {
  const { sanityPage } = staticData;
  const { sections: pageSections, title, seoDescription, seoKeywords, slug } = sanityPage;
  const seo = { title, desc: seoDescription, keywords: seoKeywords, pathname: slug.current };

  if (errors) {
    return (
      <Layout location={location} seo={seo}>
        <GraphQLErrorList errors={errors} />;
      </Layout>
    );
  }

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
  query Page($id: String!) {
    sanityPage(id: { eq: $id }) {
      title
      seoDescription
      seoKeywords
      slug {
        current
      }
      sections {
        ...IntroSectionData
        ...PortableTextData
      }
    }
  }
`;
