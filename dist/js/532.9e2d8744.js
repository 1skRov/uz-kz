"use strict";(self["webpackChunkuzbek"]=self["webpackChunkuzbek"]||[]).push([[532],{8532:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var i=n(6768),r=n(4232);const o={style:{display:"flex","flex-direction":"column",gap:"1rem"}};function s(e,t,n,s,a,d){const u=(0,i.g2)("popular-item");return(0,i.uX)(),(0,i.CE)("div",o,[(0,i.eW)((0,r.v_)(a.persons)+" "+(0,r.v_)(d.regionId)+" ",1),(0,i.bF)(u)])}n(8992),n(4520);var a=n(4594),d=n(3173),u=n(782),c={name:"Guide",components:{PopularItem:a.A},data(){return{persons:[]}},computed:{regionId(){return this.$route.query.region_id},...(0,u.L8)(["currentLanguage"])},watch:{"$route.query.region_id":{immediate:!0,handler(e){console.log("Region ID обновился:",e)}},currentLanguage(e){this.getData()}},mounted(){this.getData()},methods:{getData(){d.Ay.get(`/etno-center-manager/?lang_code=${this.currentLanguage}`).then((e=>{const t=e.data;this.persons=t.filter((e=>e.etno_center_id===parseInt(this.regionId,10)));const n=t.filter((e=>e.etno_center_id));console.log("id id",this.regionId),console.log("id id",n)})).catch((e=>{console.error(e)}))}}},l=n(1241);const h=(0,l.A)(c,[["render",s]]);var g=h},4594:function(e,t,n){n.d(t,{A:function(){return v}});var i=n(6768),r=n(4232);const o={class:"left-img"},s=["src"],a={class:"right-content"},d={class:"font-gilroy"},u=["innerHTML"],c={class:"btn"};function l(e,t,n,l,h,g){const p=(0,i.g2)("basic-button");return(0,i.uX)(),(0,i.CE)("div",{class:"main",onClick:t[0]||(t[0]=(...e)=>g.handleMainClick&&g.handleMainClick(...e))},[(0,i.Lk)("div",o,[(0,i.Lk)("img",{src:h.BASE_URL+n.img,alt:"Person Image",style:{width:"100%",height:"100%","object-fit":"cover"}},null,8,s)]),(0,i.Lk)("div",a,[(0,i.Lk)("p",d,(0,r.v_)(n.name),1),(0,i.Lk)("span",{class:"truncate-text-line",innerHTML:n.text},null,8,u),(0,i.Lk)("div",c,[(0,i.bF)(p,{"is-blue":!0,onClick:g.openDetails},null,8,["onClick"])])])])}n(4114);var h=n(4037),g=n(3173),p={name:"PopularItem",components:{BasicButton:h.A},props:{img:"",id:{type:Number,required:!0},name:{type:String,required:!0},text:{type:String,required:!0},btn_title:{type:String},position:""},data(){return{windowWidth:window.innerWidth,BASE_URL:g.C1}},computed:{isMobile(){return this.windowWidth<=1024}},methods:{handleMainClick(){this.isMobile&&this.openDetails()},openDetails(){this.$router.push({name:"FamousPersonDetails",params:{id:this.id},query:{name:this.name,text:this.text,job:this.position,image:this.img}})},updateWindowWidth(){this.windowWidth=window.innerWidth}},mounted(){window.addEventListener("resize",this.updateWindowWidth)},beforeDestroy(){window.removeEventListener("resize",this.updateWindowWidth)}},m=n(1241);const w=(0,m.A)(p,[["render",l],["__scopeId","data-v-f54e861e"]]);var v=w}}]);
//# sourceMappingURL=532.9e2d8744.js.map