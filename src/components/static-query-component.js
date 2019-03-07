import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const StaticQueryComponent = () => (
  <StaticQuery
    query={graphql`
      query {
        staticFoo { 
          foo
        }
      }
    `}
    render={data => <div>Static env: {data.staticFoo.foo}</div>}
  />
)
export default StaticQueryComponent
