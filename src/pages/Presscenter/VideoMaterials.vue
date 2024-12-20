<script>
import Sections from "@/components/Sections.vue";
import Right from "@/components/Buttons/right.vue";
import Left from "@/components/Buttons/left.vue";

export default {
  name: "VideoMaterials",
  components: {Sections, Right, Left},
  data() {
    return {
      title: "Видео материалы",
      allCards: [
        {
          description: "Dota 2 is a muLorem ipsum dolor sit amet, consectetur adipisLorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, placeat?icing elit. Enim, placeat?ltiplayer online battle arena.",
          image: "https://www.gazeta.uz/media/img/2022/01/ouPaAp16433889116473_l.jpg",
        },
        {
          description: "The Witcher 3 is a roLorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, plaLorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, placeat?ceat?le-playing game.",
          image: require("@/assets/images/img.png"),
        },
        {
          description: "RDR 2 is an action-adventure Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, plaLorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, placeat?ceat?game.",
          image: "https://www.gazeta.uz/media/img/2017/04/V8lBRJ14912123189853_b.jpg",
        },
        {
          description: "PUBG Mobile is a battle royaleLorem ipsum dolor sit amet, consectetur adipisicing elit. Enim,Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, placeat? placeat? game.",
          image: "https://img.championat.com/s/732x488/news/big/v/m/shavkat-rahmonov_1733492480660266478.jpg",
        },
        {
          description: "Fortnite is a battle royaleLorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, plaLorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, placeat?ceat? game.",
          image: "https://kaztag.kz/upload/resize_cache/iblock/f64/881_500_2/1.jpg?173363672371421",
        },
        { description: "Description 6", image: require("@/assets/images/1.png") },
        { description: "Description 7", image: require("@/assets/images/img.png") },
      ],
      currentIndex: 0,
      cardsPerPage: 3,
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
}
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
        <div class="carousel-wrapper">
            <div
                class="carousel-slide"
                v-for="(card, index) in visibleCards"
                :key="index"
            >
              <div class="card">
                <div class="image-container">
                  <img :src="card.image" alt="Новость" />
                  <div class="overlay">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M20 16L32 24L20 32V16Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                </div>
                <p class="truncate-text font-gilroy">{{ card.description }}</p>
                <span>вчера 22:33</span>
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
.carousel-wrapper {
  display: flex;
  transition: transform 0.5s ease;
}

.carousel-slide {
  flex: 0 0 calc(33.333% - 10px);
  margin-right: 10px;
}

.card {
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 23rem;
}

/*.card:hover {
  transform: scale(0.98);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}*/

.image-container {
  position: relative;
}

.image-container img {
  width: 100%;
  height: 13rem;
  object-fit: cover;
  border-radius: 8px;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 13rem;
  background-color: rgba(0, 114, 171, 0.9);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.image-container:hover .overlay {
  opacity: 1;
}
.card span {
  font-size: 16px;
  color: #CFD3DA;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 500;
}
.card p {
  font-size: 16px;
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