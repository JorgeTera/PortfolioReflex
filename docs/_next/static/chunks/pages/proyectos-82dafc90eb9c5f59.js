(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[296],{3354:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/proyectos",function(){return r(9778)}])},6825:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return n}});let n=r(7677)._(r(6540)).default.createContext({})},8721:(e,t)=>{"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},6085:(e,t,r)=>{"use strict";var n=r(7836);Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return m},defaultHead:function(){return h}});let i=r(7677),o=r(544),s=r(4848),c=o._(r(6540)),d=i._(r(5076)),a=r(6825),l=r(1215),u=r(8721);function h(e){void 0===e&&(e=!1);let t=[(0,s.jsx)("meta",{charSet:"utf-8"},"charset")];return e||t.push((0,s.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")),t}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===c.default.Fragment?e.concat(c.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(7679);let f=["name","httpEquiv","charSet","itemProp"];function g(e,t){let{inAmpMode:r}=t;return e.reduce(p,[]).reverse().concat(h(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return i=>{let o=!0,s=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){s=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(let e=0,t=f.length;e<t;e++){let t=f[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?o=!1:r.add(t);else{let e=i.props[t],r=n[t]||new Set;("name"!==t||!s)&&r.has(e)?o=!1:(r.add(e),n[t]=r)}}}}return o}}()).reverse().map((e,t)=>{let i=e.key||t;if(n.env.__NEXT_OPTIMIZE_FONTS&&!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,c.default.cloneElement(e,t)}return c.default.cloneElement(e,{key:i})})}let m=function(e){let{children:t}=e,r=(0,c.useContext)(a.AmpStateContext),n=(0,c.useContext)(l.HeadManagerContext);return(0,s.jsx)(d.default,{reduceComponentsToState:g,headManager:n,inAmpMode:(0,u.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5076:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}});let n=r(6540),i=n.useLayoutEffect,o=n.useEffect;function s(e){let{headManager:t,reduceComponentsToState:r}=e;function s(){if(t&&t.mountedInstances){let i=n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(i,e))}}return i(()=>{var r;return null==t||null==(r=t.mountedInstances)||r.add(e.children),()=>{var r;null==t||null==(r=t.mountedInstances)||r.delete(e.children)}}),i(()=>(t&&(t._pendingUpdate=s),()=>{t&&(t._pendingUpdate=s)})),o(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},7679:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},9778:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var n=r(2445),i=r(6540),o=r(7338),s=r(1106),c=r.n(s),d=r(3368),a=r.n(d);function l(){return(0,n.FD)(i.Fragment,{children:[(0,n.FD)(o.Box,{children:[(0,n.FD)(o.Flex,{align:"start",className:"rx-Stack",css:{padding:"1rem",borderBottom:"1px solid #ccc"},direction:"row",gap:"3",children:[(0,n.Y)(o.Text,{as:"p",css:{fontSize:"2xl",fontWeight:"bold"},children:"Portfolio"}),(0,n.Y)(o.Flex,{css:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}}),(0,n.Y)(o.Link,{asChild:!0,css:{"&:hover":{color:"var(--accent-8)"}},children:(0,n.Y)(c(),{href:"/",passHref:!0,children:"Inicio"})}),(0,n.Y)(o.Link,{asChild:!0,css:{"&:hover":{color:"var(--accent-8)"}},children:(0,n.Y)(c(),{href:"/contacto",passHref:!0,children:"Contacto"})})]}),(0,n.FD)(o.Grid,{columns:{sm:"1",md:"2",lg:"3"},css:{gap:"1rem",padding:"2rem"},children:[(0,n.Y)(o.Link,{asChild:!0,css:{width:"100%","&:hover":{transform:"scale(1.05)",transition:"0.3s"}},children:(0,n.Y)(c(),{href:"https://github.com/tu_usuario/proyecto1",passHref:!0,children:(0,n.FD)(o.Box,{css:{padding:"1rem"},children:[(0,n.Y)(o.Box,{css:{width:"100%",height:"200px",overflow:"hidden"},children:(0,n.Y)("img",{css:{width:"100%",height:"200px",objectFit:"cover",borderRadius:"md"},src:"/grafica.png"})}),(0,n.FD)(o.Box,{css:{padding:"1rem",background:"rgba(0,0,0,0.8)",color:"white",borderRadius:"lg"},children:[(0,n.Y)(o.Text,{as:"p",css:{fontSize:"xl",fontWeight:"bold"},children:"Proyecto 1"}),(0,n.Y)(o.Text,{as:"p",children:"Descripci\xf3n breve del proyecto."}),(0,n.Y)(o.Button,{css:{href:"https://github.com/tu_usuario/proyecto1",target:"_blank"},children:"Ver en GitHub"})]})]})})}),(0,n.Y)(o.Link,{asChild:!0,css:{width:"100%","&:hover":{transform:"scale(1.05)",transition:"0.3s"}},children:(0,n.Y)(c(),{href:"https://github.com/tu_usuario/proyecto2",passHref:!0,children:(0,n.FD)(o.Box,{css:{padding:"1rem"},children:[(0,n.Y)(o.Box,{css:{width:"100%",height:"200px",overflow:"hidden"},children:(0,n.Y)("img",{css:{width:"100%",height:"200px",objectFit:"cover",borderRadius:"md"},src:"/skillset.png"})}),(0,n.FD)(o.Box,{css:{padding:"1rem",background:"rgba(0,0,0,0.8)",color:"white",borderRadius:"lg"},children:[(0,n.Y)(o.Text,{as:"p",css:{fontSize:"xl",fontWeight:"bold"},children:"Proyecto 2"}),(0,n.Y)(o.Text,{as:"p",children:"Otra descripci\xf3n breve."}),(0,n.Y)(o.Button,{css:{href:"https://github.com/tu_usuario/proyecto2",target:"_blank"},children:"Ver en GitHub"})]})]})})}),(0,n.Y)(o.Link,{asChild:!0,css:{width:"100%","&:hover":{transform:"scale(1.05)",transition:"0.3s"}},children:(0,n.Y)(c(),{href:"https://github.com/tu_usuario/proyecto2",passHref:!0,children:(0,n.FD)(o.Box,{css:{padding:"1rem"},children:[(0,n.Y)(o.Box,{css:{width:"100%",height:"200px",overflow:"hidden"},children:(0,n.Y)("img",{css:{width:"100%",height:"200px",objectFit:"cover",borderRadius:"md"},src:"/skillset.png"})}),(0,n.FD)(o.Box,{css:{padding:"1rem",background:"rgba(0,0,0,0.8)",color:"white",borderRadius:"lg"},children:[(0,n.Y)(o.Text,{as:"p",css:{fontSize:"xl",fontWeight:"bold"},children:"Proyecto 3"}),(0,n.Y)(o.Text,{as:"p",children:"Otra descripci\xf3n breve."}),(0,n.Y)(o.Button,{css:{href:"https://github.com/tu_usuario/proyecto2",target:"_blank"},children:"Ver en GitHub"})]})]})})})]})]}),(0,n.FD)(a(),{children:[(0,n.Y)("title",{children:"Portfolioreflex | Proyectos"}),(0,n.Y)("meta",{content:"favicon.ico",property:"og:image"})]})]})}},3368:(e,t,r)=>{e.exports=r(6085)}},e=>{var t=t=>e(e.s=t);e.O(0,[636,593,792],()=>t(3354)),_N_E=e.O()}]);