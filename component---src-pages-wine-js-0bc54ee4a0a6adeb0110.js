"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[435],{5693:function(e,t,l){l.r(t);var a=l(5785),n=l(7294),r=l(682),c=l(2086),s=l(1945),i=l(4051),u=l(1555),m=l(3532),h=l(30);t.default=function(){let[e,t]=n.useState([]),[l,o]=n.useState("reds"),[E,Z]=(0,h.Z)("cart",[]);return"undefined"!=typeof window&&localStorage.clear(),n.useEffect((()=>{let e=[];fetch("https://api.sampleapis.com/wines/"+l).then((e=>e.json())).then((l=>{for(let t=0;t<l.length;t++)e.push(n.createElement(m.Z,{key:t,image:l[t].image,title:l[t].wine,price:59,handleClick:()=>{var e;e=l[t],E.push(e),console.table(E),Z((0,a.Z)(E))}}));t(e)}))}),[l]),n.createElement(r.Z,null,n.createElement("h1",null,"Wine Shop"),n.createElement(c.Z,{"aria-label":"Basic example"},n.createElement(s.Z,{variant:"secondary",onClick:()=>{o("reds")}},"Red Wine"),n.createElement(s.Z,{variant:"secondary",onClick:()=>{o("whites")}},"Whites Wine")),n.createElement(i.Z,null,n.createElement(u.Z,null,n.createElement(i.Z,null,e)),n.createElement(u.Z,{sm:3},n.createElement("h2",null,"Cart "),E.map(((e,t)=>n.createElement(i.Z,{key:t},n.createElement(u.Z,null,e.winery),n.createElement(u.Z,null,59)))),n.createElement(i.Z,null,"Total: ",59*E.length," Baht"))))}}}]);
//# sourceMappingURL=component---src-pages-wine-js-0bc54ee4a0a6adeb0110.js.map