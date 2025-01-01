<script>
import SideBar from "@/components/SideBarText.vue";
import Navigation from "@/components/Navigation.vue";
import Sections from "@/components/Sections.vue";
import api from "@/axios";
import {mapGetters} from "vuex";

export default {
  name: "Donates",
  components: {Sections, Navigation, SideBar},
  data() {
    return{
      menuItems: [],
      translations: {},
    };
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
  methods: {
    getTranslations() {
      api.get('/trans/')
          .then((response) => {
            const translations = response.data;
            const currentLang = this.currentLanguage;
            if (translations[currentLang]) {
              this.translations = translations[currentLang];

              this.menuItems = [
                {name: this.translations.with_card || "{ with_card }", route: '/donates/card'},
                {name: this.translations.with_qr || "{ with_qr }", route: '/donates/qr'},
              ];
            } else {
              console.error(`Переводы для языка "${currentLang}" не найдены`);
            }
          })
          .catch((error) => {
            console.error("Ошибка при загрузке переводов:", error);
          });
    },
  }
};
</script>

<template>
  <div class="main" style="display: flex">
    <side-bar :title="translations.donates_side || '{ donates_side }'"/>
    <div class="content">
      <sections>
        <template #content>
          <navigation :menu-items="menuItems" style="margin-bottom: 40px;"/>
          <router-view></router-view>
        </template>
      </sections>
    </div>
  </div>
</template>

<style scoped>
.content {
  width: 65%;
  margin: 0 auto;
}
@media (max-width: 1024px) {
  .content {
    width: 90%;
    margin: 0 auto;
    padding-bottom: 50px;
  }
}

@media (max-width: 768px) {

}
</style>