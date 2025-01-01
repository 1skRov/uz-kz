<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import Sections from "@/components/Sections.vue";
import SideBar from "@/pages/Main/SideBar.vue";
import More from "@/components/Buttons/more.vue";
import Left from "@/components/Buttons/left.vue";
import Right from "@/components/Buttons/right.vue";
import api, { BASE_URL } from "@/axios";
import { mapGetters } from "vuex";

export default {
  name: "Section6",
  components: { Swiper, SwiperSlide, Right, Left, More, SideBar, Sections },
  props: {
    title: {
      type: String,
      required: true,
      default: "{{ partners }}",
    },
  },
  data() {
    return {
      page: "06",
      partners: [],
      BASE_URL,
      swiperInstance: null,
    };
  },
  computed: {
    ...mapGetters(["currentLanguage"]),
  },
  watch: {
    currentLanguage(newLang) {
      this.getPartners();
    },
  },
  mounted() {
    this.getPartners();
  },
  methods: {
    getPartners() {
      api
          .get(`/our-partners/?lang_code=${this.currentLanguage}`)
          .then((response) => {
            const data = response.data;
            if (Array.isArray(data) && data.length > 0) {
              this.partners = data;
            } else {
              this.partners = [];
            }
          })
          .catch((error) => {
            console.error(error);
          });
    },
    moveLeft() {
      if (this.swiperInstance) {
        this.swiperInstance.slidePrev();
      }
    },
    moveRight() {
      if (this.swiperInstance) {
        this.swiperInstance.slideNext();
      }
    },
    onSwiperReady(instance) {
      this.swiperInstance = instance;
    },
  },
};
</script>

<template>
  <div class="section">
    <side-bar :page="page" :icon="false" />
    <div class="right-content">
      <div class="title-section">
        <sections style="padding-bottom: 0">
          <template #title>
            {{ title }}
          </template>
          <template #title-button>
            <div class="btns">
              <left @click="moveLeft" />
              <right @click="moveRight" />
            </div>
          </template>
        </sections>
      </div>
      <div class="carousel-container">
        <swiper
            class="my-swiper"
            :loop="true"
            :autoplay="{ delay: 3000, disableOnInteraction: false }"
            :space-between="30"
            :centeredSlides="true"
            :slides-per-view="1"
            :breakpoints="{
            600: { slidesPerView: 3, centeredSlides: true },
            1000: { slidesPerView: 5, centeredSlides: true }
          }"
            pagination
            @swiper="onSwiperReady"
        >
          <swiper-slide v-for="(partner, index) in partners" :key="index">
            <div class="images">
              <img
                  style="width:100%; height:100%; display: block"
                  :src="BASE_URL + partner.image"
                  :alt="partner.name"
              />
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="btns btn-mob">
        <left @click="moveLeft" />
        <right @click="moveRight" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.section {
  display: flex;
  width: 100%;
  margin-bottom: 3rem;
}

.right-content {
  width: 100%;
  overflow: hidden;
}

.right-content .title-section {
  width: 78%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  align-items: center;
}

.carousel-container {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.carousel-container .my-swiper {
  width: 100%;
  margin: auto;
}

.carousel-container::before,
.carousel-container::after {
  content: "";
  position: absolute;
  top: 0;
  width: 10rem;
  height: 100%;
  z-index: 10;
  pointer-events: none;
}

.carousel-container::before {
  left: 0;
  background: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
}

.carousel-container::after {
  right: 0;
  background: linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
}

.swiper-slide .images {
  width: 100%;
  height: 10rem;
  object-fit: cover;
  border-radius: 8px;
}

.btns {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.btn-mob {
  display: none;
}

@media (max-width: 1024px) {
  .right-content .title-section {
    width: 90%;
  }
}

@media (max-width: 768px) {
  .btn-mob {
    display: flex;
    gap: 2rem;
    align-items: center;
    margin: 1.5rem 0;
  }
  .btns {
    margin-left: 20px;
  }
}
</style>
