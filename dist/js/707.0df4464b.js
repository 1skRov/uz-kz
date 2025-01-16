"use strict";(self["webpackChunkuzbek"]=self["webpackChunkuzbek"]||[]).push([[707,872],{5861:function(t,e,n){n.r(e),n.d(e,{default:function(){return D}});var i=n(6768),s=n(4232),o=n(5130);const a={class:"dialog-overlay"},r={class:"dialog-content"},l={class:"dialog-header"},c={class:"dialog-title font-gilroy"},u={class:"dialog-description"},d={class:"dialog-body"},g={class:"form-grid"},p={class:"form-group"},m={for:"name"},b={key:0,class:"error-message"},h={class:"form-group"},k={for:"birthDate"},v={key:0,class:"error-message"},_={class:"form-group"},L={for:"iin"},f={key:0,class:"error-message"},y={class:"form-group"},C={for:"phone"},S={key:0,class:"error-message"},A={class:"city"},F={style:{width:"100%",display:"flex","justify-content":"end"}},w=["disabled"];function T(t,e,n,T,M,I){const B=(0,i.g2)("map-fill");return(0,i.uX)(),(0,i.CE)("div",a,[(0,i.Lk)("div",r,[(0,i.Lk)("div",l,[(0,i.Lk)("button",{class:"close-btn",onClick:e[0]||(e[0]=(...t)=>I.closeModal&&I.closeModal(...t))},"×"),(0,i.Lk)("h1",c,(0,s.v_)(t.getTranslations.association_title||"{ association_title }"),1),(0,i.Lk)("p",u,(0,s.v_)(t.getTranslations.association_description||"{ association_description }"),1)]),(0,i.Lk)("div",d,[(0,i.Lk)("div",g,[(0,i.Lk)("div",p,[(0,i.Lk)("label",m,(0,s.v_)(t.getTranslations.your_fcs||"{ your_fcs }"),1),(0,i.bo)((0,i.Lk)("input",{type:"text",id:"name","onUpdate:modelValue":e[1]||(e[1]=t=>M.form.name=t)},null,512),[[o.Jo,M.form.name]]),M.errors.name?((0,i.uX)(),(0,i.CE)("span",b,(0,s.v_)(M.errors.name),1)):(0,i.Q3)("",!0)]),(0,i.Lk)("div",h,[(0,i.Lk)("label",k,(0,s.v_)(t.getTranslations.date_of_birth||"{ date_of_birth }"),1),(0,i.bo)((0,i.Lk)("input",{type:"date",id:"birthDate","onUpdate:modelValue":e[2]||(e[2]=t=>M.form.birthDate=t)},null,512),[[o.Jo,M.form.birthDate]]),M.errors.birthDate?((0,i.uX)(),(0,i.CE)("span",v,(0,s.v_)(M.errors.birthDate),1)):(0,i.Q3)("",!0)]),(0,i.Lk)("div",_,[(0,i.Lk)("label",L,(0,s.v_)(t.getTranslations.iin||"{ iin }"),1),(0,i.bo)((0,i.Lk)("input",{type:"text",id:"iin","onUpdate:modelValue":e[3]||(e[3]=t=>M.form.iin=t),maxlength:"12",onInput:e[4]||(e[4]=(...t)=>I.validateIIN&&I.validateIIN(...t))},null,544),[[o.Jo,M.form.iin]]),M.errors.iin?((0,i.uX)(),(0,i.CE)("span",f,(0,s.v_)(M.errors.iin),1)):(0,i.Q3)("",!0)]),(0,i.Lk)("div",y,[(0,i.Lk)("label",C,(0,s.v_)(t.getTranslations.phone_number||"{ phone_number }"),1),(0,i.bo)((0,i.Lk)("input",{type:"text",id:"phone","onUpdate:modelValue":e[5]||(e[5]=t=>M.form.phone=t)},null,512),[[o.Jo,M.form.phone]]),M.errors.phone?((0,i.uX)(),(0,i.CE)("span",S,(0,s.v_)(M.errors.phone),1)):(0,i.Q3)("",!0)])]),(0,i.Lk)("div",A,(0,s.v_)(t.getTranslations.country||"{ country }"),1),(0,i.Lk)("div",null,[(0,i.bF)(B,{onRegionSelected:I.handleRegionSelected},null,8,["onRegionSelected"])]),(0,i.Lk)("div",F,[(0,i.Lk)("button",{disabled:M.submitting,onClick:e[6]||(e[6]=(...t)=>I.submitForm&&I.submitForm(...t)),class:"submit-btn font-gilroy"},(0,s.v_)(M.submitting?"...":t.getTranslations.send_request_btn||"{ send_request_btn }"),9,w)])])])])}n(4114);var M=n(3173),I=n(5107),B=n(782),E={name:"Dialog",props:{visible:{type:Boolean,required:!0}},components:{MapFill:I.A},data(){return{form:{name:"",birthDate:"",iin:"",phone:"",city:""},regionCode:null,errors:{},submitting:!1}},computed:{...(0,B.L8)(["getTranslations"])},methods:{handleRegionSelected(t){this.regionCode=t},closeModal(){this.$router.push("/")},validateIIN(){this.form.iin=this.form.iin.replace(/\D/g,"").slice(0,12)},validateForm(){let t=!0;this.errors={name:this.form.name?null:"ФИО обязательно.",birthDate:this.form.birthDate?null:"Дата рождения обязательна.",iin:this.form.iin?null:"ИИН обязателен.",phone:this.form.phone?null:"Телефон обязателен."};for(const e in this.errors)this.errors[e]&&(t=!1);return t},async submitForm(){if(!this.validateForm())return;const t={name:this.form.name,iin:this.form.iin,date_birth:this.form.birthDate,phone_number:this.form.phone,region_code:this.regionCode};this.submitting=!0;try{await M.Ay.post("/jointogroups/",t,{headers:{"Content-Type":"application/json"}});this.closeModal()}catch(e){console.error("Ошибка при отправке заявки:",e),alert("Произошла ошибка при отправке заявки. Попробуйте позже.")}finally{this.submitting=!1}}}},$=n(1241);const R=(0,$.A)(E,[["render",T],["__scopeId","data-v-72d1b460"]]);var D=R},1831:function(t,e,n){n.r(e),n.d(e,{default:function(){return Pt}});var i=n(6768);const s={class:"main"},o={class:"sections"};function a(t,e,n,a,r,l){const c=(0,i.g2)("section1"),u=(0,i.g2)("section2"),d=(0,i.g2)("section3"),g=(0,i.g2)("section4"),p=(0,i.g2)("section5"),m=(0,i.g2)("section6");return(0,i.uX)(),(0,i.CE)("div",s,[(0,i.Lk)("div",o,[(0,i.bF)(c,{title:t.getTranslations.main_title,btn_title:t.getTranslations.join_button},null,8,["title","btn_title"]),(0,i.bF)(u,{title:t.getTranslations.about_us,btn_title:t.getTranslations.more_detail},null,8,["title","btn_title"]),(0,i.bF)(d,{title:t.getTranslations.culture_traditions,btn_title:t.getTranslations.learn_more},null,8,["title","btn_title"]),(0,i.bF)(g,{title:t.getTranslations.popular_persons,btn_title:t.getTranslations.learn_more},null,8,["title","btn_title"]),(0,i.bF)(p,{title:t.getTranslations.ethno_center,btn_title:t.getTranslations.learn_more},null,8,["title","btn_title"]),(0,i.bF)(m,{title:t.getTranslations.partners},null,8,["title"])])])}var r=n(782),l=n(4232);const c={class:"section"},u={class:"content"},d=["innerHTML"];function g(t,e,n,s,o,a){const r=(0,i.g2)("side-bar"),g=(0,i.g2)("more"),p=(0,i.g2)("sections");return(0,i.uX)(),(0,i.CE)("div",c,[(0,i.bF)(r,{page:o.page,icon:!1},null,8,["page"]),(0,i.Lk)("div",u,[(0,i.bF)(p,{"is-had":!0},{title:(0,i.k6)((()=>[(0,i.eW)((0,l.v_)(n.title),1)])),content:(0,i.k6)((()=>[(0,i.Lk)("p",{innerHTML:o.about?.desc},null,8,d)])),btn:(0,i.k6)((()=>[(0,i.bF)(g,{onClick:a.goToAboutUS,title:n.btn_title},null,8,["onClick","title"])])),_:1})])])}n(4114);const p={key:0,width:"16",height:"89",viewBox:"0 0 16 89",fill:"none",xmlns:"http://www.w3.org/2000/svg"};function m(t,e,n,s,o,a){return(0,i.uX)(),(0,i.CE)("div",{class:"side-bar",style:(0,l.Tr)({backgroundColor:n.isBackground?"#0072AB":"white"})},[(0,i.Lk)("p",{style:(0,l.Tr)({color:n.isBackground?"#fff":"#CFD3DA"}),class:"font-gilroy"},(0,l.v_)(n.page),5),n.icon?((0,i.uX)(),(0,i.CE)("svg",p,[(0,i.Lk)("path",{d:"M7.2929 88.7071C7.68342 89.0976 8.31659 89.0976 8.70711 88.7071L15.0711 82.3431C15.4616 81.9526 15.4616 81.3195 15.0711 80.9289C14.6805 80.5384 14.0474 80.5384 13.6569 80.9289L8 86.5858L2.34315 80.9289C1.95262 80.5384 1.31946 80.5384 0.928936 80.9289C0.538411 81.3195 0.538411 81.9526 0.928936 82.3431L7.2929 88.7071ZM7 4.37114e-08L7 88L9 88L9 -4.37114e-08L7 4.37114e-08Z",style:(0,l.Tr)({fill:n.isBackground?"#fff":"#CFD3DA"})},null,4)])):(0,i.Q3)("",!0)],4)}var b={name:"SideBar",props:{page:String,icon:{type:Boolean,default:!0},isBackground:{type:Boolean,default:!1}}},h=n(1241);const k=(0,h.A)(b,[["render",m],["__scopeId","data-v-1f158596"]]);var v=k,_=n(3185),L=n(2569),f=n(3173),y={name:"section2",components:{Sections:L.A,More:_.A,SideBar:v},props:{title:{type:String,default:"{{ about_us }}"},btn_title:{type:String,default:"{{ more_detail }}"}},data(){return{page:"02",about:{}}},computed:{...(0,r.L8)(["currentLanguage"])},watch:{currentLanguage(t){this.getAboutUS()}},mounted(){this.getAboutUS()},methods:{getAboutUS(){f.Ay.get(`/about-us/?lang_code=${this.currentLanguage}`).then((t=>{const e=t.data;this.about=e[0]})).catch((t=>{console.error("о нас",t)}))},goToAboutUS(){this.$router.push("/about-us")}}};const C=(0,h.A)(y,[["render",g],["__scopeId","data-v-179a35be"]]);var S=C,A=n(2325),F=n(1420);const w={class:"section"},T={class:"content"},M={key:0,class:"content-body"},I=["src"],B={class:"abs-text"},E={class:"image-title font-gilroy"},$=["innerHTML"];function R(t,e,n,s,o,a){const r=(0,i.g2)("side-bar"),c=(0,i.g2)("more"),u=(0,i.g2)("sections");return(0,i.uX)(),(0,i.CE)("div",w,[e[1]||(e[1]=(0,i.Lk)("div",{class:"icon-top"},[(0,i.Lk)("img",{src:A,alt:"icon top"})],-1)),e[2]||(e[2]=(0,i.Lk)("div",{class:"icon-btm"},[(0,i.Lk)("img",{src:F,alt:"icon bottom"})],-1)),(0,i.bF)(r,{page:o.page,"is-background":!0},null,8,["page"]),(0,i.Lk)("div",T,[(0,i.bF)(u,null,{title:(0,i.k6)((()=>[(0,i.eW)((0,l.v_)(n.title),1)])),"title-button":(0,i.k6)((()=>[(0,i.bF)(c,{onClick:a.goToAboutUsSection,title:n.btn_title},null,8,["onClick","title"])])),content:(0,i.k6)((()=>[o.culture?((0,i.uX)(),(0,i.CE)("div",M,[e[0]||(e[0]=(0,i.Lk)("div",{class:"gradient-overlay"},null,-1)),(0,i.Lk)("img",{src:o.BASE_URL+o.culture.image,alt:"culture and traditions",style:{width:"100%",height:"100%"}},null,8,I),(0,i.Lk)("div",B,[(0,i.Lk)("div",E,(0,l.v_)(o.culture.title),1),(0,i.Lk)("div",{class:"image-desc truncate-text",innerHTML:o.culture.desc},null,8,$)])])):(0,i.Q3)("",!0)])),btn:(0,i.k6)((()=>[(0,i.bF)(c,{onClick:a.goToAboutUsSection,title:n.btn_title},null,8,["onClick","title"])])),_:1})])])}var D={name:"Section3",components:{More:_.A,SideBar:v,Sections:L.A},props:{title:{type:String,default:"{{ culture_traditions }}"},btn_title:{type:String,default:"{{ learn_more }}"}},data(){return{page:"03",culture:{},BASE_URL:f.C1}},computed:{...(0,r.L8)(["currentLanguage"])},watch:{currentLanguage(t){this.getCulture()}},mounted(){this.getCulture()},methods:{getCulture(){f.Ay.get(`/traditions/?lang_code=${this.currentLanguage}`).then((t=>{const e=t.data;this.culture=e[0]})).catch((t=>{console.error("культура и традиция",t)}))},goToAboutUsSection(){this.$router.push({path:"/about-us",hash:"#section-2"})}}};const X=(0,h.A)(D,[["render",R],["__scopeId","data-v-0f7f9b23"]]);var U=X;const x={class:"section"},P={class:"right-content"},q={class:"title-section"},V={class:"btns"},H={class:"carousel-container"},Q={class:"images"},W=["src","alt"],j={class:"btns btn-mob"};function J(t,e,n,s,o,a){const r=(0,i.g2)("side-bar"),c=(0,i.g2)("left"),u=(0,i.g2)("right"),d=(0,i.g2)("sections"),g=(0,i.g2)("swiper-slide"),p=(0,i.g2)("swiper");return(0,i.uX)(),(0,i.CE)("div",x,[(0,i.bF)(r,{page:o.page,icon:!1},null,8,["page"]),(0,i.Lk)("div",P,[(0,i.Lk)("div",q,[(0,i.bF)(d,{style:{"padding-bottom":"0"}},{title:(0,i.k6)((()=>[(0,i.eW)((0,l.v_)(n.title),1)])),"title-button":(0,i.k6)((()=>[(0,i.Lk)("div",V,[(0,i.bF)(c,{onClick:a.moveLeft},null,8,["onClick"]),(0,i.bF)(u,{onClick:a.moveRight},null,8,["onClick"])])])),_:1})]),(0,i.Lk)("div",H,[(0,i.bF)(p,{class:"my-swiper",loop:!0,autoplay:{delay:3e3,disableOnInteraction:!1},"space-between":30,centeredSlides:!0,"slides-per-view":1,breakpoints:{0:{slidesPerView:2,centeredSlides:!0},600:{slidesPerView:3,centeredSlides:!0},1e3:{slidesPerView:5,centeredSlides:!0}},pagination:"",onSwiper:a.onSwiperReady},{default:(0,i.k6)((()=>[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(o.partners,((t,e)=>((0,i.uX)(),(0,i.Wv)(g,{key:e},{default:(0,i.k6)((()=>[(0,i.Lk)("div",Q,[(0,i.Lk)("img",{style:{width:"100%",height:"100%",display:"block"},src:o.BASE_URL+t.image,alt:t.name},null,8,W)])])),_:2},1024)))),128))])),_:1},8,["onSwiper"])]),(0,i.Lk)("div",j,[(0,i.bF)(c,{onClick:a.moveLeft},null,8,["onClick"]),(0,i.bF)(u,{onClick:a.moveRight},null,8,["onClick"])])])])}var N=n(8421),z=n(793),G=n(7866),Z={name:"Section6",components:{Swiper:N.RC,SwiperSlide:N.qr,Right:G.A,Left:z.A,More:_.A,SideBar:v,Sections:L.A},props:{title:{type:String,required:!0,default:"{{ partners }}"}},data(){return{page:"06",partners:[],BASE_URL:f.C1,swiperInstance:null}},computed:{...(0,r.L8)(["currentLanguage"])},watch:{currentLanguage(t){this.getPartners()}},mounted(){this.getPartners()},methods:{getPartners(){f.Ay.get(`/our-partners/?lang_code=${this.currentLanguage}`).then((t=>{const e=t.data;Array.isArray(e)&&e.length>0?this.partners=e:this.partners=[]})).catch((t=>{console.error(t)}))},moveLeft(){this.swiperInstance&&this.swiperInstance.slidePrev()},moveRight(){this.swiperInstance&&this.swiperInstance.slideNext()},onSwiperReady(t){this.swiperInstance=t}}};const K=(0,h.A)(Z,[["render",J],["__scopeId","data-v-0f418881"]]);var O=K;const Y={class:"section"},tt={class:"content"},et={class:"mob-has"};function nt(t,e,n,s,o,a){const r=(0,i.g2)("side-bar"),c=(0,i.g2)("more"),u=(0,i.g2)("CardGrid"),d=(0,i.g2)("sections");return(0,i.uX)(),(0,i.CE)("div",Y,[(0,i.bF)(r,{page:o.page,icon:!1},null,8,["page"]),(0,i.Lk)("div",tt,[(0,i.bF)(d,null,{title:(0,i.k6)((()=>[(0,i.eW)((0,l.v_)(n.title),1)])),"title-button":(0,i.k6)((()=>[(0,i.bF)(c,{onClick:a.goToFamousPersons,title:n.btn_title},null,8,["onClick","title"])])),content:(0,i.k6)((()=>[(0,i.bF)(u,{cards:o.persons},null,8,["cards"])])),btn:(0,i.k6)((()=>[(0,i.Lk)("div",et,[(0,i.bF)(c,{onClick:a.goToFamousPersons,title:n.btn_title},null,8,["onClick","title"])])])),_:1})])])}var it=n(8369),st={name:"Section4",components:{CardGrid:it.A,More:_.A,Sections:L.A,SideBar:v},props:{title:{type:String,required:!0,default:"{{ popular_persons }}"},btn_title:{type:String,default:"{{ learn_more }}"}},data(){return{page:"04",persons:[]}},computed:{...(0,r.L8)(["currentLanguage"])},watch:{currentLanguage(t){this.getCulture()}},mounted(){this.getCulture()},methods:{getCulture(){f.Ay.get(`/famous-persons/?lang_code=${this.currentLanguage}`).then((t=>{this.persons=t.data})).catch((t=>{console.error("известные личности",t)}))},goToFamousPersons(){this.$router.push("/famous-persons")}}};const ot=(0,h.A)(st,[["render",nt],["__scopeId","data-v-a12823e0"]]);var at=ot;const rt={class:"section"},lt={class:"content"},ct={style:{position:"relative"}},ut={style:{width:"100%",height:"100%"}};function dt(t,e,n,s,o,a){const r=(0,i.g2)("side-bar"),c=(0,i.g2)("more"),u=(0,i.g2)("map-fill"),d=(0,i.g2)("sections");return(0,i.uX)(),(0,i.CE)("div",rt,[(0,i.bF)(r,{page:o.page},null,8,["page"]),(0,i.Lk)("div",lt,[(0,i.bF)(d,null,{title:(0,i.k6)((()=>[(0,i.eW)((0,l.v_)(n.title),1)])),"title-button":(0,i.k6)((()=>[(0,i.bF)(c,{onClick:a.goToRegions,title:n.btn_title},null,8,["onClick","title"])])),content:(0,i.k6)((()=>[(0,i.Lk)("div",ct,[(0,i.Lk)("div",ut,[(0,i.bF)(u)])])])),btn:(0,i.k6)((()=>[(0,i.bF)(c,{onClick:a.goToRegions,title:n.btn_title},null,8,["onClick","title"])])),_:1})])])}var gt=n(5107),pt={name:"Section5",components:{MapFill:gt.A,More:_.A,Sections:L.A,SideBar:v},props:{title:{type:String,required:!0,default:"{{ ethno_center }}"},btn_title:{type:String,default:"{{ learn_more }}"}},data(){return{page:"05"}},methods:{goToRegions(){this.$router.push("/regions")}}};const mt=(0,h.A)(pt,[["render",dt],["__scopeId","data-v-bcec550e"]]);var bt=mt;const ht={style:{display:"flex"}},kt={class:"content"},vt={class:"tablet-space"},_t={class:"tablet-space-img"},Lt={class:"image-grid"},ft={class:"large-image"},yt=["src"],Ct={class:"small-images"},St=["src"],At=["src"],Ft=["src"],wt={class:"backdrop-blur-container"},Tt={style:{position:"relative","z-index":"2"}},Mt={class:"font-gilroy title",style:{"word-wrap":"break-word"}},It=["innerHTML"];function Bt(t,e,n,s,o,a){const r=(0,i.g2)("side-bar"),c=(0,i.g2)("Button_basic");return(0,i.uX)(),(0,i.CE)("div",ht,[(0,i.bF)(r,{page:o.page},null,8,["page"]),(0,i.Lk)("div",kt,[(0,i.Lk)("div",vt,[(0,i.Lk)("div",_t,[(0,i.Lk)("div",Lt,[(0,i.Lk)("div",ft,[(0,i.Lk)("img",{src:o.list.image1,alt:"Large image"},null,8,yt)]),(0,i.Lk)("div",Ct,[(0,i.Lk)("img",{src:o.list.image2,alt:"Small image"},null,8,St),(0,i.Lk)("img",{src:o.list.image3,alt:"Small image"},null,8,At),(0,i.Lk)("img",{src:o.list.image4,alt:"Small image"},null,8,Ft)])])]),(0,i.Lk)("div",wt,[(0,i.Lk)("div",Tt,[(0,i.Lk)("h1",Mt,(0,l.v_)(n.title),1),(0,i.Lk)("p",{class:"desc",innerHTML:o.list.desc},null,8,It)]),(0,i.Lk)("div",null,[(0,i.bF)(c,{title_button:n.btn_title,onClick:a.openModal},null,8,["title_button","onClick"])])])])])])}var Et=n(7402),$t=n(5861),Rt={name:"section1",components:{Dialog:$t["default"],Button_basic:Et.A,SideBar:v},props:{title:{type:String,default:"{{ main_title }}"},btn_title:{type:String,default:"{{ join_button }}"}},data(){return{page:"01",list:{}}},computed:{...(0,r.L8)(["currentLanguage"])},watch:{currentLanguage(t){this.getMain()}},mounted(){this.getMain()},methods:{getMain(){f.Ay.get(`/association/?lang_code=${this.currentLanguage}`).then((t=>{const e=t.data;Array.isArray(e)&&e.length>0?this.list={...e[0],image1:`${f.C1}/${e[0].image1}`,image2:`${f.C1}/${e[0].image2}`,image3:`${f.C1}/${e[0].image3}`,image4:`${f.C1}/${e[0].image4}`}:this.list={}})).catch((t=>{console.error(t)}))},openModal(){this.$router.push("/member-association")}}};const Dt=(0,h.A)(Rt,[["render",Bt],["__scopeId","data-v-cdb20d6a"]]);var Xt=Dt,Ut={name:"MainPage",components:{Section1:Xt,Section5:bt,Section4:at,Section6:O,Section2:S,Section3:U},computed:{...(0,r.L8)(["getTranslations"])}};const xt=(0,h.A)(Ut,[["render",a],["__scopeId","data-v-f344bc8e"]]);var Pt=xt}}]);
//# sourceMappingURL=707.0df4464b.js.map