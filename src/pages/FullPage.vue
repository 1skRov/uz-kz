<script>
import { mapGetters } from 'vuex';
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
    ...mapGetters(['currentLanguage']),
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
    updateLanguageResources() {
      this.getContacts();
      this.getLang();
      this.getTranslations();
    },
    async getTranslations() {
      this.trans = await getTranslations(this.currentLanguage);
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
      <Header :translate="trans" :contacts="contacts" :lang="lang"/>
    </div>
    <div class="content">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
    <div class="main__footer">
      <Footer :translate="trans" :contact_line="contacts"/>
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