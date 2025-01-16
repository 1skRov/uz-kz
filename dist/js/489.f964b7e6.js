"use strict";(self["webpackChunkuzbek"]=self["webpackChunkuzbek"]||[]).push([[489],{813:function(e,t,l){l.d(t,{A:function(){return u}});var C=l(6768),s=l(4232);const a={class:"custom-select",ref:"customSelect"},n={class:"radios"},i={class:"list"},d=["onClick"];function c(e,t,l,c,o,r){return(0,C.uX)(),(0,C.CE)("details",a,[(0,C.Lk)("summary",n,[(0,C.Lk)("span",null,(0,s.v_)(r.selectedItem?.name||"Выберите"),1)]),(0,C.Lk)("ul",i,[((0,C.uX)(!0),(0,C.CE)(C.FK,null,(0,C.pI)(l.items,((e,t)=>((0,C.uX)(),(0,C.CE)("li",{key:t,class:(0,s.C4)({selected:o.selectedIndex===t}),onClick:e=>r.selectItem(t)},(0,s.v_)(e.name),11,d)))),128))])],512)}l(4114);var o={name:"CustomSelect",props:{items:{type:Array,required:!0}},data(){return{selectedIndex:0}},computed:{selectedItem(){return this.items[this.selectedIndex]||null}},methods:{selectItem(e){this.selectedIndex=e;const t=this.items[e]?.route;t&&this.$router.push(t);const l=this.$refs.customSelect;l&&(l.open=!1)}}},r=l(1241);const v=(0,r.A)(o,[["render",c],["__scopeId","data-v-a2c8b70e"]]);var u=v},4706:function(e,t,l){l.r(t),l.d(t,{default:function(){return A}});var C=l(6768),s=l(4232);const a={class:"contacts"},n={key:0,class:"map-mobile"},i={class:"left"},d={class:"left__city"},c={class:"custom-select",ref:"customSelect"},o={class:"radios"},r={class:"list"},v=["onClick"],u={class:"left__address"},h={class:"left__contacts"},p={style:{display:"flex","flex-direction":"column",gap:"5px"}},m=["href"],g={key:1,class:"right"};function w(e,t,l,w,f,k){const L=(0,C.g2)("map-component");return(0,C.uX)(),(0,C.CE)("div",a,[e.isMobile?((0,C.uX)(),(0,C.CE)("div",n,[(0,C.bF)(L)])):(0,C.Q3)("",!0),(0,C.Lk)("div",i,[(0,C.Lk)("div",d,[(0,C.Lk)("details",c,[(0,C.Lk)("summary",o,[(0,C.Lk)("span",null,(0,s.v_)(e.selectedItem?.name||"Выберите регион"),1)]),(0,C.Lk)("ul",r,[((0,C.uX)(!0),(0,C.CE)(C.FK,null,(0,C.pI)(e.filteredRegions,(t=>((0,C.uX)(),(0,C.CE)("li",{key:t.id,class:(0,s.C4)({selected:e.selectedItem&&e.selectedItem.id===t.id}),onClick:l=>e.selectRegion(t)},(0,s.v_)(t.name),11,v)))),128))])],512)]),(0,C.Lk)("div",u,[t[0]||(t[0]=(0,C.Lk)("svg",{width:"19",height:"28",viewBox:"0 0 19 28",fill:"#0072AB",xmlns:"http://www.w3.org/2000/svg"},[(0,C.Lk)("path",{d:"M9.6663 0.679688C4.52497 0.679688 0.343384 4.86388 0.343384 10.0052C0.343384 15.9825 8.29899 25.6922 8.63766 26.1016L9.6663 27.349L10.6949 26.1016C11.0336 25.6909 18.9892 15.9825 18.9892 10.0052C18.9892 4.86254 14.8076 0.679688 9.6663 0.679688ZM9.6663 3.34635C13.337 3.34635 16.3226 6.33454 16.3226 10.0052C16.3225 13.6119 12.1703 19.8149 9.6663 23.1016C7.1623 19.8176 3.01005 13.6172 3.01005 10.0052C3.01005 6.33454 5.99563 3.34635 9.6663 3.34635ZM9.6663 6.66667C7.82497 6.66667 6.33297 8.15867 6.33297 10C6.33297 11.8413 7.82497 13.3333 9.6663 13.3333C11.5076 13.3333 12.9996 11.8413 12.9996 10C12.9996 8.15867 11.5076 6.66667 9.6663 6.66667Z",fill:"#0072AB"})],-1)),(0,C.Lk)("p",null,(0,s.v_)(e.contacts.address),1)]),(0,C.Lk)("div",h,[t[1]||(t[1]=(0,C.Lk)("svg",{width:"21",height:"20",viewBox:"0 0 21 20",fill:"#0072AB",xmlns:"http://www.w3.org/2000/svg"},[(0,C.Lk)("path",{d:"M19.7624 14.1333L15.3874 12.2583C15.2005 12.1787 14.9928 12.1619 14.7956 12.2105C14.5983 12.2591 14.4222 12.3705 14.2937 12.5279L12.3562 14.8951C9.31545 13.4614 6.86837 11.0143 5.43469 7.97358L7.80188 6.03608C7.95957 5.90783 8.07117 5.73169 8.11981 5.53434C8.16844 5.33699 8.15145 5.12916 8.07141 4.94233L6.19641 0.567328C6.10856 0.365925 5.9532 0.201486 5.7571 0.102366C5.561 0.0032464 5.33645 -0.0243417 5.12219 0.0243589L1.05969 0.961859C0.853118 1.00956 0.668812 1.12587 0.536855 1.29181C0.404898 1.45775 0.333082 1.66352 0.33313 1.87553C0.33313 11.8951 8.45422 20.0005 18.4581 20.0005C18.6702 20.0007 18.8761 19.9289 19.0421 19.7969C19.2081 19.665 19.3245 19.4806 19.3722 19.274L20.3097 15.2115C20.3581 14.9962 20.3299 14.7707 20.23 14.5739C20.1301 14.3772 19.9648 14.2214 19.7624 14.1333Z",fill:"#0072AB"})],-1)),(0,C.Lk)("div",p,[(0,C.Lk)("p",null,(0,s.v_)(e.contacts.phone1),1),(0,C.Lk)("p",null,(0,s.v_)(e.contacts.phone1),1)])]),(0,C.Lk)("a",{class:"left__mail",href:`mailto:${e.contacts.email}`,target:"_blank",style:{"text-decoration":"none",color:"#333333"}},[t[2]||(t[2]=(0,C.Lk)("svg",{width:"28",height:"22",viewBox:"0 0 28 22",fill:"#0072AB",xmlns:"http://www.w3.org/2000/svg"},[(0,C.Lk)("path",{d:"M3.33366 0.333374C1.86033 0.333374 0.666992 1.52671 0.666992 3.00004V19C0.666992 20.4734 1.86033 21.6667 3.33366 21.6667H24.667C26.1403 21.6667 27.3337 20.4734 27.3337 19V3.00004C27.3337 1.52671 26.1403 0.333374 24.667 0.333374H3.33366ZM3.33366 3.00004H24.667V4.33598L14.0003 11L3.33366 4.33598V3.00004ZM3.33366 7.00264L14.0003 13.6667L24.667 7.00264V19H3.33366V7.00264Z",fill:"#0072AB"})],-1)),(0,C.Lk)("div",null,(0,s.v_)(e.contacts.email),1)],8,m),t[3]||(t[3]=(0,C.Fv)('<div class="left__soc_media" data-v-722594bd><p class="font-gilroy left__media-title" data-v-722594bd>{ social_media }</p><div style="display:flex;gap:1.5rem;" data-v-722594bd><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-722594bd><g clip-path="url(#clip0_248_4912)" data-v-722594bd><path fill-rule="evenodd" clip-rule="evenodd" d="M13.875 23.8544C19.6118 22.9542 24 17.9896 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9896 4.38819 22.9542 10.125 23.8544V15.4688H7.07812V12H10.125V9.35625C10.125 6.34922 11.9156 4.6875 14.6578 4.6875C15.9703 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8297C14.3391 7.875 13.875 8.80078 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8544Z" fill="#0072AB" data-v-722594bd></path></g><defs data-v-722594bd><clipPath id="clip0_248_4912" data-v-722594bd><rect width="24" height="24" rx="12" fill="white" data-v-722594bd></rect></clipPath></defs></svg><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-722594bd><path fill-rule="evenodd" clip-rule="evenodd" d="M3.36743 23.4115C3.88314 23.6127 4.65848 23.8502 6.08577 23.9151C7.62862 23.9865 8.09225 24 11.9996 24C15.9085 24 16.3721 23.9857 17.9149 23.9151C19.3422 23.8502 20.1176 23.6127 20.6333 23.4115C21.3166 23.1455 21.8045 22.8288 22.3166 22.3166C22.8288 21.8045 23.1455 21.3173 23.4115 20.634C23.6113 20.1183 23.8502 19.3429 23.9151 17.9157C23.9857 16.3714 24 15.9077 24 12.0004C24 8.09154 23.9857 7.62933 23.9151 6.08506C23.8502 4.65777 23.6127 3.88243 23.4115 3.36672C23.1455 2.68339 22.8295 2.1955 22.3166 1.68336C21.8038 1.17122 21.3166 0.853092 20.6333 0.588463C20.1161 0.388742 19.3422 0.14979 17.9149 0.0848813C16.3707 0.0156923 15.9085 0 11.9996 0C8.09225 0 7.62861 0.0142658 6.08506 0.0848813C4.65777 0.14979 3.88243 0.387315 3.36672 0.588463C2.68268 0.853092 2.1955 1.17122 1.68336 1.68336C1.17193 2.19693 0.854519 2.6841 0.588463 3.36743C0.388742 3.88457 0.14979 4.65848 0.0848813 6.08577C0.0156923 7.63004 0 8.09225 0 12.0011C0 15.9099 0.0142658 16.3728 0.0855946 17.9157C0.150504 19.3429 0.388029 20.1183 0.589176 20.634C0.853806 21.3173 1.17122 21.8045 1.68407 22.3166C2.19693 22.8288 2.6841 23.1455 3.36743 23.4115ZM11.915 9.27645C10.4579 9.27645 9.27709 10.4579 9.27709 11.915C9.27709 13.3721 10.4579 14.5535 11.915 14.5535C13.3721 14.5535 14.5535 13.3721 14.5535 11.915C14.5535 10.4579 13.3721 9.27645 11.915 9.27645ZM11.915 15.9793C9.67031 15.9793 7.85074 14.1597 7.85074 11.915H7.85081C7.85081 9.67018 9.67031 7.85074 11.915 7.85074C14.1597 7.85074 15.9793 9.67031 15.9793 11.915C15.9793 14.1597 14.1597 15.9793 11.915 15.9793ZM15.3503 8.21734C15.246 8.0611 15.1903 7.87745 15.1904 7.68959C15.1906 7.43779 15.2908 7.19637 15.4689 7.01836C15.647 6.84034 15.8884 6.74029 16.1402 6.74017H16.1406C16.3284 6.74025 16.5121 6.79603 16.6682 6.90045C16.8244 7.00488 16.946 7.15327 17.0179 7.32685C17.0897 7.50043 17.1084 7.69141 17.0717 7.87564C17.035 8.05987 16.9444 8.22907 16.8116 8.36185C16.6787 8.49463 16.5094 8.58502 16.3251 8.6216C16.1409 8.65817 15.9499 8.63929 15.7764 8.56733C15.6029 8.49537 15.4546 8.37357 15.3503 8.21734ZM7.24749 18.0854C7.52623 18.194 7.94566 18.3225 8.71734 18.3577V18.3578C9.55139 18.3962 9.80132 18.4038 11.915 18.4038C14.0287 18.4038 14.2793 18.3962 15.1136 18.3578C15.8853 18.3227 16.3048 18.1942 16.5835 18.0855C16.953 17.9417 17.217 17.7701 17.4939 17.4935C17.7707 17.2169 17.9421 16.9532 18.0859 16.5837C18.1939 16.305 18.323 15.8855 18.3582 15.1139C18.3966 14.2789 18.4042 14.0289 18.4042 11.9153C18.4042 9.80157 18.3966 9.55164 18.3582 8.71664C18.3231 7.94496 18.1946 7.5254 18.0859 7.2468C17.9421 6.87726 17.7711 6.61322 17.4939 6.33638C17.2167 6.05955 16.953 5.88757 16.5835 5.74434C16.304 5.6367 15.8853 5.50721 15.1136 5.47206C14.2786 5.43407 14.0277 5.4259 11.915 5.4259C9.80227 5.4259 9.55164 5.43356 8.71734 5.47194C7.94566 5.50702 7.5261 5.63556 7.24749 5.74421C6.87732 5.88744 6.61391 6.05904 6.33708 6.33625C6.06024 6.61347 5.8889 6.87713 5.74504 7.24667C5.63739 7.5261 5.5079 7.94484 5.47276 8.71652C5.43502 9.55152 5.42673 9.80144 5.42673 11.9151C5.42673 14.0288 5.43439 14.2794 5.47276 15.1137C5.50784 15.8854 5.63638 16.305 5.74504 16.5836C5.88827 16.9531 6.05986 17.2165 6.33708 17.4934C6.61429 17.7702 6.87796 17.9415 7.24749 18.0854ZM6.73061 4.41557C7.23344 4.21991 7.80921 4.08631 8.6518 4.04793H8.65212C9.49649 4.00893 9.76681 4 11.9159 4C14.0651 4 14.3348 4.00937 15.1788 4.04793C16.0208 4.08567 16.5962 4.21991 17.1 4.41557C17.6198 4.61762 18.0617 4.888 18.5015 5.32852C18.9413 5.76903 19.2118 6.21018 19.4144 6.73061C19.6101 7.23344 19.7437 7.80914 19.7821 8.6518C19.8204 9.49573 19.8294 9.76554 19.8294 11.915C19.8294 14.0645 19.8204 14.3336 19.7821 15.1782C19.7443 16.0208 19.6101 16.5962 19.4144 17.0994C19.2118 17.6198 18.942 18.0617 18.5015 18.5015C18.061 18.9413 17.6198 19.2118 17.0994 19.4144C16.5962 19.6101 16.0209 19.7437 15.1782 19.7821C14.3343 19.8211 14.0645 19.83 11.915 19.83C9.76554 19.83 9.49618 19.8204 8.6518 19.7821C7.80921 19.7437 7.23439 19.6101 6.73061 19.4144C6.20955 19.2118 5.76897 18.9411 5.32852 18.5015C4.88806 18.0619 4.61762 17.6198 4.41557 17.0994C4.21991 16.5962 4.08631 16.0209 4.04793 15.1782C4.00893 14.3343 4 14.0645 4 11.915C4 9.76554 4.00893 9.49573 4.04793 8.6518C4.08631 7.8092 4.21991 7.23375 4.41557 6.73061C4.61762 6.20955 4.888 5.76834 5.32852 5.32852C5.76903 4.8887 6.21018 4.61762 6.73061 4.41557Z" fill="#0072AB" data-v-722594bd></path></svg><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-722594bd><path fill-rule="evenodd" clip-rule="evenodd" d="M2.0369 11.2933C8.23838 8.59144 12.3737 6.81019 14.4428 5.94958C20.3505 3.49236 21.5781 3.06551 22.3782 3.05142C22.5542 3.04832 22.9476 3.09193 23.2025 3.29875C23.4177 3.47337 23.4769 3.70927 23.5053 3.87484C23.5336 4.04041 23.5689 4.41758 23.5408 4.71228C23.2207 8.07603 21.8355 16.2389 21.1307 20.0064C20.8325 21.6005 20.2454 22.1351 19.6769 22.1874C18.4416 22.301 17.5035 21.371 16.307 20.5866C14.4347 19.3593 13.377 18.5953 11.5596 17.3977C9.45927 16.0136 10.8208 15.2529 12.0178 14.0097C12.331 13.6844 17.774 8.73353 17.8794 8.28441C17.8926 8.22824 17.9048 8.01887 17.7804 7.90831C17.656 7.79775 17.4724 7.83556 17.34 7.86563C17.1522 7.90825 14.1612 9.88519 8.36691 13.7965C7.51793 14.3794 6.74894 14.6635 6.05995 14.6486C5.3004 14.6322 3.83932 14.2191 2.75317 13.8661C1.42095 13.433 0.362128 13.2041 0.454327 12.4686C0.50235 12.0855 1.02987 11.6938 2.0369 11.2933Z" fill="#0072AB" data-v-722594bd></path></svg><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-722594bd><path fill-rule="evenodd" clip-rule="evenodd" d="M21.3904 4.1141C22.4184 4.39087 23.2289 5.20141 23.5057 6.22941C24.0197 8.10749 23.9999 12.0218 23.9999 12.0218C23.9999 12.0218 23.9999 15.9164 23.5057 17.7944C23.2289 18.8224 22.4184 19.633 21.3904 19.9097C19.5123 20.404 11.9999 20.404 11.9999 20.404C11.9999 20.404 4.50739 20.404 2.60954 19.89C1.58154 19.6132 0.771002 18.8027 0.494232 17.7747C0 15.9164 0 12.002 0 12.002C0 12.002 0 8.10749 0.494232 6.22941C0.771002 5.20141 1.60131 4.3711 2.60954 4.09433C4.48762 3.6001 11.9999 3.6001 11.9999 3.6001C11.9999 3.6001 19.5123 3.6001 21.3904 4.1141ZM15.855 12.002L9.60788 15.6V8.40399L15.855 12.002Z" fill="#0072AB" data-v-722594bd></path></svg><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-722594bd><path d="M17.24 0H13.0966V16.3478C13.0966 18.2957 11.503 19.8957 9.51988 19.8957C7.53673 19.8957 5.94315 18.2957 5.94315 16.3478C5.94315 14.4348 7.50133 12.8695 9.41366 12.8V8.69567C5.19947 8.7652 1.7998 12.1391 1.7998 16.3478C1.7998 20.5913 5.27029 24 9.55531 24C13.8403 24 17.3107 20.5565 17.3107 16.3478V7.9652C18.8689 9.07827 20.7812 9.73913 22.7998 9.77393V5.66957C19.6835 5.56522 17.24 3.06087 17.24 0Z" fill="#0072AB" data-v-722594bd></path></svg></div></div>',1))]),e.isMobile?(0,C.Q3)("",!0):((0,C.uX)(),(0,C.CE)("div",g,[(0,C.bF)(L)]))])}l(1454);var f=l(4151),k=l(3173),L=l(813),_=l(782),b=(0,C.pM)({name:"regions",components:{SelectElement:L.A,MapComponent:f.A},data(){return{contacts:{phone1:null,phone2:null,email:null,address:null},regions:[],selectedItem:null,windowWidth:window.innerWidth}},computed:{...(0,_.L8)(["currentLanguage"]),isMobile(){return this.windowWidth<=768},filteredRegions(){return this.regions.map((e=>{const t={...e};switch(this.currentLanguage){case"kk":t.name=e.titli_kk;break;case"en":t.name=e.titli_en;break;default:t.name=e.titli_ru;break}return t}))}},mounted(){this.getContacts(),this.getRegion()},methods:{getContacts(){k.Ay.get("/contacts/").then((e=>{const t=e.data[0];t&&(this.contacts=t)})).catch((e=>{console.error(e)}))},getRegion(){k.Ay.get("/etno-center-region/").then((e=>{const t=e.data;t&&(this.regions=t)})).catch((e=>{console.error(e)}))},selectRegion(e){this.selectedItem=e}}}),x=l(1241);const M=(0,x.A)(b,[["render",w],["__scopeId","data-v-722594bd"]]);var A=M}}]);
//# sourceMappingURL=489.f964b7e6.js.map