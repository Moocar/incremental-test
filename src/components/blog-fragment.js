import React from "react"
import { graphql } from "gatsby"

export default function BlogComponent({ foo }) {
  return (
    <div>
      <p>in fragment component: { foo.env }</p>
    </div>
  )
}

export const blogFragment = graphql`
  fragment BlogFragment on foo {
    env
  }
`
