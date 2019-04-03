import React from "react"
import { Link, graphql } from "gatsby"

export default function Template({ data }) {
  console.log(data)
  const { file } = data
  const { childMarkdownRemark } = file
  const { frontmatter, html } = childMarkdownRemark
  const { title } = frontmatter
  return (
      <div className="blog-post-container"
           style={{ margin: `3rem auto`, maxWidth: 960 }}>
      <div className="blog-post">
        <h1>{title}</h1>
        <div className="blog-post-content"
             dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
query {
  file(relativePath: { eq: "moo.md"}) {
    childMarkdownRemark {
      frontmatter {
        title
      }
      html
    }
  }
}
`
