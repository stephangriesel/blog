import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Archive from './archive'
import './layout.css'

const MainLayout = styled.main`
max-width:90%;
margin:0 auto;
display:grid;
grid-template-columns:3fr 1fr;
grid-gap:30px;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
        file(relativePath: {
          regex:"/bg/"
        }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        site {
          buildTime
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Img fluid={data.file.childImageSharp.fluid} />
        <MainLayout>
          <div>
          {children}
          </div>
          <Archive />
        </MainLayout>
        
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
