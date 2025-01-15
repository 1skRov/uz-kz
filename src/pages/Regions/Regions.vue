<script>
import Sections from "@/components/Sections.vue";
import SideBar from "@/components/SideBarText.vue";
import Navigation from "@/components/Navigation.vue";
import SelectElement from "@/components/SelectElement.vue"
import MapFill from "@/components/MapFill.vue";
import {mapGetters} from "vuex";

export default {
  name: "Regions",
  components: { MapFill, Navigation, SideBar, Sections, SelectElement },
  computed: {
    ...mapGetters(['currentLanguage', "getTranslations"]),
    menuItems(){
      return [
        { name: this.getTranslations.guide || "{ guide }", route: '/regions/guide' },
        { name: this.getTranslations.information || "{ information }", route: '/regions/info' },
        { name: this.getTranslations.contacts || "{ contacts }", route: '/regions/regions-contacts' },
      ]
    }
  },
  methods: {
    activeRegion(region) {
      this.$router.push({ path: '', query: { region_id: region.id } });
    }
  }
}
</script>

<template>
<div class="main">
  <side-bar :title="getTranslations.regions_side || '{ regions_side }'"/>
  <div class="content">
    <sections>
      <template #title>
        {{ getTranslations.ethno_center || "{ ethno_center }" }}
      </template>
      <template #content>
        <map-fill @region-selected="activeRegion"></map-fill>
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