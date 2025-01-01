<script>
import Sections from "@/components/Sections.vue";
import DocumentItem from "@/pages/Documents/DocumentItem.vue";
import {mapGetters} from "vuex";
import api from "@/axios";

export default {
  name: "Articles",
  components: {DocumentItem, Sections},
  props:{
    title: {
      type: String,
      default: "{ charters }"
    },
  },
  data(){
    return{
      content: [],
    }
  },
  computed: {
    ...mapGetters(['currentLanguage']),
  },
  watch: {
    currentLanguage(newLang) {
      this.getImportant();
    },
  },
  mounted() {
    this.getImportant();
  },
  methods:{
    getImportant() {
      api.get(`/statutes/?lang_code=${this.currentLanguage}`)
          .then((response) => {
            if (Array.isArray(response.data)) {
              this.content = response.data;
            }
          })
          .catch((error) => {
            console.error(error);
          });
    },
  },
}
</script>

<template>
<div>
  <sections>
    <template #title>{{title}}</template>
    <template #content>
      <div style="display: flex; flex-direction: column; gap: 1rem">
        <document-item v-for="c in content" :key="c.id" :title="c.title" :docs="c.file"/>
      </div>
    </template>
  </sections>
</div>
</template>

<style scoped>

</style>