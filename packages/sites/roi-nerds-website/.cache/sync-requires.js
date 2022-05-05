
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/dale/Development/roi-nerds-gmp-mono/packages/sites/roi-nerds-website/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/home/dale/Development/roi-nerds-gmp-mono/packages/sites/roi-nerds-website/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/home/dale/Development/roi-nerds-gmp-mono/packages/sites/roi-nerds-website/src/pages/about.js")),
  "component---src-pages-index-js": preferDefault(require("/home/dale/Development/roi-nerds-gmp-mono/packages/sites/roi-nerds-website/src/pages/index.js"))
}

