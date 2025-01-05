<script>
import api, {BASE_URL} from "@/axios";
import {mapGetters} from "vuex";
import BasicButton from "@/components/Buttons/button_basic.vue";

export default {
  name: "NewsDetail",
  components: {BasicButton},
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
              this.news = data;
              const newsItem = this.news.find((item) => item.id === Number(this.id));
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
  <div class="full">
    <div class="content-detail">
      <nav>
        <p>главная / новости /</p>
        <span class="truncate-text-line">{{ news_item.title }}</span>
      </nav>
      <div class="main">
        <div class="news_detail">
          <div class="image">
            <img :src="BASE_URL + news_item.image" :alt="BASE_URL + news_item.image">
          </div>
          <div class="text">
            <p class="title font-gilroy">{{news_item.title}}</p>
            <div class="content-text" v-html="news_item.desc"></div>
            <div class="details">
              <basic-button :title_button="'{{ olimpic }}'" :is-blue="true"></basic-button>
              <div class="time">{{ formatDate(news_item.posted_date) }}</div>
            </div>
          </div>
        </div>
        <div class="recommend">
          <div class="recommend_title">recommand</div>
          <div class="recommend_content"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.full {
  display: flex;
  padding: 50px 0;
  width: 65%;
  margin: 0 auto;

  .content-detail {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    .main {
      .news_detail {
        width: 60%;
        max-width: 60%;
        height: 100%;
        display: flex;
        flex-direction: column;
        .image {
          width: 100%;
          height: 30rem;
          border-radius: 8px;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .text {
          .title {
            font-size: 40px;
            font-weight: 500;
          }
          .content-text {
            line-height: 30px;
          }
          .details {
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
      }
      .recommend {
        .recommend_title {
          font-size: 32px;
          color: #333333;
        }
        .recommend_content {

        }
      }
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
  }
}
</style>