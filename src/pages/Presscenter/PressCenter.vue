<script>
import Sections from "@/components/Sections.vue";
import SideBar from "@/components/SideBarText.vue";
import Navigation from "@/components/Navigation.vue";
import LatestNews from "@/pages/Presscenter/LatestNews.vue";
import VideoMaterials from "@/pages/Presscenter/VideoMaterials.vue";
import PhotoGallery from "@/pages/Presscenter/PhotoGallery.vue";
import Interview from "@/pages/Presscenter/Interview.vue";

export default {
  name: "PressCenter",
  components: {Interview, PhotoGallery, VideoMaterials, LatestNews, Navigation, SideBar, Sections},
  data(){
    return {
      page_title: "Press Center",
      title: "Press Releases"
    }
  }
}
</script>

<template>
  <div class="main">
    <side-bar :title="page_title"/>
    <div style="width: 65%; margin: 0 auto;">
      <latest-news></latest-news>
      <video-materials></video-materials>
      <photo-gallery></photo-gallery>
      <interview></interview>
    </div>
  </div>
</template>

<style scoped>

</style>