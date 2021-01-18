(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{530:function(t,a,s){"use strict";s.r(a);var v=s(6),r=Object(v.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"报文的组成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#报文的组成"}},[t._v("#")]),t._v(" 报文的组成")]),t._v(" "),s("p",[t._v("HTTP 报文是由起始行（start line），头部（header），空行（CRLF），以及实体组成（entity、body）")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/syfxlin/pic/2020/09/20200916101354.png",alt:"报文组成"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/syfxlin/pic/2020/09/20200916102501.png",alt:"请求头的组成"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/syfxlin/pic/2020/09/20200916102615.png",alt:"响应头的组成"}})]),t._v(" "),s("h2",{attrs:{id:"起始行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#起始行"}},[t._v("#")]),t._v(" 起始行")]),t._v(" "),s("p",[t._v("起始行分为两种起始行，一种是请求行，是客户端发出报文的起始行，一种是状态行，是客户端接收报文的起始行。")]),t._v(" "),s("h3",{attrs:{id:"请求行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#请求行"}},[t._v("#")]),t._v(" 请求行")]),t._v(" "),s("p",[t._v("请求报文里的起始行也就是请求行，该行简要的描述了客户端想要如何操作服务器端的资源。")]),t._v(" "),s("h4",{attrs:{id:"构成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构成"}},[t._v("#")]),t._v(" 构成：")]),t._v(" "),s("ol",[s("li",[t._v("请求方法：是一个动词，如 GET/POST，表示对资源的操作。")]),t._v(" "),s("li",[t._v("请求目标：通常是一个 URI，标记了请求方法要操作的资源。")]),t._v(" "),s("li",[t._v("版本号：表示报文使用的 HTTP 协议版本。")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/syfxlin/pic/2020/09/20200916102017.png",alt:"请求行的构成"}})]),t._v(" "),s("h4",{attrs:{id:"样例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#样例"}},[t._v("#")]),t._v(" 样例：")]),t._v(" "),s("ul",[s("li",[t._v("GET / HTTP/1.1")]),t._v(" "),s("li",[t._v("POST / HTTP/2")])]),t._v(" "),s("h3",{attrs:{id:"状态行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#状态行"}},[t._v("#")]),t._v(" 状态行")]),t._v(" "),s("p",[t._v("响应报文里的起始行也就是状态行，该行简要的描述服务器响应的状态。")]),t._v(" "),s("h4",{attrs:{id:"构成-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构成-2"}},[t._v("#")]),t._v(" 构成：")]),t._v(" "),s("ol",[s("li",[t._v("版本号：表示报文使用的 HTTP 协议版本。")]),t._v(" "),s("li",[t._v("状态码：一个三位数，用代码的形式表示处理的结果。")]),t._v(" "),s("li",[t._v("原因：作为数字状态码补充，是更详细的解释文字，帮助人理解原因。")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/syfxlin/pic/2020/09/20200916102230.png",alt:"状态行的构成"}})]),t._v(" "),s("h4",{attrs:{id:"样例-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#样例-2"}},[t._v("#")]),t._v(" 样例：")]),t._v(" "),s("ul",[s("li",[t._v("HTTP/1.1 200 OK")]),t._v(" "),s("li",[t._v("HTTP/1.1 404 Not Found")])]),t._v(" "),s("h2",{attrs:{id:"头部"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#头部"}},[t._v("#")]),t._v(" 头部")]),t._v(" "),s("p",[t._v("请求行或状态行再加上头部字段集合就构成了 HTTP 报文里完整的请求头或响应头。")]),t._v(" "),s("h3",{attrs:{id:"构成-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构成-3"}},[t._v("#")]),t._v(" 构成")]),t._v(" "),s("ol",[s("li",[t._v("字段名：大小写不敏感，但是建议使用首字母大写；不允许出现空格，可以使用连字符“-”，但不能使用下划线“_”；顺序是没有意义的，可以任意排列不影响语义；原则上不能重复，不过有些字段本身的语义允许可以重复（如 Set-Cookie）。")]),t._v(" "),s("li",[t._v("分隔符（:）：字段名后紧跟，不能有空格；分隔符后与值的部分可以有多个空格。")]),t._v(" "),s("li",[t._v("字段值。")])]),t._v(" "),s("h3",{attrs:{id:"常用的字段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用的字段"}},[t._v("#")]),t._v(" 常用的字段")]),t._v(" "),s("ul",[s("li",[t._v("通用字段：在请求头和响应头里都可以出现。如 Date。")]),t._v(" "),s("li",[t._v("请求字段：仅能出现在请求头里，进一步说明请求信息或者额外的附加条件。如 Host。")]),t._v(" "),s("li",[t._v("响应字段：仅能出现在响应头里，补充说明响应报文的信息。如 Server。")]),t._v(" "),s("li",[t._v("实体字段：它实际上属于通用字段，但专门描述 body 的额外信息。如 Content-Length。")])])])}),[],!1,null,null,null);a.default=r.exports}}]);