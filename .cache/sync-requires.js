const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-single-post-js": hot(preferDefault(require("/Users/Tristen/Desktop/dev/UTDallasRugby.github.io/src/templates/SinglePost.js"))),
  "component---src-templates-blog-index-js": hot(preferDefault(require("/Users/Tristen/Desktop/dev/UTDallasRugby.github.io/src/templates/BlogIndex.js"))),
  "component---src-templates-components-page-js": hot(preferDefault(require("/Users/Tristen/Desktop/dev/UTDallasRugby.github.io/src/templates/ComponentsPage.js"))),
  "component---src-templates-contact-page-js": hot(preferDefault(require("/Users/Tristen/Desktop/dev/UTDallasRugby.github.io/src/templates/ContactPage.js"))),
  "component---src-templates-home-page-js": hot(preferDefault(require("/Users/Tristen/Desktop/dev/UTDallasRugby.github.io/src/templates/HomePage.js"))),
  "component---src-templates-default-page-js": hot(preferDefault(require("/Users/Tristen/Desktop/dev/UTDallasRugby.github.io/src/templates/DefaultPage.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/Tristen/Desktop/dev/UTDallasRugby.github.io/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/Tristen/Desktop/dev/UTDallasRugby.github.io/src/pages/404.js")))
}

