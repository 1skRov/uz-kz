<script>
import api, {BASE_URL} from "@/axios";
import {mapGetters} from "vuex";

export default {
  name: "NewsDetail",
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
    goToNewsDetails(newsId) {
      this.$router.push({ name: 'NewsDetails', params: { id: newsId } });
    },
  },
}
</script>

<template>
  {{ news_item }}
</template>

<style scoped>

</style>