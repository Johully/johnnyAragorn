import{_ as i,A as s,d as c,f as e,t as r,o as a}from"./index-f43e52a4.js";const l={props:{slug:{type:String,required:!0},experienceSlug:{type:String,required:!0}},computed:{destination(){return s.destinations.find(t=>t.slug===this.slug)},experience(){return this.destination.experiences.find(t=>t.slug===this.experienceSlug)}}},u=e("h1",null,"Experience",-1),p={class:"experience-details"},d=["src","alt"];function o(t,_,x,g,m,n){return a(),c("div",null,[e("section",null,[u,e("h2",null,r(n.experience.name),1),e("div",p,[e("img",{src:`/images/${n.experience.image}`,alt:n.experience.name},null,8,d),e("p",null,r(n.experience.description),1)])])])}const h=i(l,[["render",o]]);export{h as default};
