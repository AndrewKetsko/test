"use strict";(self.webpackChunkadverts=self.webpackChunkadverts||[]).push([[611],{106:function(n,e,t){t.r(e),t.d(e,{default:function(){return bn}});var i=t(439),r=t(791),o=t(433),a=t(689),l=t(679);var s=t.p+"static/media/heart.282d936f414f4c6884ab9306a91dad67.svg";var c,p=t.p+"static/media/active.97847e9195943f61800c97807e735d4f.svg",d=t(168),f=t(686),u=f.Z.button(c||(c=(0,d.Z)(["\n  ","\n  padding: 14px 50px;\n  background-color: #3470ff;\n  color: white;\n  border: none;\n  border-radius: 12px;\n  font-family: Manrope;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.43;\n  letter-spacing: 0em;\n  text-align: center;\n\n  :hover,\n  :focus {\n    background-color: #0b44cd;\n    cursor: pointer;\n  }\n"])),(function(n){return n.longButton?"width: 100%;":""})),x=t(184),g=function(n){var e=n.text,t=n.type,i=n.onClick,r=n.longButton,o=void 0!==r&&r;return(0,x.jsx)(u,{type:t,onClick:i,longButton:!!o,children:e})};var h,m,v,b,j,Z,y,w,k,C,S,z,M,F,N,L,P,E,T,B,J,O,I,R,X,q=t.p+"static/media/x.f3cbdd58dc25ca7cbb3d242106b56fb9.svg",A=t(164),D=f.Z.div(h||(h=(0,d.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n"]))),H=f.Z.div(m||(m=(0,d.Z)(["\n  width: 450px;\n  background-color: white;\n  border-radius: 24px;\n  padding: 40px;\n  position: relative;\n"]))),Y=f.Z.img(v||(v=(0,d.Z)(["\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  width: 24px;\n  height: 24px;\n  :hover, :focus{\n    transform: scale(1.2);\n    cursor:pointer;\n  }\n"]))),$=f.Z.div(b||(b=(0,d.Z)(["\n  height: 250px;\n  overflow: hidden;\n  background: #fff url(",") no-repeat center;\n  background-size: cover;\n  border-radius: 12px;\n"])),(function(n){return n.src})),_=f.Z.p(j||(j=(0,d.Z)(["\n  font-family: Manrope;\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 1.33;\n  letter-spacing: 0em;\n  text-align: left;\n  margin-top: 12px;\n"]))),G=f.Z.p(Z||(Z=(0,d.Z)(["\n  font-family: Manrope;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0em;\n  text-align: left;\n  color: rgba(18, 20, 23, 0.5);\n  margin-top: 4px;\n"]))),K=f.Z.p(y||(y=(0,d.Z)(["\n  font-family: Manrope;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.43;\n  letter-spacing: 0em;\n  text-align: left;\n  margin-top: 14px;\n"]))),Q=f.Z.p(w||(w=(0,d.Z)(["\n  font-family: Manrope;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.43;\n  letter-spacing: 0em;\n  text-align: left;\n  margin-top: 24px;\n"]))),U=f.Z.p(k||(k=(0,d.Z)(["\n  font-family: Manrope;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0em;\n  text-align: left;\n  display: inline-block;\n  padding: 7px 14px;\n  background-color: #f9f9f9;\n  border-radius: 35px;\n  margin-right: 8px;\n  margin-top: 8px;\n"]))),V=f.Z.span(C||(C=(0,d.Z)(["\n  color: #3470ff;\n  font-weight: 600;\n"]))),W=function(n){var e=n.onClose,t=n.item;return(0,r.useEffect)((function(){var n=function(n){"Escape"===n.code&&e()};return window.addEventListener("keydown",n),function(){return window.removeEventListener("keydown",n)}}),[e]),(0,A.createPortal)((0,x.jsx)(D,{onClick:e,children:(0,x.jsxs)(H,{className:"card",children:[(0,x.jsx)(Y,{alt:"X",src:q,onClick:e}),(0,x.jsx)($,{src:t.img||t.photoLink}),(0,x.jsxs)(_,{children:[t.make,(0,x.jsxs)("span",{style:{color:"#3470FF"},children:[" ",t.model,", "]}),t.year]}),(0,x.jsxs)(G,{children:[t.address.split(", ").slice(1).join(" | ")," | id: ",t.id," | Year: ",t.year," | Type: ",t.type]}),(0,x.jsxs)(G,{children:["Fuel Consumption: ",t.fuelConsumption," | Engine Size:"," ",t.engineSize]}),(0,x.jsx)(K,{children:t.description}),(0,x.jsx)(Q,{children:"Accessories and functionalities:"}),(0,x.jsx)(G,{children:t.accessories.join(" | ")}),(0,x.jsx)(G,{children:t.functionalities.join(" | ")}),(0,x.jsx)(Q,{children:"Rental Conditions: "}),(0,x.jsxs)("div",{style:{marginBottom:"24px"},children:[t.rentalConditions.split("\n").map((function(n){return n.includes(":")?(0,x.jsxs)(U,{children:[n.split(":")[0]," : ",(0,x.jsx)(V,{children:n.split(":")[1]})]},n):(0,x.jsx)(U,{children:n},n)})),(0,x.jsxs)(U,{children:["Mileage :"," ",(0,x.jsx)(V,{children:t.mileage.toString().split("").toSpliced(-3,0,",").join("")})]}),(0,x.jsxs)(U,{children:["Price : ",(0,x.jsxs)(V,{children:[t.rentalPrice.slice(1),"$"]})]})]}),(0,x.jsx)(g,{type:"button",text:"Rent a car",onClick:function(){return window.open("tel:+380730000000","_self")}})]})}),document.querySelector("#modal"))},nn=f.Z.div(S||(S=(0,d.Z)(["\n  width: 274px;\n  position: relative;\n"]))),en=f.Z.div(z||(z=(0,d.Z)(["\n  height: 274px;\n  overflow: hidden;\n  background: #fff url(",") no-repeat center;\n  background-size: cover;\n  border-radius: 12px;\n"])),(function(n){return n.src})),tn=f.Z.img(M||(M=(0,d.Z)(["\n  position: absolute;\n  top: 14px;\n  right: 14px;\n  cursor: pointer;\n\n  :hover,\n  :focus {\n    transform: scale(1.2);\n  }\n"]))),rn=f.Z.p(F||(F=(0,d.Z)(["\n  font-family: Manrope;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 24px;\n  letter-spacing: 0em;\n  text-align: left;\n  margin-top: 14px;\n  margin-bottom: 8px;\n  display:flex;\n"]))),on=f.Z.p(N||(N=(0,d.Z)(["\n  font-family: Manrope;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0em;\n  text-align: left;\n  color: rgba(18, 20, 23, 0.5);\n  margin-top: 4px;\n  margin-bottom: 28px;\n"]))),an=function(n){var e=n.item,t=n.favorite,o=n.handleFavorite,a=(0,r.useState)(!1),l=(0,i.Z)(a,2),c=l[0],d=l[1],f=e.img,u=e.photoLink,h=e.make,m=e.model,v=e.year,b=e.rentalPrice,j=e.address,Z=e.rentalCompany,y=e.type,w=e.id,k=e.functionalities;return(0,x.jsxs)(nn,{children:[(0,x.jsx)(tn,{alt:"heart",src:null!==t&&void 0!==t&&t.includes(w)?p:s,onClick:function(){return o(w)}}),(0,x.jsx)(en,{src:f||u}),(0,x.jsxs)(rn,{children:[h,(h+m+v).length<25&&(0,x.jsx)("span",{style:{color:"#3470FF",marginLeft:"5px"},children:m}),", ",v,(0,x.jsx)("span",{style:{display:"inline-block",marginLeft:"auto"},children:b})]}),(0,x.jsxs)(on,{children:[j.split(", ").slice(1).join(" | ")," | ",Z," | ",y," |"," ",k[0]]}),(0,x.jsx)(g,{type:"button",text:"Learn more",onClick:function(){return d(!0)},longButton:!0}),c&&(0,x.jsx)(W,{onClose:function(n){var e,t,i;"X"!==(null===n||void 0===n||null===(e=n.target)||void 0===e?void 0:e.alt)&&(null===n||void 0===n||null===(t=n.target)||void 0===t?void 0:t.className)!==(null===n||void 0===n||null===(i=n.currentTarget)||void 0===i?void 0:i.className)||d(!1)},item:e})]})},ln=f.Z.ul(L||(L=(0,d.Z)(["\n  width: 100vw;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 50px 29px;\n  justify-content: center;\n"]))),sn=f.Z.button(P||(P=(0,d.Z)(["\n  border: none;\n  background-color: transparent;\n  font-family: Manrope;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.5;\n  letter-spacing: 0em;\n  text-align: center;\n  color: #3470ff;\n  cursor: pointer;\n  margin: 50px auto 10px auto;\n  display: inline-block;\n  text-decoration: underline;\n  padding: 10px 10px;\n\n  :hover,\n  :focus {\n    color: #0b44cd;\n  }\n"]))),cn=function(n){var e=n.filter,t=(0,l.J)().data,s=(0,a.TH)().pathname,c=(0,r.useState)(JSON.parse(localStorage.getItem("favorite"))||[]),p=(0,i.Z)(c,2),d=p[0],f=p[1],u=(0,r.useState)(1),g=(0,i.Z)(u,2),h=g[0],m=g[1];(0,r.useEffect)((function(){m(1)}),[s]);var v=e.brand,b=void 0===v?"":v,j=e.price,Z=void 0===j?"":j,y=e.from,w=void 0===y?"":y,k=e.to,C=void 0===k?"":k,S=null===t||void 0===t?void 0:t.filter((function(n){var e=n.make,t=n.rentalPrice,i=n.mileage;return(""===b||b===e)&&Number(""===Z?1/0:Z)>Number(t.slice(1))&&Number(""===w?0:w)<=i&&Number(""===C?1/0:C)>=i})),z=s.includes("catalog")?S:null===S||void 0===S?void 0:S.filter((function(n){return d.includes(n.id)})),M=Math.ceil((null===z||void 0===z?void 0:z.length)/8),F=null===z||void 0===z?void 0:z.slice(0,8*h),N=function(n){d.includes(n)?(f((0,o.Z)(d).toSpliced(d.indexOf(n),1)),localStorage.setItem("favorite",JSON.stringify((0,o.Z)(d).toSpliced(d.indexOf(n),1)))):(f([].concat((0,o.Z)(d),[n])),localStorage.setItem("favorite",JSON.stringify([].concat((0,o.Z)(d),[n]))))};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(ln,{children:null===F||void 0===F?void 0:F.map((function(n){return(0,x.jsx)(an,{item:n,favorite:d,handleFavorite:N},n.id)}))}),M>h&&(0,x.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,x.jsx)(sn,{type:"button",onClick:function(n){m((function(n){return n+1}))},children:"Load more"})})]})},pn=f.Z.form(E||(E=(0,d.Z)(["\n  width: 100vw;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 18px;\n  justify-content: center;\n  align-items: flex-end;\n  margin-bottom: 50px;\n"]))),dn=f.Z.p(T||(T=(0,d.Z)(['\n  font-family: Manrope;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 18px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: rgba(138, 138, 137, 1);\n  margin-bottom: 8px;\n  // :before {\n  //   content: "To:";\n  // }\n']))),fn=f.Z.select(B||(B=(0,d.Z)(["\n  font-family: Manrope;\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 20px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: #121417;\n  // padding: 14px 18px;\n  padding-right: 50px;\n  padding-left: 18px;\n  border: none;\n  border-radius: 14px;\n  background-color: rgba(247, 247, 251, 1);\n  height: 48px;\n  margin: 0;\n  appearance: none;\n  outline: none;\n"]))),un=f.Z.img(J||(J=(0,d.Z)(["\n  position: absolute;\n  right: 13px;\n  bottom: 13px;\n"]))),xn=(f.Z.select(O||(O=(0,d.Z)(["\n  // font-family: Manrope;\n  // font-size: 18px;\n  // font-weight: 500;\n  // line-height: 20px;\n  // letter-spacing: 0em;\n  // text-align: left;\n  // color: #121417;\n  // padding: 14px 18px;\n  // border: none;\n  // border-radius: 14px;\n  // background-color: rgba(247, 247, 251, 1);\n  // height: 48px;\n  // margin:0;\n  // width:100px;\n"]))),f.Z.option(I||(I=(0,d.Z)(["\n  font-family: Manrope;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 20px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: rgba(18, 20, 23, 0.2);\n"])))),gn=f.Z.input(R||(R=(0,d.Z)(["\n  font-family: Manrope;\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 20px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: #121417;\n  // padding: 14px 18px;\n  border: none;\n  background-color: rgba(247, 247, 251, 1);\n  // width: 160px;\n  outline: none;\n\n  :first-of-type {\n    border-top-left-radius: 14px;\n    border-bottom-left-radius: 14px;\n    border-right: 1px solid #8a8a89;\n    padding: 14px 18px 14px 75px;\n    width: 85px;\n  }\n\n  :last-of-type {\n    border-top-right-radius: 14px;\n    border-bottom-right-radius: 14px;\n    padding: 14px 18px 14px 50px;\n    width: 110px;\n  }\n"]))),hn=f.Z.label(X||(X=(0,d.Z)(['\n  font-family: Manrope;\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 20px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: #121417;\n\n  :before {\n    content: "From:";\n    position: absolute;\n    transform: translate(20px, 39px);\n  }\n  :after {\n    content: "To:";\n    position: absolute;\n    transform: translate(-160px, 14px);\n  }\n'])));var mn=t.p+"static/media/arrow.b752a2d4062e758145cdc132dcef5bfd.svg",vn=function(n){n.filter;var e=n.setFilter,t=(0,l.J)().data,a=(0,r.useState)(""),s=(0,i.Z)(a,2),c=s[0],p=s[1],d=(0,r.useState)(""),f=(0,i.Z)(d,2),u=f[0],h=f[1],m=(0,r.useState)(""),v=(0,i.Z)(m,2),b=v[0],j=v[1],Z=(0,r.useState)(""),y=(0,i.Z)(Z,2),w=y[0],k=y[1],C=(0,o.Z)(new Set(null===t||void 0===t?void 0:t.map((function(n){return n.make})))).sort(),S=(0,o.Z)(new Set(null===t||void 0===t?void 0:t.map((function(n){return+n.rentalPrice.slice(1)})).sort((function(n,e){return n-e}))));return(0,x.jsxs)(pn,{onSubmit:function(n){n.preventDefault(),e({brand:c,price:u,from:b,to:w})},children:[(0,x.jsxs)("label",{style:{position:"relative"},children:[(0,x.jsx)(dn,{children:"Car brand"}),(0,x.jsx)(un,{alt:"arrow",src:mn}),(0,x.jsxs)(fn,{name:"cars",onChange:function(n){return p(n.target.value)},children:[(0,x.jsx)(xn,{value:"",children:"Choose a brand"}),null===C||void 0===C?void 0:C.map((function(n){return(0,x.jsx)(xn,{value:n,children:n},n)}))]})]}),(0,x.jsxs)("label",{style:{position:"relative"},children:[(0,x.jsx)(dn,{children:"Price per hour"}),(0,x.jsx)(un,{alt:"arrow",src:mn}),(0,x.jsxs)(fn,{name:"price",onChange:function(n){return h(n.target.value)},children:[(0,x.jsx)(xn,{value:"",children:"max price"}),null===S||void 0===S?void 0:S.map((function(n){return(0,x.jsx)(xn,{value:n,children:n},n)}))]})]}),(0,x.jsxs)(hn,{children:[(0,x.jsx)(dn,{children:"Car mileage / km"}),(0,x.jsx)(gn,{name:"from",type:"number",min:"0",max:"999999",value:b,onChange:function(n){return j(n.target.value)}}),(0,x.jsx)(gn,{name:"to",type:"number",min:"0",max:"999999",value:w,onChange:function(n){return k(n.target.value)}})]}),(0,x.jsx)(g,{type:"submit",text:"Search"}),(0,x.jsx)(g,{type:"button",text:"Reset",onClick:function(n){e({}),j(""),k(""),p(""),h(""),n.currentTarget.parentNode.reset()}})]})},bn=function(){var n=(0,r.useState)({}),e=(0,i.Z)(n,2),t=e[0],o=e[1];return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(vn,{filter:t,setFilter:o}),(0,x.jsx)(cn,{filter:t})]})}}}]);
//# sourceMappingURL=611.d9de1efc.chunk.js.map