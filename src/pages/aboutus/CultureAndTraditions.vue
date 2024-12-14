<script>
import Sections from "@/components/Sections.vue";
import Right from "@/components/Buttons/right.vue";
import Left from "@/components/Buttons/left.vue";

export default {
  name: "CultureAndTraditions",
  components: {Left, Right, Sections},
  data() {
    return {
      title: "Культура и традиция",
      slides: [
        {
          title: "First slide label",
          description: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
          image: require('@/assets/images/1.png'),
        },
        {
          title: "Second slide label",
          description: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
          image: require('@/assets/images/4.png'),
        },
        {
          title: "Third slide label",
          description: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
          image: require('@/assets/images/3.png'),
        },
      ],
      activeIndex: 0,
    };
  },
  methods: {
    prevSlide() {
      this.activeIndex =
          this.activeIndex === 0 ? this.slides.length - 1 : this.activeIndex - 1;
      console.log(this.activeIndex);
    },
    nextSlide() {
      this.activeIndex =
          this.activeIndex === this.slides.length - 1 ? 0 : this.activeIndex + 1;
      console.log(this.activeIndex);
    },
  },
}
</script>

<template>
<div>
  <sections>
    <template #title>{{ title }}</template>
    <template #title-button>
      <div class="btn">
        <left @click="prevSlide" />
        <right @click="nextSlide" />
      </div>
    </template>
    <template #content>
      <div class="fade-carousel">
        <div
            class="carousel-item"
            v-for="(slide, index) in slides"
            :key="index"
            :class="{ active: activeIndex === index }"
            :style="{ backgroundImage: `url(${slide.image})` }"
        >
          <div class="carousel-caption">
            <h3>{{ slide.title }}</h3>
            <p>{{ slide.description }}</p>
          </div>
        </div>
      </div>
    </template>
  </sections>
</div>
</template>

<style scoped>
.btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
}
.fade-carousel {
  width: 100%;
  height: 60vh;
  overflow: hidden;
}
.carousel-item {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 0.8s ease-in-out;
}
.carousel-item.active {
  opacity: 1;
}
.carousel-caption {
  text-align: center;
  color: #fff;
}
</style>