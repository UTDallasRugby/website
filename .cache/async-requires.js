// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-default-page-js": () => import("../src/templates/DefaultPage.js" /* webpackChunkName: "component---src-templates-default-page-js" */),
  "component---src-templates-blog-index-js": () => import("../src/templates/BlogIndex.js" /* webpackChunkName: "component---src-templates-blog-index-js" */),
  "component---src-templates-components-page-js": () => import("../src/templates/ComponentsPage.js" /* webpackChunkName: "component---src-templates-components-page-js" */),
  "component---src-templates-contact-page-js": () => import("../src/templates/ContactPage.js" /* webpackChunkName: "component---src-templates-contact-page-js" */),
  "component---src-templates-home-page-js": () => import("../src/templates/HomePage.js" /* webpackChunkName: "component---src-templates-home-page-js" */),
  "component---src-templates-photos-page-js": () => import("../src/templates/PhotosPage.js" /* webpackChunkName: "component---src-templates-photos-page-js" */),
  "component---src-templates-single-post-js": () => import("../src/templates/SinglePost.js" /* webpackChunkName: "component---src-templates-single-post-js" */),
  "component---cache-dev-404-page-js": () => import("dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */)
}

