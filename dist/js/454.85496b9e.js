"use strict";(self["webpackChunkuzbek"]=self["webpackChunkuzbek"]||[]).push([[454],{4037:function(t,e,n){n.d(e,{A:function(){return d}});var i=n(6768),o=n(4232);function s(t,e,n,s,r,a){return(0,i.uX)(),(0,i.CE)("button",{class:(0,o.C4)(["btn",{"btn-blue":n.isBlue}])},(0,o.v_)(n.title_button),3)}var r={name:"BasicButton",props:{title_button:{type:String,required:!0,default:"Подробнее"},isBlue:{type:Boolean,default:!1}}},a=n(1241);const l=(0,a.A)(r,[["render",s],["__scopeId","data-v-20f97692"]]);var d=l},7324:function(t,e,n){n.d(e,{A:function(){return c}});var i=n(6768);const o={class:"btn"},s={width:"40",height:"16",viewBox:"0 0 40 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r=["fill"];function a(t,e,n,a,l,d){return(0,i.uX)(),(0,i.CE)("div",o,[((0,i.uX)(),(0,i.CE)("svg",s,[(0,i.Lk)("path",{d:"M0.292893 7.56706C-0.0976311 7.95759 -0.0976311 8.59075 0.292893 8.98128L6.65685 15.3452C7.04738 15.7358 7.68054 15.7358 8.07107 15.3452C8.46159 14.9547 8.46159 14.3215 8.07107 13.931L2.41421 8.27417L8.07107 2.61732C8.46159 2.22679 8.46159 1.59363 8.07107 1.2031C7.68054 0.812577 7.04738 0.812577 6.65685 1.2031L0.292893 7.56706ZM38.5097 9.27417C39.062 9.27417 39.5097 8.82645 39.5097 8.27417C39.5097 7.72188 39.062 7.27417 38.5097 7.27417L38.5097 9.27417ZM1 9.27417L38.5097 9.27417L38.5097 7.27417L1 7.27417L1 9.27417Z",fill:n.isWhite?"#FFFFFF":"#0072AB"},null,8,r)]))])}var l={name:"left",props:{isWhite:{type:Boolean,default:!1}}},d=n(1241);const u=(0,d.A)(l,[["render",a],["__scopeId","data-v-c4514700"]]);var c=u},5323:function(t,e,n){n.d(e,{A:function(){return c}});var i=n(6768);const o={class:"btn"},s={width:"40",height:"16",viewBox:"0 0 40 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r=["fill"];function a(t,e,n,a,l,d){return(0,i.uX)(),(0,i.CE)("div",o,[((0,i.uX)(),(0,i.CE)("svg",s,[(0,i.Lk)("path",{d:"M1 7.27417C0.447715 7.27417 -4.82823e-08 7.72189 0 8.27417C4.82823e-08 8.82645 0.447715 9.27417 1 9.27417L1 7.27417ZM39.2168 8.98127C39.6073 8.59075 39.6073 7.95758 39.2168 7.56706L32.8528 1.2031C32.4623 0.812575 31.8291 0.812575 31.4386 1.2031C31.0481 1.59362 31.0481 2.22679 31.4386 2.61731L37.0955 8.27417L31.4386 13.931C31.0481 14.3215 31.0481 14.9547 31.4386 15.3452C31.8291 15.7358 32.4623 15.7358 32.8528 15.3452L39.2168 8.98127ZM1 9.27417L38.5097 9.27417L38.5097 7.27417L1 7.27417L1 9.27417Z",fill:n.isWhite?"#FFFFFF":"#0072AB"},null,8,r)]))])}var l={name:"right",props:{isWhite:{type:Boolean,default:!1}}},d=n(1241);const u=(0,d.A)(l,[["render",a],["__scopeId","data-v-b2d0ce72"]]);var c=u},2569:function(t,e,n){n.d(e,{A:function(){return p}});var i=n(6768);const o={class:"section"},s={key:0,class:"header"},r={key:0,class:"title font-gilroy"},a={key:1},l={key:1,class:"content"},d={key:2,class:"end-button"};function u(t,e,n,u,c,v){return(0,i.uX)(),(0,i.CE)("div",o,[t.$slots.title||t.$slots["title-button"]?((0,i.uX)(),(0,i.CE)("div",s,[t.$slots.title?((0,i.uX)(),(0,i.CE)("div",r,[(0,i.RG)(t.$slots,"title",{},void 0,!0)])):(0,i.Q3)("",!0),t.$slots["title-button"]&&!v.isMobile?((0,i.uX)(),(0,i.CE)("div",a,[(0,i.RG)(t.$slots,"title-button",{},void 0,!0)])):(0,i.Q3)("",!0)])):(0,i.Q3)("",!0),t.$slots.content?((0,i.uX)(),(0,i.CE)("div",l,[(0,i.RG)(t.$slots,"content",{},void 0,!0)])):(0,i.Q3)("",!0),v.isMobile&&t.$slots.btn?((0,i.uX)(),(0,i.CE)("div",d,[(0,i.RG)(t.$slots,"btn",{},void 0,!0)])):(0,i.Q3)("",!0)])}var c={name:"Sections",props:{isHad:{type:Boolean,default:!1}},data(){return{windowWidth:window.innerWidth}},computed:{isMobile(){return this.windowWidth<=768||this.isHad}},mounted(){window.addEventListener("resize",this.updateWindowWidth)},beforeDestroy(){window.removeEventListener("resize",this.updateWindowWidth)},methods:{updateWindowWidth(){this.windowWidth=window.innerWidth}}},v=n(1241);const f=(0,v.A)(c,[["render",u],["__scopeId","data-v-3dbfa7ce"]]);var p=f},4109:function(t,e,n){n.d(e,{A:function(){return d}});var i=n(6768),o=n(4232);function s(t,e,n,s,r,a){return(0,i.uX)(),(0,i.CE)("aside",{class:"side-bar",style:(0,o.Tr)({backgroundColor:n.isBackground?"#0072AB":"white"})},[(0,i.Lk)("p",{class:"font-gilroy",style:(0,o.Tr)({color:n.isBackground?"white":"#CFD3DA"})},(0,o.v_)(n.title),5)],4)}var r={name:"SideBar",props:{title:"",isBackground:{type:Boolean,default:!1}}},a=n(1241);const l=(0,a.A)(r,[["render",s],["__scopeId","data-v-4460ba93"]]);var d=l},9454:function(t,e,n){n.r(e),n.d(e,{default:function(){return L}});var i=n(6768),o=n(4232);const s={style:{display:"flex"}},r={class:"persons"},a={class:"btn"},l={class:"content"};function d(t,e,n,d,u,c){const v=(0,i.g2)("side-bar"),f=(0,i.g2)("left"),p=(0,i.g2)("right"),b=(0,i.g2)("popular-item"),h=(0,i.g2)("sections");return(0,i.uX)(),(0,i.CE)("div",s,[(0,i.bF)(v,{title:u.title},null,8,["title"]),(0,i.Lk)("div",r,[(0,i.bF)(h,null,{title:(0,i.k6)((()=>[(0,i.eW)((0,o.v_)(u.title),1)])),"title-button":(0,i.k6)((()=>[(0,i.Lk)("div",a,[(0,i.bF)(f),(0,i.bF)(p)])])),content:(0,i.k6)((()=>[(0,i.Lk)("div",l,[(0,i.bF)(b),(0,i.bF)(b),(0,i.bF)(b),(0,i.bF)(b),(0,i.bF)(b)])])),_:1})])])}var u=n(4109),c=n(2569),v=n(7324),f=n(5323),p=n(1966),b={name:"FamousPersonsPage",components:{PopularItem:p.A,SideBar:u.A,Left:v.A,Right:f.A,Sections:c.A},data(){return{title:"Известные личности"}}},h=n(1241);const w=(0,h.A)(b,[["render",d],["__scopeId","data-v-426126ac"]]);var L=w},1966:function(t,e,n){n.d(e,{A:function(){return b}});var i=n(6768),o=n(4232),s=n(6634);const r={class:"main"},a={class:"right-content"},l={class:"font-gilroy"},d={class:"btn"};function u(t,e,n,u,c,v){const f=(0,i.g2)("basic-button");return(0,i.uX)(),(0,i.CE)("div",r,[e[0]||(e[0]=(0,i.Lk)("div",{class:"left-img"},[(0,i.Lk)("img",{src:s,alt:"",style:{width:"100%",height:"100%","object-fit":"cover"}})],-1)),(0,i.Lk)("div",a,[(0,i.Lk)("p",l,(0,o.v_)(c.name),1),(0,i.Lk)("span",null,(0,o.v_)(c.text),1),(0,i.Lk)("div",d,[(0,i.bF)(f,{"is-blue":!0})])])])}var c=n(4037),v={name:"PopularItem",components:{BasicButton:c.A},data(){return{name:"Product Name",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}}},f=n(1241);const p=(0,f.A)(v,[["render",u],["__scopeId","data-v-1fe927a8"]]);var b=p},6634:function(t,e,n){t.exports=n.p+"img/1.5929997c.png"}}]);
//# sourceMappingURL=454.85496b9e.js.map