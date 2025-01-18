<script>
import Sections from "@/components/Sections.vue";
import SideBar from "@/components/SideBarText.vue";
import {mapGetters} from "vuex";
import api, {BASE_URL} from "@/axios";
import LatestNews from "@/pages/Presscenter/LatestNews.vue";
import VideoMaterials from "@/pages/Presscenter/VideoMaterials.vue";
import PhotoGallery from "@/pages/Presscenter/PhotoGallery.vue";

export default {
  name: "Education",
  components: {PhotoGallery, VideoMaterials, LatestNews, SideBar, Sections},
  data(){
    return {
      education: {},
      BASE_URL
    }
  },
  computed: {
    ...mapGetters(['currentLanguage', 'getTranslations']),
  },
  watch: {
    currentLanguage(newLang) {
      this.getEducation();
    },
  },
  async mounted() {
    this.getEducation();
  },
  methods: {
    getEducation() {
      api.get(`/education/?lang_code=${this.currentLanguage}`)
          .then((response) => {
            const data = response.data[0];
            if (data) {
              this.education = data;
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
  <div class="content">
    <div class="image_content">
      <img :src="BASE_URL + education.image" :alt="BASE_URL + education.image" style="width: 100%; height: 100%">
    </div>
    <div class="text-content">
      <div class="title">{{ education.title }}</div>
      <div class="text" v-html="education.full_desc"></div>
    </div>
    <latest-news :rows="1" :title="getTranslations.news || '{ news }'"></latest-news>
    <video-materials :title="getTranslations.video_material || '{ video_material }'"></video-materials>
    <photo-gallery :title="getTranslations.photos  || '{ photos  }'"></photo-gallery>
  </div>
</div>
</template>

<style scoped>
.main {
  display: flex;
}

.content {
  margin: 0 auto;
  padding: 64px 0;
  width: 65%;
  height: 100%;
}

.image_content {
  width: 100%;
  height: 65%;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 30px;
}

.text-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.title {
  font-size: 40px;
  color: #333333;
}

.text {
  line-height: 32px;
}

@media (max-width: 1024px) {
  .content {
    padding: 50px 0;
    width: 90%;
  }
  .title {
    font-size: 28px;
  }
  .text {
    line-height: 24px;
  }
}

@media (max-width: 768px) {
  .content {
    padding: 30px 0;
  }
  .title {
    font-size: 26px;
  }
  .text {
    line-height: 20px;
  }
}
</style>