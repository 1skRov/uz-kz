<script>
import PopularItem from "@/pages/aboutus/PopularItem.vue";
import api from "@/axios";
import {mapGetters} from "vuex";

export default {
  name: "Guide",
  components: {PopularItem},
  data() {
    return {
      persons: [],
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
        api.get(`/etno-center-manager/?region_code=${regionCode}`)
            .then(response => {
              this.persons = response.data;
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
  <div style="display: flex; flex-direction: column; gap: 1rem">
    <popular-item
        v-for="person in persons"
        :key="person.id"
        :id="person.id"
        :name="person.full_name"
        :text="person.desc"
        :img="person.image"
        :position="person.position"
        route_name="ManagerDetail"
    />
  </div>
</template>

<style scoped>
</style>