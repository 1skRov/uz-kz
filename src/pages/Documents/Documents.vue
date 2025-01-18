<script>
import Important from "@/pages/Documents/Important.vue";
import Articles from "@/pages/Documents/Articles.vue";
import DocImp from "@/pages/Documents/DocImp.vue";
import Projects from "@/pages/Documents/Projects.vue";
import {mapGetters} from "vuex";
import api from "@/axios";

export default {
name: "Documents",
  components: {Projects, DocImp, Articles, Important},
  computed: {
    ...mapGetters(['getTranslations']),
  },
}
</script>

<template>
  <div>
    <doc-imp :translations="getTranslations"/>
    <div id="projects">
      <projects :title="getTranslations.projects" :title_side="getTranslations.projects_side"/>
    </div>
  </div>
</template>

<style scoped>

</style>