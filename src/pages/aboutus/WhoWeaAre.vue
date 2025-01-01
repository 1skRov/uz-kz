<script>
import Sections from "@/components/Sections.vue";
import api from "@/axios";
import {mapGetters} from "vuex";

export default {
  name: "WhoWeaAre",
  components: {Sections},
  props:{
    title: {
      type: String,
      required: true,
      default: "{{ who_we_are }}"
    }
  },
  data() {
    return {
      content: null,

    }
  },
  computed: {
    ...mapGetters(['currentLanguage']),
  },
  watch: {
    currentLanguage(newLang) {
      this.getData();
    },
  },
  mounted() {
    this.getData();
  },
  methods:{
    getData() {
      api.get(`/who-are-we/?lang_code=${this.currentLanguage}`)
          .then((response) => {
            const arr = response.data;
            this.content = arr[0].desc;
          })
          .catch((error) => {
            console.error(error);
          });
    },
  }
}
</script>

<template>
  <div>
    <sections>
      <template #title>{{ title }}</template>
      <template #content>
        <div v-html="content"></div>
      </template>
    </sections>
  </div>
</template>

<style scoped>
</style>