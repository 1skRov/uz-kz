<script>
import Sections from "@/components/Sections.vue";
import Left from "@/components/Buttons/left.vue";
import Right from "@/components/Buttons/right.vue";
import api, {BASE_URL} from "@/axios";
import {mapGetters} from "vuex";

export default {
  name: "OurHistory",
  components: {Right, Left, Sections},
  props: {
    title: {
      type: String,
      default: "{{ our_history }}",
    }
  },
  data() {
    return {
      activeIndex: 0,
      windowWidth: window.innerWidth,
      history: [],
      BASE_URL,
    };
  },
  computed: {
    isMobile() {
      return this.windowWidth <= 768;
    },
    ...mapGetters(['currentLanguage']),
  },
  methods: {
    getHistory() {
      api.get(`/our-history/?lang_code=${this.currentLanguage}`)
          .then((response) => {
            this.history = response.data;
          })
          .catch((error) => {
            console.error("Ошибка при загрузке данных About Us:", error);
          });
    },
    updateWindowWidth() {
      this.windowWidth = window.innerWidth;
    },
    setActive(index) {
      this.activeIndex = index;
    },
    onCardClick(index) {
      this.setActive(index);
    },
    scrollLeft() {
      if (this.activeIndex > 0) {
        this.setActive(this.activeIndex - 1);
      }
    },
    scrollRight() {
      if (this.activeIndex < this.history.length - 1) {
        this.setActive(this.activeIndex + 1);
      }
    },
  },
  watch: {
    currentLanguage(newLang) {
      this.getHistory();
    },
    activeIndex(newIndex) {
      const container = this.$el.querySelector('.carousel-container');
      const itemWidth = this.isMobile
          ? container.offsetWidth
          : container.querySelector('.item').offsetWidth;
      container.scrollTo({
        left: newIndex * itemWidth,
        behavior: 'smooth',
      });
    },
  },
  mounted() {
    window.addEventListener("resize", this.updateWindowWidth);
    this.getHistory();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateWindowWidth);
  },
};
</script>

<template>
  <div>
    <sections class="mob-section">
      <template #title v-if="!isMobile">{{ title }}</template>
      <template #title-button>
        <div class="btn">
          <div @click="scrollLeft"><left  /></div>
          <div @click="scrollRight"><right  /></div>
        </div>
      </template>
      <template #content>
        <section class="g-section">
          <div class="btn-mobile" v-if="history.length > 0">
            <div @click="scrollLeft"><left  :is-white="true"/></div>
            <div @click="scrollRight"><right :is-white="true" /></div>
          </div>
          <div class="carousel-container">
            <div
                class="item"
                v-for="(h, index) in history"
                :key="index"
                :style="{ backgroundImage: `url(${BASE_URL + h.image})` }"
                :class="{ active: activeIndex === index }"
                @click="onCardClick(index)"
            >
              <div class="overlay" v-if="activeIndex === index"></div>
              <div class="item-desc">
                <h3>{{ h.title }}</h3>
                <p v-html="h?.desc" class="truncate-text" style="word-wrap: break-word"></p>
              </div>
            </div>
          </div>
          <div class="dots" v-if="!isMobile">
            <span
                v-for="(h, index) in history"
                :key="index"
                :class="{ active: activeIndex === index }"
                @click="setActive(index)"
            ></span>
          </div>
        </section>
      </template>
    </sections>
  </div>
</template>

<style scoped>
.btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
}
.carousel-container {
  display: flex;
  gap: 20px;
  overflow-x: hidden;
  scroll-behavior: smooth;
  width: 100%;
  height: 100%;
  position: relative;
}
.carousel-container .item {
  flex: 0 0 auto;
  width: 390px;
  height: 450px;
  display: flex;
  align-items: flex-end;
  background: #343434 no-repeat center center / cover;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
}
.carousel-container .item.active {
  width: 500px;
}
.carousel-container .item:after {
  content: "";
  display: block;
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
}
.carousel-container .item .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 114, 171, 0.5);
  z-index: 1;
  pointer-events: none;
}
.item-desc {
  padding: 0 24px 12px;
  color: #fff;
  position: relative;
  z-index: 2;
  overflow: hidden;
  transform: translateY(calc(100% - 54px));
  transition: all 0.4s ease-in-out;
}
.item.active .item-desc {
  transform: none;
}
.item-desc p {
  opacity: 0;
  transform: translateY(32px);
  transition: all 0.4s ease-in-out 0.2s;
}
.item.active .item-desc p {
  opacity: 1;
  transform: translateY(0);
}

.dots {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 40px;
}
.dots span {
  width: 10px;
  height: 10px;
  background: #ddd;
  border-radius: 50%;
  cursor: pointer;
}
.dots span.active {
  background: #0072AB;
}
@media (max-width: 1024px) {
  .carousel-container .item {
    width: 350px;
    height: 350px;
  }

  .carousel-container .item.active {
    width: 400px;
  }
}
@media (max-width: 768px) {
  .carousel-container .item {
    flex: 0 0 100%;
    height: 50vh;
  }

  .carousel-container .item.active {
    width: 100%;
  }

  .item-desc {
    padding: 20px;
  }

  .dots {
    display: none;
  }

  .carousel-container .item {
    border-radius: 0;
  }

  .carousel-container {
    gap: 0;
  }

  .g-section {
    position: relative;
    background-color: red;
  }

  .btn-mobile {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    padding: 10px;
    z-index: 100;
    gap: 1.5rem;
  }

  .mob-section {
    padding: 0;
  }
}
</style>
