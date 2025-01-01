<script>
import SideBar from "@/pages/Main/SideBar.vue";
import More from "@/components/Buttons/more.vue";
import Sections from "@/components/Sections.vue";
import api from "@/axios";
import {mapGetters} from "vuex";

export default {
  name: "section2",
  components: {Sections, More, SideBar},
  props:{
    title: {
      type: String,
      required: true,
      default: "{{ about_us }}"
    },
    btn_title: {
      type: String,
      default: "{{ more_detail }}"
    }
  },
  data(){
    return {
      page: "02",
      about: {},
    }
  },
  computed: {
    ...mapGetters(['currentLanguage']),
  },
  watch: {
    currentLanguage(newLang) {
      this.getAboutUS();
    },
  },
  mounted() {
    this.getAboutUS();
  },
  methods: {
    getAboutUS() {
      api.get(`/about-us/?lang_code=${this.currentLanguage}`)
          .then((response) => {
            const aboutAray = response.data;
            this.about = aboutAray[0];
          })
          .catch((error) => {
            console.error(error);
          });
    },
    goToAboutUS() {
      this.$router.push('/about-us')
    }
  }
}
</script>

<template>
<div class="section">
    <side-bar :page="page" :icon="false"/>
    <div class="content">
      <sections :is-had="true">
        <template #title>
          {{ title }}
        </template>
        <template #content>
          <p v-html="about?.desc"></p>
        </template>
        <template #btn>
          <more @click="goToAboutUS" :title="btn_title"/>
        </template>
      </sections>
  </div>
</div>
</template>

<style scoped>
.section {
  display: flex;
}
.content {
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  border-top: 1px solid #DDE2E4;
}
@media (max-width: 1024px) {

  .content {
    width: 90%;
  }
}
@media (max-width: 768px) {  }
</style>