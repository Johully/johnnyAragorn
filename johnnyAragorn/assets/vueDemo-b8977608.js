import{C as h,D as C,E as y,G as b,H as S,b as k,d as I,h as r,f as t,t as o,I as e,e as l,w as i,F as g,o as A}from"./index-a143b474.js";const B=t("hr",null,null,-1),$=t("hr",null,null,-1),x=t("hr",null,null,-1),w={__name:"vueDemo",setup(N){const s=h(),d=C(),c=y(),{getUserById:f}=b(c),m=S(),v=()=>{s.$patch({count:9998})};s.$subscribe((a,n)=>{});const _=()=>{let a={name:"Johlly",id:1};c.addPerson(a)};return(a,n)=>{const u=k("van-button");return A(),I(g,null,[r(" Access the state directly from the store "),t("div",null,"Current Count: "+o(e(s).count),1),l(u,{onClick:n[0]||(n[0]=p=>e(s).increment())},{default:i(()=>[r(" add number Store")]),_:1}),l(u,{onClick:v},{default:i(()=>[r(" patch the Store")]),_:1}),B,t("div",null,"Current years: "+o(e(d).year),1),t("button",{onClick:n[1]||(n[1]=p=>e(d).changeYear())},"changeYear"),$,t("div",null,"Options API's value: "+o(e(f)(23)),1),l(u,{onClick:_,type:"primary"},{default:i(()=>[r("Add Info")]),_:1}),t("div",null,o(e(C)),1),x,t("div",null,[t("div",null,"the Num from store: "+o(e(m).count),1),t("button",{onClick:n[2]||(n[2]=p=>e(m).randomizeCounter())},"randomizeCounter")])],64)}}};export{w as default};
