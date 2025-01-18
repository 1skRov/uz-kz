<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import Sections from "@/components/Sections.vue";
import api, { BASE_URL } from "@/axios";
import { mapGetters } from "vuex";
import Left from "@/components/Buttons/left.vue";
import Right from "@/components/Buttons/right.vue";

export default {
  name: "YouthOrganization",
  components: { Right, Left, Sections, Swiper, SwiperSlide },
  props: {
    title: {
      type: String,
      default: "{{ youth_organizations }}",
    },
    btn_title: {
      type: String,
      default: "{{ more_detail }}",
    },
  },
  data() {
    return {
      cards: [],
      BASE_URL,
      swiperRef: null,
      isTablet: window.innerWidth <= 1024,
    };
  },
  computed: {
    ...mapGetters(["currentLanguage"]),
  },
  watch: {
    currentLanguage(newLang) {
      this.getOrganization();
    },
  },
  mounted() {
    this.getOrganization();
    window.addEventListener("resize", this.updateIsTablet);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateIsTablet);
  },
  methods: {
    updateIsTablet() {
      this.isTablet = window.innerWidth <= 1024;
    },
    getOrganization() {
      api
          .get(`/youth-organizations/?lang_code=${this.currentLanguage}`)
          .then((response) => {
            this.cards = response.data;
          })
          .catch((error) => {
            console.error(error);
          });
    },
    onSwiper(swiper) {
      this.swiperInstance = swiper
    },
    slidePrev() {
      if (this.swiperInstance) {
        this.swiperInstance.slidePrev()
      }
    },
    slideNext() {
      if (this.swiperInstance) {
        this.swiperInstance.slideNext()
      }
    },
    goToDetails(newsId) {
      this.$router.push({ name: 'OrganizationDetails', params: { id: newsId } });
    },
  },
};
</script>
<template>
  <div>
    <sections>
      <template #title>{{ title }}</template>
      <template #content>
        <div class="cards-container">
          <div class="row">
            <div
                v-for="(card, index) in cards.slice(0, 2)"
                :key="index"
                class="card"
                @click="goToDetails(card.id)"
            >
              <img
                  :src="BASE_URL + card.image"
                  alt="card.title"
                  class="card-image"
              />
              <div class="card-overlay">
                <div class="inside">
                  <div class="card-title font-gilroy">{{ card.title }}</div>
                  <div class="card-description truncate-text" v-html="card.desc"></div>
                  <button class="card-button" @click="goToDetails(card.id)">{{ btn_title }}</button>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div
                v-for="(card, index) in cards.slice(2, 5)"
                :key="index"
                class="card"
                @click="goToDetails(card.id)"
            >
              <img
                  :src="BASE_URL + card.image"
                  alt="card.title"
                  class="card-image"
              />
              <div class="card-overlay">
                <div class="inside">
                  <div class="card-title font-gilroy">{{ card.title }}</div>
                  <div
                      class="card-description truncate-text"
                      v-html="card.desc"
                  ></div>
                  <button class="card-button" @click="$router.push({ name: 'OrganizationDetails', params: { id: card.id, card: card } })">{{ btn_title }}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <swiper
            @swiper="onSwiper"
            ref="swiperRef"
            :slides-per-view="1"
            :space-between="0"
            :loop="true"
            class="mobile-swiper"
            :autoplay="{
              delay: 2000,
              disableOnInteraction: true,
            }"
        >
          <swiper-slide
              v-for="(card, index) in cards"
              :key="index"
              class="card-slide"
          >
            <img
                :src="BASE_URL + card.image"
                alt="card.title"
                class="card-image"
            />
            <div class="mobile-card-content">
              <div class="card-title font-gilroy">{{ card.title }}</div>
              <div
                  class="card-description truncate-text"
                  v-html="card.desc"
              ></div>
              <button class="card-button" @click="$router.push({ name: 'OrganizationDetails', params: { id: card.id, card: card } })"><b>{{ btn_title }}</b></button>
            </div>
          </swiper-slide>
        </swiper>
      </template>
      <template #btn>
        <div style="display: flex; justify-content: center; margin-top: 1rem; gap: 10px">
          <div @click="slidePrev"><left /></div>
          <div  @click="slideNext"><right /></div>
        </div>
      </template>
    </sections>
  </div>
</template>

<style scoped>
.mobile-swiper {
  display: none;
}

.cards-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.row {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}

.row + .row {
  margin-top: 1rem;
}

.card {
  position: relative;
  width: 50%;
  height: 25rem;
  border-radius: 8px;
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:nth-child(3),
.card:nth-child(4),
.card:nth-child(5) {
  width: 50%;
}

.card:hover {
  transform: scale(1.015);
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
}

.card-image {
  width: 100%;
  height: 100%;
  display: block;
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 114, 171, 0.7);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: end;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.inside {
  padding: 2rem;
}

.card:hover .card-overlay {
  opacity: 1;
}

.card-title {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #FFFFFF;
}

.card-description {
  font-size: 0.9rem;
}

.card-button {
  background: #fff;
  color: black;
  border: none;
  border-radius: 6px;
  padding: 0.9rem 1.5rem;
  cursor: pointer;
  max-width: 12rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-weight: 500;
  margin-top: 10px;
}

.mobile-swiper {
  width: 100%;
  height: auto;
}

.card-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}


@media (max-width: 1024px) {
  .card {
    height: 20rem;
  }

  .card-overlay {
    opacity: 1;
    background: linear-gradient(to top, rgba(0, 114, 171, 0.7) 0%, rgba(0, 114, 171, 0) 100%);
  }

  .card-button {
    display: none;
  }

  .inside {
    padding: 0.5rem 1rem;
  }
}
.mobile-swiper {
  width: 100%;
  height: auto;
}

.card-slide {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.mobile-card-content {
  width: 100%;
}

.mobile-card-content .card-title {
  font-weight: bold;
  margin: 2rem 0 1rem;
  color: #333;
}

.mobile-card-content .card-description {
  font-size: 0.9rem;
  margin-bottom: 1rem;
  color: #555;
}

.mobile-card-content .card-button {
  display: flex;
  background: #0072AB;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  cursor: pointer;
  font-weight: 500;
  text-transform: uppercase;
}

@media (max-width: 768px) {
  .cards-container {
    display: none;
  }

  .mobile-swiper {
    display: block;
  }
}
</style>