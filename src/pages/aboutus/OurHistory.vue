<script>
import Sections from "@/components/Sections.vue";
import Left from "@/components/Buttons/left.vue";
import Right from "@/components/Buttons/right.vue";

export default {
  name: "OurHistory",
  components: { Right, Left, Sections },
  data() {
    return {
      title: "Наша история",
      games: [
        {
          title: "Dota 2",
          description:
              "Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.",
          image: require('@/assets/images/1.png'),
        },
        {
          title: "The Witcher 3",
          description:
              "The Witcher 3 is a role-playing game set in an open world developed by CD Projekt Red.",
          image: require('@/assets/images/img.png'),
        },
        {
          title: "RDR 2",
          description:
              "RDR 2 is an action-adventure game developed and published by Rockstar Games.",
          image: require('@/assets/images/3.png'),
        },
        {
          title: "PUBG Mobile",
          description:
              "PUBG Mobile is a battle royale game where players fight to be the last one standing.",
          image: require('@/assets/images/2.png'),
        },
        {
          title: "Fortnite",
          description:
              "Fortnite is a battle royale game where 100 players fight to be the last person standing.",
          image: require('@/assets/images/4.png'),
        },
      ],
      activeIndex: 0,
    };
  },
  methods: {
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
      if (this.activeIndex < this.games.length - 1) {
        this.setActive(this.activeIndex + 1);
      }
    },
  },
  watch: {
    activeIndex(newIndex) {
      const container = this.$el.querySelector('.carousel-container');
      const itemWidth = container.querySelector('.item').offsetWidth;
      container.scrollTo({
        left: newIndex * itemWidth,
        behavior: 'smooth',
      });
    },
  },
};
</script>

<template>
  <div>
    <sections>
      <template #title>{{ title }}</template>
      <template #title-button>
        <div class="btn">
          <left @click="scrollLeft" />
          <right @click="scrollRight" />
        </div>
      </template>
      <template #content>
        <section class="game-section">
          <div class="carousel-container">
            <div
                class="item"
                v-for="(game, index) in games"
                :key="index"
                :style="{ backgroundImage: `url(${game.image})` }"
                :class="{ active: activeIndex === index }"
                @click="onCardClick(index)"
            >
              <div class="overlay" v-if="activeIndex === index"></div>
              <div class="item-desc">
                <h3>{{ game.title }}</h3>
                <p>{{ game.description }}</p>
              </div>
            </div>
          </div>
          <div class="dots">
            <span
                v-for="(game, index) in games"
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
</style>
