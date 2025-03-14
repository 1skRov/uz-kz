<script>
import Sections from "@/components/Sections.vue";
import WhoWeaAre from "@/pages/aboutus/WhoWeaAre.vue";
import OurHistory from "@/pages/aboutus/OurHistory.vue";
import CultureAndTraditions from "@/pages/aboutus/CultureAndTraditions.vue";
import PopularPersons from "@/pages/aboutus/PopularPersons.vue";
import YouthOrganization from "@/pages/aboutus/YouthOrganization.vue";
import EducationAndSport from "@/pages/aboutus/EducationAndSport.vue";
import Help from "@/pages/aboutus/Help.vue";
import api from "@/axios";
import { mapGetters } from "vuex";

export default {
  name: "AboutUs",
  components: {
    Help,
    EducationAndSport,
    YouthOrganization,
    PopularPersons,
    CultureAndTraditions,
    OurHistory,
    WhoWeaAre,
    Sections
  },
  data () {
    return {
      sections: [],
      currentSection: 0,
    }
  },
  computed: {
    ...mapGetters(["getTranslations"]),
    sections(){
      return [
        this.getTranslations.who_we_are,
        this.getTranslations.our_history,
        this.getTranslations.culture_traditions,
        this.getTranslations.popular_persons,
        this.getTranslations.youth_organizations,
        this.getTranslations.education,
        this.getTranslations.help,
      ]
    }
  },
  mounted() {
    const observer = new IntersectionObserver(this.handleIntersection, {
      threshold: 0.3,
    });
    const sectionElements = document.querySelectorAll(".section");
    sectionElements.forEach((section) => observer.observe(section));
  },
  methods: {
    handleIntersection(entries) {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id.split("-")[1];
          if (!isNaN(sectionId)) {
            this.currentSection = parseInt(sectionId);
          }
        }
      }
    },
  },
};
</script>

<template>
  <div class="main">
    <div
        style="width: 160px; height: 100%; border-right: 1px solid #EBEEF0; position: absolute; top: 0; z-index: 1000"
        class="hid"
    >
      <div style="position: sticky; top: 120px;">
        <ul>
          <li v-for="(section, index) in sections" :key="index" style="cursor: pointer">
            <div :class="['circle', { active: currentSection === index }]"></div>
          </li>
        </ul>
      </div>
    </div>
    <div class="text-box hid">{{ sections[currentSection] }}</div>
    <div style="width: 100%">
      <div id="section-0" class="section">
        <WhoWeaAre :title="getTranslations.who_we_are" />
      </div>
      <div id="section-1" class="section">
        <OurHistory :title="getTranslations.our_history" />
      </div>
      <div style="position: relative; width: 100%; background-color: #F7F8FA">
        <div style="position: absolute; bottom: 0; right: 0">
          <img src="@/assets/images/cult-bottom.png" alt="" />
        </div>
        <div style="position: absolute; top: 0; right: 0">
          <img src="@/assets/images/cult-top.png" alt="" />
        </div>
        <div id="section-2" class="section">
          <CultureAndTraditions :title="getTranslations.culture_traditions" />
        </div>
      </div>
      <div id="section-3" class="section">
        <PopularPersons :title="getTranslations.popular_persons" :btn_title="getTranslations.learn_more" />
      </div>
      <div id="section-4" class="section">
        <YouthOrganization :title="getTranslations.youth_organizations" :btn_title="getTranslations.more_detail" />
      </div>
      <div id="section-5" class="section">
        <EducationAndSport
            :data_ed="getTranslations.education"
            :data_sp="getTranslations.sport"
            :btn_title="getTranslations.more_detail"
        />
      </div>
      <div id="section-6" class="section" style="padding-bottom: 60px;">
        <Help :title="getTranslations.help" :btn_title="getTranslations.more_detail" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  position: relative;
  width: 100%;
  display: flex;
}
.circle {
  width: 25px;
  height: 25px;
  border: 1px solid #EBEEF0;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;
  margin-bottom: 48px;
  margin-left: auto;
  margin-right: auto;
}
.circle::before {
  content: '';
  width: 10px;
  height: 10px;
  background-color: #575F6C;
  border-radius: 50%;
}

.circle.active {
  border-color: rgba(0, 114, 171, 0.2);
  width: 30px;
  height: 30px;
}

.circle.active::before {
  border: 1px solid rgba(0, 114, 171, 0.25);
  background-color: #0072AB;
}
.text-box {
  background-color: #ffff;
  border: 1px solid #E0E3E8;
  border-radius: 8px;
  font-size: 16px;
  color: #575F6C;
  font-weight: 500;
  text-align: center;
  text-wrap: wrap;
  position: fixed;
  top:140px;
  left: 120px;
  padding: 12px 24px;
  z-index:1000
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.section {
  width: 65%;
  margin-left: auto;
  margin-right: auto;
}
@media (max-width: 1024px) {
  .section {
    width: 90%;
  }
  .hid {
    display: none;
  }
}

@media (max-width: 768px) {
  #section-1 {
    width: 100%;
  }
  #section-3 {
    width: 100%;
    margin-left: 20px;
  }
}
</style>