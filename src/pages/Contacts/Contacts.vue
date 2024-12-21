<script>
import SideBar from "@/components/SideBarText.vue";
import Navigation from "@/components/Navigation.vue";
import Sections from "@/components/Sections.vue";
import ContactsRegion from "@/pages/Regions/Contacts.vue";

export default {
  name: "Contacts",
  components: {Sections, Navigation, SideBar, ContactsRegion},
  data() {
    return {
      page_title: "Контакты",
      menuItems: [
        { name: 'Республиканские контакты', route: '/contacts/republic' },
        { name: 'Региональные контакты', route: '/contacts/regions' },
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