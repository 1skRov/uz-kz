"use strict";(self["webpackChunkuzbek"]=self["webpackChunkuzbek"]||[]).push([[422],{9422:function(e,t,i){i.r(t),i.d(t,{default:function(){return h}});var n=i(6768);const s={style:{display:"flex","flex-direction":"column",gap:"1rem"}};function o(e,t,i,o,r,a){const d=(0,n.g2)("popular-item");return(0,n.uX)(),(0,n.CE)("div",s,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(r.persons,(e=>((0,n.uX)(),(0,n.Wv)(d,{key:e.id,id:e.id,name:e.full_name,text:e.desc,img:e.image,position:e.position},null,8,["id","name","text","img","position"])))),128))])}var r=i(4594),a=i(3173),d=i(782),u={name:"Guide",components:{PopularItem:r.A},data(){return{persons:[]}},computed:{...(0,d.L8)(["currentLanguage"])},watch:{currentLanguage(e){this.getPersons()},"$route.query.region_id":{handler(e){this.getPersons(e)},immediate:!0}},mounted(){const e=this.$route.query.region_id;this.getPersons(e)},methods:{getPersons(e){e&&a.Ay.get(`/etno-center-manager/?region_id=${e}`).then((e=>{this.persons=e.data})).catch((e=>{console.error(e)}))}}},l=i(1241);const c=(0,l.A)(u,[["render",o]]);var h=c},4594:function(e,t,i){i.d(t,{A:function(){return k}});var n=i(6768),s=i(4232);const o={class:"left-img"},r=["src"],a={class:"right-content"},d={class:"font-gilroy"},u=["innerHTML"],l={class:"btn"};function c(e,t,i,c,h,m){const p=(0,n.g2)("basic-button");return(0,n.uX)(),(0,n.CE)("div",{class:"main",onClick:t[0]||(t[0]=(...e)=>m.handleMainClick&&m.handleMainClick(...e))},[(0,n.Lk)("div",o,[(0,n.Lk)("img",{src:h.BASE_URL+i.img,alt:"Person Image",style:{width:"100%",height:"100%","object-fit":"cover"}},null,8,r)]),(0,n.Lk)("div",a,[(0,n.Lk)("p",d,(0,s.v_)(i.name),1),(0,n.Lk)("span",{class:"truncate-text-line",innerHTML:i.text},null,8,u),(0,n.Lk)("div",l,[(0,n.bF)(p,{"is-blue":!0,onClick:m.openDetails},null,8,["onClick"])])])])}i(4114);var h=i(7402),m=i(3173),p={name:"PopularItem",components:{BasicButton:h.A},props:{img:"",id:{type:Number,required:!0},name:{type:String,required:!0},text:{type:String,required:!0},btn_title:{type:String},position:""},data(){return{windowWidth:window.innerWidth,BASE_URL:m.C1}},computed:{isMobile(){return this.windowWidth<=1024}},methods:{handleMainClick(){this.isMobile&&this.openDetails()},openDetails(){this.$router.push({name:"FamousPersonDetails",params:{id:this.id},query:{name:this.name,text:this.text,job:this.position,image:this.img}})},updateWindowWidth(){this.windowWidth=window.innerWidth}},mounted(){window.addEventListener("resize",this.updateWindowWidth)},beforeDestroy(){window.removeEventListener("resize",this.updateWindowWidth)}},g=i(1241);const w=(0,g.A)(p,[["render",c],["__scopeId","data-v-f54e861e"]]);var k=w}}]);
//# sourceMappingURL=422.da32e869.js.map