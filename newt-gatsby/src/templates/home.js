/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { graphql } from "gatsby"
import BlockContent from "@sanity/block-content-to-react"
import Serializers from "../components/serializers/serializers"
import Layout from "../components/layout"

const Page = ({ data }) => {
  const node = data.page
  return (
    <Layout>
      <div>
        <h1>{node.title}</h1>
      </div>
    </Layout>
  )
}
export default Page

export const postQuery = graphql`
  query Home($id: String!) {
    page: sanityHome(id: { eq: $id }) {
      title
    }
  }
`
