"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Seo.tsx":
/*!****************************!*\
  !*** ./components/Seo.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Seo)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Seo({ title  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n            children: [\n                title,\n                \" | Next Movies\"\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/sin-yujin/WebstormProjects/my-nextjs-app-test/components/Seo.tsx\",\n            lineNumber: 5,\n            columnNumber: 17\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/sin-yujin/WebstormProjects/my-nextjs-app-test/components/Seo.tsx\",\n        lineNumber: 4,\n        columnNumber: 13\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Nlby50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUE2QjtBQUVkLFNBQVNDLElBQUksRUFBQ0MsTUFBSyxFQUFDLEVBQUM7SUFDaEMscUJBQVEsOERBQUNGLGtEQUFJQTtrQkFDRCw0RUFBQ0U7O2dCQUFPQTtnQkFBTTs7Ozs7Ozs7Ozs7O0FBRTlCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1uZXh0anMtYXBwLXRlc3QvLi9jb21wb25lbnRzL1Nlby50c3g/NGE2NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlbyh7dGl0bGV9KXtcbiAgICByZXR1cm4gKDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT57dGl0bGV9IHwgTmV4dCBNb3ZpZXM8L3RpdGxlPlxuICAgICAgICAgICAgPC9IZWFkPik7XG59Il0sIm5hbWVzIjpbIkhlYWQiLCJTZW8iLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Seo.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Seo */ \"./components/Seo.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst API_KEY = \"\";\nfunction Home() {\n    const [movies, setMovies] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        (async ()=>{\n            const { res  } = await (await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)).json();\n            console.log(res);\n            console.log(typeof res);\n            setMovies(res);\n        })();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-395b7321c857587a\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Seo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                title: \"Home\"\n            }, void 0, false, {\n                fileName: \"/Users/sin-yujin/WebstormProjects/my-nextjs-app-test/pages/index.tsx\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, this),\n            !movies && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                className: \"jsx-395b7321c857587a\",\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"/Users/sin-yujin/WebstormProjects/my-nextjs-app-test/pages/index.tsx\",\n                lineNumber: 23,\n                columnNumber: 25\n            }, this),\n            movies?.map((movie)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"jsx-395b7321c857587a\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        className: \"jsx-395b7321c857587a\",\n                        children: movie.original_title\n                    }, void 0, false, {\n                        fileName: \"/Users/sin-yujin/WebstormProjects/my-nextjs-app-test/pages/index.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 21\n                    }, this)\n                }, movie.id, false, {\n                    fileName: \"/Users/sin-yujin/WebstormProjects/my-nextjs-app-test/pages/index.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 17\n                }, this)),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"395b7321c857587a\",\n                children: \"a.jsx-395b7321c857587a{color:white}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sin-yujin/WebstormProjects/my-nextjs-app-test/pages/index.tsx\",\n        lineNumber: 21,\n        columnNumber: 9\n    }, this);\n} //이 컴포넌트 안에 들어가는 모든 것들이 우리의 html의 head 안에 보여질 거임\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFBb0M7QUFDTTtBQUUxQyxNQUFNRyxVQUFVO0FBRUQsU0FBU0MsT0FBTztJQUMzQixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0osK0NBQVFBLENBQUMsRUFBRTtJQUN2Q0QsZ0RBQVNBLENBQUMsSUFBTTtRQUNYLFdBQVk7WUFDVCxNQUFNLEVBQUVNLElBQUcsRUFBRSxHQUFHLE1BQU0sQ0FDbEIsTUFBTUMsTUFDTixDQUFDLG1EQUFtRCxFQUFFTCxRQUFRLENBQUMsQ0FDL0QsRUFDRk0sSUFBSTtZQUNOQyxRQUFRQyxHQUFHLENBQUNKO1lBQ1pHLFFBQVFDLEdBQUcsQ0FBQyxPQUFPSjtZQUNuQkQsVUFBVUM7UUFDZDtJQUNKLEdBQUcsRUFBRTtJQUNMLHFCQUNJLDhEQUFDSzs7OzBCQUNHLDhEQUFDWix1REFBR0E7Z0JBQUNhLE9BQVE7Ozs7OztZQUNaLENBQUNSLHdCQUFVLDhEQUFDUzs7MEJBQUc7Ozs7OztZQUNmVCxRQUFRVSxJQUFJLENBQUNDLHNCQUNWLDhEQUFDSjs7OEJBQ0csNEVBQUNFOztrQ0FBSUUsTUFBTUMsY0FBYzs7Ozs7O21CQURuQkQsTUFBTUUsRUFBRTs7Ozs7Ozs7Ozs7Ozs7O0FBWWxDLENBQUMsQ0FDRCxnREFBZ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1uZXh0anMtYXBwLXRlc3QvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2VvIGZyb20gXCIuLi9jb21wb25lbnRzL1Nlb1wiO1xuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgQVBJX0tFWSA9IFwiXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gICAgY29uc3QgW21vdmllcywgc2V0TW92aWVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyByZXMgfSA9IGF3YWl0IChcbiAgICAgICAgICAgICAgICBhd2FpdCBmZXRjaChcbiAgICAgICAgICAgICAgICBgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9tb3ZpZS9wb3B1bGFyP2FwaV9rZXk9JHtBUElfS0VZfWBcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApLmpzb24oKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiByZXMpXG4gICAgICAgICAgICBzZXRNb3ZpZXMocmVzKTtcbiAgICAgICAgfSkoKTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxTZW8gdGl0bGUgPSBcIkhvbWVcIi8+XG4gICAgICAgICAgICB7IW1vdmllcyAmJiA8aDQ+TG9hZGluZy4uLjwvaDQ+fVxuICAgICAgICAgICAge21vdmllcz8ubWFwKChtb3ZpZSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXttb3ZpZS5pZH0+XG4gICAgICAgICAgICAgICAgICAgIDxoND57bW92aWUub3JpZ2luYWxfdGl0bGV9PC9oND5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbi8v7J20IOy7tO2PrOuEjO2KuCDslYjsl5Ag65Ok7Ja06rCA64qUIOuqqOuToCDqsoPrk6TsnbQg7Jqw66as7J2YIGh0bWzsnZggaGVhZCDslYjsl5Ag67O07Jes7KeIIOqxsOyehCJdLCJuYW1lcyI6WyJTZW8iLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkFQSV9LRVkiLCJIb21lIiwibW92aWVzIiwic2V0TW92aWVzIiwicmVzIiwiZmV0Y2giLCJqc29uIiwiY29uc29sZSIsImxvZyIsImRpdiIsInRpdGxlIiwiaDQiLCJtYXAiLCJtb3ZpZSIsIm9yaWdpbmFsX3RpdGxlIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();