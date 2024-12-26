<script>
import SideBar from "@/pages/Main/SideBar.vue";
import More from "@/components/Buttons/more.vue";
import Sections from "@/components/Sections.vue";

export default {
  name: "section2",
  components: {Sections, More, SideBar},
  props:{
    data: {
      type: Object,
      required: true,
    }
  },
  data(){
    return {
      page: "02",
    }
  },
  methods: {
    goToAboutUS() {
      this.$router.push('/about-us')
    }
  }
}
</script>

<template>
<div class="section">
    <side-bar :page="page" :icon="false"/>
    <div class="content">
      <sections :is-had="true">
        <template #title>
          {{ data.title }}
        </template>
        <template #content>
          <p>{{data.mini_desc}}</p>
        </template>
        <template #btn>
          <more @click="goToAboutUS" :title="data.buttons_title"/>
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
  flex-direction: column;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  border-top: 1px solid #DDE2E4;
}
.btn {
  margin-top: 72px;
  display: flex;
  justify-content: left;
}
@media (max-width: 1024px) {

  .content {
    width: 90%;
  }
  .btn {
    margin-top: 48px;
  }
}
@media (max-width: 768px) {
  .btn {
    margin-top: 20px;
  }
}
</style>