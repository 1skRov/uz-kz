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
  data() {
    return {
      activeSection: null
    };
  },
  mounted() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.55
    };
    this.observer = new IntersectionObserver(this.handleIntersect, options);
    const sectionIds = ["doc1", "doc2",];
    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        this.observer.observe(el);
      }
    });
  },
  beforeDestroy() {
    this.observer.disconnect();
  },
  methods: {
    handleIntersect(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          this.activeSection = sectionId;
        }
      });
    }
  }
}
</script>

<template>
  <div>
    <doc-imp :translations="getTranslations" :isBackground="activeSection === 'doc1'"/>
    <div id="projects">
      <projects :title="getTranslations.projects" :title_side="getTranslations.projects_side"
                :isBackground="activeSection === 'doc2'"/>
    </div>
  </div>
</template>

<style scoped>

</style>