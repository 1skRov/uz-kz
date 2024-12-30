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
      translations: {},
    }
  },
  computed: {
    ...mapGetters(['currentLanguage']),
  },
  watch: {
    currentLanguage(newLang) {
      this.getTranslations();
    },
  },
  mounted() {
    this.getTranslations();
  },
  methods:{
    getTranslations() {
      api.get('/trans/')
          .then((response) => {
            const translations = response.data;
            console.log("data", translations)
            const currentLang = this.currentLanguage;
            console.log("lang", this.currentLanguage)
            if (translations[currentLang]) {
              this.translations = translations[currentLang];
              console.log("data in lang", this.translations)
            } else {
              console.error(`Переводы для языка "${currentLang}" не найдены`);
            }
          })
          .catch((error) => {
            console.error("Ошибка при загрузке переводов:", error);
          });
    },
  },
}
</script>

<template>
  <div class="main">
    <div class="sections">
      <section1 :title="translations.main_title" :btn_title="translations.join_button"/>
      <section2 :title="translations.about_us" :btn_title="translations.more_detail"/>
      <section3 :title="translations.culture_traditions" :btn_title="translations.learn_more"/>
      <section4 :title="translations.popular_persons" :btn_title="translations.learn_more"/>
      <section5 :title="translations.ethno_center" :btn_title="translations.learn_more"/>
      <section6 :title="translations.partners"/>
    </div>
  </div>
</template>

<style scoped>
.main {
  width:100%;
}
</style>