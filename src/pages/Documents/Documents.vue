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
  data() {
    return {
      important_documents: {},
      charters: [],
      plans: [],
      projects: [],
    }
  },
  computed: {
    ...mapGetters(['currentLanguage']),
  },
  watch: {
    currentLanguage(newLang) {
      this.getDocs();
    },
  },
  mounted() {
    this.getDocs();
  },
  methods:{
    getDocs() {
      api.get(`/informations/?lang_code=${this.currentLanguage}`, {
        headers: {
          'ngrok-skip-browser-warning': 'true',
        },
      })
          .then(response => {
            const data = response.data;
            this.important_documents = data.find(item => item.category_id === 16) || {};
            this.charters = data.filter(item => item.category_id === 17);
            this.plans = data.filter(item => item.category_id === 19);
            this.projects = data.filter(item => item.category_id === 2);
            console.log("Данные загружены и распределены по секциям");
          })
          .catch(error => {
            console.error("Ошибка при загрузке данных:", error);
          });
    },
  }
}
</script>

<template>
  <div>
    <doc-imp :important="important_documents"/>
    <projects />
  </div>
</template>

<style scoped>

</style>