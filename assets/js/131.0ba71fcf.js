(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{492:function(t,a,s){"use strict";s.r(a);var v=s(41),_=Object(v.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"导航流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#导航流程"}},[t._v("#")]),t._v(" 导航流程")]),t._v(" "),s("p",[t._v("“在浏览器里，从输入 URL 到页面展示，这中间发生了什么？ ”这是一道经典的面试题。")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/navigation02.png"),alt:"navigation02"}}),t._v(" "),s("ul",[s("li",[t._v("浏览器进程主要负责用户交互、子进程管理和文件储存等功能。")]),t._v(" "),s("li",[t._v("网络进程是面向渲染进程和浏览器进程等提供网络下载功能。")]),t._v(" "),s("li",[t._v("渲染进程的主要职责是把从网络下载的 HTML、JavaScript、CSS、图片等资源解析为可以显示和交互的页面。")])]),t._v(" "),s("p",[t._v("大致流程描述如下：")]),t._v(" "),s("ul",[s("li",[t._v("首先，浏览器进程接收到用户输入的 URL 请求，浏览器进程将该 URL 发送给网络进程。")]),t._v(" "),s("li",[t._v("然后，在网络进程中发起真正的 URL 请求。")]),t._v(" "),s("li",[t._v("接着网络进程接收到响应头后，解析响应头数据，并将其转发给浏览器进程。")]),t._v(" "),s("li",[t._v("浏览器进程接收到响应头的数据后，发送“提交导航”消息到渲染进程。")]),t._v(" "),s("li",[t._v("渲染进程接收到浏览器进程发送的消息后，便开始准备接收 HTML 数据，接受数据的方式是直接和网络进程建立管道。")]),t._v(" "),s("li",[t._v("渲染进程像浏览器进程发送消息，表示自己已经准备好接收和准备数据了。")]),t._v(" "),s("li",[t._v("浏览器进程接受到渲染进程的消息后，便开始移除以前旧的文档，然后更新浏览器进程中的页面状态。")])]),t._v(" "),s("p",[t._v("下面详细分析一下：")]),t._v(" "),s("h2",{attrs:{id:"用户输入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用户输入"}},[t._v("#")]),t._v(" 用户输入")]),t._v(" "),s("p",[t._v("我们在地址栏中输入一个查询关键字时，地址栏会判断输入的关键字是搜索内容还是URL，若是搜索内容，浏览器会调用默认的搜索引擎进行搜索，如果是 URL，则地址栏会按照规则加上协议（HTTP，HTTPS），合成一个完整的URL。")]),t._v(" "),s("p",[t._v("然后我们按下回车，意味着我们即将开始进入新的页面，但在这之前，浏览器还有一个 beforeUnload 事件，beforeUnload 事件这要在当前页面即将销毁时会调用。可以在里面定义一些操作，比如取消导航等等。")]),t._v(" "),s("p",[t._v("当没有监听 beforeUnload 事件或者该事件同意你继续导航页面。浏览器便正式开始更新页面。（你会发现网页的图标变成一个 loading 样式）。")]),t._v(" "),s("h2",{attrs:{id:"url-请求过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#url-请求过程"}},[t._v("#")]),t._v(" URL 请求过程")]),t._v(" "),s("p",[t._v("浏览器进程会将 URL 通过进程间通信（IPC）把 URL 请求发送给网络进程，网络进程接受到后会对其做些处理，然后发起真正的 URL 请求。")]),t._v(" "),s("p",[t._v("到底做了什么处理呢？")]),t._v(" "),s("p",[t._v("首先，网络进程会查找本地缓存是否缓存了该资源，如果有，就直接返回资源给浏览器进程。若没有找到，则先进行 DNS 解析，拿到请求域名的服务器 IP 地址。如果请求协议是 HTTPS，那么还需要建立 TLS 连接。")]),t._v(" "),s("p",[t._v("接下来利用 IP 地址和服务器建立 TCP 连接。 连接建立之后，浏览器端会构建请求行、请求头等信息，并把与该域名相关的 Cookie 等数据附加到请求头中，并向服务器发送构建好的请求信息。")]),t._v(" "),s("p",[t._v("服务器收到请求信息后，会根据请求信息生成响应数据，并将其发送给网络进程。网络进程接受到响应数据后，便开始解析响应数据了。")]),t._v(" "),s("p",[t._v("在网络进程中解析的响应数据中如果状态码是"),s("code",[t._v("301或302")]),t._v("，则代表需要将响应字段中的 Location 字段填到地址栏，重新发起请求。接下来如果响应数据中"),s("code",[t._v("Content-Type")]),t._v("的值是下载类型，那么服务器会将其提交给浏览器的下载管理器，URL 导航到此结束，如果是 HTML，浏览器就会继续进行导航流程。")]),t._v(" "),s("h2",{attrs:{id:"准备渲染进程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#准备渲染进程"}},[t._v("#")]),t._v(" 准备渲染进程")]),t._v(" "),s("p",[t._v("通常情况下，打开新的页面都会使用单独的渲染进程；如果从 A 页面打开 B 页面，且 A 和 B 都属于同一站点的话，那么 B 页面复用 A 页面的渲染进程；如果是其他情况，浏览器进程则会为 B 创建一个新的渲染进程。")]),t._v(" "),s("p",[t._v("渲染进程准备好后，由于文档数据还在网络进程，所以要将数据提交给渲染进程。")]),t._v(" "),s("h2",{attrs:{id:"提交文档"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提交文档"}},[t._v("#")]),t._v(" 提交文档")]),t._v(" "),s("p",[t._v("该阶段主要是将网络进程接受到的 HTML 数据提交给渲染进程。")]),t._v(" "),s("ul",[s("li",[t._v("浏览器进程接受到网络进程的响应头数据后，会向渲染进程发送提交文档的信息。")]),t._v(" "),s("li",[t._v("渲染进程接收到消息后，会和网络进程建立传输数据的“管道”")]),t._v(" "),s("li",[t._v("等文档传输完毕后，渲染进程会返回“确认提交”消息给浏览器进程")]),t._v(" "),s("li",[t._v("浏览器进程在收到“确认提交”的消息后，会更新浏览器界面状态，包括了安全状态、地址栏的 URL、前进后退的历史状态，并更新 Web 页面。")])]),t._v(" "),s("h2",{attrs:{id:"渲染阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#渲染阶段"}},[t._v("#")]),t._v(" 渲染阶段")]),t._v(" "),s("p",[t._v("渲染阶段比较复杂，通常会分为几个子阶段，这样的一个处理流程叫做渲染流水线。")]),t._v(" "),s("p",[t._v("渲染流水线大致流程是："),s("strong",[t._v("构建 DOM 树，样式计算，布局阶段，分层，绘制，分块，光栅化和合成")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"构建-dom-树"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构建-dom-树"}},[t._v("#")]),t._v(" 构建 DOM 树")]),t._v(" "),s("p",[t._v("因为浏览器无法理解 HTML，所以需要将 HTML 转换为浏览器能够理解的结构——DOM 树。DOM 和 HTML 内容几乎是一样的，但是和 HTML 不同的是，DOM 是保存在内存中树状结构，可以通过 JavaScript 来查询或修改其内容。")]),t._v(" "),s("h3",{attrs:{id:"样式计算"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#样式计算"}},[t._v("#")]),t._v(" 样式计算")]),t._v(" "),s("p",[t._v("主要是为了计算出 DOM 节点中每个元素的具体样式。")]),t._v(" "),s("h4",{attrs:{id:"把-css-转换为浏览器能够理解的结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#把-css-转换为浏览器能够理解的结构"}},[t._v("#")]),t._v(" 把 CSS 转换为浏览器能够理解的结构")]),t._v(" "),s("p",[t._v("当渲染引擎接收到 CSS 文本时，会执行一个转换操作，将 CSS 文本转换为浏览器可以理解的结构——styleSheets。")]),t._v(" "),s("h4",{attrs:{id:"转换样式表中的属性值-使其标准化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#转换样式表中的属性值-使其标准化"}},[t._v("#")]),t._v(" 转换样式表中的属性值，使其标准化")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("body")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2em "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("p")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("blue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("span")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-weight")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bold"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div  p")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("green"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("red"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("可以看到上面的 CSS 文本中有很多属性值，如 2em、blue、bold，这些类型数值不容易被渲染引擎理解，所以需要将所有值转换为渲染引擎容易理解的、标准化的计算值，这个过程就是属性值标准化。")]),t._v(" "),s("h4",{attrs:{id:"计算-dom-树中各个节点的具体样式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#计算-dom-树中各个节点的具体样式"}},[t._v("#")]),t._v(" 计算 DOM 树中各个节点的具体样式")]),t._v(" "),s("p",[t._v("依据 CSS 继承以及层叠来计算。")]),t._v(" "),s("h3",{attrs:{id:"布局阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#布局阶段"}},[t._v("#")]),t._v(" 布局阶段")]),t._v(" "),s("p",[t._v("现在，我们有 DOM 树和 DOM 树中元素的样式，但这还不足以显示页面，因为我们还不知道 DOM 元素的几何位置信息。那么接下来就需要计算出 DOM 树中可见元素的几何位置，我们把这个计算过程叫做布局。")]),t._v(" "),s("h4",{attrs:{id:"创建布局树"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建布局树"}},[t._v("#")]),t._v(" 创建布局树")]),t._v(" "),s("p",[t._v("在显示之前，我们还要额外地构建一棵只包含可见元素布局树。")]),t._v(" "),s("p",[t._v("构建布局树流程：")]),t._v(" "),s("ul",[s("li",[t._v("遍历 DOM 树中的所有可见节点，并将这些节点加到布局树中；")]),t._v(" "),s("li",[t._v("不可见的节点会被布局树忽略掉。")])]),t._v(" "),s("h4",{attrs:{id:"布局计算"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#布局计算"}},[t._v("#")]),t._v(" 布局计算")]),t._v(" "),s("p",[t._v("计算布局树节点的坐标位置。")]),t._v(" "),s("h3",{attrs:{id:"分层"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分层"}},[t._v("#")]),t._v(" 分层")]),t._v(" "),s("p",[t._v("页面中有很多复杂的效果，如 3D 变换等.")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/navigation01.png"),alt:"navigation01"}}),t._v(" "),s("p",[t._v("页面生成后，渲染进程会发送消息给浏览器进程，让其停止加载动画。为了更加方便地实现这些效果，渲染引擎还需要为特定的节点生成专用的图层，并生成一棵对应的图层树（LayerTree）。")]),t._v(" "),s("p",[t._v("并不是布局树的每个节点都包含一个图层，如果一个节点没有对应的层，那么这个节点就从属于父节点的图层。")]),t._v(" "),s("p",[t._v("那么需要满足什么条件，渲染引擎才会为特定的节点创建新的图层呢？")]),t._v(" "),s("ul",[s("li",[t._v("拥有层叠上下文的元素会被提升为单独的一层")]),t._v(" "),s("li",[t._v("需要剪裁（clip）的地方也会被创建为图层。")])]),t._v(" "),s("h3",{attrs:{id:"绘制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#绘制"}},[t._v("#")]),t._v(" 绘制")]),t._v(" "),s("p",[t._v("完成图层树的建立后，渲染引擎需要对树中的每个图层进行绘制。")]),t._v(" "),s("p",[t._v("渲染引擎会把一个图层的绘制拆分成很多小的绘制指令，然后将这些指令按顺序放在待绘制列表。")]),t._v(" "),s("h3",{attrs:{id:"栅格化-raster-操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#栅格化-raster-操作"}},[t._v("#")]),t._v(" 栅格化（raster）操作")]),t._v(" "),s("p",[t._v("绘制列表只是用来记录绘制顺序和绘制指令的列表，而实际上绘制操作是由渲染引擎中的合成线程来完成的。")]),t._v(" "),s("p",[t._v("图层的绘制列表准备好之后，主线程会把该绘制列表提交（commit）给合成线程。")]),t._v(" "),s("p",[t._v("合成线程会将图层划分为图块（tile），这些图块的大小通常是 256x256 或者 512x512，然后合成线程会按照视口附近的图块来优先生成位图，实际生成位图的操作是由栅格化来执行的。")]),t._v(" "),s("p",[t._v("栅格化过程都会使用 GPU 来加速生成，使用 GPU 生成位图的过程叫快速栅格化，或者 GPU 栅格化，生成的位图被保存在 GPU 内存中。")]),t._v(" "),s("h3",{attrs:{id:"合成和显示"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#合成和显示"}},[t._v("#")]),t._v(" 合成和显示")]),t._v(" "),s("p",[t._v("一旦所有图块都被光栅化，合成线程就会生成一个绘制图块的命令——“DrawQuad”，然后将该命令提交给浏览器进程。")]),t._v(" "),s("p",[t._v("浏览器进程将其页面内容绘制到内存中，最后再将内存显示在屏幕上。")]),t._v(" "),s("h3",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("ul",[s("li",[t._v("渲染进程将 HTML 内容转换为能够读懂的 DOM 树结构。")]),t._v(" "),s("li",[t._v("渲染引擎将 CSS 样式表转化为浏览器可以理解的 styleSheets，计算出 DOM 节点的样式。")]),t._v(" "),s("li",[t._v("创建布局树，并计算元素的布局信息。")]),t._v(" "),s("li",[t._v("对布局树进行分层，并生成分层树。")]),t._v(" "),s("li",[t._v("为每个图层生成绘制列表，并将其提交到合成线程。")]),t._v(" "),s("li",[t._v("合成线程将图层分成图块，并在光栅化线程池中将图块转换成位图。")]),t._v(" "),s("li",[t._v("合成线程发送绘制图块命令 DrawQuad 给浏览器进程。浏览器进程根据 DrawQuad 消息生成页面，并显示到显示器上。")])]),t._v(" "),s("h3",{attrs:{id:"重排-重绘-和-合成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重排-重绘-和-合成"}},[t._v("#")]),t._v(" “重排”“重绘”和“合成”")]),t._v(" "),s("h4",{attrs:{id:"更新了元素的几何属性-重排"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更新了元素的几何属性-重排"}},[t._v("#")]),t._v(" 更新了元素的几何属性（重排）")]),t._v(" "),s("p",[t._v("如果你通过 JavaScript 或者 CSS 修改元素的几何位置属性，例如改变元素的宽度、高度等，那么浏览器会触发重新布局，解析之后的一系列子阶段，这个过程就叫重排。重排需要更新完整的渲染流水线，所以开销也是最大的。")]),t._v(" "),s("h4",{attrs:{id:"更新元素的绘制属性-重绘"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更新元素的绘制属性-重绘"}},[t._v("#")]),t._v(" 更新元素的绘制属性（重绘）")]),t._v(" "),s("p",[t._v("如果修改了元素的背景颜色，那么布局阶段将不会被执行，因为并没有引起几何位置的变换，所以就直接进入了绘制阶段，然后执行之后的一系列子阶段，这个过程就叫重绘。相较于重排操作，重绘省去了布局和分层阶段，所以执行效率会比重排操作要高一些。")]),t._v(" "),s("h4",{attrs:{id:"直接合成阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#直接合成阶段"}},[t._v("#")]),t._v(" 直接合成阶段")]),t._v(" "),s("p",[t._v("如果我们使用了 CSS 的 transform 来实现动画效果，这可以避开重排和重绘阶段，直接在非主线程上执行合成动画操作。这样的效率是最高的，因为是在非主线程上合成，并没有占用主线程的资源，另外也避开了布局和绘制两个子阶段，所以相对于重绘和重排，合成能大大提升绘制效率。")]),t._v(" "),s("h4",{attrs:{id:"减少重排和重绘"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#减少重排和重绘"}},[t._v("#")]),t._v(" 减少重排和重绘")]),t._v(" "),s("ul",[s("li",[t._v("使用 class 操作样式，而不是频繁操作 style")]),t._v(" "),s("li",[t._v("避免使用 table 布局")]),t._v(" "),s("li",[t._v("批量dom 操作，例如 createDocumentFragment，或者使用框架，例如 React")]),t._v(" "),s("li",[t._v("Debounce window resize 事件")]),t._v(" "),s("li",[t._v("对 dom 属性的读写要分离")]),t._v(" "),s("li",[t._v("will-change: transform 做优化")])])])}),[],!1,null,null,null);a.default=_.exports}}]);