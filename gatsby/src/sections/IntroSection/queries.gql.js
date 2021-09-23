import { graphql } from 'gatsby';

export const Queries = graphql`
  fragment IntroSectionData on SanityIntroSection {
    _type
    _key
    title
    subtitle
  }
`;
