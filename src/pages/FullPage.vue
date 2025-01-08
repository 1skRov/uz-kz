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
    currentLanguage(newLang) {
      this.getContacts();
      this.getLang();
      this.getTranslations();
    },
  },
  async mounted() {
    this.trans = await getTranslations(this.currentLanguage);
    this.getContacts();
    this.getLang();

  },
  methods: {
    getContacts() {
      api.get(`/contacts/?lang_code=${this.currentLanguage}`)
          .then((response) => {
            const data = response.data[0];
            if (data) {
              this.contacts = data;
            }
          })
          .catch((error) => {
            console.error('Ошибка при загрузке contacts:', error);
          });
    },
    getLang() {
      api.get('/languages/', {
        headers: {
          'ngrok-skip-browser-warning': 'true'
        }
      })
          .then(response => {
            if (Array.isArray(response.data)) {
              this.lang = response.data.map(item => ({
                code: item.kod,
                title: item.title
              }));
            }
          })
          .catch(error => {
            console.error("Ошибка при загрузке languages:", error);
          });
    },
  }
}
</script>

<template>
  <div class="main">
    <div style="width: 100%">
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
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>