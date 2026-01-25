<script>
import Sections from "@/components/Sections.vue";
import Right from "@/components/Buttons/right.vue";
import Left from "@/components/Buttons/left.vue";
import api, { BASE_URL } from "@/axios";
import { mapGetters } from "vuex";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper/modules";

const modules = [Pagination, Navigation];
export default {
  name: "CultureAndTraditions",
  components: { Left, Right, Sections, Swiper, SwiperSlide },
  props: {
    title: {
      type: String,
      required: true,
      default: "{{ culture_tradition }}",
    },
  },
  data() {
    return {
      slides: [],
      activeIndex: 0,
      BASE_URL,
      modules: modules,
      swiperInstance: {},
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
    onSwiper(swiper) {
      this.swiperInstance = swiper;
    },
    slidePrev() {
      if (this.swiperInstance) {
        this.swiperInstance.slidePrev();
      }
    },
    slideNext() {
      if (this.swiperInstance) {
        this.swiperInstance.slideNext();
      }
    },
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
  },
};
</script>

<template>
  <div class="culture-and-traditions">
    <sections>
      <template #title>{{ title }}</template>
      <template #title-button>
        <div class="btn">
          <div @click="slidePrev">
            <left />
          </div>
          <div @click="slideNext">
            <right />
          </div>
        </div>
      </template>
      <template #content>
        <swiper
          @swiper="onSwiper"
          :slidesPerView="1"
          :spaceBetween="0"
          :loop="true"
          :autoplay="{
            delay: 2000,
            disableOnInteraction: true,
          }"
          :modules="modules"
          :preventClicks="false"
          class="mySwiper"
        >
          <swiper-slide v-for="(slide, index) in slides" :key="index">
            <div>
              <img
                :src="BASE_URL + slide.image"
                :alt="slide.title"
                class="carousel-image"
              />
              <div class="carousel-caption">
                <h3 class="font-gilroy">{{ slide.title }}</h3>
                <p v-html="slide.content"></p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </template>
      <template #btn>
        <div class="btn">
          <div @click="slidePrev">
            <left />
          </div>
          <div @click="slideNext">
            <right />
          </div>
        </div>
      </template>
    </sections>
  </div>
</template>

<style scoped>
.culture-and-traditions {
  width: 100%;
}

.btn {
  display: flex;
  align-items: center;
  gap: 1em;
}

.carousel-image {
  width: 100%;
  height: auto;
  max-height: 70vh;
  object-fit: cover;
  border-radius: 8px;
}

.carousel-caption {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 1em;
  color: var(--color-text-dark);
}

.carousel-caption h3 {
  margin: 0;
  font-size: 40px;
  font-weight: 500;
  line-height: 130%;
}

.carousel-caption p {
  margin: 0;
  font-size: 1em;
  color: #666;
  line-height: 40px;
}

@media (max-width: 1024px) {
  .culture-and-traditions {
    width: 90%;
    margin: 0 auto;
  }

  .carousel-caption h3 {
    font-size: 28px;
    line-height: 32px;
  }

  .carousel-caption p {
    line-height: 28px;
  }
}

@media (max-width: 768px) {
  .btn {
    justify-content: center;
  }
}
</style>
