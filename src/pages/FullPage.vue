<script>
import {mapActions, mapGetters} from 'vuex';
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import api, {getTranslations} from "@/axios";

export default {
  name: "FullMainPage",
  components: {Footer, Header},
  data() {
    return {
      navbars: null,
      contacts: {},
      lang: [],
      trans: {},
  }},
  computed: {
    ...mapGetters(['currentLanguage', 'getTranslations']),
  },
  watch: {
    currentLanguage(newLang, oldLang) {
      if (newLang !== oldLang) {
        this.updateLanguageResources();
      }
    },
  },
  async mounted() {
    this.updateLanguageResources();
  },
  methods: {
    ...mapActions(['updateTranslations']),
    updateLanguageResources() {
      this.getContacts();
      this.getLang();
      this.fetchAndSetTranslations();
    },
    async fetchAndSetTranslations() {
      try {
        const result = await getTranslations(this.currentLanguage);
        await this.updateTranslations(result);
      } catch (error) {
        console.error('Ошибка при загрузке переводов:', error);
      }
    },
    async getContacts() {
      try {
        const response = await api.get(`/contacts/?lang_code=${this.currentLanguage}`);
        this.contacts = response.data[0] || {};
      } catch (error) {
        console.error('Ошибка при загрузке контактов:', error);
      }
    },
    async getLang() {
      try {
        const response = await api.get('/languages/');
        if (Array.isArray(response.data)) {
          this.lang = response.data.map(item => ({
            code: item.kod,
            title: item.title,
          }));
        } else {
          this.lang = []
        }
      } catch (error) {
        console.error('Ошибка при загрузке языка:', error);
      }
    },
  }
}
</script>

<template>
  <div class="main">
    <div style="width: 100%" class="main__header">
      <Header :translate="getTranslations" :contacts="contacts" :lang="lang"/>
    </div>
    {{ getTranslations }}
    <div class="content">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
    <div class="main__footer">
      <Footer :translate="getTranslations" :contact_line="contacts"/>
    </div>
  </div>
</template>

<style>
.main__header {
  position: sticky;
  top: 0;
  left: 0;
  z-index: 5000;
  background-color: #fff;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>