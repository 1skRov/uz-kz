<script>
import SideBar from "@/components/SideBarText.vue";
import Articles from "@/pages/Documents/Articles.vue";
import Important from "@/pages/Documents/Important.vue";
import Sections from "@/components/Sections.vue";
import Right from "@/components/Buttons/right.vue";
import Left from "@/components/Buttons/left.vue";

export default {
  name: "Projects",
  components: {Left, Right, Sections, Important, Articles, SideBar},
  data() {
    return {
      title1: "Projects",
      games: [
        {
          title: "Dota 2",
          description:
              "Dota 2 is a m",
          image: require('@/assets/images/1.png'),
        },
        {
          title: "The Witcher 3",
          description:
              "The ",
          image: require('@/assets/images/img.png'),
        },
        {
          title: "RDR 2",
          description:
              "RDR 2 ",
          image: require('@/assets/images/3.png'),
        },
        {
          title: "PUBG Mobile",
          description:
              "PUBG Mobile ",
          image: require('@/assets/images/2.png'),
        },
        {
          title: "Fortnite",
          description:
              "Fortnite is a",
          image: require('@/assets/images/4.png'),
        },
      ],
      activeIndex: 0,
    };
  },
  methods: {
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
  },
}
</script>

<template>
  <div style="display: flex">
    <side-bar :title="title1" :is-background="true"></side-bar>
    <div class="content">
      <sections>
        <template #title>{{title1}}</template>
        <template #title-button>
          <div class="btn">
            <left @click="scrollLeft" />
            <right @click="scrollRight" />
          </div>
        </template>
        <template #content>
          <div class="carousel-container">
            <div
                class="item"
                v-for="(game, index) in games"
                :key="index"
                :style="{ backgroundImage: `url(${game.image})` }"
            >
              <div class="item-desc">
                <h3>{{ game.title }}</h3>
                <p>{{ game.description }}</p>
              </div>
            </div>
          </div>
        </template>
        <template #btn>
          <div class="btn">
            <left @click="scrollLeft" />
            <right @click="scrollRight" />
          </div>
        </template>
      </sections>
    </div>
  </div>
</template>

<style scoped>
.content{
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
  overflow: hidden;
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
  right:0;
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