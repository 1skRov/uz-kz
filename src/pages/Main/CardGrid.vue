<script>
export default {
  name: "CardGrid",
  props: {
    cards: {
      type: Array,
      required: true
    }
  }
}
</script>

<template>
<div>
  <section class="hero-section">
    <div class="card-grid">
      <div class="card" v-for="card in cards" :key="card.id">
        <div
            class="card__background"
            :style="{ backgroundImage: `url(${card.image})` }"
        ></div>
        <div class="card__content">
          <p class="card__category font-gilroy">{{ card.category }}</p>
          <h3 class="card__heading">{{ card.heading }}</h3>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<style scoped>
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
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transform-origin: center;
  transform: scale(1);
  transition: transform 200ms linear;
  border-radius: 8px;
}

.card:hover .card__background {
  transform: scale(1.05);
  border-radius: 0;
}
.card:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 114, 171, 0.6);
  border-radius: var(--spacing-l);
  transform: scale(1);
  transform-origin: center;
  opacity: 0;
  mix-blend-mode: normal;
  transition: opacity 200ms linear, transform 200ms linear;
}

.card:hover:after {
  opacity: 1;
  transform: scale(1.05);
}

.card__content {
  left: 0;
  padding: var(--spacing-l);
  position: absolute;
  bottom: 0;
  opacity: 0;
}
.card:hover .card__content {
  opacity: 1;
  transition: opacity 200ms linear, transform 200ms linear;
}

.card__category {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: var(--spacing-s);
  line-height: 31px;
  color: #fff;
  mix-blend-mode: normal;
}

.card__heading {
  font-size: 14px;
  text-shadow: 2px 2px 20px rgba(0, 0, 0, 0.2);
  color: #fff !important;
  mix-blend-mode: normal;
}
</style>