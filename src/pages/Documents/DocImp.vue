<script>
import Articles from "@/pages/Documents/Articles.vue";
import Important from "@/pages/Documents/Important.vue";
import SideBar from "@/components/SideBarText.vue";
import {mapGetters} from "vuex";
import api from "@/axios";
import Plans from "@/pages/Documents/Plans.vue";

export default {
  name: "DocImp",
  components: {Plans, SideBar, Important, Articles},
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
  <div style="display: flex">
    <side-bar :title="translations.documents_side || '{ documents_side }'"></side-bar>
    <div class="documents">
      <important :title="translations.important_documents"/>
      <articles :title="translations.charters"/>
      <plans :title="translations.plans"/>
    </div>
  </div>
</template>

<style scoped>
.documents {
  width: 65%;
  margin: 0 auto;
}
@media (max-width: 1024px) {
  .documents {
    width: 90%;
  }
}

@media (max-width: 768px) {

}
</style>