<script>
  import SideBar from '@/pages/Main/SideBar.vue';
  import Button_basic from '@/components/Buttons/button_basic.vue';
  import api, { BASE_URL } from '@/axios';
  import { mapGetters } from 'vuex';

  export default {
    name: 'section1',
    components: { Button_basic, SideBar },
    props: {
      title: {
        type: String,
        default: '{{ main_title }}',
      },
      btn_title: {
        type: String,
        default: '{{ join_button }}',
      },
      isBackground: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        page: '01',
        list: {},
      };
    },
    computed: {
      ...mapGetters(['currentLanguage']),
    },
    watch: {
      currentLanguage(newLang) {
        this.getMain();
      },
    },
    mounted() {
      this.getMain();
    },
    methods: {
      getMain() {
        api.get(`/association/?lang_code=${this.currentLanguage}`)
          .then((response) => {
            const arr = response.data;
            if (Array.isArray(arr) && arr.length > 0) {
              this.list = {
                ...arr[0],
                image1: `${BASE_URL}/${arr[0].image1}`,
                image2: `${BASE_URL}/${arr[0].image2}`,
                image3: `${BASE_URL}/${arr[0].image3}`,
                image4: `${BASE_URL}/${arr[0].image4}`,
              };
            } else {
              this.list = {};
            }
          })
          .catch((error) => {
            console.error(error);
          });
      },
      openModal() {
        this.$router.push('/member-association');
      },
    },
  };
</script>

<template>
  <div style="display: flex" id="section1">
    <side-bar :page="page" :isBackground="isBackground" />
    <div class="section-content">
      <div class="image-grid">
        <div class="large-image">
          <img :src="list.image1" alt="Large image" />
        </div>
        <div class="small-images">
          <img :src="list.image2" alt="Small image" />
          <img :src="list.image3" alt="Small image" />
          <img :src="list.image4" alt="Small image" />
        </div>
      </div>
      <div class="backdrop-blur-container">
        <div class="blur-box">
          <h1 class="blur-title font-gilroy">
            {{ title }}
          </h1>
          <p class="blur-desc" v-html="list.desc"></p>
          <div style="margin-top: 24px;">
            <Button_basic :title_button="btn_title" @click="openModal" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .section-content {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    position: relative;
    padding: 60px 0;
  }

  .image-grid {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 4px;
    height: 100%;
    width: 70%;
  }


  .large-image img,
  .small-images img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }

  .small-images {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    gap: 4px;
  }

  .small-images img {
    height: 100%;
  }

  .backdrop-blur-container {
    position: absolute;
    left: 0;
    padding: 80px 0;
    z-index: 10;
  }

  .blur-box {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
    padding: 40px 80px;
    border-radius: 0 8px 8px 0;
    border-left: 1px solid var(--color-primary);
    overflow: hidden;
    width: 40%;
  }

  .blur-title {
    margin: 0;
    font-size: 40px;
    line-height: 130%;
    font-weight: 500;
  }

  .blur-desc {
    margin: 0;
    color: var(--color-text-main);
    line-height: 200%;
    word-wrap: break-word;
  }

  @media (max-width: 1024px) {
    .section-content {
      padding: 45px 25px;
    }

    .image-grid {
      width: 95%;
    }

    .backdrop-blur-container {
      padding: 40px 20px;
      width: 100%;
      box-sizing: border-box;
    }

    .blur-box {
      width: 60%;
      padding: 60px 20px;
    }

    .blur-title {
      font-size: 28px;
    }
  }

  @media (max-width: 768px) {
    .section-content {
      padding: 0;
      margin-bottom: 325px;
    }

    .image-grid {
      grid-template-columns: 1fr;
      width: 100%;
    }

    .small-images {
      display: none;
    }

    .large-image img {
      border-radius: 0;
    }

    .backdrop-blur-container {
      padding: 25px;
      width: 100%;
      box-sizing: border-box;
      display: flex;
      margin: 0 auto;
      top: 60%;
    }

    .blur-box {
      padding: 20px;
      border-radius: 8px;
      border-left: none;
      overflow: hidden;
      width: 100%;
    }

    .blur-title {
      font-size: 24px;
    }

    .blur-desc {
      line-height: 180%;
    }
  }
</style>