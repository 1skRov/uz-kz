<script>
import SideBar from "@/pages/Main/SideBar.vue";
import Sections from "@/components/Sections.vue";
import More from "@/components/Buttons/more.vue";
import MapFill from "@/components/MapFill.vue";

export default {
  name: "Section5",
  components: {MapFill, More, Sections, SideBar},
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
            <span class="truncate-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae corporis, ex numquam tempora totam vel vero. At beatae eos excepturi libero repudiandae soluta? Asperiores blanditiis deserunt dolor minima numquam, quas?</span>
            <div style="width: 100%; height: 100%">
              <map-fill></map-fill>
            </div>
          </div>
        </template>
        <template #btn>
          <more @click="goToRegions"/>
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

@media (max-width: 768px) {
  span {
    position: relative;
    width: 100%
  }
}
</style>