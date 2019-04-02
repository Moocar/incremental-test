import React from "react"
import { graphql } from "gatsby"

function Page2b(props) {
  return (<div>pageb props: [${props.data.foo.env}] baz</div>)
}

export default Page2b

export const pageQuery = graphql`
  query {
    foo {
      env
    }
  }
`
