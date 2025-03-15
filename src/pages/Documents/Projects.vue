<script>
import SideBar from "@/components/SideBarText.vue";
import Articles from "@/pages/Documents/Articles.vue";
import Important from "@/pages/Documents/Important.vue";
import Sections from "@/components/Sections.vue";
import Right from "@/components/Buttons/right.vue";
import Left from "@/components/Buttons/left.vue";
import {mapGetters} from "vuex";
import api, {BASE_URL} from "@/axios";

export default {
  name: "Projects",
  components: {Left, Right, Sections, Important, Articles, SideBar},
  props: {
    title: {
      type: String,
      default: "{ projects }",
    },
    title_side: {
      type: String,
      default: "{ projects_side }",
    },
    isBackground: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      projects: [],
      activeIndex: 0,
      BASE_URL
    };
  },
  computed: {
    ...mapGetters(['currentLanguage']),
  },
  watch: {
    currentLanguage(newLang) {
      this.getProjects();
    },
  },
  mounted() {
    this.getProjects();
  },
  methods: {
    getProjects() {
      api.get(`/projects-for2025/?lang_code=${this.currentLanguage}`)
          .then((response) => {
            this.projects = response.data;
          })
          .catch((error) => {
            console.error(error);
          });
    },
    scrollLeft() {
      const container = this.$el.querySelector('.carousel-container');
      const cardWidth = container.querySelector('.item').offsetWidth;
      container.scrollBy({
        left: -cardWidth,
        behavior: 'smooth',
      });
    },
    scrollRight() {
      const container = this.$el.querySelector('.carousel-container');
      const cardWidth = container.querySelector('.item').offsetWidth;
      container.scrollBy({
        left: cardWidth,
        behavior: 'smooth',
      });
    },
    goToDetails(newsId) {
      this.$router.push({name: 'Project', params: {id: newsId}});
    },
  },
}
</script>

<template>
  <div style="display: flex" id="doc2">
    <side-bar :title="title_side" :isBackground="isBackground"></side-bar>
    <div class="content">
      <sections>
        <template #title>{{ title }}</template>
        <template #title-button>
          <div class="btn">
            <div @click="scrollLeft">
              <left/>
            </div>
            <div @click="scrollRight">
              <right/>
            </div>
          </div>
        </template>
        <template #content>
          <div class="carousel-container">
            <div
                class="item"
                v-for="(p, index) in projects"
                :key="index"
                :style="{ backgroundImage: `url(${BASE_URL + p.image})` }"
                @click="goToDetails(p.id)"

            >
              <div class="item-desc">
                <h3>{{ p.title }}</h3>
                <p v-html="p.mini_desc" class="truncate-text-line"></p>
              </div>
            </div>
          </div>
        </template>
        <template #btn>
          <div class="btn">
            <div @click="scrollLeft">
              <left/>
            </div>
            <div @click="scrollRight">
              <right/>
            </div>
          </div>
        </template>
      </sections>
    </div>
  </div>
</template>

<style scoped>
.content {
  width: 65%;
  margin: 0 auto;
}

.btn {
  display: flex;
  align-items: center;
  gap: 1em;
}

.carousel-container {
  display: flex;
  gap: 20px;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

.carousel-container .item {
  flex: 0 0 auto;
  width: 30vw;
  height: 450px;
  display: flex;
  align-items: flex-end;
  background: #343434 no-repeat center center / cover;
  border-radius: 8px;
  position: relative;
  cursor: pointer;
}

.item-desc {
  padding: 10px 15px;
  background-color: #fff;
  border-radius: 8px 0 0 0;
  color: #333;
  position: absolute;
  bottom: 0;
  right: 0;
  max-width: 45%;
  max-height: 45%;
  z-index: 2;
}

h3 {
  font-size: 18px;
  margin: 0;
}

p {
  margin: 0
}

@media (max-width: 1024px) {
  .content {
    width: 90%;
  }

  .carousel-container .item {
    width: 40vw;
    height: 250px;
  }

  h3 {
    font-size: 16px;
  }
}

@media (max-width: 768px) {
  .carousel-container {
    gap: 0;
  }

  .carousel-container .item {
    width: 100%;
    height: 450px;
    display: flex;
    align-items: flex-end;
    background: #343434 no-repeat center center / cover;
    border-radius: 8px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
  }

  .btn {
    justify-content: center;
  }
}
</style>