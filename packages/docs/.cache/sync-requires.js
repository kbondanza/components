const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/matt/development/components/packages/docs/.cache/dev-404-page.js"))),
  "component---src-pages-index-mdx": hot(preferDefault(require("/Users/matt/development/components/packages/docs/src/pages/index.mdx")))
}

