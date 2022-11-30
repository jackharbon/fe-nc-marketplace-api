(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return m}));var r=n(3),i=n(7),o=(n(0),n(98)),a={id:"get-item-by-id",title:"GET /api/items/:item_id",sidebar_position:3},c={unversionedId:"Items/get-item-by-id",id:"Items/get-item-by-id",isDocsHomePage:!1,title:"GET /api/items/:item_id",description:"Responds with the requested item",source:"@site/docs/Items/get-item-by-id.md",sourceDirName:"Items",slug:"/Items/get-item-by-id",permalink:"/docs/Items/get-item-by-id",version:"current",sidebarPosition:3,frontMatter:{id:"get-item-by-id",title:"GET /api/items/:item_id",sidebar_position:3},sidebar:"docsSidebar",previous:{title:"POST /api/items",permalink:"/docs/Items/post-items"},next:{title:"DELETE /api/items/:item_id",permalink:"/docs/Items/delete-item-by-id"}},s=[{value:"Example Response",id:"example-response",children:[]}],p={toc:s};function m(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Responds with the requested item"),Object(o.b)("h2",{id:"example-response"},"Example Response"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "item": {\n    "item_id": 1,\n    "item_name": "The Holy Grail",\n    "description": "Defo the real deal and not a prop from Indiana Jones",\n    "img_url": "https://test.com/The Holy Grail.jpg",\n    "price": 5000,\n    "category_name": "Relics"\n  }\n}\n')))}m.isMDXComponent=!0},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),m=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=m(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=m(n),d=r,f=l["".concat(a,".").concat(d)]||l[d]||u[d]||o;return n?i.a.createElement(f,c(c({ref:t},p),{},{components:n})):i.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<o;p++)a[p]=n[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);