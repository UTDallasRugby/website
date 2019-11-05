module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-google-tagmanager/gatsby-browser.js'),
      options: {"plugins":[],"id":"GTM-P4RNF8D","includeInDevelopment":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[],"runtimeCaching":[{"urlPattern":{},"handler":"cacheFirst"},{"urlPattern":{},"handler":"staleWhileRevalidate"},{"urlPattern":{},"handler":"staleWhileRevalidate"}],"skipWaiting":true,"clientsClaim":true},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"utdallasrugby","short_name":"utdallasrugby","start_url":"/","background_color":"#008542","theme_color":"#008542","display":"standalone","icon":"/home/emiller/src/personal/UTDallasRugby.github.io/static/images/logo.svg"},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":800,"linkImagesToOriginal":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-nprogress/gatsby-browser.js'),
      options: {"plugins":[],"color":"white","showSpinner":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-netlify-cms/gatsby-browser.js'),
      options: {"plugins":[],"modulePath":"/home/emiller/src/personal/UTDallasRugby.github.io/src/cms/cms.js","stylesPath":"/home/emiller/src/personal/UTDallasRugby.github.io/src/cms/admin.css","enableIdentityWidget":true},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
