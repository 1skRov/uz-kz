<script>
import Sections from "@/components/Sections.vue";
import Right from "@/components/Buttons/right.vue";
import Left from "@/components/Buttons/left.vue";
import api, {BASE_URL} from "@/axios";
import {mapGetters} from "vuex";

export default {
  name: "CultureAndTraditions",
  components: { Left, Right, Sections },
  props:{
    title: {
      type: String,
      required: true,
      default: "{{ culture_tradition }}"
    }
  },
  data() {
    return {
      slides: [],
      activeIndex: 0,
      BASE_URL
    };
  },
  computed: {
    ...mapGetters(["currentLanguage"]),
  },
  watch: {
    currentLanguage(newLang) {
      this.getCulture();
    },
  },
  mounted() {
    this.getCulture();
  },
  methods: {
    getCulture() {
      api
          .get(`/traditions/?lang_code=${this.currentLanguage}`)
          .then((response) => {
            const data = response.data;
            if (Array.isArray(data) && data.length > 0) {
              this.slides = data;
            } else {
              this.slides = [];
            }
          })
          .catch((error) => {
            console.error(error);
          });
    },
    prevSlide() {
      this.activeIndex =
          this.activeIndex === 0 ? this.slides.length - 1 : this.activeIndex - 1;
    },
    nextSlide() {
      this.activeIndex =
          this.activeIndex === this.slides.length - 1 ? 0 : this.activeIndex + 1;
    },
  },
};
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
          >
            <img :src="slide.image" :alt="BASE_URL + slide.image" class="carousel-image" />
            <div class="carousel-caption">
              <h3 class="font-gilroy">{{ slide.title2 }}</h3>
              <p v-html="slide.content"></p>
            </div>
          </div>
        </div>
      </template>
      <template #btn>
        <div class="btn">
          <left @click="prevSlide" />
          <right @click="nextSlide" />
        </div>
      </template>
    </sections>
  </div>
</template>

<style scoped>
.btn {
  display: flex;
  align-items: center;
  gap: 1em;
}
.fade-carousel {
  width: 100%;
  height: auto;
  overflow: hidden;
}
.carousel-item {
  width: 100%;
  height: auto;
  display: none;
}
.carousel-item.active {
  display: block;
}
.carousel-image {
  width: 100%;
  height: auto;
  max-height: 70vh;
  object-fit: cover;
  border-radius: 8px;
}
.carousel-caption {
  margin-top: 1em;
  color: #333;
}
.carousel-caption h3 {
  margin: 0.5em 0;
  font-size: 40px;
  line-height: 52px;
}
.carousel-caption p {
  margin: 0;
  font-size: 1em;
  color: #666;
  line-height: 40px;
}

@media (max-width: 1024px) {
  .carousel-caption h3 {
    font-size: 28px;
    line-height: 32px;
  }
  .carousel-caption p {
    line-height: 28px;
  }
}

@media (max-width: 768px) {  }
</style>
