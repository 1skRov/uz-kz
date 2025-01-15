<script>
import { mapGetters } from 'vuex';
import Section2 from "@/pages/Main/section2.vue";
import Section3 from "@/pages/Main/Section3.vue";
import Section6 from "@/pages/Main/Section6.vue";
import Section4 from "@/pages/Main/Section4.vue";
import Section5 from "@/pages/Main/Section5.vue";
import Section1 from "@/pages/Main/section1.vue";

export default {
  name: "MainPage",
  components: {Section1, Section5, Section4, Section6, Section2, Section3},
  computed: {
    ...mapGetters(['getTranslations']),
  },
}
</script>

<template>
  <div class="main">
    <div class="sections">
      <section1 :title="getTranslations.main_title" :btn_title="getTranslations.join_button"/>
      <section2 :title="getTranslations.about_us" :btn_title="getTranslations.more_detail"/>
      <section3 :title="getTranslations.culture_traditions" :btn_title="getTranslations.learn_more"/>
      <section4 :title="getTranslations.popular_persons" :btn_title="getTranslations.learn_more"/>
      <section5 :title="getTranslations.ethno_center" :btn_title="getTranslations.learn_more"/>
      <section6 :title="getTranslations.partners"/>
    </div>
  </div>
</template>

<style scoped>
.main {
  width:100%;
}
</style>