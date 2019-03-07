import React from "react"
import { Link, graphql } from "gatsby"
import BlogComponent from "../components/blog-fragment"

function IndexPage(props) {
  const { data } = props
  return (
      <div>
      <h1>Hi people 2</h1>
      <p>Welcome to the incremental test</p>
      <ul>
      { data.allFoo.edges.map(({ node }) => (
          <li>{node.env}</li>
      ))}
    </ul>
      <p>Now go build something great.</p>
      <Link to="/my-blog/">Go to the blog</Link>
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
