<script>
import { mapGetters } from 'vuex';
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import api from "@/axios";

export default {
  name: "FullMainPage",
  components: {Footer, Header},
  data() {
    return {
      navbars: null,
      contacts: {
        phone1: null,
        phone2: null,
        email: null,
        address: null
      },
      lang: [],
  }},
  computed: {
    ...mapGetters(['currentLanguage']),
  },
  watch: {
    currentLanguage(newLang) {
      // this.getNav();
      // this.getContacts();
      this.getLang();
    },
  },
  mounted() {
    // this.getNav();
    // this.getContacts();
    this.getLang();
  },
  methods: {
    getNav() {
      api.get(`/navbars/?lang_code=${this.currentLanguage}`, {
        headers: {
          'ngrok-skip-browser-warning': 'true'
        }
      })
          .then(response => {
            this.navbars = response.data.map(item => ({
              id: item.id,
              title: item.title
            }));
            console.log("navbars загружены успешно:", this.navbars);
          })
          .catch(error => {
            console.error("navbars", error);
          });
    },
    getContacts() {
      api.get(`/contacts/?lang_code=${this.currentLanguage}`, {
        headers: {
          'ngrok-skip-browser-warning': 'true',
        },
      })
          .then((response) => {
            const data = response.data[0];
            if (data) {
              this.contacts = {
                address: data.address,
                phone1: data.phone1,
                phone2: data.phone2,
                email: data.email,
              };
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
              console.log("lang загружены успешно:", this.lang);
            } else {
              console.error("Некорректный формат данных для lang");
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
<!--    <div v-for="c in lang">{{c}}</div>-->
    <div style="width: 100%">
      <Header :lists="navbars" :contacts="contacts" :lang="lang"/>
    </div>
    <div class="content">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
    <div>
      <Footer/>
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