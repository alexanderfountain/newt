/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import BlockContent from "@sanity/block-content-to-react"
import Serializers from "../components/serializers/serializers"
import Layout from "../components/layout"
import Helmet from 'react-helmet'
const Article = ({ data }) => {
  const node = data.page
  const images = node.image
  return (
    <Layout>
      <h1>{node.title}</h1>
      <BlockContent blocks={node._rawBody} serializers={Serializers} />


      <div dangerouslySetInnerHTML={{
        __html:
          `<div class="getty embed image" style="background-color:#fff;display:inline-block;font-family:Roboto,sans-serif;color:#a7a7a7;font-size:11px;width:100%;max-width:594px;"><div style="padding:0;margin:0;text-align:left;"><a href="http://www.gettyimages.com/detail/1147435778" target="_blank" style="color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;">Embed from Getty Images</a></div><div style="overflow:hidden;position:relative;height:0;padding:66.66667% 0 0 0;width:100%;"><iframe src="//embed.gettyimages.com/embed/1147435778?et=-DD_7n2UQ7B4GMXsma2U2A&tld=com&sig=BrapRDkIMrg8vxHSU3IwqxL4KZduzdydDskRyc-ZrjA=&caption=true&ver=1" scrolling="no" frameborder="0" width="594" height="396" style="display:inline-block;position:absolute;top:0;left:0;width:100%;height:100%;margin:0;"></iframe></div></div>`

      }} />

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
