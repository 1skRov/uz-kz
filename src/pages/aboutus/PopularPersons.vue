<script>
import Sections from "@/components/Sections.vue";
import More from "@/components/Buttons/more.vue";
import CardGrid from "@/pages/Main/CardGrid.vue";
import {mapGetters} from "vuex";
import api from "@/axios";

export default {
  name: "PopularPersons",
  components: {CardGrid, More, Sections},
  props:{
    title: {
      type: String,
      default: "{{ popular_persons }}"
    },
    btn_title: {
      type: String,
      default: "{{ learn_more }}"
    }
  },
  data() {
    return {
      cards: [],
    }
  },
  computed: {
    ...mapGetters(['currentLanguage']),
  },
  watch: {
    currentLanguage(newLang) {
      this.getCulture();
    },
  },
  mounted() {
    this.getCulture();
  },
  methods:{
    getCulture() {
      api.get(`/famous-persons/?lang_code=${this.currentLanguage}`)
          .then((response) => {
            this.cards = response.data;
          })
          .catch((error) => {
            console.error(error);
          });
    },
    goToFamousPersons(){
      this.$router.push('/famous-persons')
    }
  },
}
</script>

<template>
<div>
  <sections>
    <template #title>{{ title }}</template>
    <template #title-button>
      <more @click="goToFamousPersons" :title="btn_title"/>
    </template>
    <template #content>
     <CardGrid :cards="cards"></CardGrid>
    </template>
    <template #btn>
      <more :title="btn_title" @click="goToFamousPersons"/>
    </template>
  </sections>
</div>
</template>

<style scoped>
</style>