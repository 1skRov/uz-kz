<script>
import PopularItem from "@/pages/aboutus/PopularItem.vue";
import api from "@/axios";
import {mapGetters} from "vuex";

export default {
  name: "Guide",
  components: {PopularItem},
  data(){
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
  },
  mounted() {
    this.getPersons();
  },
  methods: {
    getPersons() {
      api.get(`/etno-center-manager/?lang_code=${this.currentLanguage}`)
          .then(response => {
            this.persons = response.data;
          })
          .catch(error => {
            console.error(error);
          });
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
        :name="person.first_name"
        :text="person.desc"
        :img="person.image"
        :position="person.position"
    />
  </div>
</template>

<style scoped>
</style>