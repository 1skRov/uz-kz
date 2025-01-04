<script>
import Sections from "@/components/Sections.vue";
import Right from "@/components/Buttons/right.vue";
import Left from "@/components/Buttons/left.vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Grid } from 'swiper/modules';
import api, {BASE_URL} from "@/axios";
import {mapGetters} from "vuex";

export default {
  name: "LatestNews",
  components: {
    Sections,
    Left,
    Right,
    Swiper,
    SwiperSlide
  },
  props: {
    title: {
      type: String,
      default: "{ latest_news }",
    },
    rows: {
      type: Number,
      default: 2,
    }
  },
  data() {
    return {
      news: [],
      Grid,
      BASE_URL,
      swiperInstance: null,
      isBeginning: true,
      isEnd: false,
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
          .get(`/last-news/?lang_code=${this.currentLanguage}`)
          .then((response) => {
            const data = response.data;
            if (Array.isArray(data) && data.length > 0) {
              this.news = data.map((item) => ({
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
              this.news = [];
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
    goToNewsDetails(newsId) {
      this.$router.push({ name: 'NewsDetails', params: { id: newsId } });
    },
  },
};
</script>

<template>
  <div>
    <sections>
      <template #title>
        {{ title }}
      </template>
      <template #title-button>
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
              v-for="(n, index) in news"
              :key="index"
              @click="goToNewsDetails(n.id)"
          >
            <div class="card">
              <div class="image-card">
                <img
                    :src="BASE_URL + n.image"
                    alt="Новость"
                />
              </div>
              <div class="card-content">
                <div class="title font-gilroy truncate-text">{{ n.title }}</div>
                <div class="time">{{ n.formattedDate  }}</div>
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

    img {
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
