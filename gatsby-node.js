const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  createPage({
    path: `index-page`,
    component: path.resolve(`./src/templates/overview.js`),
  });

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsWork {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then((result) => {
      result.data.allDatoCmsWork.edges.map(({ node: work }) => {
        createPage({
          path: `${work.slug}`,
          component: path.resolve(`./src/templates/work.js`),
          context: {
            slug: work.slug,
          },
        }),
          createPage({
            path: `${work.slug}/info`,
            component: path.resolve(`./src/templates/work-info.js`),
            context: {
              slug: work.slug,
            },
          });
      });
      resolve();
    });
  });
};
