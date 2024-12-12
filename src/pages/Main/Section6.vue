<script>
import Sections from "@/components/Sections.vue";
import SideBar from "@/pages/Main/SideBar.vue";
import More from "@/components/Buttons/more.vue";
import Left from "@/components/Buttons/left.vue";
import Right from "@/components/Buttons/right.vue";

export default {
  name: "Section6",
  components: {Right, Left, More, SideBar, Sections},
  data(){
    return {
      title: "Наши партнеры",
      page: "06",
      items: [
        { src: require("@/assets/icons/logo1.svg"), alt: "Logo 1" },
        { src: require("@/assets/icons/logo2.svg"), alt: "Logo 2" },
        { src: require("@/assets/icons/logo3.svg"), alt: "Logo 3" },
        { src: require("@/assets/icons/logo4.svg"), alt: "Logo 4" },
        { src: require("@/assets/icons/logo5.svg"), alt: "Logo 5" },
        { src: require("@/assets/icons/logo6.svg"), alt: "Logo 6" },
        { src: require("@/assets/icons/logo7.svg"), alt: "Logo 7" },
        { src: require("@/assets/icons/logo8.svg"), alt: "Logo 8" },
      ],
      slideWidth: 250,
      animationDuration: 40,
    }
  },
  computed: {
    slideTrackStyle() {
      const totalSlides = this.items.length;
      const totalWidth = Math.min(this.slideWidth * totalSlides, window.innerWidth);

      return {
        "--total-width": `${totalWidth}px`,
        "--animation-duration": `${this.animationDuration}s`,
        "--translate-distance": `-${this.slideWidth * totalSlides}px`,
      };
    }
  },
}
</script>

<template>
  <div class="section">
    <side-bar :page="page" :icon="false"/>
    <div style="width: 100%">
      <div class="content">
        <sections>
          <template #title>
            {{ title }}
          </template>
          <template #title-button>
            <div class="btns">
              <left/>
              <right/>
            </div>
          </template>
        </sections>
      </div>
      <div class="slider">
        <div class="slide-track" :style="slideTrackStyle">
          <div
              class="slide"
              v-for="(item, index) in items"
              :key="index"
          >
            <img :src="item.src" :alt="item.alt" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.section {
  display: flex;
  overflow: hidden;
}
.content {
  width: 70%;
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
}
.btns {
  display: flex;
  gap: 2rem;
  align-items: center;
}
.slider {
  background: white;
  height: 100px;
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 100%;
}

.slider::before,
.slider::after {
  background: linear-gradient(
      to right,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
  );
  content: "";
  height: 100px;
  position: absolute;
  width: 100px;
  z-index: 2;
}

.slider::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}

.slider::before {
  left: 0;
  top: 0;
}

.slide-track {
  display: flex;
  width: var(--total-width);
  animation: scroll var(--animation-duration) linear infinite;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(var(--translate-distance));
  }
}

.slide {
  height: 100px;
  width: calc(100% / 8);
  flex-shrink: 0;
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>