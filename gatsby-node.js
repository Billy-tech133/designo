// const path = require("path")

// exports.createPages = async function ({ actions, graphql }) {
//   const { createPage } = actions
//   const data = await graphql(`
//     {
//       portfolio: allStrapiMain {
//         nodes {
//           slug
//         }
//       }
//     }
//   `)
//   data.portfolio.nodes.slug.forEach(project => {
//     createPage({
//       path: `/portfolio/${project.slug}`,
//       component: path.resolve(`src/template/portfolio-template.js`),
//       context: {
//         slug: project.slug,
//       },
//     })
//   })
// }
