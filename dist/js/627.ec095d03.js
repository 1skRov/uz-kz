"use strict";(self["webpackChunkuzbek"]=self["webpackChunkuzbek"]||[]).push([[627],{4627:function(e,t,s){s.r(t),s.d(t,{default:function(){return $}});var i=s(6768),n=s(4232);const o={style:{position:"relative"}},a={class:"back"},l={class:"newsItem"},r={class:"newsItem___detail"},c={style:{display:"flex","align-items":"center",gap:"20px"}},d={style:{display:"flex","align-items":"center"}},u={class:"time"},m={class:"page"},g={class:"newsItem__main"},_={class:"newsItem__image"},k={controls:"controls"},v=["src"],L={class:"newsItem__text"},w={class:"title font-gilroy"},p=["innerHTML"],h={class:"recommendNews"},b={class:"recommendNews___title"},y=["onClick"],f={class:"card"},T={class:"image-card"},N=["poster"],A=["src"],C={class:"card-content"},D={class:"title font-gilroy truncate-text"},S={class:"time"};function E(e,t,s,E,I,x){const B=(0,i.g2)("basic-button");return(0,i.uX)(),(0,i.CE)("div",o,[(0,i.Lk)("div",a,[(0,i.bF)(B,{title_button:e.getTranslations.goToNews||"{ goToNews }",onClick:x.goToAllVideo},null,8,["title_button","onClick"])]),(0,i.Lk)("div",l,[(0,i.Lk)("div",r,[(0,i.Lk)("nav",c,[(0,i.Lk)("div",{class:"item-back",onClick:t[0]||(t[0]=(...e)=>x.goToAllVideo&&x.goToAllVideo(...e))},[(0,i.bF)(B,{title_button:e.getTranslations.goToNews||"{ goToNews }"},null,8,["title_button"])]),(0,i.Lk)("div",d,[(0,i.bF)(B,{title_button:e.getTranslations.olymp||"{ olymp }","is-blue":!0},null,8,["title_button"]),(0,i.Lk)("div",u,(0,n.v_)(x.formatDate(I.news_item.posted_date)),1)])]),(0,i.Lk)("div",m,[(0,i.Lk)("div",g,[(0,i.Lk)("div",_,[(0,i.Lk)("video",k,[(0,i.Lk)("source",{src:I.BASE_URL+I.news_item.video,type:"video/mp4"},null,8,v)])]),(0,i.Lk)("div",L,[(0,i.Lk)("p",w,(0,n.v_)(I.news_item.title),1),(0,i.Lk)("div",{class:"content-text",innerHTML:I.news_item.desc},null,8,p)])]),(0,i.Lk)("div",h,[(0,i.Lk)("div",b,(0,n.v_)(e.getTranslations.recommended||"{ recommended }"),1),((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(I.news,((e,t)=>((0,i.uX)(),(0,i.CE)("div",{class:"recommendNews___content",key:t,onClick:t=>x.goToNewsDetails(e.id)},[(0,i.Lk)("div",f,[(0,i.Lk)("div",T,[(0,i.Lk)("video",{poster:I.BASE_URL+e.image,controls:"controls"},[(0,i.Lk)("source",{src:I.BASE_URL+e.video,type:"video/mp4"},null,8,A)],8,N)]),(0,i.Lk)("div",C,[(0,i.Lk)("div",D,(0,n.v_)(e.title),1),(0,i.Lk)("div",S,(0,n.v_)(x.formatDate(e.posted_date)),1)])])],8,y)))),128))])])])])])}s(4114),s(8992),s(4520),s(2577);var I=s(3173),x=s(782),B=s(771),U=s(8421),V={name:"VideoDetail",components:{SwiperSlide:U.qr,BasicButton:B.A},props:{id:{type:String,required:!0}},data(){return{news:[],news_item:{},BASE_URL:I.C1}},computed:{...(0,x.L8)(["currentLanguage","getTranslations"])},watch:{currentLanguage(e){this.getNews()},"$route.params.id":{immediate:!0,handler(e){this.getNews()}}},mounted(){this.getNews()},methods:{getNews(){I.Ay.get(`/video-materials/?lang_code=${this.currentLanguage}`).then((e=>{const t=e.data;if(Array.isArray(t)&&t.length>0){this.news=t.filter((e=>e.id!==Number(this.id))).slice(0,6);const e=t.find((e=>e.id===Number(this.id)));e&&(this.news_item=e)}else this.news=[]})).catch((e=>{console.error(e)}))},formatDate(e){const t={year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"};return new Date(e).toLocaleDateString(this.currentLanguage||"en-US",t)},goToNewsDetails(e){this.$router.push({name:"NewsDetails",params:{id:e}})},goToAllVideo(){this.$router.push({name:"PressCenter"})}}},F=s(1241);const R=(0,F.A)(V,[["render",E],["__scopeId","data-v-65fed850"]]);var $=R}}]);
//# sourceMappingURL=627.ec095d03.js.map