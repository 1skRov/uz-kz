<script>
import Sections from "@/components/Sections.vue";
import Right from "@/components/Buttons/right.vue";
import Left from "@/components/Buttons/left.vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Grid } from 'swiper/modules';
import api, { BASE_URL } from "@/axios";
import { mapGetters } from "vuex";

export default {
  name: "PhotoGallery",
  components: {
    Sections,
    Right,
    Left,
    Swiper,
    SwiperSlide
  },
  props: {
    title: {
      type: String,
      default: "{ photos }"
    },
    rows: {
      type: Number,
      default: 2,
    }
  },
  data() {
    return {
      materials: [],
      Grid,
      BASE_URL,
      swiperInstance: null,
      isBeginning: true,
      isEnd: false,
      isModalOpen: false,
      currentImage: null,
    };
  },
  computed: {
    ...mapGetters(["currentLanguage"]),
  },
  watch: {
    currentLanguage(newLang) {
      this.getNews();
      this.$nextTick(() => {
        if (this.swiperInstance) {
          this.swiperInstance.update();
          this.isBeginning = this.swiperInstance.isBeginning;
          this.isEnd = this.swiperInstance.isEnd;
        }
      });
    },
  },
  mounted() {
    this.getNews();
  },
  methods: {
    getNews() {
      api
          .get(`/photo-gallery/?lang_code=${this.currentLanguage}`)
          .then((response) => {
            const data = response.data;
            if (Array.isArray(data) && data.length > 0) {
              this.materials = data.map((item) => ({
                ...item,
                formattedDate: this.formatDate(item.posted_date),
              }));
              this.$nextTick(() => {
                if (this.swiperInstance) {
                  this.swiperInstance.update();
                  this.isBeginning = this.swiperInstance.isBeginning;
                  this.isEnd = this.swiperInstance.isEnd;
                }
              });
            } else {
              this.materials = [];
            }
          })
          .catch((error) => {
            console.error(error);
          });
    },
    formatDate(dateString) {
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      };
      return new Date(dateString).toLocaleDateString(this.currentLanguage || "en-US", options);
    },
    onSwiper(swiper) {
      this.swiperInstance = swiper;
      this.isBeginning = swiper.isBeginning;
      this.isEnd = swiper.isEnd;
    },
    onSlideChange(swiper) {
      this.isBeginning = swiper.isBeginning;
      this.isEnd = swiper.isEnd;
    },
    prevSlide() {
      if (this.swiperInstance) {
        this.swiperInstance.slidePrev();
      }
    },
    nextSlide() {
      if (this.swiperInstance) {
        this.swiperInstance.slideNext();
      }
    },
    openModal(image) {
      this.currentImage = image;
      this.isModalOpen = true;
      console.log("test")
    },
    closeModal() {
      this.isModalOpen = false;
      this.currentImage = null;
    },
  },
};
</script>

<template>
  <div>
    <sections>
      <template #title>{{ title }}</template>
      <template #title-button>
        <div class="btns-carousel">
          <left
              :disabled="isBeginning"
              @click="prevSlide"
          />
          <right
              :disabled="isEnd"
              @click="nextSlide"
          />
        </div>
      </template>
      <template #content>
        <swiper
            :modules="[Grid]"
            :slidesPerView="3"
            :slidesPerGroup="1"
            :spaceBetween="10"
            :grid="{ rows: rows, fill: 'row' }"
            :onSwiper="onSwiper"
            :onSlideChange="onSlideChange"
            :breakpoints="{
              0: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                grid: {
                  rows: 1,
                  fill: 'row'
                }
              },
              768: {
                slidesPerView: 3,
                slidesPerGroup: 1,
                grid: {
                  rows: rows,
                  fill: 'row'
                }
              }
            }"
        >
          <SwiperSlide
              v-for="(m, index) in materials"
              :key="index"
          >
            <div class="card">
              <div class="card__image" @click="openModal(BASE_URL + m.image)">
                <img :src="BASE_URL + m.image" alt="image" />
                <div class="card__overlay">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 38C30.8366 38 38 30.8366 38 22C38 13.1634 30.8366 6 22 6C13.1634 6 6 13.1634 6 22C6 30.8366 13.1634 38 22 38Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M41.9998 42L33.2998 33.3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22 16V28" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16 22H28" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
              <div class="card__content">
                <div class="card__title font-gilroy truncate-text">{{ m.title }}</div>
                <div class="card__time">{{ m.formattedDate }}</div>
              </div>
            </div>
          </SwiperSlide>
        </swiper>
      </template>
      <template #btn>
        <div class="btn">
          <left
              :disabled="isBeginning"
              @click="prevSlide"
          />
          <right
              :disabled="isEnd"
              @click="nextSlide"
          />
        </div>
      </template>
    </sections>
    <div v-if="isModalOpen" class="modal" @click.self="closeModal">
      <div class="modal-content">
        <img :src="currentImage" alt="fullscreen image" />
        <button class="close-button" @click="closeModal">&times;</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  padding: 5px;
  max-height: 25rem;
  height: 25rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.card__image {
  position: relative;
  height: 60%;
  max-height: 60%;
  width: 100%;
  overflow: hidden;
  border-radius: 8px;
}
.card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.card__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 114, 171, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  border-radius: 8px;
}
.card__overlay svg {
  width: 50px;
  height: 50px;
  color: white;
}
.card:hover .card__overlay {
  opacity: 1;
}
.card__content {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: hidden;
}
.card__title {
  color: #333333;
  font-weight: 500;
  line-height: 28px;
  font-size: 18px;
}
.card__time {
  color: #CFD3DA;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-weight: 500;
}

@media (max-width: 1024px) {
  .card {
    height: 22rem;
    gap: 1rem;

    .card-content {
      .title {
        line-height: 24px;
        font-size: 16px;
      }
    }
  }
}

@media (max-width: 768px) {
  .btn {
    gap: 2em;
  }

  .card {
    height: 27rem;
    gap: 1.5rem;

    .card-content {
      .title {
        font-size: 15px;
      }
    }
  }
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 6000;
}

.modal-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
}

.modal-content img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 2rem;
  color: white;
  cursor: pointer;
}

.close-button:hover {
  color: #ccc;
}
</style>
