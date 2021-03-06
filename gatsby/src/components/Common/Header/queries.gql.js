import { graphql } from 'gatsby';

export const Queries = graphql`
  fragment GlobalHeaderLinks on Query {
    nav: sanityRouting {
      headerNav {
        ... on SanityDropdownNavItem {
          _key
          _type
          title
          isLink
          isExternal
          url
          linkTo {
            ... on SanityPage {
              id
              slug {
                current
              }
            }
          }
          dropdownChildren {
            _key
            title
            isExternal
            url
            page {
              ... on SanityPage {
                id
                slug {
                  current
                }
              }
            }
          }
        }
        ... on SanitySingletonNavItem {
          _key
          _type
          title
          isBtn
          btnType
          isExternal
          url
          linkTo {
            ... on SanityPage {
              id
              slug {
                current
              }
            }
          }
        }
      }
    }
  }
`;
