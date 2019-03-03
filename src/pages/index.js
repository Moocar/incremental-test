import React from "react"
import { graphql } from "gatsby"
import BlogComponent from "../components/blog-fragment"

function IndexPage(props) {
  const { data } = props
  return (
      <div>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <ul>
      { data.allFoo.edges.map(({ node }) => (
          <li>{node.env}</li>
      ))}
    </ul>
      <p>Now go build something great.</p>
      </div>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allFoo {
      edges {
        node {
          ...BlogFragment
        }
      }
    }
  }
`
