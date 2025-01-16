<script>
import Sections from "@/components/Sections.vue";
import SideBar from "@/pages/Main/SideBar.vue";
import More from "@/components/Buttons/more.vue";
import api, {BASE_URL} from "@/axios";
import {mapGetters} from "vuex";

export default {
  name: "Section3",
  components: {More, SideBar, Sections},
  props: {
    title: {
      type: String,
      default: "{{ culture_traditions }}"
    },
    btn_title: {
      type: String,
      default: "{{ learn_more }}"
    }
  },
  data() {
    return {
      page: "03",
      culture:{},
      BASE_URL
    };
  },
  computed: {
    ...mapGetters(['currentLanguage']),
  },
  watch: {
    currentLanguage(newLang) {
      this.getCulture();
    },
  },
  mounted() {
    this.getCulture();
  },
  methods: {
    getCulture() {
      api.get(`/traditions/?lang_code=${this.currentLanguage}`)
          .then((response) => {
            const cultureArray = response.data;
            this.culture = cultureArray[0];
          })
          .catch((error) => {
            console.error("культура и традиция",error);
          });
    },
    goToAboutUsSection() {
      this.$router.push({ path: '/about-us', hash: '#section-2' })
    }
  }
}
</script>

<template>
  <div class="section">
    <div class="icon-top">
      <img src="@/assets/images/cult-top.png" alt="icon top">
    </div>
    <div class="icon-btm">
      <img src="@/assets/images/cult-bottom.png" alt="icon bottom">
    </div>
    <side-bar :page="page" :is-background="true"/>
    <div class="content">
      <sections>
        <template #title>
          {{ title }}
        </template>
        <template #title-button>
          <more @click="goToAboutUsSection" :title="btn_title"/>
        </template>
        <template #content>
          <div class="content-body" v-if="culture">
            <div class="gradient-overlay"></div>
            <img :src="BASE_URL + culture.image" alt="culture and traditions" style="width: 100%; height: 100%;">
            <div class="abs-text">
              <div class="image-title font-gilroy">{{ culture.title }}</div>
              <div class="image-desc truncate-text" v-html="culture.desc"></div>
            </div>
          </div>
        </template>
        <template #btn>
          <more @click="goToAboutUsSection" :title="btn_title"/>
        </template>
      </sections>
    </div>
  </div>
</template>

<style scoped>
.section {
  display: flex;
  background: #F7F8FA;
  position: relative;
}
.section .icon-btm {
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 2;
}
.section .icon-top {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
}
.content {
  width: 70%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  align-items: center;
}
.content-body {
  width: 100%;
  height: 85vh;
  position: relative;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 6px;
}
.abs-text {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 40px;
}
.content-body .image-title {
  position: relative;
  color: #fff;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 16px;
  z-index: 10;
}
.content-body .image-desc {
  position: relative;
  line-height: 2rem;
  z-index: 10;
  color: rgba(255, 255, 255, 0.7);
}
.content-body .image-desc > p {
  margin: 0 !important;
}
.content-body .gradient-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
  z-index: 1;
}
@media (max-width: 1024px) {
  .content {
    width: 90%;
  }
  .content-body {
    height: 40vh;
  }
  .icon-top {
    display: none;
  }
}

@media (max-width: 768px) {
  .abs-text {
    position: static;
    padding: 20px 0 0 0;
  }

  .content-body .image-title {
    color: #333;
    font-size: 18px;
    margin-bottom: 10px;
  }

  .content-body .image-desc {
    color: #333333;
  }

  .content-body {
    height: auto;
  }

  .gradient-overlay {
    display: none;
  }

  .content-body img {
    width: 100%;
    height: auto;
    object-fit: cover;
    display: block;
    border-radius: 8px;
  }

  .icon-btm {
    display: none;
  }
}
</style>