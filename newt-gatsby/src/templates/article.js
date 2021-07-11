/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import BlockContent from "@sanity/block-content-to-react"
import Serializers from "../components/serializers/serializers"
import Layout from "../components/layout"

const Article = ({ data }) => {
  const node = data.page
  const images = node.image
  return (
    <Layout>
      <h1>{node.title}</h1>
      <BlockContent blocks={node._rawBody} serializers={Serializers} />
    </Layout>
  )
}
export default Article

export const articleQuery = graphql`
  query ArticleBySlug($slug: String!) {
    page: sanityArticle(slug: { current: { eq: $slug } }) {
      slug {
        current
      }
      title
      _rawBody(resolveReferences: { maxDepth: 10 })
    }
  }
`
