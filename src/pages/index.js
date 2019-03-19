import React from "react"
import { Link, graphql } from "gatsby"
import BlogComponent from "../components/blog-fragment"
import { NonLink }  from "../components/non-link"
import ReachRouter from "@reach/router"

function IndexPage(props) {
  const { data } = props
  return (
      <div>
      <h1>Hi people 2</h1>
      <p>Welcome to the incremental test</p>
      <ul>
      { data.allFoo.edges.map(({ node }) => (
          <li>{node.env} - {node.customType}</li>
      ))}
    </ul>
      <p>Now go build something great.</p>
      <Link to="/my-blog/">Go to the blog</Link>
      <NonLink to="/page3">Not a link</NonLink>
      <p>After</p>
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
          customType
        }
      }
    }
  }
`
