/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        sx={{
          maxWidth: ["400px", "800px", "1000px"],
          padding: "0px 10%",
          margin: "0 auto",
          boxSizing: "content-box",
        }}
      >
        <main>{children}</main>
        <footer
        >
          © {new Date().getFullYear()}, Built by
          {` `}
          <a href="https://newt.io">newt.io</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
