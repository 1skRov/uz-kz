<script>
import Sections from "@/components/Sections.vue";
import api, {BASE_URL} from "@/axios";
import {mapGetters} from "vuex";
export default {
  name: "YouthOrganization",
  components: { Sections },
  props: {
    title: {
      type: String,
      required: true,
      default: "{{ youth_organizations }}"
    },
    btn_title: {
      type: String,
      default: "{{ more_detail }}"
    }
  },
  data() {
    return {
      cards: [],
      BASE_URL
    };
  },
  computed: {
    ...mapGetters(['currentLanguage']),
  },
  watch: {
    currentLanguage(newLang) {
      this.getOrganization();
    },
  },
  mounted() {
    this.getOrganization();
  },
  methods:{
    getOrganization() {
      api.get(`/youth-organizations/?lang_code=${this.currentLanguage}`)
          .then((response) => {
            this.cards = response.data;
          })
          .catch((error) => {
            console.error(error);
          });
    },
  }
};
</script>


<template>
  <div>
    <sections>
      <template #title>{{ title }}</template>
      <template #content>
        <div class="cards-container">
          <div class="row">
            <div v-for="(card, index) in cards.slice(0, 2)" :key="index" class="card">
              <img :src="BASE_URL + card.image" alt="card.title" class="card-image" style="width: 100%; height: 100%"/>
              <div class="card-overlay">
                <div style="padding: 2rem">
                  <div class="card-title font-gilroy">{{ card.title }}</div>
                  <div class="card-description" v-html="card.desc"></div>
                  <button class="card-button">{{ btn_title }}</button>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div v-for="(card, index) in cards.slice(2, 5)" :key="index" class="card">
              <img :src="BASE_URL + card.image" alt="card.title" class="card-image" style="width: 100%; height: 100%"/>
              <div class="card-overlay">
                <div style="padding: 2rem;">
                  <div class="card-title font-gilroy">{{ card.title }}</div>
                  <div class="card-description truncate-text" v-html="card.desc"></div>
                  <button class="card-button">{{ btn_title }}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </sections>
  </div>
</template>

<style scoped>
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
  height: auto;
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

.card:hover .card-overlay {
  opacity: 1;
}

.card-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #FFFFFF;
}

.card-description {
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.card-button {
  background: #fff;
  color: black;
  border: none;
  border-radius: 6px;
  padding: 0.9rem 1.5rem;
  cursor: pointer;
  max-width: 12rem;
  font-weight: 500;
  text-transform: uppercase;
}

</style>