<script>
import Sections from "@/components/Sections.vue";
import SideBar from "@/components/SideBarText.vue";
import Navigation from "@/components/Navigation.vue";
import SelectElement from "@/components/SelectElement.vue"

export default {
  name: "Regions",
  components: {Navigation, SideBar, Sections, SelectElement},
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
  <div class="content">
    <sections>
      <template #title>
        {{ title }}
      </template>
      <template #content>
        <div style="position: relative">
          <span class="truncate-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae corporis, ex numquam tempora totam vel vero. At beatae eos excepturi libero repudiandae soluta? Asperiores blanditiis deserunt dolor minima numquam, quas?</span>
          <img src="@/assets/icons/1map.svg" alt="map" style="width: 100%; height: 100%">
        </div>
      </template>
    </sections>
    <select-element :items="menuItems" class="mob-has"></select-element>
    <navigation :menuItems="menuItems" class="mob-hidden"/>
    <div style="padding: 50px 0;">
      <router-view></router-view>
    </div>
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
}
span {
  position: absolute;
  top: 0;
  left: 0;
  width: 40%;
}
@media (max-width: 1024px) {
  .content {
    width: 90%;
  }
}
.mob-has {
  display: none;
}
@media (max-width: 768px) {
  span {
    position: relative;
    width: 100%;
  }
  .mob-hidden {
    display: none;
  }
  .mob-has {
    display: flex;
  }
}
</style>