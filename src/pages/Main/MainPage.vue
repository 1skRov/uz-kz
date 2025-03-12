<script>
import {mapGetters} from 'vuex';
import Section2 from "@/pages/Main/section2.vue";
import Section3 from "@/pages/Main/Section3.vue";
import Section6 from "@/pages/Main/Section6.vue";
import Section4 from "@/pages/Main/Section4.vue";
import Section5 from "@/pages/Main/Section5.vue";
import Section1 from "@/pages/Main/section1.vue";

export default {
  name: "MainPage",
  components: {Section1, Section5, Section4, Section6, Section2, Section3},
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
    const sectionIds = ["section1", "section2", "section3", "section4", "section5", "section6"];
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
  <div class="main">
    <div class="sections">
      <section1 :title="getTranslations.main_title" :btn_title="getTranslations.join_button"
                :isBackground="activeSection === 'section1'"/>
      <section2 :title="getTranslations.about_us" :btn_title="getTranslations.more_detail"
                :isBackground="activeSection === 'section2'"/>
      <section3 :title="getTranslations.culture_traditions" :btn_title="getTranslations.learn_more"
                :isBackground="activeSection === 'section3'"/>
      <section4 :title="getTranslations.popular_persons" :btn_title="getTranslations.learn_more"
                :isBackground="activeSection === 'section4'"/>
      <section5 :title="getTranslations.ethno_center" :btn_title="getTranslations.learn_more"
                :isBackground="activeSection === 'section5'"/>
      <section6 :title="getTranslations.partners" :isBackground="activeSection === 'section6'"/>
    </div>
  </div>
</template>

<style scoped>
.main {
  width: 100%;
}
</style>