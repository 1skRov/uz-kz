<script>
import Sections from "@/components/Sections.vue";
import SideBar from "@/components/SideBarText.vue";
import Navigation from "@/components/Navigation.vue";
import LatestNews from "@/pages/Presscenter/LatestNews.vue";
import VideoMaterials from "@/pages/Presscenter/VideoMaterials.vue";
import PhotoGallery from "@/pages/Presscenter/PhotoGallery.vue";
import Interview from "@/pages/Presscenter/Interview.vue";
import Help from "@/pages/aboutus/Help.vue";
import { mapGetters } from "vuex";

export default {
  name: "PressCenter",
  components: {
    Help,
    Interview,
    PhotoGallery,
    VideoMaterials,
    LatestNews,
    Navigation,
    SideBar,
    Sections,
  },
  computed: {
    ...mapGetters(["getTranslations"]),
  },
};
</script>

<template>
  <div class="press-center">
    <side-bar
      class="side"
      :title="getTranslations.press_center || '{ press_center }'"
    />
    <div class="center">
      <div id="news">
        <latest-news :title="getTranslations.latest_news"></latest-news>
      </div>
      <div id="video">
        <video-materials
          :title="getTranslations.video_material"
        ></video-materials>
      </div>
      <div id="gallery">
        <photo-gallery :title="getTranslations.photos"></photo-gallery>
      </div>
      <div id="interviews">
        <interview
          :title="getTranslations.interview"
          :btn_title="getTranslations.watch"
        ></interview>
      </div>
    </div>
  </div>
</template>

<style scoped>
.press-center {
  display: flex;
  position: relative;
}
.center {
  width: 1224px;
  margin: 0 auto;
  padding-bottom: 60px;
}
@media (max-width: 1024px) {
  .center {
    width: 90%;
  }
}

@media (max-width: 768px) {
}
</style>
