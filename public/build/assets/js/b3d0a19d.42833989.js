(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{88:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return m}));var r=n(3),i=n(7),o=(n(0),n(98)),a={id:"post-items",title:"POST /api/items",sidebar_position:2},c={unversionedId:"Items/post-items",id:"Items/post-items",isDocsHomePage:!1,title:"POST /api/items",description:"Adds a new item.",source:"@site/docs/Items/post-items.md",sourceDirName:"Items",slug:"/Items/post-items",permalink:"/docs/Items/post-items",version:"current",sidebarPosition:2,frontMatter:{id:"post-items",title:"POST /api/items",sidebar_position:2},sidebar:"docsSidebar",previous:{title:"GET /api/items",permalink:"/docs/Items/get-items"},next:{title:"GET /api/items/:item_id",permalink:"/docs/Items/get-item-by-id"}},s=[{value:"Request Body",id:"request-body",children:[]},{value:"Example Response",id:"example-response",children:[]}],p={toc:s};function m(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Adds a new item."),Object(o.b)("h2",{id:"request-body"},"Request Body"),Object(o.b)("p",null,"Accepts the following keys:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"item_name: String ",Object(o.b)("strong",{parentName:"li"},"required")),Object(o.b)("li",{parentName:"ul"},"img_url: String ",Object(o.b)("strong",{parentName:"li"},"required")),Object(o.b)("li",{parentName:"ul"},"price: Integer - Prices are measured in pence. Set to zero for free items ",Object(o.b)("strong",{parentName:"li"},"required")),Object(o.b)("li",{parentName:"ul"},"description: String"),Object(o.b)("li",{parentName:"ul"},"category_name: String - existing category_name")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "item_name": "Test item",\n  "description": "testy mc test face",\n  "img_url": "https://test.com/Test-item.jpg",\n  "price": 100,\n  "category_name": "Relics"\n}\n')),Object(o.b)("h2",{id:"example-response"},"Example Response"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "item": {\n    "item_id": 10,\n    "item_name": "Test item",\n    "description": "testy mc test face",\n    "img_url": "https://test.com/Test-item.jpg",\n    "price": 100,\n    "category_name": "Relics"\n  }\n}\n')))}m.isMDXComponent=!0},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),m=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=m(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=m(n),b=r,d=l["".concat(a,".").concat(b)]||l[b]||u[b]||o;return n?i.a.createElement(d,c(c({ref:t},p),{},{components:n})):i.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<o;p++)a[p]=n[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);