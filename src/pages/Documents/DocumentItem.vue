<script>
export default {
  name: "DocumentItem",
  data(){
    return {
      doc: "План ассоциации узбеков РК Дустлик на 2018 год"
    }
  }
}
</script>

<template>
<div class="doc">
  <span>{{doc}}</span>
  <div style="display: flex; align-items: center;">
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M28 20V25.3333C28 26.0406 27.719 26.7189 27.219 27.219C26.7189 27.719 26.0406 28 25.3333 28H6.66667C5.95942 28 5.28115 27.719 4.78105 27.219C4.28095 26.7189 4 26.0406 4 25.3333V20" stroke="#0072AB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M9.33301 13.3333L15.9997 20L22.6663 13.3333" stroke="#0072AB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16 20V4" stroke="#0072AB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</div>
</template>

<style scoped>
.doc {
  border-radius: 8px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  padding: 15px 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  color: #333333;
  border: 1px solid #EBEEF0;
  background-color: #FAFCFD;
}
@media (max-width: 1024px) {
  .doc {
    width: 94%;
  }
}
@media (max-width: 768px) {
  .doc {
    width: 90%;
  }
}
</style>