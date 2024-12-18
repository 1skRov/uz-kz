<script>
import Sections from "@/components/Sections.vue";
export default {
  name: "YouthOrganization",
  components: {Sections},
  data() {
    return {
      games: [
        {
          image: require("@/assets/images/3.png"),
          title: "Организация 'Текст'",
          description: "Единый портал Узбекистана...",
        },
        {
          image: require("@/assets/images/3.png"),
          title: "Другая организация",
          description: "Описание другой организации...",
        },
        {
          image: require("@/assets/images/3.png"),
          title: "Третья организация",
          description: "Описание третьей организации...",
        },
        {
          image: require("@/assets/images/3.png"),
          title: "Третья организация",
          description: "Описание третьей организации...",
        },
        {
          image: require("@/assets/images/3.png"),
          title: "Третья организация",
          description: "Описание третьей организации...",
        },
      ],
      expandedIndex: null,
    };
  },
  methods: {
    onMoreInfo(id) {
      console.log(`Подробнее о карточке с ID: ${id}`);
      // Добавьте логику перехода или отображения деталей
    },
    toggleExpand(index) {
      this.expandedIndex = this.expandedIndex === index ? null : index;
    },
    showMore(game) {
      alert(`More details about ${game.title}`);
    },
  },
  // async mounted() {
  //   // Simulating server response
  //   const response = await fetch("/api/games");
  //   this.games = await response.json();
  // },
}
</script>

<template>
  <div>
    <sections>
      <template #title>Организации</template>
      <template #content>
        <section class="image-grid">
          <!-- Отображаем все изображения из games -->
          <div
              v-for="(game, index) in games"
              :key="index"
              :class="['grid-item', { 'top-item': index < 2, 'bottom-item': index >= 2 }]"
          >
            <img :src="game.image" :alt="game.title" />
          </div>
        </section>
      </template>
    </sections>
  </div>
</template>

<style scoped>
.image-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Две колонки */
  grid-template-rows: auto auto; /* Две строки */
  gap: 16px; /* Отступы между элементами */
}

.grid-item {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
}

.grid-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Первые два элемента сверху */
.top-item {
  grid-column: span 1; /* Каждое изображение занимает одну колонку */
  height: 250px; /* Высота для верхних изображений */
}

/* Три изображения снизу */
.bottom-item {
  grid-column: span 1; /* Каждое изображение занимает одну колонку */
  height: 200px; /* Высота для нижних изображений */
}
</style>