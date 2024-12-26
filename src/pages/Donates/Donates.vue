<script>
import SideBar from "@/components/SideBarText.vue";
import Navigation from "@/components/Navigation.vue";
import Sections from "@/components/Sections.vue";

export default {
  name: "Donates",
  components: {Sections, Navigation, SideBar},
  data() {
    return{
      menuItems: [
        {name: "Через карту",route: '/donates/card'},
        {name: "Через QR",route: '/donates/qr'},
      ],
      page_title: "Донаты"
    }
  }
}
</script>

<template>
  <div class="main">
    <side-bar :title="page_title"/>
    <div class="content">
      <sections>
        <template #content>
          <navigation :menu-items="menuItems" style="margin-bottom: 40px;"/>
          <router-view></router-view>
        </template>
      </sections>
    </div>
  </div>
</template>

<style scoped>
.content {
  width: 65%;
  margin: 0 auto;
}
@media (max-width: 1024px) {
  .content {
    width: 90%;
    margin: 0 auto;
    padding-bottom: 50px;
  }
}

@media (max-width: 768px) {

}
</style>