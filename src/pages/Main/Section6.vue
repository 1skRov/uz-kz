<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper/modules";
import Sections from "@/components/Sections.vue";
import SideBar from "@/pages/Main/SideBar.vue";
import Left from "@/components/Buttons/left.vue";
import Right from "@/components/Buttons/right.vue";
import api, { BASE_URL } from "@/axios";
import { mapGetters } from "vuex";

export default {
  name: "Section6",
  components: { Swiper, SwiperSlide, Right, Left, SideBar, Sections },
  props: {
    title: {
      type: String,
      required: true,
      default: "{{ partners }}",
    },
    isBackground: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      page: "06",
      partners: [],
      BASE_URL,
      swiperInstance: null,
      swiperModules: [Autoplay, Navigation],
      viewportWidth: window.innerWidth,
    };
  },
  computed: {
    ...mapGetters(["currentLanguage"]),
    maxVisibleSlides() {
      const w = this.viewportWidth;
      if (w >= 1000) return 5;
      if (w >= 600) return 3;
      return 2;
    },
    hasEnoughPartnersToScroll() {
      return this.partners.length > this.maxVisibleSlides;
    },
  },
  watch: {
    currentLanguage(newLang) {
      this.getPartners();
    },
  },
  mounted() {
    this.getPartners();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.onResize);
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
    openPartner(rawUrl) {
      if (rawUrl == null) return;

      let url = String(rawUrl)
        .replace(/[\u200B-\u200D\uFEFF]/g, "")
        .replace(/\s+/g, " ")
        .trim();

      if (!url) return;

      if (!/^https?:\/\//i.test(url)) {
        url = `https://${url.replace(/^\/+/, "")}`;
      }

      let finalUrl;
      try {
        finalUrl = new URL(url).toString();
      } catch (e) {
        console.warn("Bad partner url:", rawUrl);
        return;
      }

      window.open(finalUrl, "_blank", "noopener,noreferrer");
    },
    moveLeft() {
      this.swiperInstance?.slidePrev();
    },
    moveRight() {
      this.swiperInstance?.slideNext();
    },
    onSwiperReady(instance) {
      this.swiperInstance = instance;
    },
    onResize() {
      this.viewportWidth = window.innerWidth;
    },
  },
};
</script>

<template>
  <div class="section" id="section6">
    <side-bar
      class="side"
      :page="page"
      :icon="false"
      :isBackground="isBackground"
    />
    <div class="right-content">
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
      <div
        class="carousel-container"
        :class="{ 'is-static': !hasEnoughPartnersToScroll }"
      >
        <swiper
          :modules="swiperModules"
          :loop="hasEnoughPartnersToScroll"
          :speed="700"
          :grabCursor="hasEnoughPartnersToScroll"
          :centeredSlides="hasEnoughPartnersToScroll"
          :space-between="24"
          :autoplay="
            hasEnoughPartnersToScroll
              ? {
                  delay: 2500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }
              : false
          "
          :breakpoints="{
            0: {
              slidesPerView: 2,
              spaceBetween: 24,
              centeredSlides: hasEnoughPartnersToScroll,
            },
            600: {
              slidesPerView: 3,
              spaceBetween: 20,
              centeredSlides: hasEnoughPartnersToScroll,
            },
            1000: {
              slidesPerView: 5,
              spaceBetween: 24,
              centeredSlides: hasEnoughPartnersToScroll,
            },
          }"
          @swiper="onSwiperReady"
        >
          <swiper-slide v-for="(partner, index) in partners" :key="index">
            <div
              class="images"
              role="link"
              tabindex="0"
              @click="openPartner(partner.title)"
              @keydown.enter.prevent="openPartner(partner.title)"
              @keydown.space.prevent="openPartner(partner.title)"
            >
              <img
                style="width: 100%; height: 100%; display: block"
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
  position: relative;
}

.right-content {
  overflow: hidden;
  margin: 0 auto;
}

.carousel-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 0 0 3rem 0;
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
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0)
  );
}

.carousel-container::after {
  right: 0;
  background: linear-gradient(
    to left,
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0)
  );
}

.carousel-container.is-static :deep(.swiper-wrapper) {
  justify-content: center;
}

.images {
  width: 100%;
  height: 92px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
}

.images img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
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
  .right-content {
    margin: 0;
    padding: 0 20px;
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

  .carousel-container::before {
    left: 0;
    background: none;
  }

  .carousel-container::after {
    right: 0;
    background: none;
  }
}
</style>
