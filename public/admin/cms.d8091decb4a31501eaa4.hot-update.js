webpackHotUpdate("cms",{

/***/ "./node_modules/css-loader/index.js?!./node_modules/gatsby-plugin-postcss/node_modules/postcss-loader/src/index.js?!./src/components/globalStyles.css":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--12-oneOf-1-1!./node_modules/gatsby-plugin-postcss/node_modules/postcss-loader/src??ref--12-oneOf-1-2!./src/components/globalStyles.css ***!
  \******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ":root {\n  --primary: #008542;\n  --secondary: #000;\n  --lightGrey: whitesmoke;\n  --midGrey: #cacaca;\n  --darkGrey: #272727;\n  --danger: #ff3d3d;\n  --font-primary: 'Open Sans', sans-serif;\n  --font-system: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif; /* postcssPresetEnv */\n  --borderRadius: 3px;\n}\n\n::-webkit-scrollbar {\n  width: 0.4rem;\n}\n\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 3px var(--grey);\n}\n\n::-webkit-scrollbar-thumb {\n  background-color: #008542;\n  background-color: var(--primary);\n}\n\n::-moz-selection {\n  background: rgba(0, 194, 189, 0.6);\n}\n\n::selection {\n  background: rgba(0, 194, 189, 0.6);\n}\n\nhtml {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-size: 62.5%;\n  min-height: 100%;\n  background: whitesmoke;\n  background: var(--lightGrey);\n}\n\nbody {\n  font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif;\n  font-family: var(--font-system);\n  min-height: 100%;\n  position: relative;\n  background: white;\n  color: #000;\n  color: var(--secondary);\n  font-size: 1.6em;\n  font-weight: 400;\n  letter-spacing: 0.01em;\n  line-height: 1.6;\n  -webkit-font-smoothing: antialiased;\n}\n\na {\n  color: #008542;\n  color: var(--primary);\n}\n\nstrong {\n  font-weight: 600;\n}\n\np {\n  margin-top: 0;\n  margin-bottom: 1em;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0;\n  margin-bottom: 0.5em;\n}\n\npre {\n  background: whitesmoke;\n  background: var(--lightGrey);\n  line-height: 1.45;\n  font-size: 85%;\n  border-radius: 3px;\n  padding: 16px;\n}\n\ncode {\n  font-size: 85%;\n  padding: 0.15em 0;\n  background: whitesmoke;\n  background: var(--lightGrey);\n  border-radius: 3px;\n}\ncode:before,\ncode:after {\n  letter-spacing: -0.2em;\n  content: '\\A0';\n}\npre code {\n  font-size: inherit;\n}\npre code:before,\npre code:after {\n  display: none;\n}\nblockquote {\n  margin-left: 0;\n  padding-left: 1em;\n  line-height: 1.1;\n  font-size: 1em;\n  font-style: italic;\n  border-left: 2px solid #008542;\n  border-left: 2px solid var(--primary);\n}\n\n/* Utility Classes */\n.light {\n  background-color: whitesmoke;\n  background-color: var(--lightGrey);\n}\n.white {\n  background-color: white;\n}\n.dark {\n  background-color: #008542;\n  background-color: var(--primary);\n  color: white;\n}\n.dark h1,\n.dark h2,\n.dark h3,\n.dark h4,\n.dark h5,\n.dark h6 {\n  color: white;\n}\n\n.relative {\n  position: relative;\n}\n.absolute {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.taCenter {\n  text-align: center;\n}\n.taLeft {\n  text-align: left;\n}\n.taRight {\n  text-align: right;\n}\n\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n}\n\n/* Layout */\n\n.section {\n  width: 100%;\n  padding: 5rem 0;\n  border-bottom: 1px solid #f1f1f1;\n}\n.section:last-child {\n  border: 0;\n}\n.section.thick {\n  padding: 10rem 0;\n}\n.section.thin {\n  padding: 3.5rem 0;\n}\n.section.noPadding {\n  padding: 0;\n}\n\n@media (max-width: 600px) {\n  .section {\n    width: 100%;\n    padding: 5rem 0;\n  }\n  .section.thick {\n    padding: 7rem 0;\n  }\n  .section.thin {\n    padding: 1.5rem 0;\n  }\n}\n\n.container {\n  max-width: 1111px;\n  width: 90%;\n  margin: 0 auto;\n}\n.container.skinny {\n  max-width: 888px;\n}\n.container.skinnier {\n  max-width: 555px;\n}\n\n/* Buttons */\n\n.Button {\n  background: #008542;\n  background: var(--primary);\n  color: white;\n  text-transform: uppercase;\n  text-decoration: none;\n  font-weight: 700;\n  letter-spacing: 0.05em;\n  font-size: 1.4rem;\n  display: inline-block;\n  padding: 1.25rem 3rem;\n  border: none;\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n  cursor: pointer;\n  border-radius: 3px;\n  border-radius: var(--borderRadius);\n}\n.Button:hover,\n.Button:focus {\n  opacity: 0.95;\n  outline: none;\n}\n.Button[disabled] {\n  opacity: 0.4;\n  pointer-events: none;\n  cursor: progress;\n}\n.Button-blank {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  background: none;\n  outline: none;\n  border: none;\n  cursor: pointer;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n", "", {"version":3,"sources":["/Users/Tristen/Desktop/dev/UTDallasRugby.github.io/src/components/globalStyles.css"],"names":[],"mappings":"AAAA;EACE,mBAAkB;EAClB,kBAAiB;EACjB,wBAAuB;EACvB,mBAAkB;EAClB,oBAAmB;EACnB,kBAAiB;EACjB,wCAAuC;EACvC,oGAAwB,CAAE,sBAAqB;EAC/C,oBAAmB;CACrB;;AAEA;EACE,cAAa;CACf;;AAEA;EACE,8CAA6C;CAC/C;;AAEA;EACE,0BAAgC;EAAhC,iCAAgC;CAClC;;AAEA;EACE,mCAAkC;CACpC;;AAFA;EACE,mCAAkC;CACpC;;AAEA;EACE,+BAAsB;UAAtB,uBAAsB;EACtB,iBAAgB;EAChB,iBAAgB;EAChB,uBAA4B;EAA5B,6BAA4B;CAC9B;;AAEA;EACE,kGAA+B;EAA/B,gCAA+B;EAC/B,iBAAgB;EAChB,mBAAkB;EAClB,kBAAiB;EACjB,YAAuB;EAAvB,wBAAuB;EACvB,iBAAgB;EAChB,iBAAgB;EAChB,uBAAsB;EACtB,iBAAgB;EAChB,oCAAmC;CACrC;;AAEA;EACE,eAAqB;EAArB,sBAAqB;CACvB;;AAEA;EACE,iBAAgB;CAClB;;AAEA;EACE,cAAa;EACb,mBAAkB;CACpB;;AAEA;;;;;;EAME,UAAS;EACT,qBAAoB;CACtB;;AAEA;EACE,uBAA4B;EAA5B,6BAA4B;EAC5B,kBAAiB;EACjB,eAAc;EACd,mBAAkB;EAClB,cAAa;CACf;;AAEA;EACE,eAAc;EACd,kBAAiB;EACjB,uBAA4B;EAA5B,6BAA4B;EAC5B,mBAAkB;CACpB;AACA;;EAEE,uBAAsB;EACtB,eAAgB;CAClB;AACA;EACE,mBAAkB;CACpB;AACA;;EAEE,cAAa;CACf;AACA;EACE,eAAc;EACd,kBAAiB;EACjB,iBAAgB;EAChB,eAAc;EACd,mBAAkB;EAClB,+BAAqC;EAArC,sCAAqC;CACvC;;AAEA,qBAAoB;AACpB;EACE,6BAAkC;EAAlC,mCAAkC;CACpC;AACA;EACE,wBAAuB;CACzB;AACA;EACE,0BAAgC;EAAhC,iCAAgC;EAChC,aAAY;CACd;AACA;;;;;;EAME,aAAY;CACd;;AAEA;EACE,mBAAkB;CACpB;AACA;EACE,mBAAkB;EAClB,OAAM;EACN,QAAO;EACP,SAAQ;EACR,UAAS;CACX;AACA;EACE,mBAAkB;CACpB;AACA;EACE,iBAAgB;CAClB;AACA;EACE,kBAAiB;CACnB;;AAEA;EACE;IACE,WAAU;GACZ;CACF;;AAJA;EACE;IACE,WAAU;GACZ;CACF;;AAEA,YAAW;;AAEX;EACE,YAAW;EACX,gBAAe;EACf,iCAAgC;CAClC;AACA;EACE,UAAS;CACX;AACA;EACE,iBAAgB;CAClB;AACA;EACE,kBAAiB;CACnB;AACA;EACE,WAAU;CACZ;;AAEA;EACE;IACE,YAAW;IACX,gBAAe;GACjB;EACA;IACE,gBAAe;GACjB;EACA;IACE,kBAAiB;GACnB;CACF;;AAEA;EACE,kBAAiB;EACjB,WAAU;EACV,eAAc;CAChB;AACA;EACE,iBAAgB;CAClB;AACA;EACE,iBAAgB;CAClB;;AAEA,aAAY;;AAEZ;EACE,oBAA0B;EAA1B,2BAA0B;EAC1B,aAAY;EACZ,0BAAyB;EACzB,sBAAqB;EACrB,iBAAgB;EAChB,uBAAsB;EACtB,kBAAiB;EACjB,sBAAqB;EACrB,sBAAqB;EACrB,aAAY;EACZ,kCAAyB;EAAzB,0BAAyB;EACzB,gBAAe;EACf,mBAAkC;EAAlC,mCAAkC;CACpC;AACA;;EAEE,cAAa;EACb,cAAa;CACf;AACA;EACE,aAAY;EACZ,qBAAoB;EACpB,iBAAgB;CAClB;AACA;EACE,yBAAgB;KAAhB,sBAAgB;UAAhB,iBAAgB;EAChB,iBAAgB;EAChB,cAAa;EACb,aAAY;EACZ,gBAAe;EACf,qBAAa;EAAb,qBAAa;EAAb,cAAa;EACb,0BAAmB;MAAnB,uBAAmB;UAAnB,oBAAmB;EACnB,yBAAuB;MAAvB,sBAAuB;UAAvB,wBAAuB;CACzB","file":"globalStyles.css","sourcesContent":[":root {\n  --primary: #008542;\n  --secondary: #000;\n  --lightGrey: whitesmoke;\n  --midGrey: #cacaca;\n  --darkGrey: #272727;\n  --danger: #ff3d3d;\n  --font-primary: 'Open Sans', sans-serif;\n  --font-system: system-ui; /* postcssPresetEnv */\n  --borderRadius: 3px;\n}\n\n::-webkit-scrollbar {\n  width: 0.4rem;\n}\n\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 3px var(--grey);\n}\n\n::-webkit-scrollbar-thumb {\n  background-color: var(--primary);\n}\n\n::selection {\n  background: rgba(0, 194, 189, 0.6);\n}\n\nhtml {\n  box-sizing: border-box;\n  font-size: 62.5%;\n  min-height: 100%;\n  background: var(--lightGrey);\n}\n\nbody {\n  font-family: var(--font-system);\n  min-height: 100%;\n  position: relative;\n  background: white;\n  color: var(--secondary);\n  font-size: 1.6em;\n  font-weight: 400;\n  letter-spacing: 0.01em;\n  line-height: 1.6;\n  -webkit-font-smoothing: antialiased;\n}\n\na {\n  color: var(--primary);\n}\n\nstrong {\n  font-weight: 600;\n}\n\np {\n  margin-top: 0;\n  margin-bottom: 1em;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0;\n  margin-bottom: 0.5em;\n}\n\npre {\n  background: var(--lightGrey);\n  line-height: 1.45;\n  font-size: 85%;\n  border-radius: 3px;\n  padding: 16px;\n}\n\ncode {\n  font-size: 85%;\n  padding: 0.15em 0;\n  background: var(--lightGrey);\n  border-radius: 3px;\n}\ncode:before,\ncode:after {\n  letter-spacing: -0.2em;\n  content: '\\00a0';\n}\npre code {\n  font-size: inherit;\n}\npre code:before,\npre code:after {\n  display: none;\n}\nblockquote {\n  margin-left: 0;\n  padding-left: 1em;\n  line-height: 1.1;\n  font-size: 1em;\n  font-style: italic;\n  border-left: 2px solid var(--primary);\n}\n\n/* Utility Classes */\n.light {\n  background-color: var(--lightGrey);\n}\n.white {\n  background-color: white;\n}\n.dark {\n  background-color: var(--primary);\n  color: white;\n}\n.dark h1,\n.dark h2,\n.dark h3,\n.dark h4,\n.dark h5,\n.dark h6 {\n  color: white;\n}\n\n.relative {\n  position: relative;\n}\n.absolute {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.taCenter {\n  text-align: center;\n}\n.taLeft {\n  text-align: left;\n}\n.taRight {\n  text-align: right;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n}\n\n/* Layout */\n\n.section {\n  width: 100%;\n  padding: 5rem 0;\n  border-bottom: 1px solid #f1f1f1;\n}\n.section:last-child {\n  border: 0;\n}\n.section.thick {\n  padding: 10rem 0;\n}\n.section.thin {\n  padding: 3.5rem 0;\n}\n.section.noPadding {\n  padding: 0;\n}\n\n@media (max-width: 600px) {\n  .section {\n    width: 100%;\n    padding: 5rem 0;\n  }\n  .section.thick {\n    padding: 7rem 0;\n  }\n  .section.thin {\n    padding: 1.5rem 0;\n  }\n}\n\n.container {\n  max-width: 1111px;\n  width: 90%;\n  margin: 0 auto;\n}\n.container.skinny {\n  max-width: 888px;\n}\n.container.skinnier {\n  max-width: 555px;\n}\n\n/* Buttons */\n\n.Button {\n  background: var(--primary);\n  color: white;\n  text-transform: uppercase;\n  text-decoration: none;\n  font-weight: 700;\n  letter-spacing: 0.05em;\n  font-size: 1.4rem;\n  display: inline-block;\n  padding: 1.25rem 3rem;\n  border: none;\n  transition: all 0.2s ease;\n  cursor: pointer;\n  border-radius: var(--borderRadius);\n}\n.Button:hover,\n.Button:focus {\n  opacity: 0.95;\n  outline: none;\n}\n.Button[disabled] {\n  opacity: 0.4;\n  pointer-events: none;\n  cursor: progress;\n}\n.Button-blank {\n  appearance: none;\n  background: none;\n  outline: none;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n"],"sourceRoot":""}]);

// exports


/***/ })

})
//# sourceMappingURL=cms.d8091decb4a31501eaa4.hot-update.js.map