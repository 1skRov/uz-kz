<script>
import SideBar from "@/pages/Main/SideBar.vue";
import Sections from "@/components/Sections.vue";
import More from "@/components/Buttons/more.vue";

export default {
  name: "Section5",
  components: {More, Sections, SideBar},
  data(){
    return {
      page: "05",
      title: "Этнокультурный центр узбеков Казахстана"
    }
  },
  methods: {
    goToRegions(){
      this.$router.push("/regions");
    }
  }
}
</script>

<template>
  <div class="section">
    <side-bar :page="page"/>
    <div class="content">
      <sections>
        <template #title>
          {{ title }}
        </template>
        <template #title-button>
          <more @click="goToRegions"/>
        </template>
        <template #content>
          <div style="position: relative">
            <span style="position: absolute; top: 0; left: 0; width: 40%">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae corporis, ex numquam tempora totam vel vero. At beatae eos excepturi libero repudiandae soluta? Asperiores blanditiis deserunt dolor minima numquam, quas?</span>
            <img src="@/assets/icons/1map.svg" alt="map">
          </div>
        </template>
      </sections>
    </div>
  </div>
</template>

<style scoped>
.section {
  display: flex;
}
.content {
  width: 70%;
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  border-top: 1px solid #DDE2E4;
}
</style>