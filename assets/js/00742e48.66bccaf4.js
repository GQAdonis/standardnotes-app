(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{137:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,m=p["".concat(i,".").concat(u)]||p[u]||d[u]||r;return n?o.a.createElement(m,c(c({ref:t},s),{},{components:n})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},65:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(7),r=(n(0),n(137)),i=["components"],c={title:"Action Bar",sidebar_label:"Action Bar",description:"How to use the Standard Notes Action Bar.",keywords:["standard notes","docs","notes app","end-to-end encryption","action bar"],image:"/img/logo.png",hide_title:!1,hide_table_of_contents:!1},l={unversionedId:"usage/action-bar",id:"usage/action-bar",isDocsHomePage:!1,title:"Action Bar",description:"How to use the Standard Notes Action Bar.",source:"@site/docs/usage/action-bar.md",sourceDirName:"usage",slug:"/usage/action-bar",permalink:"/usage/action-bar",editUrl:"https://github.com/standardnotes/docs/edit/main/docs/usage/action-bar.md",version:"current",lastUpdatedAt:1670423947,formattedLastUpdatedAt:"12/7/2022",sidebar_label:"Action Bar",frontMatter:{title:"Action Bar",sidebar_label:"Action Bar",description:"How to use the Standard Notes Action Bar.",keywords:["standard notes","docs","notes app","end-to-end encryption","action bar"],image:"/img/logo.png",hide_title:!1,hide_table_of_contents:!1}},s=[{value:"Introduction",id:"introduction",children:[]},{value:"Information",id:"information",children:[]},{value:"Actions",id:"actions",children:[]},{value:"Development",id:"development",children:[]},{value:"License",id:"license",children:[]},{value:"Resources",id:"resources",children:[]}],b={toc:s};function p(e){var t=e.components,n=Object(o.a)(e,i);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"introduction"},"Introduction"),Object(r.b)("p",null,"The Action Bar is a utility bar for Standard Notes. It provides information about the current note and a few useful actions."),Object(r.b)("h2",{id:"information"},"Information"),Object(r.b)("p",null,"The Action Bar provides the following information:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The title of the note"),Object(r.b)("li",{parentName:"ul"},"The date and time when the note was created"),Object(r.b)("li",{parentName:"ul"},"The date and time when the note was last updated"),Object(r.b)("li",{parentName:"ul"},"The approximate number of words in the note (as determined by the spaces)"),Object(r.b)("li",{parentName:"ul"},"The approximate number of paragraphs in the note (as determined by line skips)"),Object(r.b)("li",{parentName:"ul"},"The number of characters in the note"),Object(r.b)("li",{parentName:"ul"},"The approximate read time of the note in minutes (approximated with a read speed of 200 words per minute)")),Object(r.b)("h2",{id:"actions"},"Actions"),Object(r.b)("p",null,"The Action Bar provides the following actions:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Copy the current date to your clipboard in the format ",Object(r.b)("inlineCode",{parentName:"li"},"Month/Date/Year, Hour:Minute AM/PM")),Object(r.b)("li",{parentName:"ul"},"Duplicate the note"),Object(r.b)("li",{parentName:"ul"},"Copy the contents of the note to your clipboard"),Object(r.b)("li",{parentName:"ul"},"Save the contents of the note to a file."),Object(r.b)("li",{parentName:"ul"},"Email the note. This creates and clicks a ",Object(r.b)("inlineCode",{parentName:"li"},"mailto:")," link with the note's title as the subject of the email and the note's content as the body of the email.")),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"The default extension for saving a note is ",Object(r.b)("inlineCode",{parentName:"p"},".txt"),". You can also save your files with ",Object(r.b)("inlineCode",{parentName:"p"},".md"),", ",Object(r.b)("inlineCode",{parentName:"p"},".html"),", and ",Object(r.b)("inlineCode",{parentName:"p"},".tex")," extensions. If you frequently export a note with a particular file extension, you can add the extension to the title of the note. For example, naming your note ",Object(r.b)("inlineCode",{parentName:"p"},"My Blog Post.md")," or ",Object(r.b)("inlineCode",{parentName:"p"},"Book.tex")," will export the notes as ",Object(r.b)("inlineCode",{parentName:"p"},".md")," and ",Object(r.b)("inlineCode",{parentName:"p"},".tex")," files, respectively."))),Object(r.b)("h2",{id:"development"},"Development"),Object(r.b)("p",null,"The Action Bar is written in JavaScript and compiled with Grunt."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Clone the ",Object(r.b)("a",{parentName:"li",href:"https://github.com/standardnotes/action-bar"},"action-bar")," repository from GitHub."),Object(r.b)("li",{parentName:"ol"},"Run ",Object(r.b)("inlineCode",{parentName:"li"},"npm install")," to install required dependencies."),Object(r.b)("li",{parentName:"ol"},"Ensure that either the Standard Notes desktop app is available for use or the web app is accessible. Use both locally or with an Extended account (or the extension will not load)."),Object(r.b)("li",{parentName:"ol"},"Follow the instructions ",Object(r.b)("a",{parentName:"li",href:"/extensions/local-setup"},"here")," to setup the extension locally.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"For the ",Object(r.b)("inlineCode",{parentName:"li"},"area")," property, use ",Object(r.b)("inlineCode",{parentName:"li"},"editor-stack")))),Object(r.b)("li",{parentName:"ol"},"Begin development! Upon making any changes to the code, run ",Object(r.b)("inlineCode",{parentName:"li"},"grunt")," to build the files to the ",Object(r.b)("inlineCode",{parentName:"li"},"dist")," folder.")),Object(r.b)("h2",{id:"license"},"License"),Object(r.b)("p",null,"The Action Bar is licensed under the GNU ",Object(r.b)("a",{parentName:"p",href:"https://github.com/standardnotes/action-bar/blob/master/LICENSE"},"AGPL-3.0-or-later"),"."),Object(r.b)("h2",{id:"resources"},"Resources"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/standardnotes/action-bar"},"GitHub"))))}p.isMDXComponent=!0}}]);