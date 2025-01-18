<script>
import Sections from "@/components/Sections.vue";
import Right from "@/components/Buttons/right.vue";
import Left from "@/components/Buttons/left.vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Grid } from 'swiper/modules';
import api, {BASE_URL} from "@/axios";
import {mapGetters} from "vuex";

export default {
  name: "VideoMaterials",
  components: {
    Sections,
    Right,
    Left,
    Swiper,
    SwiperSlide
  },
  props:{
    title:{
      type: String,
      default: "{ video_material }"
    },
    rows: {
      type: Number,
      default: 1,
    }
  },
  data() {
    return {
      materials: [],
      Grid,
      BASE_URL,
      swiperInstance: null,
    };
  },
  computed: {
    ...mapGetters(["currentLanguage"]),
  },
  watch: {
    currentLanguage(newLang) {
      this.getNews();
    },
  },
  mounted() {
    this.getNews();
  },
  methods: {
    getNews() {
      api
          .get(`/video-materials/?lang_code=${this.currentLanguage}`)
          .then((response) => {
            const data = response.data;
            if (Array.isArray(data) && data.length > 0) {
              this.materials = data.map((item) => ({
                ...item,
                formattedDate: this.formatDate(item.posted_date),
              }));
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
    goToVideoDetails(newsId) {
      this.$router.push({ name: 'VideoDetails', params: { id: newsId } });
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
          <div @click="prevSlide"><left/></div>
          <div  @click="nextSlide"><right/></div>
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
              @click="goToVideoDetails(m.id)"
          >
            <div class="card">
              <div class="image-card">
                <video controls="controls" :poster="BASE_URL + m.image">
                  <source :src="BASE_URL + m.video">
                </video>
                <div class="card__overlay">
                  <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.333 44C35.3787 44 44.333 35.0457 44.333 24C44.333 12.9543 35.3787 4 24.333 4C13.2873 4 4.33301 12.9543 4.33301 24C4.33301 35.0457 13.2873 44 24.333 44Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M20.333 16L32.333 24L20.333 32V16Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
              <div class="card-content">
                <div class="title font-gilroy truncate-text">{{ m.title }}</div>
                <div class="time">{{ m.formattedDate  }}</div>
              </div>
            </div>
          </SwiperSlide>
        </swiper>
      </template>
      <template #btn>
        <div class="btn">
          <div @click="prevSlide"><left/></div>
          <div  @click="nextSlide"><right/></div>
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

.card {
  padding: 5px;
  max-height: 25rem;
  height: 25rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  .image-card {
    height: 60%;
    max-height: 60%;
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
    position: relative;

    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      justify-content: center;
    }
  }

  .card-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: hidden;

    .title {
      color: #333333;
      font-weight: 500;
      line-height: 28px;
      font-size: 18px;
    }

    .time {
      color: #CFD3DA;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      font-weight: 500;
    }
  }
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
</style>