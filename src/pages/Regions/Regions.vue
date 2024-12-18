<script>
import Sections from "@/components/Sections.vue";
import SideBar from "@/components/SideBarText.vue";
import Navigation from "@/components/Navigation.vue";

export default {
  name: "Regions",
  components: {Navigation, SideBar, Sections},
  data(){
    return {
      title: "Этнокультурный центр узбеков Казахстана",
      page_title: "Регионы",
      menuItems: [
        { name: 'Руководство', icon: 'home', route: '/regions/guide' },
        { name: 'Информация', icon: 'info-circle', route: '/regions/info' },
        { name: 'Контакты', icon: 'phone-square', route: '/regions/regions-contacts' }
      ]
    }
  }
}
</script>

<template>
<div class="main">
  <side-bar :title="page_title"/>
  <div style="width: 65%; margin-left: auto; margin-right: auto;">
    <sections>
      <template #title>
        {{ title }}
      </template>
      <template #content>
        <div style="position: relative">
          <span style="position: absolute; top: 0; left: 0; width: 40%">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae corporis, ex numquam tempora totam vel vero. At beatae eos excepturi libero repudiandae soluta? Asperiores blanditiis deserunt dolor minima numquam, quas?</span>
          <img src="@/assets/icons/1map.svg" alt="map">
        </div>
      </template>
    </sections>
    <navigation :menuItems="menuItems"/>
    <div style="padding: 50px 0;">
      <router-view></router-view>
    </div>
  </div>
</div>
</template>

<style scoped>
</style>