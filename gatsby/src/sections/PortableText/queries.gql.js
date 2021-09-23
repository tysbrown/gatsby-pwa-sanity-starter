import { graphql } from 'gatsby';

export const Queries = graphql`
  fragment PortableTextData on SanityPortableText {
    _key
    _type
    body: _rawBody(resolveReferences: { maxDepth: 10 })
  }
`;
