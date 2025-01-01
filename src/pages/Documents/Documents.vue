<script>
import Important from "@/pages/Documents/Important.vue";
import Articles from "@/pages/Documents/Articles.vue";
import DocImp from "@/pages/Documents/DocImp.vue";
import Projects from "@/pages/Documents/Projects.vue";
import {mapGetters} from "vuex";
import api from "@/axios";

export default {
name: "Documents",
  components: {Projects, DocImp, Articles, Important},
  data(){
    return{
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
            const currentLang = this.currentLanguage;
            if (translations[currentLang]) {
              this.translations = translations[currentLang];
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
  <div>
    <doc-imp :translations="translations"/>
    <projects :title="translations.projects" :title_side="translations.projects_side"/>
  </div>
</template>

<style scoped>

</style>