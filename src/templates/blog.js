import React from "react"
import { Link, graphql } from "gatsby"
import BlogComponent from "../components/blog-fragment"
import StaticQueryComponent from "../components/static-query-component"

export default function BlogTemplate({ data }) {
  const { foo } = data
  return (
      <div className="blog-post-container"
    style={{ margin: `3rem auto`, maxWidth: 960 }}>
      <h1>title</h1>
      <BlogComponent foo={foo}/>
      <StaticQueryComponent/>
      <Link to="/">Go to index</Link>
      </div>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    foo(innerId: { eq: $id }) {
      ...BlogFragment
    }
  }
`
