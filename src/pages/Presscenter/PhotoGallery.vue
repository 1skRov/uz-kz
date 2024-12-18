<script>
import Sections from "@/components/Sections.vue";
import Right from "@/components/Buttons/right.vue";
import Left from "@/components/Buttons/left.vue";

export default {
  name: "PhotoGallery",
  components: { Left, Right, Sections },
  data() {
    return {
      title: "Фотогалерея",
      allCards: [
        { description: "Dota 2", image: "https://www.gazeta.uz/media/img/2022/01/ouPaAp16433889116473_l.jpg" },
        { description: "The Witcher 3", image: require("@/assets/images/img.png") },
        { description: "RDR 2", image: "https://www.gazeta.uz/media/img/2017/04/V8lBRJ14912123189853_b.jpg" },
        { description: "PUBG Mobile", image: "https://img.championat.com/s/732x488/news/big/v/m/shavkat-rahmonov_1733492480660266478.jpg" },
        { description: "Fortnite", image: "https://kaztag.kz/upload/resize_cache/iblock/f64/881_500_2/1.jpg" },
        { description: "Fortnite", image: "https://kaztag.kz/upload/resize_cache/iblock/f64/881_500_2/1.jpg" },
        { description: "Fortnite", image: "https://kaztag.kz/upload/resize_cache/iblock/f64/881_500_2/1.jpg" },
        { description: "Fortnite", image: "https://kaztag.kz/upload/resize_cache/iblock/f64/881_500_2/1.jpg" },
        { description: "Fortnite", image: "https://kaztag.kz/upload/resize_cache/iblock/f64/881_500_2/1.jpg" },
        { description: "Fortnite", image: "https://kaztag.kz/upload/resize_cache/iblock/f64/881_500_2/1.jpg" },
      ],
      currentIndex: 0,
      cardsPerPage: 6,
      showModal: false,
      modalImage: "",
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
    openImage(image) {
      this.modalImage = image;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.modalImage = "";
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
        <div class="carousel-wrapper">
          <div
              class="carousel-slide"
              v-for="(card, index) in visibleCards"
              :key="index"
          >
            <div class="card" @click="openImage(card.image)">
              <img :src="card.image" alt="Новость" />
              <div class="overlay">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 38C30.8366 38 38 30.8366 38 22C38 13.1634 30.8366 6 22 6C13.1634 6 6 13.1634 6 22C6 30.8366 13.1634 38 22 38Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M41.9998 42L33.2998 33.3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <!-- Модальное окно -->
        <div v-if="showModal" class="modal" @click.self="closeModal">
          <div class="modal-content">
            <button class="close-btn" @click="closeModal">&times;</button>
            <img :src="modalImage" alt="Увеличенное фото" />
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
/*.carousel-slide:hover {
  background-color: #f9fafb;
  transform: scale(0.95);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
} */
.card {
  position: relative;
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

.card:hover .overlay {
  opacity: 1;
}

.card img {
  width: 100%;
  border-radius: 8px;
  height: 13rem;
  object-fit: cover;
}

/* Модальное окно */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  position: relative;
}

.modal-content img {
  max-width: 90%;
  max-height: 90%;
  border-radius: 8px;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 30px;
  color: white;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
}
</style>
