<script>
import Sections from "@/components/Sections.vue";
import SideBar from "@/pages/Main/SideBar.vue";
import More from "@/components/Buttons/more.vue";
import Left from "@/components/Buttons/left.vue";
import Right from "@/components/Buttons/right.vue";

export default {
  name: "Section6",
  components: { Right, Left, More, SideBar, Sections },
  data() {
    return {
      title: "Наши партнеры",
      page: "06",
      images: [
        { id: 1, src: require("@/assets/images/img.png"), alt: "Logo 1" },
        { id: 2, src: require("@/assets/images/img.png"), alt: "Logo 2" },
        { id: 3, src: require("@/assets/images/img.png"), alt: "Logo 3" },
        { id: 4, src: require("@/assets/images/img.png"), alt: "Logo 4" },
        { id: 5, src: require("@/assets/images/img.png"), alt: "Logo 5" },
        { id: 6, src: require("@/assets/images/img.png"), alt: "Logo 6" },
        { id: 7, src: require("@/assets/images/img.png"), alt: "Logo 7" },
        { id: 8, src: require("@/assets/images/1.png"), alt: "Logo 8" },
      ],
      active: 0,
      direction: "",
    };
  },
  computed: {
    visibleItems() {
      const visible = [];
      const len = this.images.length;
      for (let i = -2; i <= 2; i++) {
        let index = (this.active + i + len) % len;
        visible.push(this.images[index]);
      }
      return visible;
    },
  },
  methods: {
    moveLeft() {
      this.direction = "left";
      this.active = (this.active - 1 + this.images.length) % this.images.length;
    },
    moveRight() {
      this.direction = "right";
      this.active = (this.active + 1) % this.images.length;
    },
    calculateLevel(index) {
      return index - 2;
    },
  },
};
</script>

<template>
  <div class="section">
    <side-bar :page="page" :icon="false" />
    <div style="width: 100%">
      <div class="content">
        <sections>
          <template #title>
            {{ title }}
          </template>
          <template #title-button>
            <div class="btns">
              <left @click="moveLeft" />
              <right @click="moveRight" />
            </div>
          </template>
        </sections>
      </div>

      <div id="carousel" class="noselect">
        <transition-group :name="direction" tag="div">
          <div
              v-for="(image, index) in visibleItems"
              :key="image.id"
              :class="['item', 'level' + calculateLevel(index)]"
          >
            <img :src="image.src" :alt="image.alt" />
          </div>
        </transition-group>
      </div>
      <div class="btns btn-mob">
        <left @click="moveLeft" />
        <right @click="moveRight" />
      </div>
    </div>
  </div>
</template>


<style scoped>
.section {
  display: flex;
}
.content {
  width: 70%;
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

#carousel {
  position: relative;
  height: 35vh;
  width: 100%;
  margin: 0;
  overflow: hidden;
}

.item {
  position: absolute;
  text-align: center;
  transition: all 1s;
}

.item img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 8px;

}

.level-2 {
  height: 150px;
  width: 110px;
  margin-top: 25px;
  left: 5%;
}

.level-1 {
  height: 180px;
  width: 130px;
  margin-top: 10px;
  left: 25%;
}

.level0 {
  height: 200px;
  width: 150px;
  left: 45%;
}

.level1 {
  height: 180px;
  width: 130px;
  margin-top: 10px;
  left: 65%;
}

.level2 {
  height: 150px;
  width: 110px;
  margin-top: 25px;
  left: 85%;
}

.left-enter-active,
.right-enter-active {
  transition: transform 1s, opacity 1s;
}

.left-enter,
.left-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.right-enter,
.right-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.noselect {
  user-select: none;
}
.btn-mob {
  display: none;
}

@media (max-width: 1024px) {
  .content {
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
}
</style>
