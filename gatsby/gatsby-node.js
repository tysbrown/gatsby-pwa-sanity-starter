async function createNewPages(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityPage(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const pageEdges = (result.data.allSanityPage || {}).edges || [];

  pageEdges.forEach((edge) => {
    const { id, slug = {} } = edge.node;
    // The page with slug 'home' is set to homepage
    const path = slug.current === 'home' ? '/' : `/${slug.current}/`;

    createPage({
      path,
      component: require.resolve('./src/templates/page.jsx'),
      context: { id },
    });
  });
}

exports.createPages = async ({ graphql, actions }) => {
  await createNewPages(graphql, actions);
};
