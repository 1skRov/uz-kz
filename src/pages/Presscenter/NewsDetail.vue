<script>
import api, {BASE_URL} from "@/axios";
import {mapGetters} from "vuex";
import BasicButton from "@/components/Buttons/button_basic.vue";
import {SwiperSlide} from "swiper/vue";

export default {
  name: "NewsDetail",
  components: {SwiperSlide, BasicButton},
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
    ...mapGetters(["currentLanguage"]),
  },
  watch: {
    currentLanguage(newLang) {
      this.getNews();
    },
    '$route.params.id': {
      immediate: true,
      handler(newId) {
        this.getNews();
      }
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
      return new Date(dateString).toLocaleDateString(this.currentLanguage || "en-US", options);
    },
    goToNewsDetails(newsId) {
      this.$router.push({ name: 'NewsDetails', params: { id: newsId } });
    },
  },
}
</script>

<template>
  <div class="newsItem">
    <div class="newsItem___detail">
      <nav>
        <p>главная / новости /</p>
        <span class="truncate-text-line">{{ news_item.title }}</span>
      </nav>
      <div class="page">
        <div class="newsItem__main">
          <div class="newsItem__image">
            <img :src="BASE_URL + news_item.image" :alt="BASE_URL + news_item.image">
          </div>
          <div class="newsItem__text">
            <p class="title font-gilroy">{{news_item.title}}</p>
            <div class="content-text" v-html="news_item.desc"></div>
            <div class="time_buttons">
              <basic-button :title_button="'{{ olimpic }}'" :is-blue="true"></basic-button>
              <div class="time">{{ formatDate(news_item.posted_date) }}</div>
            </div>
          </div>
        </div>
        <div class="recommendNews">
          <div class="recommendNews___title">recommand</div>
          <div class="recommendNews___content" v-for="(n, index) in news"
               :key="index"
               @click="goToNewsDetails(n.id)">
            <div class="card">
              <div class="image-card">
                <img
                    :src="BASE_URL + n.image"
                    alt="Новость"
                />
              </div>
              <div class="card-content">
                <div class="title font-gilroy truncate-text">{{ n.title }}</div>
                <div class="time">{{ formatDate(n.posted_date)  }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.newsItem {
  display: flex;
  padding: 50px 0;
  width: 65%;
  margin: 0 auto;
}

.newsItem___detail {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  height: 100%;
}

nav {
  margin-bottom: 20px;
  width: 100%;
  display: flex;

  p {
    font-weight: 500;
    color: #CFD3DA;
    margin: 0;
  }

  span {
    color: #333333;
    font-weight: 500;
    max-width: 200px;
    width: 200px;
  }
}

.newsItem__main {
  width: 60%;
  max-width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.newsItem__image {
  width: 100%;
  height: 30rem;
  border-radius: 8px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
}

.newsItem__text {
  .title {
    font-size: 40px;
    font-weight: 500;
  }

  .content-text {
    line-height: 30px;
  }

  .time_buttons {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.5rem;

    .time {
      color: #575F6C;
      font-weight: 500;
    }
  }
}

.page {
  display: flex;
  justify-content: space-between;
  height: 100%;
}

.recommendNews {
  width: 30%;
  box-sizing: border-box;
  overflow-y: auto;
}

.recommendNews___title {
  font-size: 32px;
  color: #333333;
}

.recommendNews___content {
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
}

</style>