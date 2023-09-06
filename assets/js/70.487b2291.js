(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{429:function(t,a,s){"use strict";s.r(a);var e=s(41),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"元素渲染"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#元素渲染"}},[t._v("#")]),t._v(" 元素渲染")]),t._v(" "),s("p",[t._v("元素是构成 React 应用的最小砖块。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" element "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("h1"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Hello"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" world"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("h1"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"将一个元素渲染为-dom"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#将一个元素渲染为-dom"}},[t._v("#")]),t._v(" "),s("strong",[t._v("将一个元素渲染为 DOM")])]),t._v(" "),s("p",[t._v("假设你的 HTML 文件某处有一个 "),s("code",[t._v("<div>")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"root"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("p",[t._v("我们将其称为“根” DOM 节点，因为该节点内的所有内容都将由 React DOM 管理。")]),t._v(" "),s("p",[t._v("仅使用 React 构建的应用通常只有单一的根 DOM 节点。如果你在将 React 集成进一个已有应用，那么你可以在应用中包含任意多的独立根 DOM 节点。")]),t._v(" "),s("p",[t._v("想要将一个 React 元素渲染到根 DOM 节点中，只需把它们一起传入 "),s("a",{attrs:{href:"https://react.docschina.org/docs/react-dom.html#render",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("ReactDOM.render()")]),s("OutboundLink")],1),t._v("：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" element "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("h1"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Hello"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" world"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("h1"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nReactDOM"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'root'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"更新已渲染的元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更新已渲染的元素"}},[t._v("#")]),t._v(" "),s("strong",[t._v("更新已渲染的元素")])]),t._v(" "),s("p",[t._v("React 元素是"),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Immutable_object",target:"_blank",rel:"noopener noreferrer"}},[t._v("不可变对象"),s("OutboundLink")],1),t._v("。一旦被创建，你就无法更改它的子元素或者属性。一个元素就像电影的单帧：它代表了某个特定时刻的 UI。")]),t._v(" "),s("p",[t._v("根据我们已有的知识，更新 UI 唯一的方式是创建一个全新的元素，并将其传入 "),s("a",{attrs:{href:"https://react.docschina.org/docs/react-dom.html#render",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("ReactDOM.render()")]),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"react-只更新它需要更新的部分"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react-只更新它需要更新的部分"}},[t._v("#")]),t._v(" "),s("strong",[t._v("React 只更新它需要更新的部分")])]),t._v(" "),s("p",[t._v("React DOM 会将元素和它的子元素与它们之前的状态进行比较，并只会进行必要的更新来使 DOM 达到预期的状态。")])])}),[],!1,null,null,null);a.default=r.exports}}]);