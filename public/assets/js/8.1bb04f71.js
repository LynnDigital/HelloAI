(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{199:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"authentication"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authentication","aria-hidden":"true"}},[t._v("#")]),t._v(" Authentication")]),t._v(" "),a("p",[t._v("HelloAI uses JWT (JSON Web Token) based authentication. You can login and fetch your account details via the API. We don't store any logs for authentication endpoints so your account credentials are protected.")]),t._v(" "),a("h2",{attrs:{id:"login"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#login","aria-hidden":"true"}},[t._v("#")]),t._v(" Login")]),t._v(" "),a("p",[t._v("Authenticate with your email/password.")]),t._v(" "),a("p",[a("strong",[t._v("Endpoint:")]),t._v(" "),a("code",[t._v("auth/login")])]),t._v(" "),a("p",[a("strong",[t._v("Method:")]),t._v(" "),a("code",[t._v("POST")])]),t._v(" "),a("p",[a("strong",[t._v("Required Parameters:")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Optional?")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("email")])]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("required")]),t._v(" "),a("td",[t._v("Your HelloAI account email")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("password")])]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("required")]),t._v(" "),a("td",[t._v("Your HelloAI account password")])])])]),t._v(" "),a("p",[a("strong",[t._v("Example Request:")])]),t._v(" "),a("Tabs",{attrs:{type:"border-card"}},[a("Tab",{attrs:{label:"PHP"}},[a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("GuzzleHttp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Client")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$client")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Client")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$auth_request")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$client")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("post")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'https://ai.hellosoftware.co/api/auth/login'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'form_params'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'email'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'mail@example.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'password'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'MyV3ryS3cur3P@ssword!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),a("Tab",{attrs:{label:"Node"}})],1),t._v(" "),a("p",[a("strong",[t._v("Example Response:")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"access_token"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eyJ0eXzI1NiJ9.eyJpc1wvAzTQ2YWEifQ.iEs9lWoLIZ9CxlFfpEOqAf4"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"token_type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bearer"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"expires_in"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3600")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])],1)},[],!1,null,null,null);s.default=n.exports}}]);