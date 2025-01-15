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
    '$route.query.region_id': {
      handler(newRegionId) {
        this.rid = newRegionId;
        this.getPersons(newRegionId);
      },
      immediate: true,
    },
  },
  mounted() {
    const regionId = this.$route.query.region_id;
    this.getPersons(regionId);
  },
  methods: {
    getPersons(regionId) {
      if (regionId) {
        api.get(`/etno-center/?region_id=${regionId}`)
            .then(response => {
              this.info = response.data;
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
  {{ info }} - {{ rid }}
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