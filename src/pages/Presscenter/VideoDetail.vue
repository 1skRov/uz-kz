<script>
import api, { BASE_URL } from "@/axios";
import { mapGetters } from "vuex";
import BasicButton from "@/components/Buttons/button_basic.vue";
import { SwiperSlide } from "swiper/vue";
import VideoEmbed from "@/pages/Presscenter/VideoEmbed.vue";
import LatestNews from "@/pages/Presscenter/LatestNews.vue";
import VideoMaterials from "@/pages/Presscenter/VideoMaterials.vue";

export default {
  name: "VideoDetail",
  components: {
    VideoMaterials,
    LatestNews,
    SwiperSlide,
    BasicButton,
    VideoEmbed,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      news: [],
      news_item: {},
      BASE_URL,
    };
  },
  computed: {
    ...mapGetters(["currentLanguage", "getTranslations"]),
  },
  watch: {
    currentLanguage(newLang) {
      this.getNews();
    },
    "$route.params.id": {
      immediate: true,
      handler(newId) {
        this.getNews();
      },
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
            this.news = data
              .filter((item) => item.id !== Number(this.id))
              .slice(0, 6);

            const newsItem = data.find((item) => item.id === Number(this.id));
            if (newsItem) {
              this.news_item = newsItem;
            }
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
      return new Date(dateString).toLocaleDateString(
        this.currentLanguage || "en-US",
        options,
      );
    },
    goToNewsDetails(newsId) {
      this.$router.push({ name: "NewsDetails", params: { id: newsId } });
    },
    goToAllVideo() {
      this.$router.push({ name: "PressCenter" });
    },
  },
};
</script>

<template>
  <div class="news-detail">
    <div class="news-nav">
      <span @click="goToAllVideo">{{
        getTranslations.mainPage || "{ mainPage }"
      }}</span>
      <span>/</span>
      <span @click="goToAllVideo">{{
        getTranslations.press_center || "{ press_center }"
      }}</span>
      <span>/</span>
      <span class="truncate-text-line" style="color: #333333">
        {{ news_item.title || "" }}
      </span>
    </div>
    <div class="news-body">
      <div class="news-item">
        <div class="news-cover">
          <VideoEmbed
            :src="BASE_URL + news_item.video"
            :videoUrl="news_item.video_url"
            :poster="BASE_URL + news_item.image"
          ></VideoEmbed>
        </div>
        <div class="news-title font-gilroy">{{ news_item.title }}</div>
        <div class="news-description" v-html="news_item.desc"></div>
        <div class="news-secondary">
          <basic-button
            :is-blue="true"
            :title_button="getTranslations.olymp || '{ olymp }'"
          ></basic-button>
          <p class="news-time">{{ formatDate(news_item.posted_date) }}</p>
        </div>
      </div>
      <div class="recommendNews">
        <div class="recommendNews___title font-gilroy">
          {{ getTranslations.recommended || "{ recommended }" }}
        </div>
        <div
          class="recommendNews___content"
          v-for="(n, index) in news"
          :key="index"
          @click="goToNewsDetails(n.id)"
        >
          <div class="card">
            <div class="image-card">
              <img :src="BASE_URL + n.image" alt="Новость" />
            </div>
            <div class="card-content">
              <div class="title font-gilroy truncate-text">
                {{ n.title }}
              </div>
              <div class="time">{{ formatDate(n.posted_date) }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="tablet-form">
        <VideoMaterials
          :title="getTranslations.video_material"
        ></VideoMaterials>
      </div>
    </div>
  </div>
</template>

<style scoped>
.news-detail {
  width: 1224px;
  margin: 0 auto;
  height: 100%;
  padding: 80px 0;
}

.news-nav {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 6px;
  width: 40%;
  overflow: hidden;
  cursor: pointer;
}

.news-nav span {
  white-space: nowrap;
  color: #cfd3da;
  font-size: 16px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 500;
  line-height: 140%;
}

.news-body {
  margin-top: 38px;
  display: flex;
  justify-content: space-between;
}

.news-item {
  width: 710px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.news-cover {
  width: 100%;
  min-height: 400px;
  max-height: 500px;
  border-radius: 8px;
  overflow: hidden;
}

.news-title {
  font-size: 40px;
  font-weight: 500;
  line-height: 130%;
}

.news-description {
  font-size: 16px !important;
  line-height: 200%;
  color: #575f6c !important;
}

.news-secondary {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.news-time {
  margin: 0;
  color: #575f6c;
  font-size: 16px;
  font-weight: 500;
  line-height: 140%;
}

.title {
  font-size: 40px;
  font-weight: 500;
}

.time {
  color: #575f6c;
  font-weight: 500;
}

.recommendNews {
  width: 390px;
  box-sizing: border-box;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.recommendNews___title {
  font-size: 32px;
  color: #333333;
  margin-bottom: 12px;
  line-height: 120%;
}

.card {
  padding: 5px;
  max-height: 350px;
  height: 350px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.image-card {
  height: 200px;
  max-height: 200px;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.card-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: hidden;
}

.card-content .title {
  color: #333333;
  font-weight: 500;
  line-height: 120%;
  font-size: 24px;
}

.card-content .time {
  color: #cfd3da;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 16px;
}

.tablet-form {
  display: none;
}

@media (max-width: 1024px) {
  .news-body {
    flex-direction: column;
    gap: 40px;
  }
  .news-detail {
    width: 90%;
    margin: 0 auto;
  }

  .news-nav {
    width: 90%;
  }

  .news-item {
    width: 100%;
  }

  .news-title {
    font-size: 28px;
  }

  .news-description {
    font-size: 14px !important;
  }

  .recommendNews {
    display: none;
  }

  .tablet-form {
    display: block;
  }
}

@media (max-width: 768px) {
  .news-item {
    gap: 20px;
  }

  .news-cover {
    min-height: 200px;
    max-height: 200px;
  }

  .news-title {
    font-size: 24px;
  }

  .news-description {
    font-size: 12px !important;
  }

  .news-time {
    font-size: 14px;
  }
}
</style>
