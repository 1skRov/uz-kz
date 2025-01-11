<script>
import Sections from "@/components/Sections.vue";
import SideBar from "@/components/SideBarText.vue";
import {mapGetters} from "vuex";
import api, {getTranslations, BASE_URL} from "@/axios";

export default {
  name: "Education",
  components: {SideBar, Sections},
  props:{
    id: {
      type: String,
      required: true,
    },
  },
  data(){
    return {
      trans: {},
      card: [],
      BASE_URL,
      cardItem:{},
    }
  },
  computed: {
    ...mapGetters(['currentLanguage']),
  },
  watch: {
    currentLanguage(newLang) {
      this.getOrganization();
    },
  },
  async mounted() {
    this.trans = await getTranslations(this.currentLanguage);
    this.getOrganization();
  },
  methods: {
    getOrganization() {
      api
          .get(`/youth-organizations/?lang_code=${this.currentLanguage}`)
          .then((response) => {
            // this.card = response.data.find(obj => obj.id === this.id) || {};
            const data = response.data;
            if (Array.isArray(data) && data.length > 0) {
              this.card = data;
              const cardItem = this.card.find((item) => item.id === Number(this.id));
              if (cardItem) {
                this.cardItem = cardItem;
              }
            } else {
              this.card = [];
            }
          })
          .catch((error) => {
            console.error(error);
          });
    },
  }
}
</script>

<template>
  <div class="main">
    <side-bar :title="trans.regions || '{ regions }'"/>
    <div class="main__content" v-if="cardItem">
      <div class="main__image">
        <img :src="BASE_URL + cardItem.image" :alt="BASE_URL + cardItem.image" style="width: 100%; height: 100%">
      </div>
      <div class="main__text">
        <div class="title font-gilroy">{{ cardItem.title }}</div>
        <div class="text" v-html="cardItem.desc"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
}

.main__content {
  margin: 0 auto;
  width: 65%;
  padding: 4rem 0;
}

.main__image {
  width: 100%;
  height: 40rem;
  border-radius: 8px;
  overflow: hidden;
  max-height: 40rem;
}

.main__text {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
  height: 100%;
}

.title {
  font-size: 40px;
  font-weight: 500;
}

.text {
  line-height: 32px;
}
</style>