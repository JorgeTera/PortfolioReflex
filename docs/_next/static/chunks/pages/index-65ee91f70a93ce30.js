(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[332],{7276:(e,r,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(8934)}])},6825:(e,r,t)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"AmpStateContext",{enumerable:!0,get:function(){return n}});let n=t(7677)._(t(6540)).default.createContext({})},8721:(e,r)=>{"use strict";function t(e){let{ampFirst:r=!1,hybrid:t=!1,hasQuery:n=!1}=void 0===e?{}:e;return r||t&&n}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isInAmpMode",{enumerable:!0,get:function(){return t}})},6085:(e,r,t)=>{"use strict";var n=t(7836);Object.defineProperty(r,"__esModule",{value:!0}),function(e,r){for(var t in r)Object.defineProperty(e,t,{enumerable:!0,get:r[t]})}(r,{default:function(){return g},defaultHead:function(){return p}});let i=t(7677),c=t(544),s=t(4848),a=c._(t(6540)),d=i._(t(5076)),o=t(6825),l=t(1215),h=t(8721);function p(e){void 0===e&&(e=!1);let r=[(0,s.jsx)("meta",{charSet:"utf-8"},"charset")];return e||r.push((0,s.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")),r}function u(e,r){return"string"==typeof r||"number"==typeof r?e:r.type===a.default.Fragment?e.concat(a.default.Children.toArray(r.props.children).reduce((e,r)=>"string"==typeof r||"number"==typeof r?e:e.concat(r),[])):e.concat(r)}t(7679);let f=["name","httpEquiv","charSet","itemProp"];function m(e,r){let{inAmpMode:t}=r;return e.reduce(u,[]).reverse().concat(p(t).reverse()).filter(function(){let e=new Set,r=new Set,t=new Set,n={};return i=>{let c=!0,s=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){s=!0;let r=i.key.slice(i.key.indexOf("$")+1);e.has(r)?c=!1:e.add(r)}switch(i.type){case"title":case"base":r.has(i.type)?c=!1:r.add(i.type);break;case"meta":for(let e=0,r=f.length;e<r;e++){let r=f[e];if(i.props.hasOwnProperty(r)){if("charSet"===r)t.has(r)?c=!1:t.add(r);else{let e=i.props[r],t=n[r]||new Set;("name"!==r||!s)&&t.has(e)?c=!1:(t.add(e),n[r]=t)}}}}return c}}()).reverse().map((e,r)=>{let i=e.key||r;if(n.env.__NEXT_OPTIMIZE_FONTS&&!t&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(r=>e.props.href.startsWith(r))){let r={...e.props||{}};return r["data-href"]=r.href,r.href=void 0,r["data-optimized-fonts"]=!0,a.default.cloneElement(e,r)}return a.default.cloneElement(e,{key:i})})}let g=function(e){let{children:r}=e,t=(0,a.useContext)(o.AmpStateContext),n=(0,a.useContext)(l.HeadManagerContext);return(0,s.jsx)(d.default,{reduceComponentsToState:m,headManager:n,inAmpMode:(0,h.isInAmpMode)(t),children:r})};("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),e.exports=r.default)},5076:(e,r,t)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return s}});let n=t(6540),i=n.useLayoutEffect,c=n.useEffect;function s(e){let{headManager:r,reduceComponentsToState:t}=e;function s(){if(r&&r.mountedInstances){let i=n.Children.toArray(Array.from(r.mountedInstances).filter(Boolean));r.updateHead(t(i,e))}}return i(()=>{var t;return null==r||null==(t=r.mountedInstances)||t.add(e.children),()=>{var t;null==r||null==(t=r.mountedInstances)||t.delete(e.children)}}),i(()=>(r&&(r._pendingUpdate=s),()=>{r&&(r._pendingUpdate=s)})),c(()=>(r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null),()=>{r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null)})),null}},7679:(e,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"warnOnce",{enumerable:!0,get:function(){return t}});let t=e=>{}},8934:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>w});var n=t(2445),i=t(6540),c=t(111),s=t(1106),a=t.n(s),d=t(2930);let o=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),l=function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return r.filter((e,r,t)=>!!e&&""!==e.trim()&&t.indexOf(e)===r).join(" ").trim()};var h={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let p=(0,i.forwardRef)((e,r)=>{let{color:t="currentColor",size:n=24,strokeWidth:c=2,absoluteStrokeWidth:s,className:a="",children:d,iconNode:o,...p}=e;return(0,i.createElement)("svg",{ref:r,...h,width:n,height:n,stroke:t,strokeWidth:s?24*Number(c)/Number(n):c,className:l("lucide",a),...p},[...o.map(e=>{let[r,t]=e;return(0,i.createElement)(r,t)}),...Array.isArray(d)?d:[d]])}),u=(e,r)=>{let t=(0,i.forwardRef)((t,n)=>{let{className:c,...s}=t;return(0,i.createElement)(p,{ref:n,iconNode:r,className:l("lucide-".concat(o(e)),c),...s})});return t.displayName="".concat(e),t},f=u("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]),m=u("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]),g=u("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]),x=u("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);var v=t(3368),Y=t.n(v);function w(){let e=(0,i.useRef)(null);return d.refs.ref_about=e,(0,n.FD)(i.Fragment,{children:[(0,n.Y)(c.Flex,{css:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,n.FD)(c.Flex,{align:"start",className:"rx-Stack",css:{height:"100vh"},direction:"column",gap:"3",children:[(0,n.FD)(c.Flex,{align:"start",className:"rx-Stack",css:{padding:"1rem",borderBottom:"1px solid #ccc",width:"100vw"},direction:"row",gap:"3",children:[(0,n.Y)(c.Text,{as:"p",css:{fontSize:"2xl",fontWeight:"bold"},children:"Mi Portafolio"}),(0,n.Y)(c.Flex,{css:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}}),(0,n.Y)(c.Link,{asChild:!0,css:{"&:hover":{color:"var(--accent-8)"}},children:(0,n.Y)(a(),{href:"#about",passHref:!0,children:"Sobre m\xed"})}),(0,n.Y)(c.Link,{asChild:!0,css:{"&:hover":{color:"var(--accent-8)"}},children:(0,n.Y)(a(),{href:"/proyectos",passHref:!0,children:"Proyectos"})}),(0,n.Y)(c.Link,{asChild:!0,css:{"&:hover":{color:"var(--accent-8)"}},children:(0,n.Y)(a(),{href:"#contact",passHref:!0,children:"Contacto"})})]}),(0,n.FD)(c.Flex,{align:"center",className:"rx-Stack",css:{padding:"4rem",width:"100vw"},direction:"column",gap:"3",children:[(0,n.Y)(c.Heading,{children:"\xa1Hola! Soy [Tu Nombre]"}),(0,n.Y)(c.Text,{as:"p",children:"Desarrollador apasionado por la tecnolog\xeda y la IA."}),(0,n.Y)(c.Button,{css:{borderRadius:"1em",boxShadow:"rgba(151, 65, 252, 0.8) 0 15px 30px -10px",backgroundImage:"linear-gradient(144deg,#AF40FF,#5B42F3 50%,#00DDEB)",boxSizing:"border-box",color:"white",opacity:1,href:"/proyectos"},children:"Proyectos!"})]}),(0,n.FD)(c.Box,{css:{padding:"4rem",width:"100%"},children:[(0,n.Y)(c.Heading,{id:"about",ref:e,children:"Sobre m\xed"}),(0,n.Y)(c.Text,{as:"p",children:"Aqu\xed puedes escribir sobre tu experiencia y habilidades."})]}),(0,n.Y)(c.Box,{children:(0,n.FD)(c.Grid,{columns:{sm:"1",md:"2",lg:"3"},css:{gap:"1rem",padding:"2rem"},children:[(0,n.Y)(c.Link,{asChild:!0,css:{width:"100%","&:hover":{transform:"scale(1.05)",transition:"0.3s"}},children:(0,n.Y)(a(),{href:"https://github.com/tu_usuario/proyecto1",passHref:!0,children:(0,n.FD)(c.Box,{css:{padding:"1rem"},children:[(0,n.Y)(c.Box,{css:{width:"100%",height:"200px",overflow:"hidden"},children:(0,n.Y)("img",{css:{width:"100%",height:"200px",objectFit:"cover",borderRadius:"md"},src:"/grafica.png"})}),(0,n.FD)(c.Box,{css:{padding:"1rem",background:"rgba(0,0,0,0.8)",color:"white",borderRadius:"lg"},children:[(0,n.Y)(c.Text,{as:"p",css:{fontSize:"xl",fontWeight:"bold"},children:"Proyecto 1"}),(0,n.Y)(c.Text,{as:"p",children:"Descripci\xf3n breve del proyecto."}),(0,n.Y)(c.Button,{css:{href:"https://github.com/tu_usuario/proyecto1",target:"_blank"},children:"Ver en GitHub"})]})]})})}),(0,n.Y)(c.Link,{asChild:!0,css:{width:"100%","&:hover":{transform:"scale(1.05)",transition:"0.3s"}},children:(0,n.Y)(a(),{href:"https://github.com/tu_usuario/proyecto2",passHref:!0,children:(0,n.FD)(c.Box,{css:{padding:"1rem"},children:[(0,n.Y)(c.Box,{css:{width:"100%",height:"200px",overflow:"hidden"},children:(0,n.Y)("img",{css:{width:"100%",height:"200px",objectFit:"cover",borderRadius:"md"},src:"/skillset.png"})}),(0,n.FD)(c.Box,{css:{padding:"1rem",background:"rgba(0,0,0,0.8)",color:"white",borderRadius:"lg"},children:[(0,n.Y)(c.Text,{as:"p",css:{fontSize:"xl",fontWeight:"bold"},children:"Proyecto 2"}),(0,n.Y)(c.Text,{as:"p",children:"Otra descripci\xf3n breve."}),(0,n.Y)(c.Button,{css:{href:"https://github.com/tu_usuario/proyecto2",target:"_blank"},children:"Ver en GitHub"})]})]})})}),(0,n.Y)(c.Link,{asChild:!0,css:{width:"100%","&:hover":{transform:"scale(1.05)",transition:"0.3s"}},children:(0,n.Y)(a(),{href:"https://github.com/tu_usuario/proyecto2",passHref:!0,children:(0,n.FD)(c.Box,{css:{padding:"1rem"},children:[(0,n.Y)(c.Box,{css:{width:"100%",height:"200px",overflow:"hidden"},children:(0,n.Y)("img",{css:{width:"100%",height:"200px",objectFit:"cover",borderRadius:"md"},src:"/skillset.png"})}),(0,n.FD)(c.Box,{css:{padding:"1rem",background:"rgba(0,0,0,0.8)",color:"white",borderRadius:"lg"},children:[(0,n.Y)(c.Text,{as:"p",css:{fontSize:"xl",fontWeight:"bold"},children:"Proyecto 3"}),(0,n.Y)(c.Text,{as:"p",children:"Otra descripci\xf3n breve."}),(0,n.Y)(c.Button,{css:{href:"https://github.com/tu_usuario/proyecto2",target:"_blank"},children:"Ver en GitHub"})]})]})})})]})}),(0,n.Y)("footer",{css:{width:"100%"},children:(0,n.FD)(c.Flex,{align:"start",className:"rx-Stack",css:{width:"100%"},direction:"column",gap:"5",children:[(0,n.FD)(c.Flex,{css:{"@media screen and (min-width: 0)":{flexDirection:"column"},"@media screen and (min-width: 30em)":{flexDirection:"column"},"@media screen and (min-width: 48em)":{flexDirection:"row"},width:"100%"},justify:"between",gap:"6",children:[(0,n.FD)(c.Flex,{css:{"@media screen and (min-width: 0)":{textAlign:"center"},"@media screen and (min-width: 30em)":{textAlign:"center"},"@media screen and (min-width: 48em)":{textAlign:"start"},flexDirection:"column"},gap:"4",children:[(0,n.Y)(c.Heading,{as:"h3",size:"4",weight:"bold",children:"PRODUCTS"}),(0,n.Y)(c.Link,{asChild:!0,css:{"&:hover":{color:"var(--accent-8)"}},children:(0,n.Y)(a(),{href:"/#",passHref:!0,children:(0,n.Y)(c.Text,{as:"p",size:"3",children:"Web Design"})})}),(0,n.Y)(c.Link,{asChild:!0,css:{"&:hover":{color:"var(--accent-8)"}},children:(0,n.Y)(a(),{href:"/#",passHref:!0,children:(0,n.Y)(c.Text,{as:"p",size:"3",children:"Web Development"})})}),(0,n.Y)(c.Link,{asChild:!0,css:{"&:hover":{color:"var(--accent-8)"}},children:(0,n.Y)(a(),{href:"/#",passHref:!0,children:(0,n.Y)(c.Text,{as:"p",size:"3",children:"E-commerce"})})}),(0,n.Y)(c.Link,{asChild:!0,css:{"&:hover":{color:"var(--accent-8)"}},children:(0,n.Y)(a(),{href:"/#",passHref:!0,children:(0,n.Y)(c.Text,{as:"p",size:"3",children:"Content Management"})})}),(0,n.Y)(c.Link,{asChild:!0,css:{"&:hover":{color:"var(--accent-8)"}},children:(0,n.Y)(a(),{href:"/#",passHref:!0,children:(0,n.Y)(c.Text,{as:"p",size:"3",children:"Mobile Apps"})})})]}),(0,n.FD)(c.Flex,{css:{"@media screen and (min-width: 0)":{textAlign:"center"},"@media screen and (min-width: 30em)":{textAlign:"center"},"@media screen and (min-width: 48em)":{textAlign:"start"},flexDirection:"column"},gap:"4",children:[(0,n.Y)(c.Heading,{as:"h3",size:"4",weight:"bold",children:"RESOURCES"}),(0,n.Y)(c.Link,{asChild:!0,css:{"&:hover":{color:"var(--accent-8)"}},children:(0,n.Y)(a(),{href:"/#",passHref:!0,children:(0,n.Y)(c.Text,{as:"p",size:"3",children:"Blog"})})}),(0,n.Y)(c.Link,{asChild:!0,css:{"&:hover":{color:"var(--accent-8)"}},children:(0,n.Y)(a(),{href:"/#",passHref:!0,children:(0,n.Y)(c.Text,{as:"p",size:"3",children:"Case Studies"})})}),(0,n.Y)(c.Link,{asChild:!0,css:{"&:hover":{color:"var(--accent-8)"}},children:(0,n.Y)(a(),{href:"/#",passHref:!0,children:(0,n.Y)(c.Text,{as:"p",size:"3",children:"Whitepapers"})})}),(0,n.Y)(c.Link,{asChild:!0,css:{"&:hover":{color:"var(--accent-8)"}},children:(0,n.Y)(a(),{href:"/#",passHref:!0,children:(0,n.Y)(c.Text,{as:"p",size:"3",children:"Webinars"})})}),(0,n.Y)(c.Link,{asChild:!0,css:{"&:hover":{color:"var(--accent-8)"}},children:(0,n.Y)(a(),{href:"/#",passHref:!0,children:(0,n.Y)(c.Text,{as:"p",size:"3",children:"E-books"})})})]}),(0,n.FD)(c.Flex,{css:{"@media screen and (min-width: 0)":{textAlign:"center"},"@media screen and (min-width: 30em)":{textAlign:"center"},"@media screen and (min-width: 48em)":{textAlign:"start"},flexDirection:"column"},gap:"4",children:[(0,n.Y)(c.Heading,{as:"h3",size:"4",weight:"bold",children:"ABOUT US"}),(0,n.Y)(c.Link,{asChild:!0,css:{"&:hover":{color:"var(--accent-8)"}},children:(0,n.Y)(a(),{href:"/#",passHref:!0,children:(0,n.Y)(c.Text,{as:"p",size:"3",children:"Our Team"})})}),(0,n.Y)(c.Link,{asChild:!0,css:{"&:hover":{color:"var(--accent-8)"}},children:(0,n.Y)(a(),{href:"/#",passHref:!0,children:(0,n.Y)(c.Text,{as:"p",size:"3",children:"Careers"})})}),(0,n.Y)(c.Link,{asChild:!0,css:{"&:hover":{color:"var(--accent-8)"}},children:(0,n.Y)(a(),{href:"/#",passHref:!0,children:(0,n.Y)(c.Text,{as:"p",size:"3",children:"Contact Us"})})}),(0,n.Y)(c.Link,{asChild:!0,css:{"&:hover":{color:"var(--accent-8)"}},children:(0,n.Y)(a(),{href:"/#",passHref:!0,children:(0,n.Y)(c.Text,{as:"p",size:"3",children:"Privacy Policy"})})}),(0,n.Y)(c.Link,{asChild:!0,css:{"&:hover":{color:"var(--accent-8)"}},children:(0,n.Y)(a(),{href:"/#",passHref:!0,children:(0,n.Y)(c.Text,{as:"p",size:"3",children:"Terms of Service"})})})]})]}),(0,n.Y)(c.Separator,{size:"4"}),(0,n.FD)(c.Flex,{css:{"@media screen and (min-width: 0)":{flexDirection:"column"},"@media screen and (min-width: 30em)":{flexDirection:"column"},"@media screen and (min-width: 48em)":{flexDirection:"row"},width:"100%"},gap:"4",children:[(0,n.FD)(c.Flex,{align:"center",className:"rx-Stack",css:{"@media screen and (min-width: 0)":{justifyContent:"center"},"@media screen and (min-width: 30em)":{justifyContent:"center"},"@media screen and (min-width: 48em)":{justifyContent:"start"},width:"100%"},direction:"row",gap:"2",children:[(0,n.Y)("img",{css:{width:"2em",height:"auto",borderRadius:"25%"},src:"/logo.jpg"}),(0,n.Y)(c.Text,{as:"p",css:{whiteSpace:"nowrap"},size:"3",weight:"medium",children:"\xa9 2024 Reflex, Inc"})]}),(0,n.FD)(c.Flex,{css:{"@media screen and (min-width: 0)":{justifyContent:"center"},"@media screen and (min-width: 30em)":{justifyContent:"center"},"@media screen and (min-width: 48em)":{justifyContent:"end"},width:"100%"},gap:"3",children:[(0,n.Y)(c.Link,{asChild:!0,css:{"&:hover":{color:"var(--accent-8)"}},children:(0,n.Y)(a(),{href:"/#",passHref:!0,children:(0,n.Y)(f,{css:{color:"var(--current-color)"}})})}),(0,n.Y)(c.Link,{asChild:!0,css:{"&:hover":{color:"var(--accent-8)"}},children:(0,n.Y)(a(),{href:"/#",passHref:!0,children:(0,n.Y)(m,{css:{color:"var(--current-color)"}})})}),(0,n.Y)(c.Link,{asChild:!0,css:{"&:hover":{color:"var(--accent-8)"}},children:(0,n.Y)(a(),{href:"/#",passHref:!0,children:(0,n.Y)(g,{css:{color:"var(--current-color)"}})})}),(0,n.Y)(c.Link,{asChild:!0,css:{"&:hover":{color:"var(--accent-8)"}},children:(0,n.Y)(a(),{href:"/#",passHref:!0,children:(0,n.Y)(x,{css:{color:"var(--current-color)"}})})})]})]})]})})]})}),(0,n.FD)(Y(),{children:[(0,n.Y)("title",{children:"Portfolioreflex | Index"}),(0,n.Y)("meta",{content:"favicon.ico",property:"og:image"})]})]})}},3368:(e,r,t)=>{e.exports=t(6085)}},e=>{var r=r=>e(e.s=r);e.O(0,[636,593,792],()=>r(7276)),_N_E=e.O()}]);