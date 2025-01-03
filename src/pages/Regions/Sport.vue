<script>
import Sections from "@/components/Sections.vue";
import SideBar from "@/components/SideBarText.vue";
import {mapGetters} from "vuex";
import api, {getTranslations, BASE_URL} from "@/axios";

export default {
  name: "Education",
  components: {SideBar, Sections},
  data(){
    return {
      trans: {},
      sport: {},
      BASE_URL
    }
  },
  computed: {
    ...mapGetters(['currentLanguage']),
  },
  watch: {
    currentLanguage(newLang) {
      this.getTranslations();
      this.getEducation();
    },
  },
  async mounted() {
    this.trans = await getTranslations(this.currentLanguage);
    this.getEducation();
  },
  methods: {
    getEducation() {
      api.get(`/sport/?lang_code=${this.currentLanguage}`)
          .then((response) => {
            const data = response.data[0];
            if (data) {
              this.sport = data;
            }
          })
          .catch((error) => {
            console.error(error);
          });
    },
  }
}
</script>

<template>
  <div class="main">
    <side-bar :title="trans.regions || '{ regions }'"/>
    <div class="content">
      <div class="image_content">
        <img :src="BASE_URL + sport.image" :alt="BASE_URL + sport.image" style="width: 100%; height: 100%">
      </div>
      <div class="text-content">
        <div class="title">{{ sport.title }}</div>
        <div class="text" v-html="sport.full_desc"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  .content {
    margin: 0 auto;
    padding: 64px 0;
    width: 65%;
    height: 100%;

    .image_content {
      width: 100%;
      height: 65%;
      border-radius: 8px;
      overflow: hidden;
      margin-bottom: 30px;
    }
    .text-content {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      .title {
        font-size: 40px;
        color: #333333;
      }
      .text {
        line-height: 32px;
      }
    }
  }
}
</style>