(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{171:function(e,t,r){"use strict";r.r(t);var a=r(0),n=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[r("h1",{attrs:{id:"generating"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#generating","aria-hidden":"true"}},[e._v("#")]),e._v(" Generating")]),e._v(" "),r("p",[e._v("The following RPC calls interact with the "),r("code",[e._v("komodod")]),e._v(" software, and are made available through the "),r("code",[e._v("komodo-cli")]),e._v(" software.")]),e._v(" "),r("h2",{attrs:{id:"generate"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#generate","aria-hidden":"true"}},[e._v("#")]),e._v(" generate")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('command:\n\nkomodo-cli generate 2\n\nresponse:\n\n[\n  "0475316d63fe48bb9d58373595cb334fc2553f65496edfb2fb17b9ed06f4c480",\n  "00d29a2b7dec52baa9ab8e4264363f32b4989eef7dbb0a9932fbc11274195b5a"\n]\n')])])]),r("p",[r("strong",[e._v("generate numblocks")])]),e._v(" "),r("aside",{staticClass:"notice"},[e._v("\n  This function can only be used on a "),r("b",[e._v("regtest")]),e._v(" network (for testing purposes).\n")]),e._v(" "),r("p",[e._v("The "),r("code",[e._v("generate")]),e._v(" method instructs the coin daemon to immediately mine the indicated number of blocks.")]),e._v(" "),r("h3",{attrs:{id:"arguments"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#arguments","aria-hidden":"true"}},[e._v("#")]),e._v(" Arguments:")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Structure")]),e._v(" "),r("th",[e._v("Type")]),e._v(" "),r("th",[e._v("Description")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("numblocks")]),e._v(" "),r("td",[e._v("(numeric)")]),e._v(" "),r("td",[e._v("the desired number of blocks to generate")])])])]),e._v(" "),r("h3",{attrs:{id:"response"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#response","aria-hidden":"true"}},[e._v("#")]),e._v(" Response:")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Structure")]),e._v(" "),r("th",[e._v("Type")]),e._v(" "),r("th",[e._v("Description")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("[")]),e._v(" "),r("td"),e._v(" "),r("td")]),e._v(" "),r("tr",[r("td",[e._v("blockhashes")]),e._v(" "),r("td",[e._v("(array)")]),e._v(" "),r("td",[e._v("hashes of blocks generated")])]),e._v(" "),r("tr",[r("td",[e._v(",...")]),e._v(" "),r("td"),e._v(" "),r("td")]),e._v(" "),r("tr",[r("td",[e._v("]")]),e._v(" "),r("td"),e._v(" "),r("td")])])]),e._v(" "),r("h2",{attrs:{id:"getgenerate"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#getgenerate","aria-hidden":"true"}},[e._v("#")]),e._v(" getgenerate")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("command:\n\nkomodo-cli getgenerate\n\nresponse:\n\nfalse\n")])])]),r("blockquote",[r("p",[e._v("You can find your rpcuser, rpcpassword, and rpcport in the coin's .conf file.")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('command:\n\ncurl --user myrpcuser:myrpcpassword --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getgenerate", "params": [] }\' -H \'content-type: text/plain;\' http://127.0.0.1:myrpcport/\n\nresponse:\n\n{\n  "result": false,\n  "error": null,\n  "id": "curltest"\n}\n')])])]),r("p",[r("strong",[e._v("getgenerate")])]),e._v(" "),r("p",[e._v("The "),r("code",[e._v("getgenerate")]),e._v(" method returns a boolean value indicating the server's mining status.")]),e._v(" "),r("p",[e._v("The default value is false.")]),e._v(" "),r("aside",{staticClass:"notice"},[e._v("\n  See also "),r("b",[e._v("gen")]),e._v(".\n")]),e._v(" "),r("h3",{attrs:{id:"arguments-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#arguments-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Arguments:")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Structure")]),e._v(" "),r("th",[e._v("Type")]),e._v(" "),r("th",[e._v("Description")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("(none)")]),e._v(" "),r("td",[e._v("(none)")]),e._v(" "),r("td")])])]),e._v(" "),r("h3",{attrs:{id:"response-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#response-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Response:")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Structure")]),e._v(" "),r("th",[e._v("Type")]),e._v(" "),r("th",[e._v("Description")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("true/false")]),e._v(" "),r("td",[e._v("(boolean)")]),e._v(" "),r("td",[e._v("indicates whether the server is set to generate coins")])])])]),e._v(" "),r("h2",{attrs:{id:"setgenerate"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#setgenerate","aria-hidden":"true"}},[e._v("#")]),e._v(" setgenerate")]),e._v(" "),r("blockquote",[r("p",[e._v("Turn on generation with unlimited processors:")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("command:\n\nkomodo-cli setgenerate true -1\n\nresponse:\n\n(none)\n")])])]),r("blockquote",[r("p",[e._v("Check the setting:")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("command:\n\nkomodo-cli getgenerate\n\nresponse:\n\ntrue\n")])])]),r("blockquote",[r("p",[e._v("Turn off generation:")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("command:\n\nkomodo-cli setgenerate false\n\nresponse:\n\n(none)\n")])])]),r("blockquote",[r("p",[e._v("Turning the setting on via json rpc:")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('command:\n\ncurl --user myrpcuser:myrpcpassword --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "setgenerate", "params": [true, 1] }\' -H \'content-type: text/plain;\' http://127.0.0.1:myrpcport/\n\nresponse:\n\n{\n  "result": null,\n  "error": null,\n  "id": "curltest"\n}\n')])])]),r("p",[r("strong",[e._v("setgenerate generate ( genproclimit )")])]),e._v(" "),r("p",[e._v("The "),r("code",[e._v("setgenerate")]),e._v(" method allows the user to set the "),r("code",[e._v("generate")]),e._v(" property in the coin daemon to "),r("code",[e._v("true")]),e._v(" or "),r("code",[e._v("false")]),e._v(", thus turning generation (mining) on or off.")]),e._v(" "),r("p",[e._v("Generation is limited to "),r("a",{attrs:{href:"#genproclimit"}},[r("code",[e._v("genproclimit")])]),e._v(" processors. Set "),r("code",[e._v("genproclimit")]),e._v(" to "),r("code",[e._v("-1")]),e._v(" for unlimited.")]),e._v(" "),r("aside",{staticClass:"notice"},[e._v("\n  See also the "),r("b",[e._v("getgenerate")]),e._v(" method to query the current setting, and "),r("b",[e._v("genproclimit")]),e._v(" for setting processor default parameters.\n")]),e._v(" "),r("h3",{attrs:{id:"arguments-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#arguments-3","aria-hidden":"true"}},[e._v("#")]),e._v(" Arguments:")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Structure")]),e._v(" "),r("th",[e._v("Type")]),e._v(" "),r("th",[e._v("Description")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("generate")]),e._v(" "),r("td",[e._v("(boolean, required)")]),e._v(" "),r("td",[e._v("set to true to turn on generation; set to off to turn off generation")])]),e._v(" "),r("tr",[r("td",[e._v("genproclimit")]),e._v(" "),r("td",[e._v("(numeric, optional)")]),e._v(" "),r("td",[e._v('set the processor limit for when generation is on; use value "-1" for unlimited')])])])]),e._v(" "),r("h3",{attrs:{id:"response-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#response-3","aria-hidden":"true"}},[e._v("#")]),e._v(" Response:")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Structure")]),e._v(" "),r("th",[e._v("Type")]),e._v(" "),r("th",[e._v("Description")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("(none)")]),e._v(" "),r("td",[e._v("(none)")]),e._v(" "),r("td")])])])])}],!1,null,null,null);n.options.__file="_319-generate.md";t.default=n.exports}}]);