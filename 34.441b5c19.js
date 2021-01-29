(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{115:function(e,a,t){"use strict";var n=t(0),r=t(117);a.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},117:function(e,a,t){"use strict";var n=t(0),r=t.n(n).a.createContext(void 0);a.a=r},118:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(104),c=t(129),o=t(105),m=t(107),i=(t(57),t(3)),s=t(7),u=function(e){var a=e.color,t=void 0===a?"#161F31":a,n=Object(s.a)(e,["color"]);return r.a.createElement("svg",Object(i.a)({width:"13",height:"13",xmlns:"http://www.w3.org/2000/svg"},n),r.a.createElement("path",{d:"M11.807 12.578a.744.744 0 00.547-.224.744.744 0 00.224-.547.698.698 0 00-.234-.537L7.383 6.29l4.96-4.981a.698.698 0 00.235-.538.744.744 0 00-.224-.546.744.744 0 00-.547-.225.698.698 0 00-.537.234L6.29 5.195 1.308.235A.698.698 0 00.77 0a.744.744 0 00-.546.225A.744.744 0 000 .77c0 .215.078.394.234.538l4.961 4.98-4.96 4.98a.698.698 0 00-.235.538c0 .214.075.397.225.547.15.15.332.224.546.224a.698.698 0 00.538-.234l4.98-4.98 4.98 4.98a.698.698 0 00.538.234z",fill:t,fillRule:"nonzero"}))};var d=function(){var e,a=Object(m.a)(),t=a.isAnnouncementBarClosed,n=a.closeAnnouncementBar,c=Object(o.useThemeConfig)().announcementBar;if(!c)return null;var i=c.content,s=(c.backgroundColor,c.textColor,c.isCloseable);return!i||s&&t?null:r.a.createElement("div",{className:"announcementBar",role:"banner"},r.a.createElement("div",{className:Object(l.a)("announcementBarContent",(e={},e.announcementBarCloseable=s,e)),dangerouslySetInnerHTML:{__html:i}}),s?r.a.createElement("button",{type:"button",className:"announcementBarClose",onClick:n,"aria-label":"Close"},r.a.createElement(u,{color:"#FFFFFF"})):null)},b=t(141),f=t(130),E=t(115),g=t(131),v=t(123),h=t(124),p=t(142),k=t(128),_=(t(125),t(58)),N=t.n(_),w=function(e){var a=e.color,t=void 0===a?"#161F31":a,n=Object(s.a)(e,["color"]);return r.a.createElement("svg",Object(i.a)({width:"24",height:"18",xmlns:"http://www.w3.org/2000/svg"},n),r.a.createElement("g",{stroke:t,strokeWidth:"1.65",fill:"none",fillRule:"evenodd",strokeDasharray:"4.4",strokeLinecap:"round",strokeLinejoin:"round"},r.a.createElement("path",{d:"M1 16.95h24.2M1 9.25h24.2M1 1.55h24.2"})))},j="right";var O=function(){var e,a,t=Object(o.useThemeConfig)(),c=t.navbar,m=c.items,s=c.hideOnScroll,u=c.style,d=t.colorMode.disableSwitch,_=Object(n.useState)(!1),O=_[0],y=_[1],C=Object(n.useState)(!1),F=C[0],x=C[1],T=Object(E.a)(),L=T.isDarkTheme,B=T.setLightTheme,S=T.setDarkTheme,M=Object(g.a)(s),H=M.navbarRef,I=M.isNavbarVisible;Object(v.a)(O);var A=Object(n.useCallback)((function(){y(!0)}),[y]),D=Object(n.useCallback)((function(){y(!1)}),[y]),R=Object(n.useCallback)((function(e){return e.target.checked?S():B()}),[B,S]),U=Object(h.a)();Object(n.useEffect)((function(){U===h.b.desktop&&y(!1)}),[U]);var z=function(e){return{leftItems:e.filter((function(e){var a;return"left"===(null!==(a=e.position)&&void 0!==a?a:j)})),rightItems:e.filter((function(e){var a;return"right"===(null!==(a=e.position)&&void 0!==a?a:j)}))}}(m),P=z.leftItems,J=z.rightItems;return r.a.createElement("nav",{ref:H,className:Object(l.a)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===u,"navbar--primary":"primary"===u,"navbar-sidebar--show":O},e[N.a.navbarHideable]=s,e[N.a.navbarHidden]=!I,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=m&&0!==m.length&&r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:A,onKeyDown:A},r.a.createElement(w,{color:"#FFFFFF"})),r.a.createElement(k.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:Object(l.a)("navbar__title",(a={},a[N.a.hideLogoText]=F,a))}),P.map((function(e,a){return r.a.createElement(p.a,Object(i.a)({},e,{key:a}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},J.map((function(e,a){return r.a.createElement(p.a,Object(i.a)({},e,{key:a}))})),!d&&r.a.createElement(f.a,{className:N.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:L,onChange:R}),r.a.createElement(b.a,{handleSearchBarToggle:x,isSearchBarExpanded:F}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:D}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(k.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:D}),!d&&O&&r.a.createElement(f.a,{"aria-label":"Dark mode toggle in sidebar",checked:L,onChange:R})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},m.map((function(e,a){return r.a.createElement(p.a,Object(i.a)({mobile:!0},e,{onClick:D,key:a}))})))))))},y=t(110),C=t(103),F=t(59),x=t.n(F),T=function(e){var a=e.color,t=void 0===a?"#465282":a,n=Object(s.a)(e,["color"]);return r.a.createElement("svg",Object(i.a)({width:"785",height:"158",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},n),r.a.createElement("defs",null,r.a.createElement("path",{d:"M786.344 392.459c-41.822 22.164-258.313 110.84-305.056 135.477-46.742 24.637-72.163 23.812-108.246 6.57-36.082-17.24-267.334-111.664-309.156-131.377-41.822-19.713-42.642-33.657-1.64-49.271C103.25 338.265 332.86 247.94 381.243 229.875c48.383-18.065 65.604-18.065 106.605-2.473 41.003 15.614 256.674 100.996 297.676 115.785 41.002 14.791 42.642 27.912.82 49.273v-.001z",id:"a"}),r.a.createElement("mask",{id:"b",maskContentUnits:"userSpaceOnUse",maskUnits:"objectBoundingBox",x:"0",y:"0",width:"785",height:"331",fill:"#fff"},r.a.createElement("use",{xlinkHref:"#a"}))),r.a.createElement("use",{mask:"url(#b)",xlinkHref:"#a",transform:"translate(-32 -216)",stroke:t,strokeWidth:"4",fill:"none",fillRule:"evenodd",strokeDasharray:"3.637"}))};function L(e){var a=e.to,t=e.href,n=e.label,l=e.prependBaseUrlToHref,c=Object(s.a)(e,["to","href","label","prependBaseUrlToHref"]),o=Object(C.a)(a),m=Object(C.a)(t,{forcePrependBaseUrl:!0});return r.a.createElement(y.a,Object(i.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:l?m:t}:{to:o},c),n)}var B=function(e){var a=e.url,t=e.alt;return r.a.createElement("img",{className:"footer__logo",alt:t,src:a})};var S=function(){var e=Object(o.useThemeConfig)().footer,a=e||{},t=a.copyright,n=a.links,c=void 0===n?[]:n,m=a.logo,i=void 0===m?{}:m,s=Object(C.a)(i.src);return e?r.a.createElement("footer",{className:Object(l.a)("footer",{"footer--dark":"dark"===e.style})},r.a.createElement("div",{className:"container"},r.a.createElement(T,{className:"shape"}),r.a.createElement("img",{src:Object(C.a)("/img/code-2.png"),className:"code",alt:""}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--3"},i&&i.src&&r.a.createElement("div",null,i.href?r.a.createElement("a",{href:i.href,target:"_blank",rel:"noopener noreferrer",className:x.a.footerLogoLink},r.a.createElement(B,{alt:i.alt,url:s})):r.a.createElement(B,{alt:i.alt,url:s}))),r.a.createElement("div",{className:"col col--9"},c&&c.length>0&&r.a.createElement("div",{className:"row footer__links"},c.map((function(e,a){return r.a.createElement("div",{key:a,className:"col col--4 footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,a){return e.html?r.a.createElement("li",{key:a,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(L,e))}))):null)}))))),t?r.a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:t}}):null)):null},M=t(140),H=t(23),I=t(22),A=t(132);function D(e){var a=Object(I.default)(),t=a.siteConfig,n=a.i18n.currentLocale,l=t.favicon,c=t.themeConfig,m=c.image,s=c.metadatas,u=t.url,d=e.title,b=e.description,f=e.image,E=e.keywords,g=e.permalink,v=e.searchMetadatas,h=Object(o.useTitleFormatter)(d),p=f||m,k=Object(C.a)(p,{absolute:!0}),_=Object(C.a)(l),N=n.split("-")[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement(H.a,null,r.a.createElement("html",{lang:N}),h&&r.a.createElement("title",null,h),h&&r.a.createElement("meta",{property:"og:title",content:h}),l&&r.a.createElement("link",{rel:"shortcut icon",href:_}),b&&r.a.createElement("meta",{name:"description",content:b}),b&&r.a.createElement("meta",{property:"og:description",content:b}),E&&E.length&&r.a.createElement("meta",{name:"keywords",content:E.join(",")}),p&&r.a.createElement("meta",{property:"og:image",content:k}),p&&r.a.createElement("meta",{name:"twitter:image",content:k}),p&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+h}),g&&r.a.createElement("meta",{property:"og:url",content:u+g}),g&&r.a.createElement("link",{rel:"canonical",href:u+g}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.a.createElement("meta",{property:"og:image",content:Object(C.a)("/img/share.png")}),r.a.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com"}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Roboto+Mono:wght@400;500;600;700&display=swap",rel:"stylesheet"})),r.a.createElement(A.a,Object(i.a)({tag:o.DEFAULT_SEARCH_TAG,locale:n},v)),r.a.createElement(H.a,null,s.map((function(e,a){return r.a.createElement("meta",Object(i.a)({key:"metadata_"+a},e))}))))}var R=t(133);t(60);a.a=function(e){var a=e.children,t=e.noFooter,n=e.wrapperClassName;return Object(R.a)(),r.a.createElement(M.a,null,r.a.createElement(D,e),r.a.createElement(c.a,null),r.a.createElement(d,null),r.a.createElement(O,null),r.a.createElement("div",{className:Object(l.a)("main-wrapper",n)},a),!t&&r.a.createElement(S,null))}},121:function(e,a,t){"use strict";var n=t(3),r=t(7),l=t(0),c=t.n(l);a.a=function(e){var a=e.color,t=Object(r.a)(e,["color"]);return c.a.createElement("svg",Object(n.a)({width:"47",height:"11",xmlns:"http://www.w3.org/2000/svg"},t),c.a.createElement("g",{fill:"none",fillRule:"evenodd"},c.a.createElement("circle",{fill:a||"#CF5815",cx:"5.5",cy:"5.5",r:"5.5"}),c.a.createElement("circle",{fill:a||"#5961FF",cx:"23.5",cy:"5.5",r:"5.5"}),c.a.createElement("circle",{fill:a||"#14708D",cx:"41.5",cy:"5.5",r:"5.5"})))}},143:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(118),c=t(103),o=t(134),m=t.n(o),i=t(121);a.default=function(){return r.a.createElement(l.a,{title:"Page Not Found"},r.a.createElement("main",{className:"rds-404"},r.a.createElement("img",{src:Object(c.a)("/img/code-3.png"),className:"code",alt:""}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--8 col--offset-2"},r.a.createElement("div",{class:"terminal"},r.a.createElement("div",{className:"terminal-header"},r.a.createElement(i.a,{color:"#FFFFFF"})),r.a.createElement("div",{className:"terminal-body"},"404")),r.a.createElement("h1",{className:"title"},r.a.createElement(m.a,{strings:[">_ Page not found"],typeSpeed:75})),r.a.createElement("a",{href:"/",className:"link"},"Back to homepage"))))))}}}]);