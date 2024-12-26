"use strict";(self["webpackChunkuzbek"]=self["webpackChunkuzbek"]||[]).push([[310],{4037:function(t,e,n){n.d(e,{A:function(){return l}});var i=n(6768),s=n(4232);function o(t,e,n,o,r,a){return(0,i.uX)(),(0,i.CE)("button",{class:(0,s.C4)(["btn",{"btn-blue":n.isBlue}])},(0,s.v_)(n.title_button),3)}var r={name:"BasicButton",props:{title_button:{type:String,required:!0,default:"Подробнее"},isBlue:{type:Boolean,default:!1}}},a=n(1241);const d=(0,a.A)(r,[["render",o],["__scopeId","data-v-20f97692"]]);var l=d},7324:function(t,e,n){n.d(e,{A:function(){return c}});var i=n(6768);const s={class:"btn"},o={width:"40",height:"16",viewBox:"0 0 40 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r=["fill"];function a(t,e,n,a,d,l){return(0,i.uX)(),(0,i.CE)("div",s,[((0,i.uX)(),(0,i.CE)("svg",o,[(0,i.Lk)("path",{d:"M0.292893 7.56706C-0.0976311 7.95759 -0.0976311 8.59075 0.292893 8.98128L6.65685 15.3452C7.04738 15.7358 7.68054 15.7358 8.07107 15.3452C8.46159 14.9547 8.46159 14.3215 8.07107 13.931L2.41421 8.27417L8.07107 2.61732C8.46159 2.22679 8.46159 1.59363 8.07107 1.2031C7.68054 0.812577 7.04738 0.812577 6.65685 1.2031L0.292893 7.56706ZM38.5097 9.27417C39.062 9.27417 39.5097 8.82645 39.5097 8.27417C39.5097 7.72188 39.062 7.27417 38.5097 7.27417L38.5097 9.27417ZM1 9.27417L38.5097 9.27417L38.5097 7.27417L1 7.27417L1 9.27417Z",fill:n.isWhite?"#FFFFFF":"#0072AB"},null,8,r)]))])}var d={name:"left",props:{isWhite:{type:Boolean,default:!1}}},l=n(1241);const u=(0,l.A)(d,[["render",a],["__scopeId","data-v-c4514700"]]);var c=u},5323:function(t,e,n){n.d(e,{A:function(){return c}});var i=n(6768);const s={class:"btn"},o={width:"40",height:"16",viewBox:"0 0 40 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r=["fill"];function a(t,e,n,a,d,l){return(0,i.uX)(),(0,i.CE)("div",s,[((0,i.uX)(),(0,i.CE)("svg",o,[(0,i.Lk)("path",{d:"M1 7.27417C0.447715 7.27417 -4.82823e-08 7.72189 0 8.27417C4.82823e-08 8.82645 0.447715 9.27417 1 9.27417L1 7.27417ZM39.2168 8.98127C39.6073 8.59075 39.6073 7.95758 39.2168 7.56706L32.8528 1.2031C32.4623 0.812575 31.8291 0.812575 31.4386 1.2031C31.0481 1.59362 31.0481 2.22679 31.4386 2.61731L37.0955 8.27417L31.4386 13.931C31.0481 14.3215 31.0481 14.9547 31.4386 15.3452C31.8291 15.7358 32.4623 15.7358 32.8528 15.3452L39.2168 8.98127ZM1 9.27417L38.5097 9.27417L38.5097 7.27417L1 7.27417L1 9.27417Z",fill:n.isWhite?"#FFFFFF":"#0072AB"},null,8,r)]))])}var d={name:"right",props:{isWhite:{type:Boolean,default:!1}}},l=n(1241);const u=(0,l.A)(d,[["render",a],["__scopeId","data-v-b2d0ce72"]]);var c=u},2569:function(t,e,n){n.d(e,{A:function(){return g}});var i=n(6768);const s={class:"section"},o={key:0,class:"header"},r={key:0,class:"title font-gilroy"},a={key:1},d={key:1,class:"content"},l={key:2,class:"end-button"};function u(t,e,n,u,c,h){return(0,i.uX)(),(0,i.CE)("div",s,[t.$slots.title||t.$slots["title-button"]?((0,i.uX)(),(0,i.CE)("div",o,[t.$slots.title?((0,i.uX)(),(0,i.CE)("div",r,[(0,i.RG)(t.$slots,"title",{},void 0,!0)])):(0,i.Q3)("",!0),t.$slots["title-button"]&&!h.isMobile?((0,i.uX)(),(0,i.CE)("div",a,[(0,i.RG)(t.$slots,"title-button",{},void 0,!0)])):(0,i.Q3)("",!0)])):(0,i.Q3)("",!0),t.$slots.content?((0,i.uX)(),(0,i.CE)("div",d,[(0,i.RG)(t.$slots,"content",{},void 0,!0)])):(0,i.Q3)("",!0),h.isMobile&&t.$slots.btn?((0,i.uX)(),(0,i.CE)("div",l,[(0,i.RG)(t.$slots,"btn",{},void 0,!0)])):(0,i.Q3)("",!0)])}var c={name:"Sections",props:{isHad:{type:Boolean,default:!1}},data(){return{windowWidth:window.innerWidth}},computed:{isMobile(){return this.windowWidth<=768||this.isHad}},mounted(){window.addEventListener("resize",this.updateWindowWidth)},beforeDestroy(){window.removeEventListener("resize",this.updateWindowWidth)},methods:{updateWindowWidth(){this.windowWidth=window.innerWidth}}},h=n(1241);const p=(0,h.A)(c,[["render",u],["__scopeId","data-v-3dbfa7ce"]]);var g=p},4109:function(t,e,n){n.d(e,{A:function(){return l}});var i=n(6768),s=n(4232);function o(t,e,n,o,r,a){return(0,i.uX)(),(0,i.CE)("aside",{class:"side-bar",style:(0,s.Tr)({backgroundColor:n.isBackground?"#0072AB":"white"})},[(0,i.Lk)("p",{class:"font-gilroy",style:(0,s.Tr)({color:n.isBackground?"white":"#CFD3DA"})},(0,s.v_)(n.title),5)],4)}var r={name:"SideBar",props:{title:"",isBackground:{type:Boolean,default:!1}}},a=n(1241);const d=(0,a.A)(r,[["render",o],["__scopeId","data-v-4460ba93"]]);var l=d},1310:function(t,e,n){n.r(e),n.d(e,{default:function(){return C}});var i=n(6768),s=n(4232);const o={style:{display:"flex"}},r={class:"persons"},a={class:"btn"},d={class:"content"},l={class:"btn"};function u(t,e,n,u,c,h){const p=(0,i.g2)("side-bar"),g=(0,i.g2)("left"),v=(0,i.g2)("right"),m=(0,i.g2)("popular-item"),b=(0,i.g2)("sections");return(0,i.uX)(),(0,i.CE)("div",o,[(0,i.bF)(p,{title:c.title},null,8,["title"]),(0,i.Lk)("div",r,[(0,i.bF)(b,null,{title:(0,i.k6)((()=>[(0,i.eW)((0,s.v_)(c.title),1)])),"title-button":(0,i.k6)((()=>[(0,i.Lk)("div",a,[(0,i.bF)(g,{onClick:h.prevPage},null,8,["onClick"]),(0,i.bF)(v,{onClick:h.nextPage},null,8,["onClick"])])])),content:(0,i.k6)((()=>[(0,i.Lk)("div",d,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(h.paginatedPersons,(t=>((0,i.uX)(),(0,i.Wv)(m,{key:t.id,id:t.id,name:t.title,text:t.desc,btn_title:t.buttons_title},null,8,["id","name","text","btn_title"])))),128))])])),btn:(0,i.k6)((()=>[(0,i.Lk)("div",l,[(0,i.bF)(g,{onClick:h.prevPage},null,8,["onClick"]),(0,i.bF)(v,{onClick:h.nextPage},null,8,["onClick"])])])),_:1})])])}var c=n(4109),h=n(2569),p=n(7324),g=n(5323),v=n(2390),m=n(3173),b=n(782),w={name:"FamousPersonsPage",components:{PopularItem:v.A,SideBar:c.A,Left:p.A,Right:g.A,Sections:h.A},data(){return{title:"Известные личности",persons_plh:[{id:1,name:"Иван Иванов",description:"Известный ученый, внесший большой вклад в развитие физики.внесший большой вклад в развитие физикивнесший большой вклад в развитие физикивнесший большой вклад в развитие физикивнесший большой вклад в развитие физикивнесший большой вклад в развитие физикивнесший большой вклад в развитие физики",image:"@/assets/images/ivan.jpg"},{id:2,name:"Мария Петрова",description:"Выдающаяся художница, известная своими абстрактными картинами.",image:"@/assets/images/maria.jpg"},{id:3,name:"Алексей Сидоров",description:"Талантливый музыкант, который получил мировое признание.",image:"@/assets/images/alexey.jpg"},{id:4,name:"Ольга Смирнова",description:"Писательница, чьи романы переведены на десятки языков.",image:"@/assets/images/olga.jpg"}],persons:[],currentPage:0,itemsPerPage:3}},computed:{...(0,b.L8)(["currentLanguage"]),paginatedPersons(){const t=this.currentPage*this.itemsPerPage,e=t+this.itemsPerPage;return this.persons.slice(t,e)},totalPages(){return Math.ceil(this.persons.length/this.itemsPerPage)}},watch:{currentLanguage(t){this.getPersons()}},mounted(){this.getPersons()},methods:{getPersons(){m.A.get(`/famous/?lang_code=${this.currentLanguage}`,{headers:{"ngrok-skip-browser-warning":"true"}}).then((t=>{const e=t.data;this.persons=e||this.persons_plh,this.currentPage=parseInt(this.$route.query.page)||0})).catch((t=>{console.error("Ошибка при загрузке данных:",t)}))},prevPage(){this.currentPage>0&&this.currentPage--},nextPage(){this.currentPage<this.totalPages-1&&this.currentPage++}}},f=n(1241);const k=(0,f.A)(w,[["render",u],["__scopeId","data-v-4be26ed6"]]);var C=k},2390:function(t,e,n){n.d(e,{A:function(){return v}});var i=n(6768),s=n(4232),o=n(6634);const r={class:"right-content"},a={class:"font-gilroy"},d={class:"truncate-text-line"},l={class:"btn"};function u(t,e,n,u,c,h){const p=(0,i.g2)("basic-button");return(0,i.uX)(),(0,i.CE)("div",{class:"main",onClick:e[0]||(e[0]=(...t)=>h.handleMainClick&&h.handleMainClick(...t))},[e[1]||(e[1]=(0,i.Lk)("div",{class:"left-img"},[(0,i.Lk)("img",{src:o,alt:"Person Image",style:{width:"100%",height:"100%","object-fit":"cover"}})],-1)),(0,i.Lk)("div",r,[(0,i.Lk)("p",a,(0,s.v_)(n.name),1),(0,i.Lk)("span",d,(0,s.v_)(n.text),1),(0,i.Lk)("div",l,[(0,i.bF)(p,{"is-blue":!0,onClick:h.openDetails},null,8,["onClick"])])])])}n(4114);var c=n(4037),h={name:"PopularItem",components:{BasicButton:c.A},props:{id:{type:Number,required:!0},name:{type:String,required:!0},text:{type:String,required:!0},btn_title:{type:String}},data(){return{windowWidth:window.innerWidth}},computed:{isMobile(){return this.windowWidth<=1024}},methods:{handleMainClick(){this.isMobile&&this.openDetails()},openDetails(){this.$router.push({name:"FamousPersonDetails",params:{id:this.id},query:{name:this.name,text:this.text}})},updateWindowWidth(){this.windowWidth=window.innerWidth}},mounted(){window.addEventListener("resize",this.updateWindowWidth)},beforeDestroy(){window.removeEventListener("resize",this.updateWindowWidth)}},p=n(1241);const g=(0,p.A)(h,[["render",u],["__scopeId","data-v-f844e2e6"]]);var v=g},6634:function(t,e,n){t.exports=n.p+"img/1.5929997c.png"}}]);
//# sourceMappingURL=310.8aab3e0e.js.map