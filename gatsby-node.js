const { GraphQLString } = require(`gatsby/graphql`)

const pageId = process.env.PAGE_ID || `1`
const pagePath = process.env.PAGE_PATH || `/my-blog`
const matchPath = process.env.MATCH_PATH || `/foo/*`

function sourceNodes(context) {
  const { actions, createNodeId, createContentDigest } = context
  const { createNode, createNodeField } = actions

  let env = process.env.FOO || `nada`
  if (env === `int`) {
    env = 5
  }
  const content = JSON.stringify({ env })
  const fooNodes = [
    {
      id: createNodeId("1"),
      env,
    },
    {
      id: createNodeId("2"),
      env: `static-value`,
    },
  ]
  fooNodes.forEach(({ id, env }) => {
    const content = JSON.stringify({ env })
    createNode({
      id,
      parent: null,
      children: [],
      internal: {
        type: "Foo",
        content,
        contentDigest: createContentDigest(content),
        description: "my description",
      },
      innerId: pageId,
      env,
      data1: "data1Val",
    })
  })
  const staticFoo = process.env.STATIC_FOO || `static-foo`
  createNode({
    id: createNodeId("3"),
    parent: null,
    children: [],
    internal: {
      type: "StaticFoo",
      content: staticFoo,
      contentDigest: createContentDigest(staticFoo),
      description: "my description"
    },
    foo: staticFoo,
  })
}

function onCreateNode(context) {
  const { actions, node } = context
  const { createNodeField } = actions
  if (node.internal.type === `StaticFoo`) {
    console.log(`creating static foo`)
    createNodeField({ node, name: `slug`, value: `slugval` })
  }
}

function setFieldsOnGraphQLNodeType(
  { type, getNode }
) {
  if (type.name !== `Foo`) {
    return {}
  }
  return {
    customType: {
      type: GraphQLString,
      resolve: async (node, args) => "custom result",
    }
  }
}

function createPages(context) {
  const { actions } = context
  const { createPage, createRedirect } = actions
  const page = {
    path: pagePath,
    matchPath: matchPath,
    component: require.resolve(`./src/templates/blog`),
    context: {
      id: pageId,
    },
  }
  console.log(`creating page`)
  createPage(page)
  createRedirect({
    fromPath: `/redirect-me/`,
    toPath: pagePath,
    isPermanent: true,
  })
}

function onCreatePage(context) {
  console.log(`site: onCreatePage`)
  const { page, actions } = context
  const { createPage } = actions
  if (page.path === `/page2/`) {
    page.context.newField = `newValue`
    createPage(page)
  }
}

module.exports = {
  sourceNodes,
  onCreateNode,
  setFieldsOnGraphQLNodeType,
  createPages,
  onCreatePage,
}
