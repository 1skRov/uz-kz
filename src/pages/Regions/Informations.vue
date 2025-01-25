<script>
import {mapGetters} from "vuex";
import api, {BASE_URL} from "@/axios";

export default {
  name: "Informations",
  data() {
    return {
      info: {},
      rid: null,
      BASE_URL,
    }
  },
  computed: {
    ...mapGetters(['currentLanguage']),
  },
  watch: {
    currentLanguage(newLang) {
      this.getPersons();
    },
    '$route.query.region_code': {
      handler(newRegionCode) {
        this.rid = newRegionCode;
        this.getPersons(newRegionCode);
      },
      immediate: true,
    },
  },
  mounted() {
    const regionCode = this.$route.query.region_code;
    this.getPersons(regionCode);
  },
  methods: {
    getPersons(regionCode) {
      if (regionCode) {
        api.get(`/etno-center-info/?region_code=${regionCode}&lang_code=${this.currentLanguage}`)
            .then(response => {
              this.info = response.data[0];
            })
            .catch(error => {
              console.error(error);
            });
      }
    },
  }
}
</script>

<template>
<div>
  <div style="width: 100%; height: auto;">
    <img :src="BASE_URL + info.image" :alt="BASE_URL + info.image">
  </div>
  <div>
    <div class="info" v-html="info.info"></div>
  </div>
</div>
</template>

<style scoped>
img {
  width: 100%;
  height: auto;
  max-height: 70vh;
  object-fit: cover;
  border-radius: 8px;
}
.info {
  line-height: 40px;
}

@media (max-width: 1024px) {
  .info {
    line-height: 28px;
  }
  img {
    max-height: 35vh;
  }
}
</style>