<script>
import SideBar from "@/components/SideBarText.vue";
import Navigation from "@/components/Navigation.vue";
import Sections from "@/components/Sections.vue";
import api from "@/axios";
import {mapGetters} from "vuex";

export default {
  name: "Donates",
  components: {Sections, Navigation, SideBar},
  data() {
    return{
      menuItems: [],
    };
  },
  computed: {
    ...mapGetters(['getTranslations']),
    menuItems(){
      return [
        {name: this.getTranslations.with_card || "{ with_card }", route: '/donates/card'},
        {name: this.getTranslations.with_qr || "{ with_qr }", route: '/donates/qr'},
      ]
    }
  },
};
</script>

<template>
  <div class="main" style="display: flex">
    <side-bar :title="getTranslations.donates_side || '{ donates_side }'"/>
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