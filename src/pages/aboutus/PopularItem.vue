<script>
import BasicButton from "@/components/Buttons/button_basic.vue";

export default {
  name: "PopularItem",
  components: {BasicButton},
  data(){
    return {
      name: "Product Name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    }
  }
}
</script>

<template>
<div class="main">
  <div style="width: 15%;">
    <img src="@/assets/images/1.png" alt="" style="width: 100%; height: 100%">
  </div>
  <div style="display: flex; flex-direction: column; padding: 20px 35px; gap: 1rem">
    <p class="font-gilroy" style="font-size: 32px; margin: 0; font-weight: 500;">{{name}}</p>
    <span style="font-size: 18px; color: #575F6C">{{text}}</span>
    <div>
      <basic-button :is-blue="true"/>
    </div>
  </div>
</div>
</template>

<style scoped>
.main {
  width: 100%;
  border-radius: 8px;
  background-color: #FAFCFD;
  border: 1px solid #EBEEF0;
  display: flex;
}
</style>