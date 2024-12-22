"use strict";(self["webpackChunkuzbek"]=self["webpackChunkuzbek"]||[]).push([[350],{4037:function(t,e,i){i.d(e,{A:function(){return l}});var n=i(6768),s=i(4232);function o(t,e,i,o,a,d){return(0,n.uX)(),(0,n.CE)("button",{class:(0,s.C4)(["btn",{"btn-blue":i.isBlue}])},(0,s.v_)(i.title_button),3)}var a={name:"BasicButton",props:{title_button:{type:String,required:!0,default:"Подробнее"},isBlue:{type:Boolean,default:!1}}},d=i(1241);const r=(0,d.A)(a,[["render",o],["__scopeId","data-v-20f97692"]]);var l=r},7324:function(t,e,i){i.d(e,{A:function(){return c}});var n=i(6768);const s={class:"btn"},o={width:"40",height:"16",viewBox:"0 0 40 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a=["fill"];function d(t,e,i,d,r,l){return(0,n.uX)(),(0,n.CE)("div",s,[((0,n.uX)(),(0,n.CE)("svg",o,[(0,n.Lk)("path",{d:"M0.292893 7.56706C-0.0976311 7.95759 -0.0976311 8.59075 0.292893 8.98128L6.65685 15.3452C7.04738 15.7358 7.68054 15.7358 8.07107 15.3452C8.46159 14.9547 8.46159 14.3215 8.07107 13.931L2.41421 8.27417L8.07107 2.61732C8.46159 2.22679 8.46159 1.59363 8.07107 1.2031C7.68054 0.812577 7.04738 0.812577 6.65685 1.2031L0.292893 7.56706ZM38.5097 9.27417C39.062 9.27417 39.5097 8.82645 39.5097 8.27417C39.5097 7.72188 39.062 7.27417 38.5097 7.27417L38.5097 9.27417ZM1 9.27417L38.5097 9.27417L38.5097 7.27417L1 7.27417L1 9.27417Z",fill:i.isWhite?"#FFFFFF":"#0072AB"},null,8,a)]))])}var r={name:"left",props:{isWhite:{type:Boolean,default:!1}}},l=i(1241);const u=(0,l.A)(r,[["render",d],["__scopeId","data-v-c4514700"]]);var c=u},5323:function(t,e,i){i.d(e,{A:function(){return c}});var n=i(6768);const s={class:"btn"},o={width:"40",height:"16",viewBox:"0 0 40 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a=["fill"];function d(t,e,i,d,r,l){return(0,n.uX)(),(0,n.CE)("div",s,[((0,n.uX)(),(0,n.CE)("svg",o,[(0,n.Lk)("path",{d:"M1 7.27417C0.447715 7.27417 -4.82823e-08 7.72189 0 8.27417C4.82823e-08 8.82645 0.447715 9.27417 1 9.27417L1 7.27417ZM39.2168 8.98127C39.6073 8.59075 39.6073 7.95758 39.2168 7.56706L32.8528 1.2031C32.4623 0.812575 31.8291 0.812575 31.4386 1.2031C31.0481 1.59362 31.0481 2.22679 31.4386 2.61731L37.0955 8.27417L31.4386 13.931C31.0481 14.3215 31.0481 14.9547 31.4386 15.3452C31.8291 15.7358 32.4623 15.7358 32.8528 15.3452L39.2168 8.98127ZM1 9.27417L38.5097 9.27417L38.5097 7.27417L1 7.27417L1 9.27417Z",fill:i.isWhite?"#FFFFFF":"#0072AB"},null,8,a)]))])}var r={name:"right",props:{isWhite:{type:Boolean,default:!1}}},l=i(1241);const u=(0,l.A)(r,[["render",d],["__scopeId","data-v-b2d0ce72"]]);var c=u},2569:function(t,e,i){i.d(e,{A:function(){return h}});var n=i(6768);const s={class:"section"},o={key:0,class:"header"},a={key:0,class:"title font-gilroy"},d={key:1},r={key:1,class:"content"},l={key:2,class:"end-button"};function u(t,e,i,u,c,p){return(0,n.uX)(),(0,n.CE)("div",s,[t.$slots.title||t.$slots["title-button"]?((0,n.uX)(),(0,n.CE)("div",o,[t.$slots.title?((0,n.uX)(),(0,n.CE)("div",a,[(0,n.RG)(t.$slots,"title",{},void 0,!0)])):(0,n.Q3)("",!0),t.$slots["title-button"]&&!p.isMobile?((0,n.uX)(),(0,n.CE)("div",d,[(0,n.RG)(t.$slots,"title-button",{},void 0,!0)])):(0,n.Q3)("",!0)])):(0,n.Q3)("",!0),t.$slots.content?((0,n.uX)(),(0,n.CE)("div",r,[(0,n.RG)(t.$slots,"content",{},void 0,!0)])):(0,n.Q3)("",!0),p.isMobile&&t.$slots.btn?((0,n.uX)(),(0,n.CE)("div",l,[(0,n.RG)(t.$slots,"btn",{},void 0,!0)])):(0,n.Q3)("",!0)])}var c={name:"Sections",props:{isHad:{type:Boolean,default:!1}},data(){return{windowWidth:window.innerWidth}},computed:{isMobile(){return this.windowWidth<=768||this.isHad}},mounted(){window.addEventListener("resize",this.updateWindowWidth)},beforeDestroy(){window.removeEventListener("resize",this.updateWindowWidth)},methods:{updateWindowWidth(){this.windowWidth=window.innerWidth}}},p=i(1241);const v=(0,p.A)(c,[["render",u],["__scopeId","data-v-3dbfa7ce"]]);var h=v},4109:function(t,e,i){i.d(e,{A:function(){return l}});var n=i(6768),s=i(4232);function o(t,e,i,o,a,d){return(0,n.uX)(),(0,n.CE)("aside",{class:"side-bar",style:(0,s.Tr)({backgroundColor:i.isBackground?"#0072AB":"white"})},[(0,n.Lk)("p",{class:"font-gilroy",style:(0,s.Tr)({color:i.isBackground?"white":"#CFD3DA"})},(0,s.v_)(i.title),5)],4)}var a={name:"SideBar",props:{title:"",isBackground:{type:Boolean,default:!1}}},d=i(1241);const r=(0,d.A)(a,[["render",o],["__scopeId","data-v-4460ba93"]]);var l=r},2350:function(t,e,i){i.r(e),i.d(e,{default:function(){return b}});var n=i(6768),s=i(4232);const o={style:{display:"flex"}},a={class:"persons"},d={class:"btn"},r={class:"content"},l={class:"btn"};function u(t,e,i,u,c,p){const v=(0,n.g2)("side-bar"),h=(0,n.g2)("left"),m=(0,n.g2)("right"),f=(0,n.g2)("popular-item"),g=(0,n.g2)("sections");return(0,n.uX)(),(0,n.CE)("div",o,[(0,n.bF)(v,{title:c.title},null,8,["title"]),(0,n.Lk)("div",a,[(0,n.bF)(g,null,{title:(0,n.k6)((()=>[(0,n.eW)((0,s.v_)(c.title),1)])),"title-button":(0,n.k6)((()=>[(0,n.Lk)("div",d,[(0,n.bF)(h),(0,n.bF)(m)])])),content:(0,n.k6)((()=>[(0,n.Lk)("div",r,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(c.persons,(t=>((0,n.uX)(),(0,n.Wv)(f,{key:t.id,id:t.id,name:t.name,text:t.description},null,8,["id","name","text"])))),128))])])),btn:(0,n.k6)((()=>[(0,n.Lk)("div",l,[(0,n.bF)(h),(0,n.bF)(m)])])),_:1})])])}var c=i(4109),p=i(2569),v=i(7324),h=i(5323),m=i(5093),f={name:"FamousPersonsPage",components:{PopularItem:m.A,SideBar:c.A,Left:v.A,Right:h.A,Sections:p.A},data(){return{title:"Известные личности",persons:[{id:1,name:"Иван Иванов",description:"Известный ученый, внесший большой вклад в развитие физики.внесший большой вклад в развитие физикивнесший большой вклад в развитие физикивнесший большой вклад в развитие физикивнесший большой вклад в развитие физикивнесший большой вклад в развитие физикивнесший большой вклад в развитие физики",image:"@/assets/images/ivan.jpg"},{id:2,name:"Мария Петрова",description:"Выдающаяся художница, известная своими абстрактными картинами.",image:"@/assets/images/maria.jpg"},{id:3,name:"Алексей Сидоров",description:"Талантливый музыкант, который получил мировое признание.",image:"@/assets/images/alexey.jpg"},{id:4,name:"Ольга Смирнова",description:"Писательница, чьи романы переведены на десятки языков.",image:"@/assets/images/olga.jpg"},{id:5,name:"Дмитрий Кузнецов",description:"Инноватор и предприниматель в области технологий.",image:"@/assets/images/dmitry.jpg"}]}}},g=i(1241);const w=(0,g.A)(f,[["render",u],["__scopeId","data-v-259691cb"]]);var b=w},5093:function(t,e,i){i.d(e,{A:function(){return m}});var n=i(6768),s=i(4232),o=i(6634);const a={class:"right-content"},d={class:"font-gilroy"},r={class:"truncate-text-line"},l={class:"btn"};function u(t,e,i,u,c,p){const v=(0,n.g2)("basic-button");return(0,n.uX)(),(0,n.CE)("div",{class:"main",onClick:e[0]||(e[0]=(...t)=>p.handleMainClick&&p.handleMainClick(...t))},[e[1]||(e[1]=(0,n.Lk)("div",{class:"left-img"},[(0,n.Lk)("img",{src:o,alt:"Person Image",style:{width:"100%",height:"100%","object-fit":"cover"}})],-1)),(0,n.Lk)("div",a,[(0,n.Lk)("p",d,(0,s.v_)(i.name),1),(0,n.Lk)("span",r,(0,s.v_)(i.text),1),(0,n.Lk)("div",l,[(0,n.bF)(v,{"is-blue":!0,onClick:p.openDetails},null,8,["onClick"])])])])}i(4114);var c=i(4037),p={name:"PopularItem",components:{BasicButton:c.A},props:{id:{type:Number,required:!0},name:{type:String,required:!0},text:{type:String,required:!0}},data(){return{windowWidth:window.innerWidth}},computed:{isMobile(){return this.windowWidth<=1024}},methods:{handleMainClick(){this.isMobile&&this.openDetails()},openDetails(){this.$router.push({name:"FamousPersonDetails",params:{id:this.id},query:{name:this.name,text:this.text}})},updateWindowWidth(){this.windowWidth=window.innerWidth}},mounted(){window.addEventListener("resize",this.updateWindowWidth)},beforeDestroy(){window.removeEventListener("resize",this.updateWindowWidth)}},v=i(1241);const h=(0,v.A)(p,[["render",u],["__scopeId","data-v-717fcdea"]]);var m=h},6634:function(t,e,i){t.exports=i.p+"img/1.5929997c.png"}}]);
//# sourceMappingURL=350.a746dffa.js.map