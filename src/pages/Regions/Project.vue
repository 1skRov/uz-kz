<script>
import Sections from "@/components/Sections.vue";
import SideBar from "@/components/SideBarText.vue";
import {mapGetters} from "vuex";
import api, {BASE_URL} from "@/axios";
import LatestNews from "@/pages/Presscenter/LatestNews.vue";
import VideoMaterials from "@/pages/Presscenter/VideoMaterials.vue";
import PhotoGallery from "@/pages/Presscenter/PhotoGallery.vue";

export default {
  name: "projectsDetail",
  components: {PhotoGallery, VideoMaterials, LatestNews, SideBar, Sections},
  props:{
    id: {
      type: String,
      required: true,
    },
  },
  data(){
    return {
      card: [],
      BASE_URL,
      cardItem:{},
    }
  },
  computed: {
    ...mapGetters(['currentLanguage', 'getTranslations']),
  },
  watch: {
    currentLanguage(newLang) {
      this.getProject();
    },
  },
  async mounted() {
    this.getProject();
  },
  methods: {
    getProject() {
      api
          .get(`/projects-for2025/?lang_code=${this.currentLanguage}`)
          .then((response) => {
            const data = response.data;
            if (Array.isArray(data) && data.length > 0) {
              this.card = data;
              const cardItem = this.card.find((item) => item.id === Number(this.id));
              if (cardItem) {
                this.cardItem = cardItem;
              }
            } else {
              this.card = [];
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
    <side-bar :title="getTranslations.regions || '{ regions }'"/>
    <div class="main__content">
      <div v-if="cardItem">
        <div class="main__image">
          <img :src="BASE_URL + cardItem.image" :alt="BASE_URL + cardItem.image" style="width: 100%; height: 100%">
        </div>
        <div class="main__text">
          <div class="title font-gilroy">{{ cardItem.title }}</div>
          <div class="text" v-html="cardItem.desc"></div>
        </div>
      </div>
      <div style="display: flex; flex-direction: column">
        <latest-news :rows="1" :title="getTranslations.news || '{ news }'"></latest-news>
        <video-materials :title="getTranslations.video_material || '{ video_material }'"></video-materials>
        <photo-gallery :title="getTranslations.photos  || '{ photos  }'"></photo-gallery>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
}

.main__content {
  margin: 0 auto;
  width: 65%;
  padding: 4rem 0;
}

.main__image {
  width: 100%;
  height: 40rem;
  border-radius: 8px;
  overflow: hidden;
  max-height: 40rem;
}

.main__text {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
  height: 100%;
}

.title {
  font-size: 40px;
  font-weight: 500;
}

.text {
  line-height: 32px;
}
@media (max-width: 1024px) {
  .main__content {
    width: 90%;
  }

  .main__text {
    gap: 1rem;
  }

  .title {
    font-size: 26px;
    font-weight: 500;
  }
}

@media (max-width: 768px) {
  .main__image {
    height: 20rem;
    max-height: 20rem;
  }

  .main__text {
    gap: 0.5rem;
  }

  .title {
    font-size: 18px;
    font-weight: 500;
  }

  .text {
    line-height: 22px;
  }
}
</style>