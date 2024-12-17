<script>
import Section2 from "@/pages/Main/section2.vue";
import Section3 from "@/pages/Main/Section3.vue";
import Section6 from "@/pages/Main/Section6.vue";
import Section4 from "@/pages/Main/Section4.vue";
import Section5 from "@/pages/Main/Section5.vue";
import Section1 from "@/pages/Main/section1.vue";
import api from "@/axios";

export default {
  name: "MainPage",
  components: {Section1, Section5, Section4, Section6, Section2, Section3},
  data() {
    return {
      section1: {},
      section2: {},
      section3: {},
      section4: {},
      section5: {},
      section6: {},
    }
  },
  mounted() {
    // this.gatData();
  },
  methods:{
    gatData(){
      api.get('/informations/', {
        headers: {
          'ngrok-skip-browser-warning': 'true'
        }
      })
          .then(response => {
            const groupedData = response.data.reduce((acc, item) => {
              if (!acc[item.category_id]) {
                acc[item.category_id] = [];
              }
              acc[item.category_id].push(item);
              return acc;
            }, {});

            this.section1 = groupedData[2] ? groupedData[2][0] : {};
            this.section2 = groupedData[3] ? groupedData[3][0] : {};
            this.section3 = groupedData[4] ? groupedData[4][0] : {};
            this.section4 = groupedData[5] ? groupedData[5] : [];
            this.section5 = groupedData[6] ? groupedData[6][0] : {};
            this.section6 = groupedData[9] ? groupedData[9][0] : {};
            console.log("s1--->", this.section1);
          })
          .catch(error => {
              console.error("Request setup error:", error);
          })
    }
  },
}
</script>

<template>
  <div class="main">
    <div class="sections">
      <section1/>
      <section2/>
      <section3/>
      <section4/>
      <section5/>
      <section6/>
    </div>
  </div>
</template>

<style scoped>
.main {
  width:100%;
}
</style>