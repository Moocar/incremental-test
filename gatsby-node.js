const pageId = process.env.PAGE_ID || `1`


function sourceNodes(context) {
  const { actions, createNodeId, createContentDigest } = context
  const { createNode } = actions

  const env = process.env.FOO || "nada"
  const content = JSON.stringify({ env })
  const node = {
    id: createNodeId("1"),
    parent: null,
    children: [],
    internal: {
      type: "foo",
      content,
      contentDigest: createContentDigest(content),
      description: "my description"
    },
    innerId: pageId,
    env,
    data1: "data1Val",
  }
  createNode(node)
}

function createPages(context) {
  const { actions } = context
  const { createPage } = actions
  const page = {
    path: "/my-blog",
    matchPath: `/foo/*`,
    component: require.resolve(`./src/templates/blog`),
    context: {
      id: pageId,
    },
  }
  createPage(page)
}

module.exports = {
  sourceNodes,
  createPages
}
