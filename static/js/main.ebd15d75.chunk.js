(this["webpackJsonpreact-typescript"]=this["webpackJsonpreact-typescript"]||[]).push([[0],{69:function(e,t,a){e.exports=a(88)},78:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9);const c=Object(n.createContext)({get services(){throw Error("services are not provided")}}),o=()=>Object(n.useContext)(c).services;var i=a(21),u=a(130),s=a(131),m=a(58),b=a(124),p=a(139),E=a(125),h=a(122),O=a(51);const g=({value:e})=>r.a.createElement(O.a,null,r.a.createElement("title",null,e)),d="Mutually exclusive options",v=()=>o().locationExtractor.getTitle(),j=()=>o().locationExtractor.getOptions(),C=Object(h.a)({root:{marginTop:"12%",marginBottom:"12%"}}),k=({children:e})=>{const t=C(),a=v()||d;return r.a.createElement(b.a,{in:!0,appear:!0},r.a.createElement(p.a,null,r.a.createElement(g,{value:a}),r.a.createElement(E.a,{className:t.root,maxWidth:"sm"},e)))};var y=a(27),S=a(129),f=a(127),x=a(141);const L=({name:e,label:t=e,value:a,onChange:n})=>r.a.createElement(f.a,{control:r.a.createElement(x.a,{checked:a,onChange:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(e=>n(e.target.checked)),name:e}),label:t}),A=()=>{const e=j(),t=Object(n.useState)(()=>P(e)),a=Object(i.a)(t,2),l=a[0],c=a[1],o=Object(n.useCallback)((e,t)=>{const a=Object.keys(l),n=a.indexOf(e),r=a.length>1?[...a.slice(0,n),...a.slice(n+1)]:[],o=r[Math.floor(Math.random()*r.length)];c(Object(y.a)(a=>{e in a&&(a[e]=t),t&&o in a&&(a[o]=!1)}))},[l]);return r.a.createElement(S.a,null,Object.keys(l).map(e=>r.a.createElement(L,{key:e,name:e,value:!!l[e],onChange:t=>o(e,t)})))},P=e=>e.reduce((e,t)=>(e[t]=!1,e),{});var W=a(132),w=a(133);const T=({onSubmit:e})=>{const t=v()||d,a=o().locationExtractor.getSubmitLabel()||"Accept";return r.a.createElement(k,null,r.a.createElement(u.a,null,r.a.createElement(s.a,null,r.a.createElement(m.a,{variant:"h4"},t),r.a.createElement(A,null)),r.a.createElement(W.a,null,r.a.createElement(w.a,{fullWidth:!0,variant:"contained",color:"primary",onClick:e},a))))},B=({onCreateClick:e})=>r.a.createElement(k,null,r.a.createElement(u.a,null,r.a.createElement(s.a,null,r.a.createElement(m.a,{variant:"h4"},"Wise choice!")),r.a.createElement(W.a,null,r.a.createElement(w.a,{fullWidth:!0,variant:"contained",color:"primary",onClick:e},"Share"))));var I=a(138),M=a(135),R=a(136),q=a(128),J=a(137),Q=a(140);const z=()=>{const e=o().locationExtractor,t=Object(n.useState)(""),a=Object(i.a)(t,2),l=a[0],c=a[1],b=Object(n.useState)({title:e.getTitle()||d,submitLabel:e.getSubmitLabel()||"Accept",options:e.getOptions()}),p=Object(i.a)(b,2),E=p[0],h=E.title,O=E.submitLabel,g=E.options,v=p[1],j=g.length>1,C=Object(n.useMemo)(()=>e.getShareLink({title:h,submitLabel:O,options:g}),[e,h,O,g]),S=Object(n.useRef)(null),f=Object(n.useCallback)(e=>v(Object(y.a)(t=>{t.title=e})),[]),x=Object(n.useCallback)(e=>v(Object(y.a)(t=>{t.submitLabel=e})),[]),L=Object(n.useCallback)(e=>{e&&(v(Object(y.a)(t=>{t.options.push(e)})),c(""))},[]),A=Object(n.useCallback)(e=>{v(Object(y.a)(t=>{t.options.splice(e,1)}))},[]),P=Object(n.useCallback)((e,t)=>{v(Object(y.a)(a=>{a.options[t]=e}))},[]),T=Object(n.useState)(!1),B=Object(i.a)(T,2),z=B[0],D=B[1],H=Object(n.useCallback)(()=>D(!1),[]),K=Object(n.useCallback)(()=>D(!0),[]),N=Object(n.useCallback)(()=>{var e,t;S.current&&(null===(e=S.current)||void 0===e||e.select(),null===(t=S.current)||void 0===t||t.setSelectionRange(0,9999),document.execCommand("copy"),K())},[K]);return r.a.createElement(k,null,r.a.createElement(u.a,null,r.a.createElement(s.a,null,r.a.createElement(m.a,{variant:"h4"},"Create and Share"),r.a.createElement(I.a,{fullWidth:!0,margin:"normal",variant:"outlined",label:"Title",value:h,onChange:e=>f(e.target.value)}),r.a.createElement(I.a,{fullWidth:!0,margin:"normal",variant:"outlined",label:"Submit Button Label",value:O,onChange:e=>x(e.target.value)}),g.map((e,t)=>r.a.createElement(M.a,{key:t,in:!0,appear:!0},r.a.createElement(I.a,{fullWidth:!0,margin:"normal",variant:"outlined",label:"Edit Option",value:e,onChange:e=>P(e.target.value,t),InputProps:{endAdornment:r.a.createElement(R.a,{position:"end"},r.a.createElement(q.a,{onClick:()=>A(t)},r.a.createElement(J.a,null,"close")))}}))),r.a.createElement(I.a,{fullWidth:!0,margin:"normal",variant:"outlined",label:"Add Option",value:l,onChange:e=>c(e.target.value),onBlur:e=>L(l),onKeyUp:e=>13===e.keyCode&&L(l)}),r.a.createElement(M.a,{in:!j,mountOnEnter:!0,unmountOnExit:!0},r.a.createElement(m.a,{variant:"caption"},"At least two options make sense")),r.a.createElement(M.a,{in:j,mountOnEnter:!0,unmountOnExit:!0},r.a.createElement(I.a,{fullWidth:!0,inputRef:S,margin:"normal",variant:"outlined",label:"Share",value:C,InputProps:{endAdornment:r.a.createElement(R.a,{position:"end"},r.a.createElement(q.a,{onClick:N},r.a.createElement(J.a,null,"share")))}}))),r.a.createElement(M.a,{in:j,mountOnEnter:!0,unmountOnExit:!0},r.a.createElement(W.a,null,r.a.createElement(w.a,{href:C,target:"_blank",startIcon:r.a.createElement(J.a,null,"launch"),variant:"contained",color:"primary",fullWidth:!0},"Open")))),r.a.createElement(Q.a,{message:"Link copied to clipboard",anchorOrigin:{vertical:"bottom",horizontal:"center"},open:z,autoHideDuration:6e3,onClose:H}))},D=()=>{const e=j(),t=Object(n.useState)(!1),a=Object(i.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(!1),u=Object(i.a)(o,2),s=u[0],m=u[1],b=Object(n.useCallback)(()=>{m(!0),c(!1)},[]);return s?r.a.createElement(z,null):l?r.a.createElement(B,{onCreateClick:b}):e.length>0?r.a.createElement(T,{onSubmit:()=>c(!0)}):r.a.createElement(z,null)};a(78);const H=({services:e})=>r.a.createElement(c.Provider,{value:{services:e}},r.a.createElement(D,null));var K=a(44);const N=document.getElementById("root");Object(l.render)(n.createElement(H,{services:{locationExtractor:new class extends class{constructor(e){this.location=e}parseQuery(){return Object(K.parse)(this.location.search)}parseParam(e){return this.parseQuery()[e]}parseStringParam(e){const t=this.parseParam(e);return"string"===typeof t?t:t instanceof Array?t[0]:void 0}parseArrayParam(e){const t=this.parseParam(e);return t instanceof Array?t:"string"===typeof t?[t]:[]}queryString(e){return Object(K.stringify)(e)}}{getTitle(){return this.parseStringParam("title")}getSubmitLabel(){return this.parseStringParam("submitLabel")}getOptions(){return this.parseArrayParam("option")}getShareLink({title:e,submitLabel:t,options:a}){return[this.location.origin,this.location.pathname,"?",this.queryString({title:e||d,submitLabel:t||"Accept",option:a||[]})].join("")}}(window.location)}}),N)}},[[69,1,2]]]);
//# sourceMappingURL=main.ebd15d75.chunk.js.map