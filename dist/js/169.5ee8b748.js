"use strict";(self["webpackChunkuzbek"]=self["webpackChunkuzbek"]||[]).push([[169],{2263:function(e,t,o){o.r(t),o.d(t,{default:function(){return R}});var i=o(6768),r=o(4232),s=o(5130);const n={class:"dialog-overlay"},a={class:"dialog-content"},l={class:"dialog-header"},d={class:"dialog-title font-gilroy"},u={class:"dialog-description"},c={class:"dialog-body"},m={class:"form-grid"},h={class:"form-group"},p={for:"name"},b={key:0,class:"error-message"},f={class:"form-group"},g={for:"birthDate"},k={key:0,class:"error-message"},v={class:"form-group"},_={for:"iin"},y={key:0,class:"error-message"},L={class:"form-group"},C={for:"phone"},D={key:0,class:"error-message"},I={class:"city"},F={style:{width:"100%",display:"flex","justify-content":"end"}},w=["disabled"];function x(e,t,o,x,E,M){const X=(0,i.g2)("map-fill");return(0,i.uX)(),(0,i.CE)("div",n,[(0,i.Lk)("div",a,[(0,i.Lk)("div",l,[(0,i.Lk)("button",{class:"close-btn",onClick:t[0]||(t[0]=(...e)=>M.closeModal&&M.closeModal(...e))},"×"),(0,i.Lk)("h1",d,(0,r.v_)(E.list.association_title||"{ association_title }"),1),(0,i.Lk)("p",u,(0,r.v_)(E.list.association_description||"{ association_description }"),1)]),(0,i.Lk)("div",c,[(0,i.Lk)("div",m,[(0,i.Lk)("div",h,[(0,i.Lk)("label",p,(0,r.v_)(E.list.your_fcs||"{ your_fcs }"),1),(0,i.bo)((0,i.Lk)("input",{type:"text",id:"name","onUpdate:modelValue":t[1]||(t[1]=e=>E.form.name=e)},null,512),[[s.Jo,E.form.name]]),E.errors.name?((0,i.uX)(),(0,i.CE)("span",b,(0,r.v_)(E.errors.name),1)):(0,i.Q3)("",!0)]),(0,i.Lk)("div",f,[(0,i.Lk)("label",g,(0,r.v_)(E.list.date_of_birth||"{ date_of_birth }"),1),(0,i.bo)((0,i.Lk)("input",{type:"date",id:"birthDate","onUpdate:modelValue":t[2]||(t[2]=e=>E.form.birthDate=e)},null,512),[[s.Jo,E.form.birthDate]]),E.errors.birthDate?((0,i.uX)(),(0,i.CE)("span",k,(0,r.v_)(E.errors.birthDate),1)):(0,i.Q3)("",!0)]),(0,i.Lk)("div",v,[(0,i.Lk)("label",_,(0,r.v_)(E.list.iin||"{ iin }"),1),(0,i.bo)((0,i.Lk)("input",{type:"text",id:"iin","onUpdate:modelValue":t[3]||(t[3]=e=>E.form.iin=e),maxlength:"12",onInput:t[4]||(t[4]=(...e)=>M.validateIIN&&M.validateIIN(...e))},null,544),[[s.Jo,E.form.iin]]),E.errors.iin?((0,i.uX)(),(0,i.CE)("span",y,(0,r.v_)(E.errors.iin),1)):(0,i.Q3)("",!0)]),(0,i.Lk)("div",L,[(0,i.Lk)("label",C,(0,r.v_)(E.list.phone_number||"{ phone_number }"),1),(0,i.bo)((0,i.Lk)("input",{type:"text",id:"phone","onUpdate:modelValue":t[5]||(t[5]=e=>E.form.phone=e)},null,512),[[s.Jo,E.form.phone]]),E.errors.phone?((0,i.uX)(),(0,i.CE)("span",D,(0,r.v_)(E.errors.phone),1)):(0,i.Q3)("",!0)])]),(0,i.Lk)("div",I,(0,r.v_)(E.list.country||"{ country }"),1),(0,i.Lk)("div",null,[(0,i.bF)(X,{onRegionSelected:M.handleRegionSelected},null,8,["onRegionSelected"])]),(0,i.Lk)("div",F,[(0,i.Lk)("button",{disabled:E.submitting,onClick:t[6]||(t[6]=(...e)=>M.submitForm&&M.submitForm(...e)),class:"submit-btn font-gilroy"},(0,r.v_)(E.submitting?"...":E.list.send_request_btn||"{ send_request_btn }"),9,w)])])])])}o(4114);var E=o(3173),M=o(6595),X=o(782),A={name:"Dialog",props:{visible:{type:Boolean,required:!0}},components:{MapFill:M.A},data(){return{form:{name:"",birthDate:"",iin:"",phone:"",city:""},regionCode:null,errors:{},submitting:!1,list:{}}},computed:{...(0,X.L8)(["currentLanguage"])},watch:{currentLanguage(e){this.getTranslations()}},mounted(){this.getTranslations()},methods:{getTranslations(){E.Ay.get("/trans/").then((e=>{const t=e.data,o=this.currentLanguage;t[o]?this.list=t[o]:console.error(`Переводы для языка "${o}" не найдены`)})).catch((e=>{console.error("Ошибка при загрузке переводов:",e)}))},handleRegionSelected(e){this.regionCode=e},closeModal(){this.$router.push("/")},validateIIN(){this.form.iin=this.form.iin.replace(/\D/g,"").slice(0,12)},validateForm(){let e=!0;this.errors={name:this.form.name?null:"ФИО обязательно.",birthDate:this.form.birthDate?null:"Дата рождения обязательна.",iin:this.form.iin?null:"ИИН обязателен.",phone:this.form.phone?null:"Телефон обязателен."};for(const t in this.errors)this.errors[t]&&(e=!1);return e},async submitForm(){if(!this.validateForm())return;const e={name:this.form.name,iin:this.form.iin,date_birth:this.form.birthDate,phone_number:this.form.phone,region_code:this.regionCode};this.submitting=!0;try{await E.Ay.post("/jointogroups/",e,{headers:{"Content-Type":"application/json"}});this.closeModal()}catch(t){console.error("Ошибка при отправке заявки:",t),alert("Произошла ошибка при отправке заявки. Попробуйте позже.")}finally{this.submitting=!1}}}},J=o(1241);const Q=(0,J.A)(A,[["render",x],["__scopeId","data-v-2e92a886"]]);var R=Q}}]);
//# sourceMappingURL=169.5ee8b748.js.map