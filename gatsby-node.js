const pageId = process.env.PAGE_ID || `1`
const pagePath = process.env.PAGE_PATH || `/my-blog`


function sourceNodes(context) {
  const { actions, createNodeId, createContentDigest } = context
  const { createNode } = actions

  let env = process.env.FOO || `nada`
  if (env === `int`) {
    env = 5
  }
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
    path: pagePath,
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
