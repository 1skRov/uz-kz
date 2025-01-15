<script>
import Sections from "@/components/Sections.vue";
import SideBar from "@/components/SideBarText.vue";
import Navigation from "@/components/Navigation.vue";
import LatestNews from "@/pages/Presscenter/LatestNews.vue";
import VideoMaterials from "@/pages/Presscenter/VideoMaterials.vue";
import PhotoGallery from "@/pages/Presscenter/PhotoGallery.vue";
import Interview from "@/pages/Presscenter/Interview.vue";
import Help from "@/pages/aboutus/Help.vue";
import {mapGetters} from "vuex";

export default {
  name: "PressCenter",
  components: {Help, Interview, PhotoGallery, VideoMaterials, LatestNews, Navigation, SideBar, Sections},
  computed: {
    ...mapGetters(['getTranslations']),
  },
}
</script>

<template>
  <div class="main">
    <side-bar :title="getTranslations.press_center || '{ press_center }'"/>
    <div class="content">
      <latest-news :title="getTranslations.latest_news"></latest-news>
      <video-materials :title="getTranslations.video_material"></video-materials>
      <photo-gallery :title="getTranslations.photos"></photo-gallery>
      <interview :title="getTranslations.interview" :btn_title="getTranslations.watch"></interview>
<!--      <div style="padding: 60px 0">-->
<!--        <help></help>-->
<!--      </div>-->
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
}
.content {
  width: 65%;
  margin: 0 auto;
  padding-bottom: 60px;
}
@media (max-width: 1024px) {
  .content {
    width: 90%;
  }
}

@media (max-width: 768px) {

}
</style>