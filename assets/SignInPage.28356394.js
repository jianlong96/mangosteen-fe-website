import{u as B,c as F,I as k,a as w,F as c,B as I,M as N,v as j,b as D,h as p}from"./index.1be362c9.js";import{bA as g,bE as M,bx as m,bV as q,bU as E,bF as e,bS as f}from"./vendor.72e41cd8.js";import"./vant.ec609186.js";import"./mock.87d33688.js";const L=u=>{const t=g(u);return{ref:t,toggle:()=>t.value=!t.value,on:()=>t.value=!0,off:()=>t.value=!1}},O="_logo_ly99d_1",T="_icon_ly99d_8",U="_appName_ly99d_12",r={logo:O,icon:T,appName:U},H=M({setup:(u,t)=>{const b=B(),a=m({email:"",code:""}),s=m({email:[],code:[]}),i=g(),{ref:y,toggle:A,on:v,off:_}=L(!1),h=q(),S=E(),V=async o=>{var l;if(o.preventDefault(),Object.assign(s,{email:[],code:[]}),Object.assign(s,j(a,[{key:"email",type:"required",message:"\u5FC5\u586B"},{key:"email",type:"pattern",regex:/.+@.+/,message:"\u5FC5\u987B\u662F\u90AE\u7BB1\u5730\u5740"},{key:"code",type:"required",message:"\u5FC5\u586B"}])),!D(s)){const n=await p.post("/session",a,{_autoLoading:!0}).catch(d);localStorage.setItem("jwt",n.data.jwt);const x=(l=S.query.return_to)==null?void 0:l.toString();b.refreshMe(),h.push(x||"/")}},d=o=>{throw o.response.status===422&&Object.assign(s,o.response.data.errors),o},C=async()=>{v(),await p.post("/validation_codes",{email:a.email},{_autoLoading:!0}).catch(d).finally(_),i.value.startCount()};return()=>e(N,null,{title:()=>"\u767B\u5F55",icon:()=>e(F,null,null),default:()=>e("div",{class:r.wrapper},[e("div",{class:r.logo},[e(k,{class:r.icon,name:"logo"},null),e("h1",{class:r.appName},[f("\u5C71\u7AF9\u8BB0\u8D26")])]),e(w,{onSubmit:V},{default:()=>{var o,l;return[e(c,{label:"\u90AE\u7BB1\u5730\u5740",type:"text",placeholder:"\u8BF7\u8F93\u5165\u90AE\u7BB1\uFF0C\u7136\u540E\u70B9\u51FB\u53D1\u9001\u9A8C\u8BC1\u7801",modelValue:a.email,"onUpdate:modelValue":n=>a.email=n,error:(o=s.email)==null?void 0:o[0]},null),e(c,{ref:i,label:"\u9A8C\u8BC1\u7801",type:"validationCode",onClick:C,placeholder:"\u8BF7\u8F93\u5165\u516D\u4F4D\u6570\u5B57",countFrom:1,disabled:y.value,modelValue:a.code,"onUpdate:modelValue":n=>a.code=n,error:(l=s.code)==null?void 0:l[0]},null),e(c,{style:{paddingTop:"96px"}},{default:()=>[e(I,{type:"submit"},{default:()=>[f("\u767B\u5F55")]})]})]}})])})}});export{H as SignInPage,H as default};
