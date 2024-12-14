<script>
import Sections from "@/components/Sections.vue";
import More from "@/components/Buttons/more.vue";

export default {
  name: "PopularPersons",
  components: {More, Sections},
  data() {
    return {
      title: "Известные личности",
      cards: [
        {
          id: 1,
          category: "Category 1",
          heading: "Example Card Heading 1",
          image: "https://images.unsplash.com/photo-1557177324-56c542165309?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        },
        {
          id: 2,
          category: "Category 2",
          heading: "Example Card Heading 2",
          image: "https://images.unsplash.com/photo-1557187666-4fd70cf76254?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        },
        {
          id: 3,
          category: "Category 3",
          heading: "Example Card Heading 3",
          image: "https://images.unsplash.com/photo-1556680262-9990363a3e6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        },
        {
          id: 4,
          category: "Category 4",
          heading: "Example Card Heading 4",
          image: "https://images.unsplash.com/photo-1557004396-66e4174d7bf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        },
      ],
    }
  }
}
</script>

<template>
<div>
  <sections>
    <template #title>{{title}}</template>
    <template #title-button>
      <more/>
    </template>
    <template #content>
      <section class="hero-section">
        <div class="card-grid">
          <div class="card" v-for="card in cards" :key="card.id">
            <div
                class="card__background"
                :style="{ backgroundImage: `url(${card.image})` }"
            ></div>
            <div class="card__content">
              <p class="card__category">{{ card.category }}</p>
              <h3 class="card__heading">{{ card.heading }}</h3>
            </div>
          </div>
        </div>
      </section>
    </template>
  </sections>
</div>
</template>

<style scoped>
:root {
  --background-dark: #2d3548;
  --text-light: rgba(255, 255, 255, 0.6);
  --text-lighter: rgba(255, 255, 255, 0.9);
  --spacing-s: 8px;
  --spacing-m: 16px;
  --spacing-l: 24px;
  --spacing-xl: 32px;
  --spacing-xxl: 64px;
  --width-container: 1200px;
}
.hero-section {
  align-items: flex-start;
  display: flex;
  min-height: 100%;
  justify-content: center;
  padding: var(--spacing-xxl) var(--spacing-l);
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: var(--spacing-l);
  grid-row-gap: var(--spacing-l);
  max-width: var(--width-container);
  width: 100%;
  gap: 20px;
}

@media (min-width: 540px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 960px) {
  .card-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.card {
  list-style: none;
  position: relative;
}

.card:before {
  content: "";
  display: block;
  padding-bottom: 150%;
  width: 100%;
}

.card__background {
  background-size: cover;
  background-position: center;
  border-radius: var(--spacing-l);
  bottom: 0;
  filter: brightness(0.75) saturate(1.2) contrast(0.85);
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transform-origin: center;
  transform: scale(1);
  transition: filter 200ms linear, transform 200ms linear;
}

.card:hover .card__background {
  transform: scale(1.05);
  filter:  brightness(0.5) saturate(0) contrast(1.2) blur(5px);
}

.card__content {
  left: 0;
  padding: var(--spacing-l);
  position: absolute;
  top: 0;
}

.card__category {
  color: var(--text-light);
  font-size: 0.9rem;
  margin-bottom: var(--spacing-s);
  text-transform: uppercase;
}

.card__heading {
  color: var(--text-lighter);
  font-size: 1.9rem;
  text-shadow: 2px 2px 20px rgba(0, 0, 0, 0.2);
  line-height: 1.4;
}
</style>