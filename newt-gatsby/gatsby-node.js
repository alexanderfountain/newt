const { createRemoteFileNode } = require(`gatsby-source-filesystem`)
const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const pages = await graphql(`
 {
   article: allSanityArticle {
    nodes {
        slug {
          current
        }
      }
   }
   page: allSanityPage {
     nodes {
       slug {
         current
       }
     }
   }
   home: allSanityHome {
     nodes {
       id
     }
   }
 }
`)
    const pageTemplate = path.resolve("src/templates/page.js")
    const articleTemplate = path.resolve("src/templates/article.js")
    const homeTemplate = path.resolve("src/templates/home.js")

    pages.data.page.nodes.forEach(node => {
        createPage({
            path: `/${node.slug.current}`,
            component: pageTemplate,
            context: {
                slug: node.slug.current,
            },
        })
    })

    pages.data.article.nodes.forEach(node => {
        createPage({
            path: `/${node.slug.current}`,
            component: articleTemplate,
            context: {
                slug: node.slug.current,
            },
        })
    })

    pages.data.home.nodes.forEach(node => {
        createPage({
            path: `/`,
            component: homeTemplate,
            context: {
                id: node.id,
            },
        })
    })
}