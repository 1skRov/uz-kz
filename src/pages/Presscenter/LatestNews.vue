<script>
import Sections from "@/components/Sections.vue";
import Right from "@/components/Buttons/right.vue";
import Left from "@/components/Buttons/left.vue";

export default {
  name: "LatestNews",
  components: { Left, Right, Sections },
  data() {
    return {
      title: "Последние новости",
      allCards: [
        {
          description: "Dota 2 is a multipLorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa doloremque eos esse magnam mollitia nihil odio quibusdam ratione saepe veniam. A consectetur id neque. Deserunt doloremque possimus quas quidem repellat. Cumque dolorem, fuga ipsum nisi porro praesentium quidem ratione totam ut vel. Aliquid asperiores atque debitis dicta, doloremque earum enim exercitationem harum illo ipsa ipsam numquam praesentium quidem. Cupiditate fuga, id labore minus neque nihil nisi nostrum, officia optio perferendis quas repellendus sed similique soluta, ut? Iure molestias odio officiis quisquam rem, reprehenderit saepe soluta temporibus vitae? Ad adipisci esse harum laudantium quisquam, quo reiciendis rem repellendus, rerum voluptas voluptatem.layer online battle arena.",
          image:"https://www.gazeta.uz/media/img/2022/01/ouPaAp16433889116473_l.jpg",
        },
        {
          description: "The Witcher 3 is a role-playing game.",
          image: require("@/assets/images/img.png"),
        },
        {
          description: "RDR 2Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa doloremque eos esse magnam mollitia nihil odio quibusdam ratione saepe veniam. A consectetur id neque. Deserunt doloremque possimus quas quidem repellat. Cumque dolorem, fuga ipsum nisi porro praesentium quidem ratione totam ut vel. Aliquid asperiores atque debitis dicta, doloremque earum enim exercitationem harum illo ipsa ipsam numquam praesentium quidem. Cupiditate fuga, id labore minus neque nihil nisi nostrum, officia optio perferendis quas repellendus sed similique soluta, ut? Iure molestias odio officiis quisquam rem, reprehenderit saepe soluta temporibus vitae? Ad adipisci esse harum laudantium quisquam, quo reiciendis rem repellendus, rerum voluptas voluptatem. is an action-adventure game.",
          image: "https://www.gazeta.uz/media/img/2017/04/V8lBRJ14912123189853_b.jpg",
        },
        {
          description: "PUBG Mobile is a battle royale game.",
          image: "https://img.championat.com/s/732x488/news/big/v/m/shavkat-rahmonov_1733492480660266478.jpg",
        },
        {
          description: "Fortnite is a battle royale game.",
          image: "https://kaztag.kz/upload/resize_cache/iblock/f64/881_500_2/1.jpg?173363672371421",
        },
        { description: "Description 6", image: require("@/assets/images/1.png") },
        { description: "Description 7", image: require("@/assets/images/img.png") },
        { description: "Description 8", image: require("@/assets/images/3.png") },
        { description: "Description 9", image: require("@/assets/images/2.png") },
        { description: "Description 10", image: require("@/assets/images/4.png") },
      ],
      currentIndex: 0,
      cardsPerPage: 6,
    };
  },
  computed: {
    visibleCards() {
      return this.allCards.slice(
          this.currentIndex,
          this.currentIndex + this.cardsPerPage
      );
    },
  },
  methods: {
    prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex -= this.cardsPerPage;
      }
    },
    nextSlide() {
      if (this.currentIndex + this.cardsPerPage < this.allCards.length) {
        this.currentIndex += this.cardsPerPage;
      }
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
          <left @click="prevSlide" />
          <right @click="nextSlide" />
        </div>
      </template>
      <template #content>
        <div class="carousel-container">
          <div class="carousel-wrapper">
            <div
                class="carousel-slide"
                v-for="(card, index) in visibleCards"
                :key="index"
            >
              <div class="card">
                <div>
                  <img :src="card.image" alt="Новость" />
                  <p class="truncate-text font-gilroy">{{ card.description }}</p>
                </div>
                <span>вчера 22:33</span>
              </div>
            </div>
          </div>
        </div>
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
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  margin: 0 auto;
  overflow: hidden;
}

.carousel-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
}

.carousel-slide {
  flex: 0 0 calc(33.333% - 5px);
  margin-bottom: 10px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.carousel-slide:hover {
  background-color: #f9fafb;
  transform: scale(0.95);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}
.card {
  padding: 5px;
  height: 23rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card img {
  width: 100%;
  border-radius: 8px;
  height: 13rem;
  object-fit: cover;
}

.card span {
  color: #CFD3DA;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 500;
}

.card p {
  color: #333333;
  font-weight: 500;
  line-height: 28px;
}

@media (max-width: 1024px) {
  .card {
    height: 25rem;
  }
}

@media (max-width: 768px) {

}
</style>
