<script>
import { slugify } from "@/utils/slugify";
import { BASE_URL } from "@/axios";

export default {
  name: "CardGrid",
  props: {
    cards: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      BASE_URL,
    };
  },
  methods: {
    openDetails(n) {
      const slug = slugify(n.sur_name);
      this.$router.push({
        name: "FamousPersonDetails",
        params: { id: n.id, slug: slug },
      });
    },
  },
};
</script>

<template>
  <div class="hero-section">
    <div class="cards">
      <div
        class="card"
        v-for="card in cards"
        :key="card.id"
        @click="openDetails(card)"
      >
        <div
          class="card__background"
          :style="
            card.image
              ? { backgroundImage: `url(${BASE_URL + card.image})` }
              : {}
          "
        ></div>

        <div class="card__overlay">
          <div class="card__content">
            <div class="card__category font-gilroy">{{ card.sur_name }}</div>
            <div class="card__heading truncate-text">{{ card.position }}</div>
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
  width: 100%;
}

.cards {
  width: 100%;
  display: flex;
  gap: 24px;
  overflow-x: auto;
  box-sizing: border-box;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
}

.cards::-webkit-scrollbar {
  display: none;
}

.card {
  flex: 0 0 70%;
  scroll-snap-align: start;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  transition: box-shadow 0.25s ease;
}

.card__background {
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 0;
  padding-bottom: 150%;
  transform: scale(1);
  transition: transform 0.35s ease;
}

.card__overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: flex-end;
  padding: 16px;
  box-sizing: border-box;
  border-radius: 8px;
  opacity: 1;
  visibility: visible;

  background: linear-gradient(
    to top,
    rgba(0, 114, 171, 0.95) 0%,
    rgba(0, 114, 171, 0.72) 36%,
    rgba(0, 114, 171, 0) 70%
  );

  transition:
    opacity 0.25s ease,
    visibility 0.25s ease;
}

.card__overlay::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 114, 171, 0.78);
  opacity: 0;
  transition: opacity 0.25s ease;
}

.card__content {
  width: 100%;
  position: relative;
  z-index: 1;
}

.card__category {
  font-size: 18px;
  margin-bottom: 8px;
  color: #fff;
  font-weight: 500;
  line-height: 130%;
}

.card__heading {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
  line-height: 150%;
}

@media (min-width: 540px) {
  .cards {
    overflow: visible;
    padding: 0;
    display: grid;
    gap: 20px;
    scroll-snap-type: none;
  }
}

@media (min-width: 540px) and (max-width: 959px) {
  .cards {
    grid-template-columns: repeat(4, 1fr);
  }

  .card__category {
    font-size: 20px;
    margin-bottom: 12px;
  }

  .card__heading {
    font-size: 14px;
  }
}

@media (min-width: 960px) {
  .cards {
    grid-template-columns: repeat(4, 1fr);
  }

  .card__overlay {
    opacity: 0;
    visibility: hidden;
  }

  .card__category {
    font-size: 24px;
  }

  .card__heading {
    font-size: 14px;
  }

  @media (hover: hover) and (pointer: fine) {
    .card:hover {
      border-color: rgba(0, 114, 171, 0.5);
    }

    .card:hover .card__overlay {
      opacity: 1;
      visibility: visible;
    }

    .card:hover .card__overlay::before {
      opacity: 1;
    }

    .card:hover .card__background {
      transform: scale(1.03);
    }
  }
}
</style>
