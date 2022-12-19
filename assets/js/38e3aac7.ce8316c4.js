(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{137:function(e,a,t){"use strict";t.d(a,"a",(function(){return i})),t.d(a,"b",(function(){return O}));var s=t(0),n=t.n(s);function m(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function p(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,s)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?p(Object(t),!0).forEach((function(a){m(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function b(e,a){if(null==e)return{};var t,s,n=function(e,a){if(null==e)return{};var t,s,n={},m=Object.keys(e);for(s=0;s<m.length;s++)t=m[s],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(s=0;s<m.length;s++)t=m[s],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=n.a.createContext({}),l=function(e){var a=n.a.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},i=function(e){var a=l(e.components);return n.a.createElement(c.Provider,{value:a},e.children)},N={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},o=n.a.forwardRef((function(e,a){var t=e.components,s=e.mdxType,m=e.originalType,p=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),i=l(t),o=s,O=i["".concat(p,".").concat(o)]||i[o]||N[o]||m;return t?n.a.createElement(O,r(r({ref:a},c),{},{components:t})):n.a.createElement(O,r({ref:a},c))}));function O(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var m=t.length,p=new Array(m);p[0]=o;var r={};for(var b in a)hasOwnProperty.call(a,b)&&(r[b]=a[b]);r.originalType=e,r.mdxType="string"==typeof e?e:s,p[1]=r;for(var c=2;c<m;c++)p[c]=t[c];return n.a.createElement.apply(null,p)}return n.a.createElement.apply(null,t)}o.displayName="MDXCreateElement"},87:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return r})),t.d(a,"metadata",(function(){return b})),t.d(a,"toc",(function(){return c})),t.d(a,"default",(function(){return i}));var s=t(3),n=t(7),m=(t(0),t(137)),p=["components"],r={id:"markdown-math",title:"Markdown Math",sidebar_label:"Markdown Math",description:"How to use the Standard Notes Markdown Math editor.",keywords:["standard notes","docs","notes app","end-to-end encryption","markdown math"],image:"/img/logo.png",hide_title:!1,hide_table_of_contents:!1},b={unversionedId:"usage/markdown-math",id:"usage/markdown-math",isDocsHomePage:!1,title:"Markdown Math",description:"How to use the Standard Notes Markdown Math editor.",source:"@site/docs/usage/markdown-math.md",sourceDirName:"usage",slug:"/usage/markdown-math",permalink:"/usage/markdown-math",editUrl:"https://github.com/standardnotes/app/blob/main/packages/docs/docs/usage/markdown-math.md",version:"current",lastUpdatedAt:1671469756,formattedLastUpdatedAt:"12/19/2022",sidebar_label:"Markdown Math",frontMatter:{id:"markdown-math",title:"Markdown Math",sidebar_label:"Markdown Math",description:"How to use the Standard Notes Markdown Math editor.",keywords:["standard notes","docs","notes app","end-to-end encryption","markdown math"],image:"/img/logo.png",hide_title:!1,hide_table_of_contents:!1},sidebar:"mainSidebar",previous:{title:"Markdown Basic Editor",permalink:"/usage/markdown-basic"},next:{title:"Markdown Pro",permalink:"/usage/markdown-pro"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Features",id:"features",children:[]},{value:"Style Guide",id:"style-guide",children:[]},{value:"Tables",id:"tables",children:[]},{value:"KaTeX",id:"katex",children:[{value:"KaTeX Tables",id:"katex-tables",children:[]}]},{value:"Further Resources",id:"further-resources",children:[]}],l={toc:c};function i(e){var a=e.components,t=Object(n.a)(e,p);return Object(m.b)("wrapper",Object(s.a)({},l,t,{components:a,mdxType:"MDXLayout"}),Object(m.b)("h2",{id:"introduction"},"Introduction"),Object(m.b)("p",null,"The Markdown Math editor (aka Math Editor) is a ",Object(m.b)("a",{parentName:"p",href:"https://standardnotes.com/help/77/what-are-editors"},"derived editor")," for Standard Notes. It is derived from the ",Object(m.b)("a",{parentName:"p",href:"https://github.com/parpalak/upmath.me"},"Upmath")," editor by ",Object(m.b)("a",{parentName:"p",href:"https://github.com/parpalak"},"Roman Parpalak"),", but uses ",Object(m.b)("a",{parentName:"p",href:"https://katex.org"},"KaTeX")," for client-side rendering. Because the original Upmath editor and the Markdown Math editor render math using slightly different methods, some TeX libraries and their environments may be available in the Upmath editor but not in the Markdown Math editor. For a full list of functions supported by KaTeX, please see the ",Object(m.b)("a",{parentName:"p",href:"https://katex.org/docs/supported.html"},"official KaTeX documentation"),"."),Object(m.b)("h2",{id:"features"},"Features"),Object(m.b)("ul",null,Object(m.b)("li",{parentName:"ul"},Object(m.b)("span",{parentName:"li",className:"math math-inline"},Object(m.b)("span",{parentName:"span",className:"katex"},Object(m.b)("span",{parentName:"span",className:"katex-mathml"},Object(m.b)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("mtext",{parentName:"mrow"},"LaTeX")),Object(m.b)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\LaTeX")))),Object(m.b)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},Object(m.b)("span",{parentName:"span",className:"base"},Object(m.b)("span",{parentName:"span",className:"strut",style:{height:"0.89883em",verticalAlign:"-0.2155em"}}),Object(m.b)("span",{parentName:"span",className:"mord text"},Object(m.b)("span",{parentName:"span",className:"mord textrm"},"L"),Object(m.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"-0.36em"}}),Object(m.b)("span",{parentName:"span",className:"vlist-t"},Object(m.b)("span",{parentName:"span",className:"vlist-r"},Object(m.b)("span",{parentName:"span",className:"vlist",style:{height:"0.68333em"}},Object(m.b)("span",{parentName:"span",style:{top:"-2.904999em"}},Object(m.b)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),Object(m.b)("span",{parentName:"span",className:"mord"},Object(m.b)("span",{parentName:"span",className:"mord textrm mtight sizing reset-size6 size3"},"A")))))),Object(m.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"-0.15em"}}),Object(m.b)("span",{parentName:"span",className:"mord text"},Object(m.b)("span",{parentName:"span",className:"mord textrm"},"T"),Object(m.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"-0.1667em"}}),Object(m.b)("span",{parentName:"span",className:"vlist-t vlist-t2"},Object(m.b)("span",{parentName:"span",className:"vlist-r"},Object(m.b)("span",{parentName:"span",className:"vlist",style:{height:"0.46782999999999997em"}},Object(m.b)("span",{parentName:"span",style:{top:"-2.7845em"}},Object(m.b)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),Object(m.b)("span",{parentName:"span",className:"mord"},Object(m.b)("span",{parentName:"span",className:"mord textrm"},"E")))),Object(m.b)("span",{parentName:"span",className:"vlist-s"},"\u200b")),Object(m.b)("span",{parentName:"span",className:"vlist-r"},Object(m.b)("span",{parentName:"span",className:"vlist",style:{height:"0.2155em"}},Object(m.b)("span",{parentName:"span"})))),Object(m.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"-0.125em"}}),Object(m.b)("span",{parentName:"span",className:"mord textrm"},"X")))))))," math rendering via ",Object(m.b)("a",{parentName:"li",href:"https://katex.org"},Object(m.b)("span",{parentName:"a",className:"math math-inline"},Object(m.b)("span",{parentName:"span",className:"katex"},Object(m.b)("span",{parentName:"span",className:"katex-mathml"},Object(m.b)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("mtext",{parentName:"mrow"},"KaTeX")),Object(m.b)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\KaTeX")))),Object(m.b)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},Object(m.b)("span",{parentName:"span",className:"base"},Object(m.b)("span",{parentName:"span",className:"strut",style:{height:"0.89883em",verticalAlign:"-0.2155em"}}),Object(m.b)("span",{parentName:"span",className:"mord text"},Object(m.b)("span",{parentName:"span",className:"mord textrm"},"K"),Object(m.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"-0.17em"}}),Object(m.b)("span",{parentName:"span",className:"vlist-t"},Object(m.b)("span",{parentName:"span",className:"vlist-r"},Object(m.b)("span",{parentName:"span",className:"vlist",style:{height:"0.68333em"}},Object(m.b)("span",{parentName:"span",style:{top:"-2.904999em"}},Object(m.b)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),Object(m.b)("span",{parentName:"span",className:"mord"},Object(m.b)("span",{parentName:"span",className:"mord textrm mtight sizing reset-size6 size3"},"A")))))),Object(m.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"-0.15em"}}),Object(m.b)("span",{parentName:"span",className:"mord text"},Object(m.b)("span",{parentName:"span",className:"mord textrm"},"T"),Object(m.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"-0.1667em"}}),Object(m.b)("span",{parentName:"span",className:"vlist-t vlist-t2"},Object(m.b)("span",{parentName:"span",className:"vlist-r"},Object(m.b)("span",{parentName:"span",className:"vlist",style:{height:"0.46782999999999997em"}},Object(m.b)("span",{parentName:"span",style:{top:"-2.7845em"}},Object(m.b)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),Object(m.b)("span",{parentName:"span",className:"mord"},Object(m.b)("span",{parentName:"span",className:"mord textrm"},"E")))),Object(m.b)("span",{parentName:"span",className:"vlist-s"},"\u200b")),Object(m.b)("span",{parentName:"span",className:"vlist-r"},Object(m.b)("span",{parentName:"span",className:"vlist",style:{height:"0.2155em"}},Object(m.b)("span",{parentName:"span"})))),Object(m.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"-0.125em"}}),Object(m.b)("span",{parentName:"span",className:"mord textrm"},"X"))))))))),Object(m.b)("li",{parentName:"ul"},"Markdown with side-by-side live rendering"),Object(m.b)("li",{parentName:"ul"},"Option to view the HTML source of the rendered markdown"),Object(m.b)("li",{parentName:"ul"},"Option to overwrite the note text with the contents of a text file on local storage"),Object(m.b)("li",{parentName:"ul"},"Option to download the plain note text as a text file to save on local storage"),Object(m.b)("li",{parentName:"ul"},"Option to download the HTML source of the rendered text as a text file to save on local storage")),Object(m.b)("h2",{id:"style-guide"},"Style Guide"),Object(m.b)("table",null,Object(m.b)("thead",{parentName:"table"},Object(m.b)("tr",{parentName:"thead"},Object(m.b)("th",{parentName:"tr",align:"left"},"Result"),Object(m.b)("th",{parentName:"tr",align:"left"},"Markdown"))),Object(m.b)("tbody",{parentName:"table"},Object(m.b)("tr",{parentName:"tbody"},Object(m.b)("td",{parentName:"tr",align:"left"},Object(m.b)("strong",{parentName:"td"},"Bold")),Object(m.b)("td",{parentName:"tr",align:"left"},"*","*","text","*","*"," or ","_","_","text","_","_")),Object(m.b)("tr",{parentName:"tbody"},Object(m.b)("td",{parentName:"tr",align:"left"},Object(m.b)("em",{parentName:"td"},"Emphasize")),Object(m.b)("td",{parentName:"tr",align:"left"},"*","text","*"," or ","_","text","_")),Object(m.b)("tr",{parentName:"tbody"},Object(m.b)("td",{parentName:"tr",align:"left"},Object(m.b)("del",{parentName:"td"},"Strike-through")),Object(m.b)("td",{parentName:"tr",align:"left"},"~","~","text","~","~")),Object(m.b)("tr",{parentName:"tbody"},Object(m.b)("td",{parentName:"tr",align:"left"},"Link"),Object(m.b)("td",{parentName:"tr",align:"left"},"[text]","(","http://)")),Object(m.b)("tr",{parentName:"tbody"},Object(m.b)("td",{parentName:"tr",align:"left"},"Image"),Object(m.b)("td",{parentName:"tr",align:"left"},"![text]","(","http://)")),Object(m.b)("tr",{parentName:"tbody"},Object(m.b)("td",{parentName:"tr",align:"left"},Object(m.b)("inlineCode",{parentName:"td"},"Inline Code")),Object(m.b)("td",{parentName:"tr",align:"left"},"`","code","`")),Object(m.b)("tr",{parentName:"tbody"},Object(m.b)("td",{parentName:"tr",align:"left"},"Code Block"),Object(m.b)("td",{parentName:"tr",align:"left"},"`","`","`","language ",Object(m.b)("br",null),"code ",Object(m.b)("br",null),"`","`","`")),Object(m.b)("tr",{parentName:"tbody"},Object(m.b)("td",{parentName:"tr",align:"left"},"Unordered List"),Object(m.b)("td",{parentName:"tr",align:"left"},"*"," item ",Object(m.b)("br",null)," - item ",Object(m.b)("br",null)," + item")),Object(m.b)("tr",{parentName:"tbody"},Object(m.b)("td",{parentName:"tr",align:"left"},"Ordered List"),Object(m.b)("td",{parentName:"tr",align:"left"},"1. item")),Object(m.b)("tr",{parentName:"tbody"},Object(m.b)("td",{parentName:"tr",align:"left"},"Blockquote"),Object(m.b)("td",{parentName:"tr",align:"left"},">"," quote")),Object(m.b)("tr",{parentName:"tbody"},Object(m.b)("td",{parentName:"tr",align:"left"},"H1"),Object(m.b)("td",{parentName:"tr",align:"left"},"# Heading")),Object(m.b)("tr",{parentName:"tbody"},Object(m.b)("td",{parentName:"tr",align:"left"},"H2"),Object(m.b)("td",{parentName:"tr",align:"left"},"## Heading")),Object(m.b)("tr",{parentName:"tbody"},Object(m.b)("td",{parentName:"tr",align:"left"},"H3"),Object(m.b)("td",{parentName:"tr",align:"left"},"### Heading")),Object(m.b)("tr",{parentName:"tbody"},Object(m.b)("td",{parentName:"tr",align:"left"},"H4"),Object(m.b)("td",{parentName:"tr",align:"left"},"#### Heading")),Object(m.b)("tr",{parentName:"tbody"},Object(m.b)("td",{parentName:"tr",align:"left"},"Section Breaks"),Object(m.b)("td",{parentName:"tr",align:"left"},Object(m.b)("inlineCode",{parentName:"td"},"---")," or ",Object(m.b)("inlineCode",{parentName:"td"},"***"))))),Object(m.b)("h2",{id:"tables"},"Tables"),Object(m.b)("p",null,"Colons can be used to align columns.\nCopy this into your editor to see what it creates:"),Object(m.b)("pre",null,Object(m.b)("code",{parentName:"pre"},"| Tables           |      Are      |   Cool    |\n| ---------------- | :-----------: | --------: |\n| col 2 is         |   centered    |    \\$149   |\n| col 3 is         | right-aligned |    \\$4.17  |\n| privacy is       |    neat       |    \\$2.48  |\n| rows don't need to  |be pretty|     what? |\n| the last line is | unnecessary   |   really?\n| one more         |    row        |   Yay! \ud83d\ude06\n")),Object(m.b)("h2",{id:"katex"},Object(m.b)("span",{parentName:"h2",className:"math math-inline"},Object(m.b)("span",{parentName:"span",className:"katex"},Object(m.b)("span",{parentName:"span",className:"katex-mathml"},Object(m.b)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("mtext",{parentName:"mrow"},"KaTeX")),Object(m.b)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\KaTeX")))),Object(m.b)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},Object(m.b)("span",{parentName:"span",className:"base"},Object(m.b)("span",{parentName:"span",className:"strut",style:{height:"0.89883em",verticalAlign:"-0.2155em"}}),Object(m.b)("span",{parentName:"span",className:"mord text"},Object(m.b)("span",{parentName:"span",className:"mord textrm"},"K"),Object(m.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"-0.17em"}}),Object(m.b)("span",{parentName:"span",className:"vlist-t"},Object(m.b)("span",{parentName:"span",className:"vlist-r"},Object(m.b)("span",{parentName:"span",className:"vlist",style:{height:"0.68333em"}},Object(m.b)("span",{parentName:"span",style:{top:"-2.904999em"}},Object(m.b)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),Object(m.b)("span",{parentName:"span",className:"mord"},Object(m.b)("span",{parentName:"span",className:"mord textrm mtight sizing reset-size6 size3"},"A")))))),Object(m.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"-0.15em"}}),Object(m.b)("span",{parentName:"span",className:"mord text"},Object(m.b)("span",{parentName:"span",className:"mord textrm"},"T"),Object(m.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"-0.1667em"}}),Object(m.b)("span",{parentName:"span",className:"vlist-t vlist-t2"},Object(m.b)("span",{parentName:"span",className:"vlist-r"},Object(m.b)("span",{parentName:"span",className:"vlist",style:{height:"0.46782999999999997em"}},Object(m.b)("span",{parentName:"span",style:{top:"-2.7845em"}},Object(m.b)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),Object(m.b)("span",{parentName:"span",className:"mord"},Object(m.b)("span",{parentName:"span",className:"mord textrm"},"E")))),Object(m.b)("span",{parentName:"span",className:"vlist-s"},"\u200b")),Object(m.b)("span",{parentName:"span",className:"vlist-r"},Object(m.b)("span",{parentName:"span",className:"vlist",style:{height:"0.2155em"}},Object(m.b)("span",{parentName:"span"})))),Object(m.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"-0.125em"}}),Object(m.b)("span",{parentName:"span",className:"mord textrm"},"X")))))))),Object(m.b)("p",null,"The Markdown Math editor requires double dollar signs. For example, ",Object(m.b)("inlineCode",{parentName:"p"},"$$\\int_0^\\infty f(x)dx$$")," or ",Object(m.b)("inlineCode",{parentName:"p"},"$$\\pi$$")," should yield ",Object(m.b)("span",{parentName:"p",className:"math math-inline"},Object(m.b)("span",{parentName:"span",className:"katex"},Object(m.b)("span",{parentName:"span",className:"katex-mathml"},Object(m.b)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("msubsup",{parentName:"mrow"},Object(m.b)("mo",{parentName:"msubsup"},"\u222b"),Object(m.b)("mn",{parentName:"msubsup"},"0"),Object(m.b)("mi",{parentName:"msubsup",mathvariant:"normal"},"\u221e")),Object(m.b)("mi",{parentName:"mrow"},"f"),Object(m.b)("mo",{parentName:"mrow",stretchy:"false"},"("),Object(m.b)("mi",{parentName:"mrow"},"x"),Object(m.b)("mo",{parentName:"mrow",stretchy:"false"},")"),Object(m.b)("mi",{parentName:"mrow"},"d"),Object(m.b)("mi",{parentName:"mrow"},"x")),Object(m.b)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\int_0^\\infty f(x)dx")))),Object(m.b)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},Object(m.b)("span",{parentName:"span",className:"base"},Object(m.b)("span",{parentName:"span",className:"strut",style:{height:"1.215112em",verticalAlign:"-0.35582em"}}),Object(m.b)("span",{parentName:"span",className:"mop"},Object(m.b)("span",{parentName:"span",className:"mop op-symbol small-op",style:{marginRight:"0.19445em",position:"relative",top:"-0.0005599999999999772em"}},"\u222b"),Object(m.b)("span",{parentName:"span",className:"msupsub"},Object(m.b)("span",{parentName:"span",className:"vlist-t vlist-t2"},Object(m.b)("span",{parentName:"span",className:"vlist-r"},Object(m.b)("span",{parentName:"span",className:"vlist",style:{height:"0.8592920000000001em"}},Object(m.b)("span",{parentName:"span",style:{top:"-2.34418em",marginLeft:"-0.19445em",marginRight:"0.05em"}},Object(m.b)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),Object(m.b)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},Object(m.b)("span",{parentName:"span",className:"mord mtight"},"0"))),Object(m.b)("span",{parentName:"span",style:{top:"-3.2579000000000002em",marginRight:"0.05em"}},Object(m.b)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),Object(m.b)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},Object(m.b)("span",{parentName:"span",className:"mord mtight"},"\u221e")))),Object(m.b)("span",{parentName:"span",className:"vlist-s"},"\u200b")),Object(m.b)("span",{parentName:"span",className:"vlist-r"},Object(m.b)("span",{parentName:"span",className:"vlist",style:{height:"0.35582em"}},Object(m.b)("span",{parentName:"span"})))))),Object(m.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),Object(m.b)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),Object(m.b)("span",{parentName:"span",className:"mopen"},"("),Object(m.b)("span",{parentName:"span",className:"mord mathnormal"},"x"),Object(m.b)("span",{parentName:"span",className:"mclose"},")"),Object(m.b)("span",{parentName:"span",className:"mord mathnormal"},"d"),Object(m.b)("span",{parentName:"span",className:"mord mathnormal"},"x")))))," and ",Object(m.b)("span",{parentName:"p",className:"math math-inline"},Object(m.b)("span",{parentName:"span",className:"katex"},Object(m.b)("span",{parentName:"span",className:"katex-mathml"},Object(m.b)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("mi",{parentName:"mrow"},"\u03c0")),Object(m.b)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\pi")))),Object(m.b)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},Object(m.b)("span",{parentName:"span",className:"base"},Object(m.b)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),Object(m.b)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"\u03c0"))))),"."),Object(m.b)("p",null,"To use Display Mode in the KaTeX, use double dollar signs on new lines. For example,"),Object(m.b)("pre",null,Object(m.b)("code",{parentName:"pre",className:"language-latex"},"Text\n\n$$\n\\int_0^\\infty f(x)dx\n$$\n\nMore Text\n")),Object(m.b)("p",null,"should yield:"),Object(m.b)("p",null,"Text"),Object(m.b)("div",{className:"math math-display"},Object(m.b)("span",{parentName:"div",className:"katex-display"},Object(m.b)("span",{parentName:"span",className:"katex"},Object(m.b)("span",{parentName:"span",className:"katex-mathml"},Object(m.b)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("msubsup",{parentName:"mrow"},Object(m.b)("mo",{parentName:"msubsup"},"\u222b"),Object(m.b)("mn",{parentName:"msubsup"},"0"),Object(m.b)("mi",{parentName:"msubsup",mathvariant:"normal"},"\u221e")),Object(m.b)("mi",{parentName:"mrow"},"f"),Object(m.b)("mo",{parentName:"mrow",stretchy:"false"},"("),Object(m.b)("mi",{parentName:"mrow"},"x"),Object(m.b)("mo",{parentName:"mrow",stretchy:"false"},")"),Object(m.b)("mi",{parentName:"mrow"},"d"),Object(m.b)("mi",{parentName:"mrow"},"x")),Object(m.b)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\int_0^\\infty f(x)dx")))),Object(m.b)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},Object(m.b)("span",{parentName:"span",className:"base"},Object(m.b)("span",{parentName:"span",className:"strut",style:{height:"2.326242em",verticalAlign:"-0.9119499999999999em"}}),Object(m.b)("span",{parentName:"span",className:"mop"},Object(m.b)("span",{parentName:"span",className:"mop op-symbol large-op",style:{marginRight:"0.44445em",position:"relative",top:"-0.0011249999999999316em"}},"\u222b"),Object(m.b)("span",{parentName:"span",className:"msupsub"},Object(m.b)("span",{parentName:"span",className:"vlist-t vlist-t2"},Object(m.b)("span",{parentName:"span",className:"vlist-r"},Object(m.b)("span",{parentName:"span",className:"vlist",style:{height:"1.414292em"}},Object(m.b)("span",{parentName:"span",style:{top:"-1.7880500000000001em",marginLeft:"-0.44445em",marginRight:"0.05em"}},Object(m.b)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),Object(m.b)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},Object(m.b)("span",{parentName:"span",className:"mord mtight"},"0"))),Object(m.b)("span",{parentName:"span",style:{top:"-3.8129000000000004em",marginRight:"0.05em"}},Object(m.b)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),Object(m.b)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},Object(m.b)("span",{parentName:"span",className:"mord mtight"},"\u221e")))),Object(m.b)("span",{parentName:"span",className:"vlist-s"},"\u200b")),Object(m.b)("span",{parentName:"span",className:"vlist-r"},Object(m.b)("span",{parentName:"span",className:"vlist",style:{height:"0.9119499999999999em"}},Object(m.b)("span",{parentName:"span"})))))),Object(m.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),Object(m.b)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),Object(m.b)("span",{parentName:"span",className:"mopen"},"("),Object(m.b)("span",{parentName:"span",className:"mord mathnormal"},"x"),Object(m.b)("span",{parentName:"span",className:"mclose"},")"),Object(m.b)("span",{parentName:"span",className:"mord mathnormal"},"d"),Object(m.b)("span",{parentName:"span",className:"mord mathnormal"},"x")))))),Object(m.b)("p",null,"More Text"),Object(m.b)("h3",{id:"katex-tables"},Object(m.b)("span",{parentName:"h3",className:"math math-inline"},Object(m.b)("span",{parentName:"span",className:"katex"},Object(m.b)("span",{parentName:"span",className:"katex-mathml"},Object(m.b)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("mtext",{parentName:"mrow"},"KaTeX")),Object(m.b)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\KaTeX")))),Object(m.b)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},Object(m.b)("span",{parentName:"span",className:"base"},Object(m.b)("span",{parentName:"span",className:"strut",style:{height:"0.89883em",verticalAlign:"-0.2155em"}}),Object(m.b)("span",{parentName:"span",className:"mord text"},Object(m.b)("span",{parentName:"span",className:"mord textrm"},"K"),Object(m.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"-0.17em"}}),Object(m.b)("span",{parentName:"span",className:"vlist-t"},Object(m.b)("span",{parentName:"span",className:"vlist-r"},Object(m.b)("span",{parentName:"span",className:"vlist",style:{height:"0.68333em"}},Object(m.b)("span",{parentName:"span",style:{top:"-2.904999em"}},Object(m.b)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),Object(m.b)("span",{parentName:"span",className:"mord"},Object(m.b)("span",{parentName:"span",className:"mord textrm mtight sizing reset-size6 size3"},"A")))))),Object(m.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"-0.15em"}}),Object(m.b)("span",{parentName:"span",className:"mord text"},Object(m.b)("span",{parentName:"span",className:"mord textrm"},"T"),Object(m.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"-0.1667em"}}),Object(m.b)("span",{parentName:"span",className:"vlist-t vlist-t2"},Object(m.b)("span",{parentName:"span",className:"vlist-r"},Object(m.b)("span",{parentName:"span",className:"vlist",style:{height:"0.46782999999999997em"}},Object(m.b)("span",{parentName:"span",style:{top:"-2.7845em"}},Object(m.b)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),Object(m.b)("span",{parentName:"span",className:"mord"},Object(m.b)("span",{parentName:"span",className:"mord textrm"},"E")))),Object(m.b)("span",{parentName:"span",className:"vlist-s"},"\u200b")),Object(m.b)("span",{parentName:"span",className:"vlist-r"},Object(m.b)("span",{parentName:"span",className:"vlist",style:{height:"0.2155em"}},Object(m.b)("span",{parentName:"span"})))),Object(m.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"-0.125em"}}),Object(m.b)("span",{parentName:"span",className:"mord textrm"},"X")))))))," Tables"),Object(m.b)("p",null,"Please see ",Object(m.b)("a",{parentName:"p",href:"https://katex.org/docs/supported.html"},"here")," and ",Object(m.b)("a",{parentName:"p",href:"https://katex.org/docs/support_table.html"},"here")," for tables of all the functions and symbols that ",Object(m.b)("span",{parentName:"p",className:"math math-inline"},Object(m.b)("span",{parentName:"span",className:"katex"},Object(m.b)("span",{parentName:"span",className:"katex-mathml"},Object(m.b)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("mtext",{parentName:"mrow"},"KaTeX")),Object(m.b)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\KaTeX")))),Object(m.b)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},Object(m.b)("span",{parentName:"span",className:"base"},Object(m.b)("span",{parentName:"span",className:"strut",style:{height:"0.89883em",verticalAlign:"-0.2155em"}}),Object(m.b)("span",{parentName:"span",className:"mord text"},Object(m.b)("span",{parentName:"span",className:"mord textrm"},"K"),Object(m.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"-0.17em"}}),Object(m.b)("span",{parentName:"span",className:"vlist-t"},Object(m.b)("span",{parentName:"span",className:"vlist-r"},Object(m.b)("span",{parentName:"span",className:"vlist",style:{height:"0.68333em"}},Object(m.b)("span",{parentName:"span",style:{top:"-2.904999em"}},Object(m.b)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),Object(m.b)("span",{parentName:"span",className:"mord"},Object(m.b)("span",{parentName:"span",className:"mord textrm mtight sizing reset-size6 size3"},"A")))))),Object(m.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"-0.15em"}}),Object(m.b)("span",{parentName:"span",className:"mord text"},Object(m.b)("span",{parentName:"span",className:"mord textrm"},"T"),Object(m.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"-0.1667em"}}),Object(m.b)("span",{parentName:"span",className:"vlist-t vlist-t2"},Object(m.b)("span",{parentName:"span",className:"vlist-r"},Object(m.b)("span",{parentName:"span",className:"vlist",style:{height:"0.46782999999999997em"}},Object(m.b)("span",{parentName:"span",style:{top:"-2.7845em"}},Object(m.b)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),Object(m.b)("span",{parentName:"span",className:"mord"},Object(m.b)("span",{parentName:"span",className:"mord textrm"},"E")))),Object(m.b)("span",{parentName:"span",className:"vlist-s"},"\u200b")),Object(m.b)("span",{parentName:"span",className:"vlist-r"},Object(m.b)("span",{parentName:"span",className:"vlist",style:{height:"0.2155em"}},Object(m.b)("span",{parentName:"span"})))),Object(m.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"-0.125em"}}),Object(m.b)("span",{parentName:"span",className:"mord textrm"},"X")))))))," supports."),Object(m.b)("h2",{id:"further-resources"},"Further Resources"),Object(m.b)("ul",null,Object(m.b)("li",{parentName:"ul"},Object(m.b)("a",{parentName:"li",href:"https://github.com/sn-extensions/math-editor"},"GitHub")," - Development instructions, license (AGPL-3.0-or-later), and source code.")))}i.isMDXComponent=!0}}]);