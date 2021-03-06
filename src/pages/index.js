import React from "react"
import { Link, graphql } from "gatsby"
import BlogComponent from "../components/blog-fragment"
import { NonLink }  from "../components/non-link"
import ReachRouter from "@reach/router"

function IndexPage(props) {
  const { data } = props
  return (
      <div>
      <h1>Hi people 22</h1>
      <p>Welcome to the incremental test</p>
      <ul>
      { data.allFoo.edges.map(({ node }) => (
          <li>{node.env} - {node.customType}</li>
      ))}
    </ul>
      <p>Now go build something great.</p>
      <ul>
      <li><Link to="/my-blog/foo/">Go to the blog</Link></li>
      <li><Link to="/md-page/">Go to the markdown page</Link></li>
      <li><Link to="/page2/">Go to page2</Link></li>
      <li><NonLink to="/page3">Not a link</NonLink></li>
      <li><Link to="/my-blog/bar">A match path</Link></li>
      <li><Link to="/asdkjhsdf">A page not exist. Test 404</Link></li>
      </ul>
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
