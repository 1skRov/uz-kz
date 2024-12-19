<script>
import Sections from "@/components/Sections.vue";
import SideBar from "@/pages/Main/SideBar.vue";
import More from "@/components/Buttons/more.vue";

export default {
  name: "Section3",
  components: {More, SideBar, Sections},
  data() {
    return {
      page: "03",
      title: "Культура и традиция",
      imgTitle:"Lorem ipsum.",
      imgDesc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, reiciendis!",
    };
  },
  methods: {
    goToAboutUsSection() {
      this.$router.push({ path: '/about-us', hash: '#section-2' })
    }
  }
}
</script>

<template>
  <div class="section">
    <div class="icon-top">
      <img src="@/assets/images/cult-top.png" alt="">
    </div>
    <div class="icon-btm">
      <img src="@/assets/images/cult-bottom.png" alt="">
    </div>
    <side-bar :page="page" :is-background="true"/>
    <div class="content">
      <sections>
        <template #title>
          {{ title }}
        </template>
        <template #title-button>
          <more @click="goToAboutUsSection"/>
        </template>
        <template #content>
          <div class="content-body">
            <div class="gradient-overlay"></div>
            <img src="@/assets/images/img.png" alt="culture and traditions" style="width: 100%; height: 100%;">
            <div style="position: absolute; bottom: 0; left: 0; padding: 40px">
              <div class="image-title">{{ imgTitle }}</div>
              <div class="image-desc">{{ imgDesc }}</div>
            </div>
          </div>
        </template>
      </sections>
    </div>
  </div>
</template>

<style scoped>
.section {
  display: flex;
  background: #F7F8FA;
  position: relative;
}
.section .icon-btm {
  position: absolute;
  bottom: 0;
  right: 0;
}
.section .icon-top {
  position: absolute;
  top: 0;
  right: 0;
}
.content {
  width: 70%;
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
}
.content-body {
  width: 100%;
  position: relative;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 6px;
}
.content-body .image-title {
    position: relative;
    color: #fff;
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 16px;
    z-index:10;
  }
.content-body .image-desc {
    position: relative;
    line-height: 2rem;
    z-index:10;
    color: rgba(255, 255, 255, 0.7);
  }
.content-body .gradient-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
    z-index: 1;
  }
</style>