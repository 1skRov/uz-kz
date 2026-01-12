<script>
  import { mapActions, mapGetters } from 'vuex';
  import Header from '@/components/Header/HeaderWrapper.vue';
  import Footer from '@/components/Footer.vue';
  import api, { getTranslations } from '@/axios';

  export default {
    name: 'FullMainPage',
    components: { Footer, Header },
    data() {
      return {
        navbars: null,
        contacts: {},
        lang: [],
      };
    },
    created() {
      this.initializeApp();
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
        } else if (this.currentLanguage) {
          await this.updateLanguage(this.currentLanguage);
        }
        await this.getContacts();
      },
      async getContacts() {
        try {
          const response = await api.get(`/contacts/?lang_code=${this.currentLanguage}`);
          this.contacts = response.data[0] || {};
        } catch (error) {
          console.error('Ошибка при загрузке контактов:', error);
        }
      },
    },
  };
</script>

<template>
  <div class="main">
    <Header :contacts="contacts" />
    <div class="content">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
    <div class="main__footer">
      <Footer :contact_line="contacts" />
    </div>
  </div>
</template>

<style scoped></style>
