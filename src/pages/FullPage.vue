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
  }},
  created() {
    this.initializeApp();
    this.getContacts();
  },
  computed: {
    ...mapGetters(['currentLanguage', 'availableLanguages']),
  },
  methods: {
    ...mapActions(['fetchLanguages', 'updateLanguage']),
    async initializeApp() {
      await this.fetchLanguages();
      if (!this.currentLanguage && this.availableLanguages.length > 0) {
        await this.updateLanguage(this.availableLanguages[0].code);
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
  }
}
</script>

<template>
  <div class="main">
    <div style="width: 100%" class="main__header">
      <Header :contacts="contacts"/>
    </div>
    <div class="content">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
    <div class="main__footer">
      <Footer :contact_line="contacts"/>
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