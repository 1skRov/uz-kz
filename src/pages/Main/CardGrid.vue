<script>
  import { BASE_URL } from '@/axios';
  import { Swiper, SwiperSlide } from 'swiper/vue';

  export default {
    name: 'CardGrid',
    components: {
      Swiper,
      SwiperSlide,
    },
    props: {
      cards: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        BASE_URL,
        isMobile: false,
      };
    },
    mounted() {
      this.isMobile = window.innerWidth < 540;
      window.addEventListener('resize', this.handleResize);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.handleResize);
    },
    methods: {
      handleResize() {
        this.isMobile = window.innerWidth < 540;
      },
      openDetails(id) {
        this.$router.push({
          name: 'FamousPersonDetails',
          params: { id },
        });
      },
    },
  };
</script>

<template>
  <div class="hero-section">
    <Swiper
      v-if="isMobile"
      :slides-per-view="1.5"
      :space-between="30"
      class="mobile-swiper"
    >
      <SwiperSlide
        v-for="(card, index) in cards"
        :key="card.id"
        @click="openDetails(card.id)"
      >
        <div
          class="swiper-card__background"
          :style="{ backgroundImage: `url(${BASE_URL + card.image})` }"
        >
          <div class="swiper-card__overlay">
            <div class="swiper-card__content">
              <div class="swiper-card__category font-gilroy">{{ card.sur_name }}</div>
              <div class="swiper-card__heading">{{ card.position }}</div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>

    <div class="card-grid" v-else>
      <div
        class="card"
        v-for="(card, index) in cards"
        :key="card.id"
        @click="openDetails(card.id)"
      >
        <div
          class="card__background"
          :style="{ backgroundImage: `url(${BASE_URL + card.image})` }"
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
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .card:hover {
    transform: scale(1.015);
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
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
      background: linear-gradient(to top, rgba(0, 114, 171, 0.7) 0%, rgba(0, 114, 171, 0) 100%);
      padding: 10px;
    }
  }

  @media (max-width: 539px) {
    .card:nth-child(n + 3) {
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

  .mobile-swiper {
    width: 100%;
  }

  .swiper-card__background {
    width: 100%;
    padding-bottom: 150%;
    background-size: cover;
    background-position: center;
    position: relative;
    border-radius: 8px;
    overflow: hidden;
  }

  .swiper-card__overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(
      to top,
      rgba(0, 114, 171, 0.9) 0%,
      rgba(0, 114, 171, 0) 100%
    );
    padding: 15px;
    box-sizing: border-box;
  }

  .swiper-card__content {
    width: 100%;
  }

  .swiper-card__category {
    font-size: 1.25rem;
    margin-bottom: 5px;
    color: #fff;
    font-weight: 500;
  }

  .swiper-card__heading {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.7);
    font-weight: 500;
  }
</style>
