import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from './layout.js'



export default class postLayout extends Component {
  render() {
    return (
        <Layout>
      <div>
        <h1>Post Layout</h1>
      </div>
      </Layout>
    )
  }
}

export const query = graphql`
query PostQuery {
    markdownRemark (frontmatter: {
      slug: {
        eq: "/thirdpost"
      }
    }) {
      html
      frontmatter {
        title
        date
        slug
      }
    }
  }`
