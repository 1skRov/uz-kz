<script>
import Sections from "@/components/Sections.vue";
import Left from "@/components/Buttons/left.vue";
import Right from "@/components/Buttons/right.vue";
import api, { BASE_URL } from "@/axios";
import { mapGetters } from "vuex";

export default {
  name: "OurHistory",
  components: { Right, Left, Sections },
  props: {
    title: {
      type: String,
      default: "{{ our_history }}",
    },
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
    ...mapGetters(["currentLanguage"]),
  },
  methods: {
    getHistory() {
      api
        .get(`/our-history/?lang_code=${this.currentLanguage}`)
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
      const container = this.$el.querySelector(".carousel-container");
      const itemWidth = this.isMobile
        ? container.offsetWidth
        : container.querySelector(".item").offsetWidth;
      container.scrollTo({
        left: newIndex * itemWidth,
        behavior: "smooth",
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
          <div @click="scrollLeft">
            <left />
          </div>
          <div @click="scrollRight">
            <right />
          </div>
        </div>
      </template>
      <template #content>
        <section class="g-section">
          <div class="btn-mobile" v-if="history.length > 0">
            <div @click="scrollLeft">
              <left :is-white="true" />
            </div>
            <div @click="scrollRight">
              <right :is-white="true" />
            </div>
          </div>
          <div class="carousel-wrap">
            <div class="carousel-container">
              <div
                class="item"
                v-for="(h, index) in history"
                :key="index"
                :style="{ backgroundImage: `url(${BASE_URL + h.image})` }"
                :class="{ active: activeIndex === index }"
              >
                <div class="overlay"></div>
                <div class="item-desc">
                  <h3 class="font-gilroy">{{ h.title }}</h3>
                  <p v-html="h?.desc" style="word-wrap: break-word"></p>
                </div>
              </div>
            </div>
          </div>
          <div class="timeline-mask" v-if="!isMobile && history.length">
            <div class="timeline">
              <button
                v-for="(h, index) in history"
                :key="index"
                class="step"
                :class="{
                  active: activeIndex === index,
                  done: index < activeIndex,
                }"
                type="button"
                @click="setActive(index)"
                :aria-current="activeIndex === index ? 'true' : 'false'"
              >
                <span class="dot"></span>
                <span v-if="index !== history.length - 1" class="line"></span>
              </button>
            </div>
          </div>
        </section>
      </template>
    </sections>
  </div>
</template>

<style scoped>
.mob-section {
  width: 100%;
}

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

.carousel-wrap {
  position: relative;
  width: 100%;
  height: 100%;
}

.carousel-wrap::after {
  content: "";
  position: absolute;
  top: 0;
  right: -2px;
  height: 100%;
  width: 350px;
  pointer-events: none;
  z-index: 50;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 100%
  );
}

.timeline-mask::after {
  content: "";
  position: absolute;
  top: 0;
  right: -2px;
  width: 350px;
  height: 100%;
  pointer-events: none;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  z-index: 10;
}

.timeline {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 18px;
  padding-left: 20px;
}

.carousel-container .item {
  flex: 0 0 auto;
  width: 500px;
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
  opacity: 0;
  transition: opacity 0.25s ease;
}

.item-desc {
  padding: 0 24px 12px;
  color: #fff;
  position: relative;
  z-index: 2;
  overflow: hidden;
  transform: translateY(calc(100% - 54px));
  transition: transform 0.4s ease-in-out;
}

.carousel-container .item:hover .overlay {
  opacity: 1;
}

.item-desc h3 {
  margin: 0;
  font-size: 24px;
  color: #ffffff;
  font-weight: 500;
  line-height: 120%;
}

.item-desc p {
  opacity: 0;
  transform: translateY(32px);
  transition: all 0.4s ease-in-out 0.2s;
}

.carousel-container .item:hover .overlay,
.carousel-container .item:focus-within .overlay {
  opacity: 1;
}

.carousel-container .item:hover .item-desc,
.carousel-container .item:focus-within .item-desc {
  transform: none;
}

.timeline-mask {
  margin-top: 28px;
  position: relative;
  overflow: hidden;
  padding: 8px 0;
}

.carousel-container .item:hover .item-desc p,
.carousel-container .item:focus-within .item-desc p {
  opacity: 1;
  transform: translateY(0);
}

.timeline-mask::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 180px;
  height: 100%;
  pointer-events: none;
  background: linear-gradient(to left, #fff 20%, rgba(255, 255, 255, 0));
}

.timeline {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
}

.step {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: transparent;
  border: 0;
  padding: 0;
  cursor: pointer;
}

.step .dot {
  width: 20px;
  height: 20px;
  border-radius: 999px;
  border: 1px solid #d6dbe3;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.step .dot::after {
  content: "";
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: #575f6c;
  opacity: 0.6;
}

.step .line {
  width: 180px;
  height: 0;
  border-top: 2px dashed rgba(0, 114, 171, 0.35);
  transform: translateY(0);
}

.step.done .dot {
  border-color: rgba(0, 114, 171, 0.25);
}

.step.done .dot::after {
  background: #0072ab;
  opacity: 1;
}

.step.done .line {
  border-top-color: rgba(0, 114, 171, 0.9);
}

.step.active .dot {
  border-color: rgba(0, 114, 171, 0.2);
  transform: scale(1.08);
}

.step.active .dot::after {
  background: #0072ab;
  opacity: 1;
  box-shadow: 0 0 0 4px rgba(0, 114, 171, 0.14);
}

.step:hover .dot {
  border-color: rgba(0, 114, 171, 0.25);
}

.step:focus-visible {
  outline: none;
}

.step:focus-visible .dot {
  box-shadow: 0 0 0 3px rgba(0, 114, 171, 0.22);
}

@media (max-width: 1024px) {
  .carousel-container .item .overlay {
    opacity: 1;
  }

  .mob-section {
    width: 90%;
    margin: 0 auto;
  }

  .carousel-container .item {
    width: 400px;
    height: 350px;
  }

  .step .line {
    width: 120px;
  }

  .timeline-mask::after {
    width: 140px;
  }
  .item-desc {
    transform: none;
    padding-bottom: 24px;
  }
  .item-desc p {
    opacity: 1;
    transform: translateY(0);
    margin-top: 8px;
  }
}

@media (max-width: 768px) {
  .carousel-container .item .overlay {
    opacity: 1;
  }
  .item-desc {
    transform: none;
  }

  .item-desc p {
    opacity: 1;
    transform: translateY(0);
  }

  .mob-section {
    width: 100%;
  }

  .carousel-wrap::after {
    display: none;
  }

  .carousel-container .item {
    flex: 0 0 100%;
    height: 50vh;
  }

  .item-desc {
    padding: 20px;
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
