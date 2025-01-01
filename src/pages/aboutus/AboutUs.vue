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
    Sections},
  data () {
    return {
      sections: [],
      currentSection: 0,
      translate: {},
    }
  },
  computed: {
    ...mapGetters(["currentLanguage"]),
  },
  watch: {
    currentLanguage(newLang) {
      this.getAboutUsTranslate();
    },
  },
  mounted() {
    this.getAboutUsTranslate();
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
    getAboutUsTranslate() {
      api
          .get("/trans/")
          .then((response) => {
            const translations = response.data;
            const currentLang = this.currentLanguage;
            if (translations[currentLang]) {
              this.translate = translations[currentLang];
              this.populateSections();
            } else {
              console.error(`Переводы для языка "${currentLang}" не найдены`);
            }
          })
          .catch((error) => {
            console.error("Ошибка при загрузке переводов:", error);
          });
    },
    populateSections() {
      this.sections = [
        this.translate.who_we_are,
        this.translate.our_history,
        this.translate.culture_traditions,
        this.translate.popular_persons,
        this.translate.youth_organizations,
        this.translate.education,
        this.translate.help,
      ];
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
        <WhoWeaAre :title="translate.who_we_are" />
      </div>
      <div id="section-1" class="section">
        <OurHistory :title="translate.our_history" />
      </div>
      <div style="position: relative; width: 100%; background-color: #F7F8FA">
        <div style="position: absolute; bottom: 0; right: 0">
          <img src="@/assets/images/cult-bottom.png" alt="" />
        </div>
        <div style="position: absolute; top: 0; right: 0">
          <img src="@/assets/images/cult-top.png" alt="" />
        </div>
        <div id="section-2" class="section">
          <CultureAndTraditions :title="translate.culture_traditions" />
        </div>
      </div>
      <div id="section-3" class="section">
        <PopularPersons :title="translate.popular_persons" :btn_title="translate.learn_more" />
      </div>
      <div id="section-4" class="section">
        <YouthOrganization :title="translate.youth_organizations" :btn_title="translate.more_detail" />
      </div>
      <div id="section-5" class="section">
        <EducationAndSport
            :data_ed="translate.education"
            :data_sp="translate.sport"
            :btn_title="translate.more_detail"
        />
      </div>
      <div id="section-6" class="section" style="padding-bottom: 60px;">
        <Help :title="translate.help" :btn_title="translate.more_detail" />
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
}
</style>