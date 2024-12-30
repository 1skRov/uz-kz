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
  <div class="hero-section">
    <div class="card-grid">
      <div class="card" v-for="(card, index) in cards" :key="card.id">
        <div
            class="card__background"
            :style="{ backgroundImage: `url(${card.image})` }"
        ></div>
        <div class="card__overlay">
          <div class="card__content">
            <div class="card__category font-gilroy">{{card.sur_name}}</div>
            <div class="card__heading">{{ card.position }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-section {
  display: flex;
  justify-content: center;
}

.card-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  width: 100%;
}

@media (min-width: 540px) and (max-width: 959px) {
  .card-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (min-width: 960px) {
  .card-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.card {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
}

.card__background {
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 0;
  padding-bottom: 150%;
}

.card__overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 114, 171, 0.9);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  display: flex;
  align-items: flex-end;
  border-radius: 8px;
  padding: 20px;
  box-sizing: border-box;
}

@media (min-width: 960px) {
  .card:hover .card__overlay {
    opacity: 1;
    visibility: visible;
  }
}

@media (max-width: 959px) {
  .card__overlay {
    opacity: 1 !important;
    visibility: visible !important;
    background: rgba(0, 114, 171, 0.5);
    padding: 10px;
  }
}

@media (max-width: 539px) {
  .card:nth-child(n+3) {
    display: none;
  }
}

.card__content {
  width: 100%;
}

.card__category {
  font-size: 1.25rem;
  margin-bottom: 5px;
  color: #fff;
  font-weight: 500;
}

.card__heading {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
}
</style>
