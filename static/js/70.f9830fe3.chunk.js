"use strict";(self.webpackChunkadverts=self.webpackChunkadverts||[]).push([[70],{70:function(n,e,t){t.r(e),t.d(e,{default:function(){return kn}});var i=t(439),r=t(791),o=t(433),a=t(689),l=t(679);var s=t.p+"static/media/heart.282d936f414f4c6884ab9306a91dad67.svg";var c,d=t.p+"static/media/active.97847e9195943f61800c97807e735d4f.svg",p=t(168),u=t(686),x=u.Z.button(c||(c=(0,p.Z)(["\n  ","\n  padding: 14px 50px;\n  background-color: var(--button-bg-color);\n  color: white;\n  border: none;\n  border-radius: 12px;\n  font-family: Manrope;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.43;\n  letter-spacing: 0em;\n  text-align: center;\n\n  :hover,\n  :focus {\n    background-color: #0b44cd;\n    cursor: pointer;\n  }\n"])),(function(n){return n.longButton?"width: 100%;":""})),f=t(184),g=function(n){var e=n.text,t=n.type,i=n.onClick,r=n.longButton,o=void 0!==r&&r;return(0,f.jsx)(x,{type:t,onClick:i,longButton:!!o,children:e})};var h,m,v,b,j,Z,y,w,k,S,C,z,M,F,N,L,P,E,T,J,O,B,A,I,R,H,X=t.p+"static/media/x.f3cbdd58dc25ca7cbb3d242106b56fb9.svg",Y=t(164),q=u.Z.div(h||(h=(0,p.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--overlay-color);\n  z-index: 1200;\n"]))),D=u.Z.div(m||(m=(0,p.Z)(["\n  width: 450px;\n  background-color: white;\n  border-radius: 24px;\n  padding: 40px;\n  position: relative;\n"]))),G=u.Z.img(v||(v=(0,p.Z)(["\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  width: 24px;\n  height: 24px;\n  :hover, :focus{\n    transform: scale(1.2);\n    cursor:pointer;\n  }\n"]))),U=u.Z.div(b||(b=(0,p.Z)(["\n  height: 250px;\n  overflow: hidden;\n  background: #fff url(",") no-repeat center;\n  background-size: cover;\n  border-radius: 12px;\n"])),(function(n){return n.src})),$=u.Z.p(j||(j=(0,p.Z)(["\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 1.33;\n  letter-spacing: 0em;\n  text-align: left;\n  margin-top: 12px;\n"]))),_=u.Z.p(Z||(Z=(0,p.Z)(["\n  font-size: 12px;\n  line-height: 1.5;\n  letter-spacing: 0em;\n  text-align: left;\n  color: var(--semi-transparent);\n  margin-top: 4px;\n"]))),K=u.Z.p(y||(y=(0,p.Z)(["\n  font-size: 14px;\n  line-height: 1.43;\n  letter-spacing: 0em;\n  text-align: left;\n  margin-top: 14px;\n"]))),Q=u.Z.p(w||(w=(0,p.Z)(["\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.43;\n  letter-spacing: 0em;\n  text-align: left;\n  margin-top: 24px;\n"]))),V=u.Z.p(k||(k=(0,p.Z)(["\n  font-size: 12px;\n  line-height: 1.5;\n  letter-spacing: 0em;\n  text-align: left;\n  display: inline-block;\n  padding: 7px 14px;\n  background-color: var(--form-select-bg-color);\n  border-radius: 35px;\n  margin-right: 8px;\n  margin-top: 8px;\n"]))),W=u.Z.span(S||(S=(0,p.Z)(["\n  color: var(--button-bg-color);\n  font-weight: 600;\n"]))),nn=function(n){var e=n.onClose,t=n.item;return(0,r.useEffect)((function(){var n=function(n){"Escape"===n.code&&e()};return window.addEventListener("keydown",n),function(){return window.removeEventListener("keydown",n)}}),[e]),(0,Y.createPortal)((0,f.jsx)(q,{onClick:e,children:(0,f.jsxs)(D,{className:"card",children:[(0,f.jsx)(G,{alt:"X",src:X,onClick:e}),(0,f.jsx)(U,{src:t.img||t.photoLink}),(0,f.jsxs)($,{children:[t.make,(0,f.jsxs)("span",{style:{color:"#3470FF"},children:[" ",t.model,", "]}),t.year]}),(0,f.jsxs)(_,{children:[t.address.split(", ").slice(1).join(" | ")," | id: ",t.id," | Year: ",t.year," | Type: ",t.type]}),(0,f.jsxs)(_,{children:["Fuel Consumption: ",t.fuelConsumption," | Engine Size:"," ",t.engineSize]}),(0,f.jsx)(K,{children:t.description}),(0,f.jsx)(Q,{children:"Accessories and functionalities:"}),(0,f.jsx)(_,{children:t.accessories.join(" | ")}),(0,f.jsx)(_,{children:t.functionalities.join(" | ")}),(0,f.jsx)(Q,{children:"Rental Conditions: "}),(0,f.jsxs)("div",{style:{marginBottom:"24px"},children:[t.rentalConditions.split("\n").map((function(n){return n.includes(":")?(0,f.jsxs)(V,{children:[n.split(":")[0]," : ",(0,f.jsx)(W,{children:n.split(":")[1]})]},n):(0,f.jsx)(V,{children:n},n)})),(0,f.jsxs)(V,{children:["Mileage :"," ",(0,f.jsx)(W,{children:t.mileage.toString().split("").toSpliced(-3,0,",").join("")})]}),(0,f.jsxs)(V,{children:["Price : ",(0,f.jsxs)(W,{children:[t.rentalPrice.slice(1),"$"]})]})]}),(0,f.jsx)(g,{type:"button",text:"Rent a car",onClick:function(){return window.open("tel:+380730000000","_self")}})]})}),document.querySelector("#modal"))},en=u.Z.div(C||(C=(0,p.Z)(["\n  width: 274px;\n  position: relative;\n"]))),tn=u.Z.div(z||(z=(0,p.Z)(["\n  height: 274px;\n  overflow: hidden;\n  background: #fff url(",") no-repeat center;\n  background-size: cover;\n  border-radius: 12px;\n"])),(function(n){return n.src})),rn=u.Z.img(M||(M=(0,p.Z)(["\n  position: absolute;\n  top: 14px;\n  right: 14px;\n  cursor: pointer;\n\n  :hover,\n  :focus {\n    transform: scale(1.2);\n  }\n"]))),on=u.Z.p(F||(F=(0,p.Z)(["\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 24px;\n  letter-spacing: 0em;\n  text-align: left;\n  margin-top: 14px;\n  margin-bottom: 8px;\n  display:flex;\n"]))),an=u.Z.p(N||(N=(0,p.Z)(["\n  font-size: 12px;\n  line-height: 1.5;\n  letter-spacing: 0em;\n  text-align: left;\n  color: var(--semi-transparent);\n  margin-top: 4px;\n  margin-bottom: 28px;\n"]))),ln=function(n){var e=n.item,t=n.favorite,o=n.handleFavorite,a=(0,r.useState)(!1),l=(0,i.Z)(a,2),c=l[0],p=l[1],u=e.img,x=e.photoLink,h=e.make,m=e.model,v=e.year,b=e.rentalPrice,j=e.address,Z=e.rentalCompany,y=e.type,w=e.id,k=e.functionalities;return(0,f.jsxs)(en,{children:[(0,f.jsx)(rn,{alt:"heart",src:null!==t&&void 0!==t&&t.includes(w)?d:s,onClick:function(){return o(w)}}),(0,f.jsx)(tn,{src:u||x}),(0,f.jsxs)(on,{children:[h,(h+m+v).length<25&&(0,f.jsx)("span",{style:{color:"#3470FF",marginLeft:"5px"},children:m}),", ",v,(0,f.jsx)("span",{style:{display:"inline-block",marginLeft:"auto"},children:b})]}),(0,f.jsxs)(an,{children:[j.split(", ").slice(1).join(" | ")," | ",Z," | ",y," |"," ",k[0]]}),(0,f.jsx)(g,{type:"button",text:"Learn more",onClick:function(){return p(!0)},longButton:!0}),c&&(0,f.jsx)(nn,{onClose:function(n){var e,t,i;"X"!==(null===n||void 0===n||null===(e=n.target)||void 0===e?void 0:e.alt)&&(null===n||void 0===n||null===(t=n.target)||void 0===t?void 0:t.className)!==(null===n||void 0===n||null===(i=n.currentTarget)||void 0===i?void 0:i.className)||p(!1)},item:e})]})},sn=t(87),cn=u.Z.ul(L||(L=(0,p.Z)(["\n  width: 100vw;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 50px 29px;\n  justify-content: center;\n"]))),dn=u.Z.button(P||(P=(0,p.Z)(["\n  border: none;\n  background-color: transparent;\n  font-family: Manrope;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.5;\n  letter-spacing: 0em;\n  text-align: center;\n  color: var(--button-bg-color);\n  cursor: pointer;\n  margin: 50px auto 10px auto;\n  display: inline-block;\n  text-decoration: underline;\n  padding: 10px 10px;\n\n  :hover,\n  :focus {\n    color: var(--button-bg-color-hover);\n  }\n"]))),pn=u.Z.div(E||(E=(0,p.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),un=(0,u.Z)(sn.rU)(T||(T=(0,p.Z)(["\n  color: var(--button-bg-color);\n  margin-top: 10px;\n  background-color: var(--form-select-bg-color);\n  padding: 14px 50px;\n  border-radius: 12px;\n\n  :hover,\n  :focus {\n    color: var(--button-bg-color-hover);\n    text-decoration: underline;\n  }\n"]))),xn=function(n,e){return 0===(null===e||void 0===e?void 0:e.length)?[]:null===n||void 0===n?void 0:n.filter((function(n){return e.includes(n.id)}))},fn=function(n){var e=n.filter,t=(0,l.J)().data,s=(0,a.TH)().pathname,c=(0,r.useState)(JSON.parse(localStorage.getItem("favorite"))||[]),d=(0,i.Z)(c,2),p=d[0],u=d[1],x=(0,r.useState)(1),g=(0,i.Z)(x,2),h=g[0],m=g[1];(0,r.useEffect)((function(){localStorage.setItem("favorite",JSON.stringify(p))}),[p]),(0,r.useEffect)((function(){m(1)}),[s]);var v=function(n,e){var t=e.brand,i=void 0===t?"":t,r=e.price,o=void 0===r?"":r,a=e.from,l=void 0===a?"":a,s=e.to,c=void 0===s?"":s;return""===i&&""===o&&""===l&&""===c?n:null===n||void 0===n?void 0:n.filter((function(n){var e=n.make,t=n.rentalPrice,r=n.mileage;return(""===i||i===e)&&Number(""===o?1/0:o)>Number(t.slice(1))&&Number(""===l?0:l)<=r&&Number(""===c?1/0:c)>=r}))}(t,e),b=s.includes("catalog")?v:xn(v,p),j=Math.ceil((null===b||void 0===b?void 0:b.length)/8),Z=null===b||void 0===b?void 0:b.slice(0,8*h),y=function(n){p.includes(n)?u((0,o.Z)(p).toSpliced(p.indexOf(n),1)):u([].concat((0,o.Z)(p),[n]))};return(0,f.jsxs)(f.Fragment,{children:[0===(null===Z||void 0===Z?void 0:Z.length)?(0,f.jsxs)("div",{children:[(0,f.jsx)(pn,{children:"Your favorite list is empty.Select some favorite cars from"}),(0,f.jsx)(pn,{children:(0,f.jsx)(un,{to:"/catalog",children:"CATALOG"})})]}):(0,f.jsx)(cn,{children:null===Z||void 0===Z?void 0:Z.map((function(n){return(0,f.jsx)(ln,{item:n,favorite:p,handleFavorite:y},n.id)}))}),j>h&&(0,f.jsx)(pn,{children:(0,f.jsx)(dn,{type:"button",onClick:function(n){m((function(n){return n+1}))},children:"Load more"})})]})},gn=u.Z.form(J||(J=(0,p.Z)(["\n  width: 100vw;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 18px;\n  justify-content: center;\n  align-items: flex-end;\n  margin-bottom: 50px;\n"]))),hn=u.Z.p(O||(O=(0,p.Z)(["\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 18px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: var(--form-label-text);\n  margin-bottom: 8px;\n"]))),mn=u.Z.select(B||(B=(0,p.Z)(["\n  font-family: Manrope;\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 20px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: var(--main-text);\n  padding-right: 50px;\n  padding-left: 18px;\n  border: none;\n  border-radius: 14px;\n  background-color: var(--form-select-bg-color);\n  height: 48px;\n  margin: 0;\n  appearance: none;\n  outline: none;\n"]))),vn=u.Z.img(A||(A=(0,p.Z)(["\n  position: absolute;\n  right: 13px;\n  bottom: 13px;\n"]))),bn=u.Z.option(I||(I=(0,p.Z)(["\n  font-family: Manrope;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 20px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: var(--near-full-transparent);\n"]))),jn=u.Z.input(R||(R=(0,p.Z)(["\n  font-family: Manrope;\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 20px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: var(--main-text);\n  border: none;\n  background-color: var(--form-select-bg-color);\n  outline: none;\n\n  :first-of-type {\n    border-top-left-radius: 14px;\n    border-bottom-left-radius: 14px;\n    border-right: 1px solid #8a8a89;\n    padding: 14px 18px 14px 75px;\n    width: 85px;\n  }\n\n  :last-of-type {\n    border-top-right-radius: 14px;\n    border-bottom-right-radius: 14px;\n    padding: 14px 18px 14px 50px;\n    width: 110px;\n  }\n"]))),Zn=u.Z.label(H||(H=(0,p.Z)(['\n  font-family: Manrope;\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 20px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: var(--main-text);\n\n  :before {\n    content: "From:";\n    position: absolute;\n    transform: translate(20px, 39px);\n  }\n  :after {\n    content: "To:";\n    position: absolute;\n    transform: translate(-160px, 14px);\n  }\n'])));var yn=t.p+"static/media/arrow.b752a2d4062e758145cdc132dcef5bfd.svg",wn=function(n){var e=n.setFilter,t=(0,l.J)().data,s=(0,r.useState)(""),c=(0,i.Z)(s,2),d=c[0],p=c[1],u=(0,r.useState)(""),x=(0,i.Z)(u,2),h=x[0],m=x[1],v=(0,r.useState)(""),b=(0,i.Z)(v,2),j=b[0],Z=b[1],y=(0,r.useState)(""),w=(0,i.Z)(y,2),k=w[0],S=w[1],C=(0,r.useState)(JSON.parse(localStorage.getItem("favorite"))||[]),z=(0,i.Z)(C,2),M=z[0],F=z[1],N=(0,a.TH)().pathname;(0,r.useEffect)((function(){return F(JSON.parse(localStorage.getItem("favorite"))||[])}),[N]);var L=function(n){return 0===(null===n||void 0===n?void 0:n.length)?[]:(0,o.Z)(new Set(null===n||void 0===n?void 0:n.map((function(n){return n.make})))).sort()}(N.includes("catalog")?t:xn(t,M)),P=t?function(n){return 0===n.length?[]:(0,o.Z)(Array(Math.ceil((Math.max.apply(Math,(0,o.Z)(null===n||void 0===n?void 0:n.map((function(n){return+n.rentalPrice.slice(1)}))))-Math.min.apply(Math,(0,o.Z)(null===n||void 0===n?void 0:n.map((function(n){return+n.rentalPrice.slice(1)})))))/10)+1)).map((function(e,t){return 10*Math.ceil(Math.min.apply(Math,(0,o.Z)(null===n||void 0===n?void 0:n.map((function(n){return+n.rentalPrice.slice(1)}))))/10)+10*t}))}(N.includes("catalog")?t:xn(t,M)):[];return(0,f.jsxs)(gn,{onSubmit:function(n){n.preventDefault(),e({brand:d,price:h,from:j,to:k})},children:[(0,f.jsxs)("label",{style:{position:"relative"},children:[(0,f.jsx)(hn,{children:"Car brand"}),(0,f.jsx)(vn,{alt:"arrow",src:yn}),(0,f.jsxs)(mn,{name:"cars",onChange:function(n){return p(n.target.value)},children:[(0,f.jsx)(bn,{value:"",children:"Choose a brand"}),null===L||void 0===L?void 0:L.map((function(n){return(0,f.jsx)(bn,{value:n,children:n},n)}))]})]}),(0,f.jsxs)("label",{style:{position:"relative"},children:[(0,f.jsx)(hn,{children:"Price per hour"}),(0,f.jsx)(vn,{alt:"arrow",src:yn}),(0,f.jsxs)(mn,{name:"price",onChange:function(n){return m(n.target.value)},children:[(0,f.jsx)(bn,{value:"",children:"max price"}),null===P||void 0===P?void 0:P.map((function(n){return(0,f.jsx)(bn,{value:n,children:n},n)}))]})]}),(0,f.jsxs)(Zn,{children:[(0,f.jsx)(hn,{children:"Car mileage / km"}),(0,f.jsx)(jn,{name:"from",type:"number",min:"0",max:"999999",value:j,onChange:function(n){return Z(n.target.value)}}),(0,f.jsx)(jn,{name:"to",type:"number",min:"0",max:"999999",value:k,onChange:function(n){return S(n.target.value)}})]}),(0,f.jsx)(g,{type:"submit",text:"Search"}),(0,f.jsx)(g,{type:"button",text:"Reset",onClick:function(n){e({}),Z(""),S(""),p(""),m(""),n.currentTarget.parentNode.reset()}})]})},kn=function(){var n=(0,r.useState)({}),e=(0,i.Z)(n,2),t=e[0],o=e[1];return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(wn,{setFilter:o}),(0,f.jsx)(fn,{filter:t})]})}}}]);
//# sourceMappingURL=70.f9830fe3.chunk.js.map