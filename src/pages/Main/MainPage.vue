<script>
import { mapGetters } from 'vuex';
import Section2 from "@/pages/Main/section2.vue";
import Section3 from "@/pages/Main/Section3.vue";
import Section6 from "@/pages/Main/Section6.vue";
import Section4 from "@/pages/Main/Section4.vue";
import Section5 from "@/pages/Main/Section5.vue";
import Section1 from "@/pages/Main/section1.vue";
import api from "@/axios";

export default {
  name: "MainPage",
  components: {Section1, Section5, Section4, Section6, Section2, Section3},
  data() {
    return {
      section1: {},
      section2: {},
      section3: {},
      section4: [],
      section5: {},
      section6: [],
    }
  },
  computed: {
    ...mapGetters(['currentLanguage']),
  },
  watch: {
    currentLanguage(newLang) {
      this.getData();
    },
  },
  mounted() {
    this.getData();
  },
  methods:{
    getData() {
      api.get(`/informations/?lang_code=${this.currentLanguage}`, {
        headers: {
          'ngrok-skip-browser-warning': 'true',
        },
      })
          .then(response => {
            const data = response.data;

            this.section1 = data.find(item => item.category_id === 2) || {};
            this.section2 = data.find(item => item.category_id === 3) || {};
            this.section3 = data.find(item => item.category_id === 4) || {};
            this.section4 = data.filter(item => item.category_id === 5) || [];
            this.section5 = data.find(item => item.category_id === 6) || {};
            this.section6 = data.filter(item => item.category_id === 9) || [];

            console.log("Данные загружены и распределены по секциям", {
              section1: this.section1,
              section2: this.section2,
              section3: this.section3,
              section4: this.section4,
              section5: this.section5,
              section6: this.section6,
            });
          })
          .catch(error => {
            console.error("Ошибка при загрузке данных:", error);
          });
    },
  },
}
</script>

<template>
  <div class="main">
    <div class="sections">
      <section1 :data="section1"/>
      <section2 :data="section2"/>
      <section3 :data="section3"/>
      <section4 :data="section4"/>
      <section5 :data="section5"/>
      <section6 :data="section6"/>
    </div>
  </div>
</template>

<style scoped>
.main {
  width:100%;
}
</style>