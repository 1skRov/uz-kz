<script>
import SideBar from "@/components/SideBarText.vue";
import Navigation from "@/components/Navigation.vue";
import Sections from "@/components/Sections.vue";
import ContactsRegion from "@/pages/Regions/Contacts.vue";
import {mapGetters} from "vuex";
import SelectElement from "@/components/SelectElement.vue";

export default {
  name: "Contacts",
  components: {SelectElement, Sections, Navigation, SideBar, ContactsRegion},
  computed: {
    ...mapGetters(['getTranslations']),
    menuItems(){
      return [
        { name: this.getTranslations.republic_contacts || "{ republic_contacts }", route: '/contacts/republic' },
        { name: this.getTranslations.region_contacts || "{ region_contacts }", route: '/contacts/regions' },
      ]
    }
  },
}
</script>

<template>
  <div class="main">
    <side-bar :title="getTranslations.contacts_side || '{ contacts_side }'"/>
    <div class="content">
      <select-element :items="menuItems" class="mob-has"></select-element>
      <navigation :menu-items="menuItems" class="nav"/>
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
}
.mob-has {
  display: none;
}
.nav {
  display: flex;
  margin-bottom: 40px;
}
.content {
  width: 65%;
  margin: 6rem auto;
}
@media (max-width: 1024px) {
  .content {
    width: 90%;
    margin: 6rem auto;
  }
  .mob-has {
    display: flex;
    margin-bottom: 30px;
  }
  .nav {
    display: none;
  }
}

@media (max-width: 768px) {

}
</style>