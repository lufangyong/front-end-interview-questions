(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{172:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"前端工程化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前端工程化","aria-hidden":"true"}},[t._v("#")]),t._v(" 前端工程化")]),t._v(" "),s("h2",{attrs:{id:"说说你对前端工程化的理解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#说说你对前端工程化的理解","aria-hidden":"true"}},[t._v("#")]),t._v(" 说说你对前端工程化的理解")]),t._v(" "),s("ul",[s("li",[t._v("前端工程化不外乎两点，规范和自动化。")]),t._v(" "),s("li",[t._v("规范:\n"),s("ul",[s("li",[t._v("包括 团队开发规范，模块化开发，组件化开发，组件仓库，性能优化，部署，测试，开发流程，开发工具，脚手架，git 工作流，团队协作")])])]),t._v(" "),s("li",[t._v("自动化:\n"),s("ul",[s("li",[t._v("构建工具、持续集成、系统测试、日志统计、上线部署、敏捷开发、性能优化、基础框架")])])])]),t._v(" "),s("h2",{attrs:{id:"webpack-问题相关"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack-问题相关","aria-hidden":"true"}},[t._v("#")]),t._v(" webpack 问题相关")]),t._v(" "),s("h3",{attrs:{id:"loader-和-plugin-区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#loader-和-plugin-区别","aria-hidden":"true"}},[t._v("#")]),t._v(" loader 和 plugin 区别")]),t._v(" "),s("p",[t._v("loader 用于加载某些资源文件，因为 webpack 本身只能打包 CommonJS 规范的 js 文件，对于其他资源，例如 css，图片等，是没有办法加载的，这就需要对应的 loader 将资源转换\nplugin 用于扩展 webpack 的功能，直接作用于 webpack，loader 只专注于转换文件，而 plugin 不仅局限于资源加载")]),t._v(" "),s("p",[t._v("Loader 只能处理单一文件的输入输出，而 Plugin 则可以对整个打包过程获得更多的灵活性，譬如 ExtractTextPlugin，它可以将所有文件中的 css 剥离到一个独立的文件中，这样样式就不会随着组件加载而加载了。")]),t._v(" "),s("h3",{attrs:{id:"什么是-chunk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是-chunk","aria-hidden":"true"}},[t._v("#")]),t._v(" 什么是 chunk")]),t._v(" "),s("p",[t._v("Webpack 提供一个功能可以拆分模块，每一个模块称为 chunk，这个功能叫做 Code Splitting。你可以在你的代码库中定义分割点，调用 require.ensure，实现按需加载")]),t._v(" "),s("h3",{attrs:{id:"如何开发一个-loader，原理是啥"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何开发一个-loader，原理是啥","aria-hidden":"true"}},[t._v("#")]),t._v(" 如何开发一个 loader，原理是啥")]),t._v(" "),s("p",[t._v("A loader is a node module exporting a function.")]),t._v(" "),s("p",[t._v("缓存： Webpack Loader 同样可以利用缓存来提高效率，并且只需在一个可缓存的 Loader 上加一句 this.cacheable()\n异步：在一个异步的模块中，回传时需要调用 Loader API 提供的回调方法 this.async()")]),t._v(" "),s("h3",{attrs:{id:"打包原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#打包原理","aria-hidden":"true"}},[t._v("#")]),t._v(" 打包原理")]),t._v(" "),s("p",[t._v("webpack 打包，最基本的实现方式，是将所有的模块代码放到一个数组里，通过数组 ID 来引用不同的模块")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("/************************************************************************/")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("/******/")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("/* 0 */")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("/***/")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("module"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exports"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" __webpack_require__"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token function"}},[t._v("__webpack_require__")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{attrs:{class:"token function"}},[t._v("__webpack_require__")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("2")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'Hello, world!'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{attrs:{class:"token comment"}},[t._v("/***/")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("/* 1 */")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("/***/")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("module"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exports"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'a.js'")]),t._v("\n    console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"I\'m a.js"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{attrs:{class:"token comment"}},[t._v("/***/")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("/* 2 */")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("/***/")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("module"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exports"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'b.js'")]),t._v("\n    console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"I\'m b.js"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{attrs:{class:"token comment"}},[t._v("/***/")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("/******/")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("可以发现入口 entry.js 的代码是放在数组索引 0 的位置，其它 a.js 和 b.js 的代码分别放在了数组索引 1 和 2 的位置，而 webpack 引用的时候，主要通过"),s("code",[t._v("__webpack_require__")]),t._v("的方法引用不同索引的模块。")]),t._v(" "),s("h3",{attrs:{id:"webpack-和-gulp-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack-和-gulp-的区别","aria-hidden":"true"}},[t._v("#")]),t._v(" webpack 和 gulp 的区别")]),t._v(" "),s("p",[t._v("webpack 是一种模块化打包工具，主要用于模块化方案，预编译模块的方案；gulp 是工具链、构建工具，可以配合各种插件做 js 压缩，css 压缩，less 编译 替代手工实现自动化工作。")]),t._v(" "),s("p",[t._v("Grunt/Gulp 更多的是一种工作流；提供集成所有服务的一站式平台；\ngulp 可以用来优化前端工作流程。")]),t._v(" "),s("h3",{attrs:{id:"如何写一个-plugin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何写一个-plugin","aria-hidden":"true"}},[t._v("#")]),t._v(" 如何写一个 plugin")]),t._v(" "),s("p",[t._v("Compiler 在开始打包时就进行实例化，实例对象里面装着与打包相关的环境和参数，包括 options、plugins 和 loaders 等。")]),t._v(" "),s("p",[t._v("compilation 对象，它继承于 compiler，所以能拿到一切 compiler 的内容。Compilation 表示有关模块资源，已编译资源，Compilation 在每次文件变化重新打包时都进行一次实例化")]),t._v(" "),s("p",[t._v("apply 方法：当安装这个插件的时候，这个 apply 方法就会被 webpack compiler 调用。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("HelloWorldPlugin")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("// Setup the plugin instance with options...")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nHelloWorldPlugin"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function-variable function"}},[t._v("apply")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("compiler"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  compiler"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("plugin")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'done'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'Hello World!'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nmodule"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" HelloWorldPlugin\n")])])]),s("h3",{attrs:{id:"webpack-打包后文件体积过大怎么办？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack-打包后文件体积过大怎么办？","aria-hidden":"true"}},[t._v("#")]),t._v(" webpack 打包后文件体积过大怎么办？")]),t._v(" "),s("p",[t._v("很多方法：异步加载模块（代码分割）；提取第三方库（使用 cdn 或者 vender）；代码压缩；去除不必要的插件；去除 devtool 选项，dllplugin 等等。")]),t._v(" "),s("h2",{attrs:{id:"babel-的原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#babel-的原理","aria-hidden":"true"}},[t._v("#")]),t._v(" babel 的原理")]),t._v(" "),s("ul",[s("li",[t._v("使用 babylon 解析器对输入的源代码字符串进行解析并生成初始 AST")]),t._v(" "),s("li",[t._v("遍历 AST 树并应用各 transformers（plugin） 生成变换后的 AST 树")]),t._v(" "),s("li",[t._v("利用 babel-generator 将 AST 树输出为转码后的代码字符串")])]),t._v(" "),s("p",[t._v("分为三个阶段：")]),t._v(" "),s("ul",[s("li",[t._v("解析：将代码字符串解析成抽象语法树")]),t._v(" "),s("li",[t._v("变换：对抽象语法树进行变换操作")]),t._v(" "),s("li",[t._v("再建：根据变换后的抽象语法树再生成代码字符串")])])])}],!1,null,null,null);e.options.__file="fe-ngineering.md";a.default=e.exports}}]);