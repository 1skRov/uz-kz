<script>
  import Sections from '@/components/Sections.vue';
  import SideBar from '@/pages/Main/SideBar.vue';
  import More from '@/components/Buttons/more.vue';
  import api, { BASE_URL } from '@/axios';
  import { mapGetters } from 'vuex';

  export default {
    name: 'Section3',
    components: { More, SideBar, Sections },
    props: {
      title: {
        type: String,
        default: '{{ culture_traditions }}',
      },
      btn_title: {
        type: String,
        default: '{{ learn_more }}',
      },
      isBackground: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        page: '03',
        culture: {},
        BASE_URL,
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
            console.error('культура и традиция', error);
          });
      },
      goToAboutUsSection() {
        this.$router.push({ path: '/about-us', hash: '#section-2' });
      },
    },
  };
</script>

<template>
  <div class="section" id="section3">
    <div class="icon-top">
      <img src="@/assets/images/cult-top.png" alt="icon top">
    </div>
    <div class="icon-btm">
      <img src="@/assets/images/cult-bottom.png" alt="icon bottom">
    </div>
    <side-bar class="side" :page="page" :isBackground="isBackground" />
    <div class="content">
      <sections>
        <template #title>
          {{ title }}
        </template>
        <template #title-button>
          <more @click="goToAboutUsSection" :title="btn_title" />
        </template>
        <template #content>
          <div class="content-body" v-if="culture">
            <img :src="BASE_URL + culture.image" alt="culture and traditions" class="bg-img">
            <div class="abs-text">
              <div class="image-title">{{ culture.title }}</div>
              <div class="image-desc truncate-text" v-html="culture.desc"></div>
            </div>
          </div>
          <div class="mobile-text">
            <div class="image-title font-gilroy">{{ culture.title }}</div>
            <div class="image-desc truncate-text" v-html="culture.desc"></div>
          </div>
        </template>
        <template #btn>
          <more @click="goToAboutUsSection" :title="btn_title" />
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
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }

  .content-body {
    width: 100%;
    position: relative;
    overflow: hidden;
    border-radius: 6px;
    height: 640px;
  }

  .bg-img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }

  .content-body::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 45%;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.65),
      rgba(0, 0, 0, 0)
    );
    pointer-events: none;
    z-index: 2;
  }

  .abs-text {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 40px;
    z-index: 3;
  }

  .mobile-text {
    display: none;
  }

  .content-body .image-title {
    color: #fff;
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 16px;
  }

  .content-body .image-desc {
    line-height: 200%;
    color: rgba(255, 255, 255, 0.7);
  }

  .content-body .image-desc > p {
    margin: 0 !important;
  }

  @media (max-width: 1024px) {
    .content {
      width: 100%;
      padding: 0 20px;
    }

    .content-body {
      height: 560px;
    }

    .icon-top {
      display: none;
    }
  }

  @media (max-width: 768px) {
    .content-body {
      height: 200px;
    }

    .abs-text {
      display: none;
    }

    .mobile-text {
      display: block;
    }

    .mobile-text .image-title {
      font-size: 18px;
      font-weight: 500;
      margin: 24px 0;
      line-height: 130%;
    }

    .mobile-text .image-desc {
      line-height: 180%;
      color: var(--color-text-main);
    }
  }
</style>