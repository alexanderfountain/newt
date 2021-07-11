/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header>
    <div
      sx={{
        maxWidth: ["400px", "800px", "1000px"],
        padding: "0px 10%",
        margin: "0 auto",
        boxSizing: "content-box",
      }}
    >
      <Link
        to="/"
      >
        {siteTitle}
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
