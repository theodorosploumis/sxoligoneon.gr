(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{141:function(e,t,a){"use strict";a.r(t),a.d(t,"BlogPostTemplate",function(){return p}),a.d(t,"pageQuery",function(){return f});var n=a(0),r=a.n(n),c=a(4),i=a.n(c),l=a(159),o=a(156),s=a.n(o),u=a(149),m=a(155),d=a(157),p=function(e){var t=e.content,a=e.contentComponent,n=e.tags,c=e.title,i=e.helmet,o=a||d.b;return r.a.createElement("section",{className:"section"},i||"",r.a.createElement("div",{className:"container content"},r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column is-10"},r.a.createElement("h1",{className:"title is-size-3 has-text-weight-bold is-bold-light"},c),r.a.createElement(o,{content:t}),n&&n.length?r.a.createElement("div",{style:{marginTop:"4rem"}},r.a.createElement("h4",null,"Ταξινομήσεις"),r.a.createElement("ul",{className:"taglist"},n.map(function(e){return r.a.createElement("li",{key:e+"tag"},r.a.createElement(u.Link,{to:"/tags/"+Object(l.kebabCase)(e)+"/"},e))}))):null))))};p.propTypes={content:i.a.node.isRequired,contentComponent:i.a.func,title:i.a.string,helmet:i.a.object};var v=function(e){var t=e.data.markdownRemark;return r.a.createElement(m.a,null,r.a.createElement(p,{content:t.html,contentComponent:d.a,helmet:r.a.createElement(s.a,{titleTemplate:"%s"},r.a.createElement("title",null,""+t.frontmatter.title)),tags:t.frontmatter.tags,title:t.frontmatter.title}))};v.propTypes={data:i.a.shape({markdownRemark:i.a.object})},t.default=v;var f="3484305588"},149:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return v}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),c=a(4),i=a.n(c),l=a(148),o=a.n(l);a.d(t,"Link",function(){return o.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var s=a(150),u=a.n(s);a.d(t,"PageRenderer",function(){return u.a});var m=a(32);a.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function v(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},150:function(e,t,a){var n;e.exports=(n=a(152))&&n.default||n},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Σχολή Γονέων ΙΜ Σερρών & Νιγρίτης",description:"Ο επίσημος ιστότοπος της Σχολής Γονέων ΙΜ Σερρών & Νιγρίτης με εισηγήτρια της κ. Χάρη Δημητρακούδη."}}}}},152:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),c=a(4),i=a.n(c),l=a(51),o=a(2),s=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},153:function(e,t,a){e.exports=a.p+"static/logo-627517616967202489e592580f2fceb1.svg"},154:function(e,t,a){},155:function(e,t,a){"use strict";var n=a(151),r=a(0),c=a.n(r),i=a(156),l=a.n(i),o=a(149),s=(a(73),a(7)),u=a.n(s),m=a(153),d=a.n(m),p=function(e){function t(){return e.apply(this,arguments)||this}u()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);e.length>0&&e.forEach(function(e){e.addEventListener("click",function(){var t=e.dataset.target,a=document.getElementById(t);e.classList.toggle("is-active"),a.classList.toggle("is-active")})})},a.render=function(){return c.a.createElement("nav",{className:"navbar",role:"navigation","aria-label":"main-navigation"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"navbar-brand"},c.a.createElement(o.Link,{to:"/",className:"navbar-item logo",title:"Logo"},c.a.createElement("img",{src:d.a,alt:"Logo",style:{width:"200px"}})),c.a.createElement("div",{className:"navbar-burger burger","data-target":"navMenu"},c.a.createElement("span",null),c.a.createElement("span",null),c.a.createElement("span",null))),c.a.createElement("div",{id:"navMenu",className:"navbar-menu"},c.a.createElement("div",{className:"navbar-start has-text-centered"},c.a.createElement(o.Link,{className:"navbar-item",to:"/"},"Συναντήσεις"),c.a.createElement(o.Link,{className:"navbar-item",to:"/about"},"Η Σχολή"),c.a.createElement(o.Link,{className:"navbar-item",to:"/notes"},"Σημειώσεις"),c.a.createElement(o.Link,{className:"navbar-item",to:"/links"},"Σύνδεσμοι"),c.a.createElement(o.Link,{className:"navbar-item",to:"/media"},"Αρχείο"),c.a.createElement(o.Link,{className:"navbar-item",to:"/contact"},"Επικοινωνία")),c.a.createElement("div",{className:"navbar-end has-text-centered"}))))},t}(c.a.Component);a(154),t.a=function(e){var t=e.children;return c.a.createElement(o.StaticQuery,{query:"1529889140",render:function(e){return c.a.createElement("div",null,c.a.createElement(l.a,null,c.a.createElement("html",{lang:"el"}),c.a.createElement("title",null,e.site.siteMetadata.title),c.a.createElement("meta",{name:"description",content:e.site.siteMetadata.description}),c.a.createElement("link",{rel:"icon",type:"image/png",href:"/img/favicon-32x32.png",sizes:"32x32"}),c.a.createElement("meta",{property:"og:title",content:e.site.siteMetadata.title}),c.a.createElement("meta",{property:"og:url",content:"/"})),c.a.createElement(p,null),c.a.createElement("div",null,t))},data:n})}},157:function(e,t,a){"use strict";a.d(t,"a",function(){return l});var n=a(0),r=a.n(n),c=a(4),i=a.n(c),l=function(e){var t=e.content,a=e.className;return r.a.createElement("div",{className:a,dangerouslySetInnerHTML:{__html:t}})},o=function(e){var t=e.content,a=e.className;return r.a.createElement("div",{className:a},t)};o.propTypes={content:i.a.node,className:i.a.string},l.propTypes=o.propTypes,t.b=o}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-c5a89d4d7cdc14a0bef3.js.map