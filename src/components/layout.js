

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        {//<Header siteTitle={data.site.siteMetadata.title} />
        }
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 1500,
            padding: `0px`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          <footer style = {{backgroundColor: 'yellow', textAlign: 'center'}}>
            © {new Date().getFullYear()}
            {` `}
            <div>
            <p>by Cheyenne Holland</p>
            </div>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
