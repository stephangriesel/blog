import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Lightbox from "./lightbox"

const Visuals = () => (
  <StaticQuery
    query={graphql`
      query {
        visualImages: allFile(filter: { sourceInstanceName: { eq: "visuals" } }) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 2000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Lightbox visualImages={data.visualImages.edges} />}
  />
)
export default Visuals