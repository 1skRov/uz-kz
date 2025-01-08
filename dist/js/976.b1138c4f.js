"use strict";(self["webpackChunkuzbek"]=self["webpackChunkuzbek"]||[]).push([[976],{23:function(t,e,n){n.d(e,{A:function(){return v}});var s=n(6768),i=n(4232);const o={class:"navigation"},a=["onClick"],r={style:{padding:"1rem 0"}};function d(t,e,n,d,u,c){return(0,s.uX)(),(0,s.CE)("div",o,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(n.menuItems,(t=>((0,s.uX)(),(0,s.CE)("div",{key:t.route,class:(0,i.C4)(["item",{active:c.isActive(t.route)}]),onClick:e=>c.navigateTo(t.route)},[(0,s.Lk)("div",r,(0,i.v_)(t.name),1)],10,a)))),128))])}n(4114);var u={name:"Navigation",props:{menuItems:{type:Array,required:!0}},data(){return{}},methods:{navigateTo(t){this.$router.push(t)},isActive(t){return this.$route.path===t}}},c=n(1241);const l=(0,c.A)(u,[["render",d],["__scopeId","data-v-2c4d8fce"]]);var v=l},2569:function(t,e,n){n.d(e,{A:function(){return m}});var s=n(6768);const i={class:"section"},o={key:0,class:"header"},a={key:0,class:"title font-gilroy"},r={key:1},d={key:1,class:"content"},u={key:2,class:"end-button"};function c(t,e,n,c,l,v){return(0,s.uX)(),(0,s.CE)("div",i,[t.$slots.title||t.$slots["title-button"]?((0,s.uX)(),(0,s.CE)("div",o,[t.$slots.title?((0,s.uX)(),(0,s.CE)("div",a,[(0,s.RG)(t.$slots,"title",{},void 0,!0)])):(0,s.Q3)("",!0),t.$slots["title-button"]&&!v.isMobile?((0,s.uX)(),(0,s.CE)("div",r,[(0,s.RG)(t.$slots,"title-button",{},void 0,!0)])):(0,s.Q3)("",!0)])):(0,s.Q3)("",!0),t.$slots.content?((0,s.uX)(),(0,s.CE)("div",d,[(0,s.RG)(t.$slots,"content",{},void 0,!0)])):(0,s.Q3)("",!0),v.isMobile&&t.$slots.btn?((0,s.uX)(),(0,s.CE)("div",u,[(0,s.RG)(t.$slots,"btn",{},void 0,!0)])):(0,s.Q3)("",!0)])}var l={name:"Sections",props:{isHad:{type:Boolean,default:!1}},data(){return{windowWidth:window.innerWidth}},computed:{isMobile(){return this.windowWidth<=768||this.isHad}},mounted(){window.addEventListener("resize",this.updateWindowWidth)},beforeDestroy(){window.removeEventListener("resize",this.updateWindowWidth)},methods:{updateWindowWidth(){this.windowWidth=window.innerWidth}}},v=n(1241);const h=(0,v.A)(l,[["render",c],["__scopeId","data-v-3dbfa7ce"]]);var m=h},9827:function(t,e,n){n.d(e,{A:function(){return u}});var s=n(6768),i=n(4232);function o(t,e,n,o,a,r){return(0,s.uX)(),(0,s.CE)("aside",{class:"side-bar",style:(0,i.Tr)({backgroundColor:n.isBackground?"#0072AB":"white"})},[(0,s.Lk)("p",{class:"font-gilroy",style:(0,i.Tr)({color:n.isBackground?"white":"#CFD3DA"})},(0,i.v_)(n.title),5)],4)}var a={name:"SideBar",props:{title:"",isBackground:{type:Boolean,default:!1}}},r=n(1241);const d=(0,r.A)(a,[["render",o],["__scopeId","data-v-116b747e"]]);var u=d},9976:function(t,e,n){n.r(e),n.d(e,{default:function(){return p}});var s=n(6768);const i={class:"main",style:{display:"flex"}},o={class:"content"};function a(t,e,n,a,r,d){const u=(0,s.g2)("side-bar"),c=(0,s.g2)("navigation"),l=(0,s.g2)("router-view"),v=(0,s.g2)("sections");return(0,s.uX)(),(0,s.CE)("div",i,[(0,s.bF)(u,{title:r.translations.donates_side||"{ donates_side }"},null,8,["title"]),(0,s.Lk)("div",o,[(0,s.bF)(v,null,{content:(0,s.k6)((()=>[(0,s.bF)(c,{"menu-items":r.menuItems,style:{"margin-bottom":"40px"}},null,8,["menu-items"]),(0,s.bF)(l)])),_:1})])])}var r=n(9827),d=n(23),u=n(2569),c=n(3173),l=n(782),v={name:"Donates",components:{Sections:u.A,Navigation:d.A,SideBar:r.A},data(){return{menuItems:[],translations:{}}},computed:{...(0,l.L8)(["currentLanguage"])},watch:{currentLanguage(t){this.getTranslations()}},mounted(){this.getTranslations()},methods:{getTranslations(){c.Ay.get("/trans/").then((t=>{const e=t.data,n=this.currentLanguage;e[n]?(this.translations=e[n],this.menuItems=[{name:this.translations.with_card||"{ with_card }",route:"/donates/card"},{name:this.translations.with_qr||"{ with_qr }",route:"/donates/qr"}]):console.error(`Переводы для языка "${n}" не найдены`)})).catch((t=>{console.error("Ошибка при загрузке переводов:",t)}))}}},h=n(1241);const m=(0,h.A)(v,[["render",a],["__scopeId","data-v-00d8389c"]]);var p=m}}]);
//# sourceMappingURL=976.b1138c4f.js.map