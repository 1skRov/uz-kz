<script>
import Sections from "@/components/Sections.vue";
import SideBar from "@/pages/Main/SideBar.vue";
import More from "@/components/Buttons/more.vue";
import Left from "@/components/Buttons/left.vue";
import Right from "@/components/Buttons/right.vue";

export default {
  name: "Section6",
  components: { Right, Left, More, SideBar, Sections },
  props:{
    data: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {
      title: "Наши партнеры",
      page: "06",
      slidesOriginal: [
        {id: 1, src: require("@/assets/images/img.png"), alt: "Logo 1"},
        {id: 2, src: require("@/assets/images/img.png"), alt: "Logo 2"},
        {id: 3, src: require("@/assets/images/img.png"), alt: "Logo 3"},
        {id: 4, src: require("@/assets/images/img.png"), alt: "Logo 4"},
        {id: 5, src: require("@/assets/images/img.png"), alt: "Logo 5"},
        {id: 6, src: require("@/assets/images/img.png"), alt: "Logo 6"},
        {id: 7, src: require("@/assets/images/img.png"), alt: "Logo 7"},
        {id: 8, src: require("@/assets/images/1.png"), alt: "Logo 8"},
      ],
      currentPosition: 0,
      slideWidth: 250,
      visibleSlides: 4,
      disableTransition: false,
    };
  },

  computed: {
    slidesDoubled() {
      return [...this.slidesOriginal, ...this.slidesOriginal];
    },
    originalLength() {
      return this.slidesOriginal.length;
    },
    doubledLength() {
      return this.slidesDoubled.length;
    },
    trackStyles() {
      const offset = this.currentPosition * this.slideWidth * -1;
      const transitionStyle = this.disableTransition ? "none" : "0.3s";
      return {
        display: "flex",
        transform: `translateX(${offset}px)`,
        transition: transitionStyle,
        width: `${this.doubledLength * this.slideWidth}px`,
      };
    },
    firstTitle() {
      return this.data.find(item => item.title)?.title || null;
    },
  },

  methods: {
    moveLeft() {
      this.disableTransition = false;
      this.currentPosition--;
      this.$nextTick(() => {
        this.checkEdges();
      });
    },
    moveRight() {
      this.disableTransition = false;
      this.currentPosition++;

      this.$nextTick(() => {
        this.checkEdges();
      });
    },

    checkEdges() {
      if (this.currentPosition >= this.originalLength) {
        this.disableTransition = true;
        this.currentPosition = this.currentPosition - this.originalLength;
      }
      if (this.currentPosition < 0) {
        this.disableTransition = true;
        this.currentPosition = this.currentPosition + this.originalLength;
      }
    },
  },
};
</script>

<template>
  <div class="section">
    <side-bar :page="page" :icon="false"/>
    <div class="right-content">
      <div class="title-section">
        <sections>
          <template #title>
            {{firstTitle}}
          </template>
          <template #title-button>
            <div class="btns">
              <left @click="moveLeft"/>
              <right @click="moveRight"/>
            </div>
          </template>
        </sections>
      </div>
      <div id="carousel" class="slider">
        <div class="slide-track" :style="trackStyles">
          <div
              v-for="(slide, index) in data"
              :key="index"
              class="slide"
          >
            <img
                :src="slide.image"
                :alt="slide.image"
                width="100%"
                height="100%"
            />
          </div>
        </div>
      </div>
      <div class="btns btn-mob">
        <left @click="moveLeft"/>
        <right @click="moveRight"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.section {
  display: flex;
  width: 100%;
}

.right-content {
  width: 100%;
  overflow: hidden;
}

.right-content .title-section {
  width: 78%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  align-items: center;
}

.btns {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.right-content #carousel {
  position: relative;
  height: 15vh;
  width: 100%;
  margin: 0;
  overflow: hidden;
}

#carousel::before,
#carousel::after {
  content: "";
  position: absolute;
  top: 0;
  height: 100%;
  width: 100px;
  pointer-events: none;
  z-index: 2;
}

#carousel::before {
  left: 0;
  background: linear-gradient(
      to right,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
  );
}

#carousel::after {
  right: 0;
  background: linear-gradient(
      to left,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
  );
}

.slider .slide-track {
  display: flex;
  gap: 20px;
}

.slide-track .slide {
  width: 20vh;
  height: 10vh;
}

.btn-mob {
  display: none;
}

@media (max-width: 1024px) {
  .right-content .title-section {
    width: 90%;
  }
}

@media (max-width: 768px) {
  .btn-mob {
    display: flex;
    gap: 2rem;
    align-items: center;
    margin: 1.5rem 0;
  }
  .btns {
    margin-left: 20px;
  }
  #carousel::before,
  #carousel::after {
    width: 50px;
  }
}
</style>
