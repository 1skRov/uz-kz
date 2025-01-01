<script>
import Sections from "@/components/Sections.vue";
import api from "@/axios";
import {mapGetters} from "vuex";

export default {
  name: "Important",
  components: {Sections},
  props:{
    title:{
      type: String,
      required: true,
      default: "{ important_documents }"
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
      api.get(`/important-doc/?lang_code=${this.currentLanguage}`)
          .then((response) => {
            if (Array.isArray(response.data)) {
              this.content = response.data[0];
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
    <template #title>{{ title }}</template>
    <template #content>
      <div v-html="content?.desc"></div>
    </template>
  </sections>
</div>
</template>

<style scoped>

</style>