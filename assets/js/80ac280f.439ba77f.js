(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{114:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return c}));var r=n(3),o=n(7),i=(n(0),n(137)),a=["components"],s={slug:"file-uploads",id:"file-uploads",title:"File Uploads",sidebar_label:"File Uploads",description:"How to setup file uploading on your Standard Notes Standalone Server.",keywords:["standard notes","docs","notes app","end-to-end encryption","self-hosting","files","uploads","docker"],image:"/img/logo.png",hide_title:!1,hide_table_of_contents:!1},l={unversionedId:"self-hosting/file-uploads",id:"self-hosting/file-uploads",isDocsHomePage:!1,title:"File Uploads",description:"How to setup file uploading on your Standard Notes Standalone Server.",source:"@site/docs/self-hosting/file-uploads.md",sourceDirName:"self-hosting",slug:"/self-hosting/file-uploads",permalink:"/self-hosting/file-uploads",editUrl:"https://github.com/standardnotes/docs/edit/main/docs/self-hosting/file-uploads.md",version:"current",lastUpdatedAt:1670423947,formattedLastUpdatedAt:"12/7/2022",sidebar_label:"File Uploads",frontMatter:{slug:"file-uploads",id:"file-uploads",title:"File Uploads",sidebar_label:"File Uploads",description:"How to setup file uploading on your Standard Notes Standalone Server.",keywords:["standard notes","docs","notes app","end-to-end encryption","self-hosting","files","uploads","docker"],image:"/img/logo.png",hide_title:!1,hide_table_of_contents:!1},sidebar:"mainSidebar",previous:{title:"Subscriptions on your Standard Notes Standalone Server",permalink:"/self-hosting/subscriptions"},next:{title:"Client Encryption API",permalink:"/specification/encryption"}},u=[{value:"Requirements",id:"requirements",children:[]},{value:"Troubleshooting",id:"troubleshooting",children:[{value:"Files Server URL",id:"files-server-url",children:[]},{value:"Upload directory write permissions",id:"upload-directory-write-permissions",children:[]},{value:"Limiting Storage Quota",id:"limiting-storage-quota",children:[]},{value:"CloudFlare Missing Headers",id:"cloudflare-missing-headers",children:[]}]}],d={toc:u};function c(e){var t=e.components,n=Object(o.a)(e,a);return Object(i.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"requirements"},"Requirements"),Object(i.b)("p",null,"In order to upload files you have to have an active subscription for your user. Read the ",Object(i.b)("a",{parentName:"p",href:"/self-hosting/subscriptions"},"subscriptions")," page on instructions how to setup a subscription for yourself."),Object(i.b)("h2",{id:"troubleshooting"},"Troubleshooting"),Object(i.b)("h3",{id:"files-server-url"},"Files Server URL"),Object(i.b)("p",null,"In your ",Object(i.b)("inlineCode",{parentName:"p"},".env")," file the environment variable ",Object(i.b)("inlineCode",{parentName:"p"},"FILES_SERVER_URL")," has to be set to a publicly accessible url. The reason for that is that the clients are accessing the Files Server directly instead of via Api Gateway. Remember that if you are hosting your standalone instance on an external server then ",Object(i.b)("inlineCode",{parentName:"p"},"localhost")," is not the host that properly describes where the files server resides."),Object(i.b)("h3",{id:"upload-directory-write-permissions"},"Upload directory write permissions"),Object(i.b)("p",null,"The default upload directory is located inside the standalone folder under ",Object(i.b)("inlineCode",{parentName:"p"},"data/uploads"),". Depending on the running OS, you might encounter write permissions to that folder by the application. In that case the following commands might help:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"chmod -R 775 data\nmkdir -p data/uploads\nsudo chmod -R 755 data/uploads\nsudo chown -R 1001.1001 data/uploads\n")),Object(i.b)("h3",{id:"limiting-storage-quota"},"Limiting Storage Quota"),Object(i.b)("p",null,"If you would like to limit the file upload quota for your user then make sure to run the following query on your database:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sql"},'INSERT INTO subscription_settings(uuid, name, value, created_at, updated_at, user_subscription_uuid) VALUES (UUID(), "FILE_UPLOAD_BYTES_LIMIT", 10737418240, FLOOR(UNIX_TIMESTAMP(NOW(6))*1000000), FLOOR(UNIX_TIMESTAMP(NOW(6))*1000000), (SELECT us.uuid FROM user_subscriptions us INNER JOIN users u ON us.user_uuid=u.uuid WHERE u.email="EMAIL@ADDR"));\n')),Object(i.b)("p",null,"Note that this is setting the limit to 10GB (10737418240 bytes) for user with email ",Object(i.b)("inlineCode",{parentName:"p"},"EMAIL@ADDR")),Object(i.b)("h3",{id:"cloudflare-missing-headers"},"CloudFlare Missing Headers"),Object(i.b)("p",null,"When using CloudFlare in conjuction with Nginx you might encounter an issue about missing ",Object(i.b)("inlineCode",{parentName:"p"},"Accept-Ranges")," header which is required for file downloading. As a fix please add this to your Nginx configuration:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"proxy_cache off;\n")))}c.isMDXComponent=!0},137:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),d=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(n),b=r,f=c["".concat(a,".").concat(b)]||c[b]||p[b]||i;return n?o.a.createElement(f,s(s({ref:t},u),{},{components:n})):o.a.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);