<script>
import Section2 from "@/pages/Main/section2.vue";
import Section3 from "@/pages/Main/Section3.vue";
import Section6 from "@/pages/Main/Section6.vue";
import Section4 from "@/pages/Main/Section4.vue";
import Section5 from "@/pages/Main/Section5.vue";
import Section1 from "@/pages/Main/section1.vue";

export default {
  name: "MainPage",
  components: {Section1, Section5, Section4, Section6, Section2, Section3}
}
</script>

<template>
  <div class="main">
    <div class="sections">
      <section1/>
      <section2/>
      <section3/>
      <section4/>
      <section5/>
      <section6/>
    </div>
  </div>
</template>

<style scoped>
.main {
  width:100%;
}
</style>