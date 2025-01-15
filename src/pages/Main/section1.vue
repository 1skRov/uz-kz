<script>
import SideBar from "@/pages/Main/SideBar.vue";
import Button_basic from "@/components/Buttons/button_basic.vue";
import Dialog from "@/components/Dialog.vue";
import api, { BASE_URL }  from "@/axios";
import {mapGetters} from "vuex";

export default {
  name: "section1",
  components: {Dialog, Button_basic, SideBar},
  props:{
    title:{
      type: String,
      default: "{{ main_title }}"
    },
    btn_title:{
      type: String,
      default: "{{ join_button }}"
    }
  },
  data() {
    return {
      page: "01",
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
            }
          })
          .catch((error) => {
            console.error(error);
          });
    },
    openModal() {
      this.$router.push('/member-association')
    },
  }
}
</script>

<template>
<div style="display: flex">
  <side-bar :page="page" />
  <div class="content">
    <div class="tablet-space">
      <div class="tablet-space-img">
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
      </div>
      <div class="backdrop-blur-container">
        <div style="position: relative; z-index: 2;">
          <h1 class="font-gilroy title" style="word-wrap: break-word;">
            {{ title }}
          </h1>
          <p class="desc" v-html="list.desc"></p>
        </div>
        <div>
          <Button_basic :title_button="btn_title" @click="openModal"/>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.content {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
}
.tablet-space {
  position: relative;
  width: 100%;

  .tablet-space-img {
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 69px 0;

    .image-grid {
      display: grid;
      grid-template-columns: 3fr 1fr;
      gap: 10px;
      height: 100%;
      width: 70%;
      justify-content: end;
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
      gap: 10px;
    }

    .small-images img {
      height: 100%;
    }
  }

  .backdrop-blur-container {
    background-color: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
    padding: 40px 80px;
    border-radius: 0 8px 8px 0;
    border-left: 1px solid #0072AB;
    overflow: hidden;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 40%;

    .title {
      font-size: 40px;
      line-height: 52px;
      font-weight: 500;
    }

    .desc {
      font-size: 14px;
      margin-top: 24px;
      margin-bottom: 40px;
      color: #575F6C;
      line-height: 32px;
      word-wrap: break-word;
    }
  }
}

@media (max-width: 1024px) {
  .content {
    width: 90%;
  }

  .tablet-space {
    .tablet-space-img {
      padding: 40px 0;

      .image-grid {
        height: 100%;
        width: 95%;
      }
    }
  }

  .tablet-space {
    .backdrop-blur-container {
      padding: 40px;
      width: 60%;

      .title {
        font-size: 28px;
        line-height: 36px;
        margin: 0;
      }

      .desc {
        font-size: 14px;
        margin-top: 15px;
        margin-bottom: 30px;
        line-height: 28px;
      }
    }
  }
}

@media (max-width: 768px) {
  .content {
    width: 100%;
  }

  .tablet-space {
    margin-bottom: 40vh;

    .tablet-space-img {
      padding: 0;

      .image-grid {
        grid-template-columns: 1fr;
        width: 100%;
      }

      .small-images {
        display: none;
      }

    }

    .backdrop-blur-container {
      left: 50%;
      transform: translateX(-50%);
      padding: 30px 20px;
      border-radius: 8px;
      width: 75%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      border: none;

      .title {
        font-size: 24px;
        line-height: 40px;
      }

      .desc {
        font-size: 12px;
        margin: 20px 0;
        line-height: 30px;
      }
    }
  }
}
</style>