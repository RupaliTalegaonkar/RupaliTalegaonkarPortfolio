(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{192:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(197),o=a(202);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,null),r.a.createElement("div",{id:"wrapper"},r.a.createElement("div",{id:"main"},r.a.createElement("section",null,r.a.createElement("div",{className:"container"},r.a.createElement("section",null,r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"Not a valid URL")))))))}},194:function(e,t,a){"use strict";a.d(t,"b",function(){return s});var n=a(0),r=a.n(n),i=a(66),o=a.n(i);a.d(t,"a",function(){return o.a});a(195),a(9).default.enqueue;var l=r.a.createContext({});function c(e){var t=e.staticQueryData,a=e.data,n=e.query,i=e.render,o=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,o&&i(o),!o&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var s=function(e){var t=e.data,a=e.query,n=e.render,i=e.children;return r.a.createElement(l.Consumer,null,function(e){return r.a.createElement(c,{data:t,query:a,render:n||i,staticQueryData:e})})}},195:function(e,t,a){var n;e.exports=(n=a(199))&&n.default||n},196:function(e,t,a){"use strict";var n=a(208),r=a.n(n),i=a(0),o=a.n(i);var l=function(e){return e.children},c=function(e){var t,a;function n(){var t;return(t=e.call(this)||this).handleClick=t.handleClick.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var i=n.prototype;return i.componentDidMount=function(){r.a.polyfill()},i.handleClick=function(e){e.preventDefault();var t=0,a=!0,n=this.props,r=n.type,i=n.element,o=n.offset,l=n.timeout;if(r&&i)switch(r){case"class":a=!!(t=document.getElementsByClassName(i)[0]);break;case"id":a=!!(t=document.getElementById(i))}a?this.scrollTo(t,o,l):console.log("Element not found: "+i)},i.scrollTo=function(e,t,a){void 0===t&&(t=0),void 0===a&&(a=null);var n=e?e.getBoundingClientRect().top+window.pageYOffset:0;a?setTimeout(function(){window.scroll({top:n+t,left:0,behavior:"smooth"})},a):window.scroll({top:n+t,left:0,behavior:"smooth"})},i.render=function(){return o.a.createElement(l,null,"object"==typeof this.props.children?o.a.cloneElement(this.props.children,{onClick:this.handleClick}):o.a.createElement("span",{onClick:this.handleClick},this.props.children))},n}(o.a.Component);t.a=c},197:function(e,t,a){"use strict";var n=a(198),r=a(0),i=a.n(r),o=a(203),l=a.n(o),c=a(194);a(206);var s=function(e){var t,a;function r(t){var a;return(a=e.call(this,t)||this).state={isPreloaded:!0},a}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var o=r.prototype;return o.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({isPreloaded:!1})},100)},o.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},o.render=function(){var e=this.props.children,t=this.state.isPreloaded;return i.a.createElement(c.b,{query:"1044757290",render:function(a){return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,{title:a.site.siteMetadata.title,meta:[{name:"description",content:"Eventually"},{name:"keywords",content:"site, web"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement("div",{className:t?"main-body is-preload":"main-body"},e))},data:n})},r}(r.Component);t.a=s},198:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Starter Prologue"}}}}},199:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),r=a.n(n),i=a(98);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null}},200:function(e,t){e.exports={siteTitle:"Gatsby Starter Prologue",manifestName:"Prologue",manifestShortName:"Landing",manifestStartUrl:"/",manifestBackgroundColor:"#663399",manifestThemeColor:"#663399",manifestDisplay:"standalone",manifestIcon:"src/assets/img/website-icon.png",pathPrefix:"/gatsby-starter-prologue/",authorName:"Rupali",heading:"Web Developer",socialLinks:[{icon:"fa-github",name:"Github",url:"https://github.com/RupaliTalegaonkar?tab=repositories"},{icon:"fa-twitter",name:"Twitter",url:"https://twitter.com"},{icon:"fa-facebook",name:"Facebook",url:"https://facebook.com"},{icon:"fa-envelope-o",name:"Email",url:"mailto:talegaonkar.rupali@gmail.com"}]}},201:function(e,t,a){e.exports=a.p+"static/avatar-68ac0f41f19cb0250d119850fe9f8f3f.png"},202:function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(49);function i(e){var t=e.socialLinks,a=void 0===t?[]:t;return r.a.createElement("div",{className:"bottom"},r.a.createElement("ul",{className:"icons"},a.map(function(e){var t=e.icon,a=e.name,n=e.url;return r.a.createElement("li",{key:n},r.a.createElement("a",{href:n,className:"icon "+t},r.a.createElement("span",{className:"label"},a)))})))}var o=a(194);function l(e){var t=e.title,a=e.heading,n=e.avatar;return r.a.createElement("div",{id:"logo"},r.a.createElement(o.a,{to:"/"},r.a.createElement("span",{className:"image avatar48"},r.a.createElement("img",{height:"128px",src:n,alt:""})),r.a.createElement("h1",{id:"title"},t),r.a.createElement("p",null,a)))}var c=a(207),s=a.n(c),u=a(196);function m(e){var t=e.sections,a=void 0===t?[]:t;return r.a.createElement("nav",{id:"nav"},r.a.createElement("ul",null,r.a.createElement(s.a,{items:a.map(function(e){return e.id}),currentClassName:"active",offset:-300},a.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(u.a,{type:"id",element:e.id},r.a.createElement("a",{href:"#"+e.id,id:"top-link"},r.a.createElement("span",{className:"icon "+e.icon},e.name))))}))))}function d(e){e.title;var t=e.onMenuClick,a=void 0===t?function(){}:t;return r.a.createElement("div",{id:"headerToggle"},r.a.createElement("a",{href:"/#",className:"toggle",onClick:function(e){e.preventDefault(),a()}}," "))}var f=a(200),p=a.n(f);a.d(t,"a",function(){return h});var v=a(201);function h(e){var t=e.sections,a=void 0===t?[]:t,o=Object(n.useState)(!1),c=o[0],s=o[1];return r.a.createElement("div",{className:c?"header-visible":" "},r.a.createElement(d,{title:p.a.authorName,onMenuClick:function(){return s(!c)}}),r.a.createElement("div",{id:"header"},r.a.createElement("div",{className:"top"},r.a.createElement(l,{avatar:v,title:p.a.authorName,heading:p.a.heading}),r.a.createElement(m,{sections:a})),r.a.createElement(i,{socialLinks:p.a.socialLinks})))}}}]);
//# sourceMappingURL=component---src-pages-404-js-52dd935875e5e9f896e6.js.map