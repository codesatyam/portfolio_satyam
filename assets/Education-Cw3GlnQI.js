import{R as u,j as e,e as x}from"./index-CXkempHz.js";import{P as o,t as g,m as v,c as b,R as N,C as y}from"./Col-DOYiRKPe.js";import{C as w}from"./Card-B5C3OmAB.js";import{C as O}from"./CardBody-YlkUTe8p.js";import{F as C}from"./index-CHA-Ovzf.js";import{C as R}from"./Container-23jwMyDJ.js";var P=["className","cssModule","color","innerRef","pill","tag"];function d(){return d=Object.assign?Object.assign.bind():function(s){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(s[r]=n[r])}return s},d.apply(this,arguments)}function T(s,i){if(s==null)return{};var n=_(s,i),r,a;if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(s);for(a=0;a<t.length;a++)r=t[a],!(i.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(s,r)&&(n[r]=s[r])}return n}function _(s,i){if(s==null)return{};var n={},r=Object.keys(s),a,t;for(t=0;t<r.length;t++)a=r[t],!(i.indexOf(a)>=0)&&(n[a]=s[a]);return n}var E={children:o.node,className:o.string,color:o.string,cssModule:o.object,innerRef:o.oneOfType([o.object,o.func,o.string]),pill:o.bool,tag:g};function m(s){var i=s.className,n=s.cssModule,r=s.color,a=r===void 0?"secondary":r,t=s.innerRef,l=s.pill,h=l===void 0?!1:l,p=s.tag,c=p===void 0?"span":p,f=T(s,P),j=v(b(i,"badge","bg-"+a,h?"rounded-pill":!1),n);return f.href&&c==="span"&&(c="a"),u.createElement(c,d({},f,{className:j,ref:t}))}m.propTypes=E;const M=({schoolName:s,subHeader:i,duration:n,desc:r,grade:a,descBullets:t})=>e.jsx(C,{direction:"left",duration:2e3,children:e.jsx(w,{className:"card-lift--hover shadow mt-4",children:e.jsx(O,{children:e.jsx("div",{className:"d-flex px-0 md:px-3",children:e.jsxs("div",{className:"pl-4",children:[e.jsx("h5",{className:"text-info",children:s}),e.jsx("h6",{children:i}),e.jsx(m,{color:"info",className:"mr-1",children:n}),a&&e.jsx(m,{color:"primary",className:"mr-1",children:a}),e.jsx("p",{className:"description mt-3",children:r}),e.jsx("ul",{children:t?t.map(l=>e.jsx("li",{children:l},l)):null})]})})})})}),z=()=>x&&e.jsxs("section",{className:"section pb-6 bg-gradient-info",id:"education",children:[e.jsxs(R,{children:[e.jsxs("div",{className:"d-flex px-3",children:[e.jsx("div",{children:e.jsx("div",{className:"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info",children:e.jsx("i",{className:"ni ni-books text-info"})})}),e.jsx("div",{className:"pl-4",children:e.jsx("h4",{className:"display-3 text-white",children:"Education"})})]}),e.jsx(N,{className:"row-grid align-items-center",children:x.map(s=>e.jsx(y,{className:"order-lg-1",lg:"6",children:e.jsx(M,{...s})},s.schoolName))})]}),e.jsx("div",{className:"separator separator-bottom separator-skew zindex-100",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",version:"1.1",viewBox:"0 0 2560 100",x:"0",y:"0",children:e.jsx("polygon",{className:"fill-white",points:"2560 0 2560 100 0 100"})})})]});export{z as default};