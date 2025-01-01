<script>
import SideBar from "@/components/SideBarText.vue";
import Sections from "@/components/Sections.vue";
import Left from "@/components/Buttons/left.vue";
import Right from "@/components/Buttons/right.vue";
import PopularItem from "@/pages/aboutus/PopularItem.vue";
import api from "@/axios";
import {mapGetters} from "vuex";
export default {
  name: "FamousPersonsPage",
  components: {PopularItem, SideBar, Left, Right, Sections},
  data(){
    return{
      translations: {},
      persons:[],
      currentPage: 0,
      itemsPerPage: 1,
    }
  },
  computed: {
    ...mapGetters(['currentLanguage']),
    paginatedPersons() {
      const start = this.currentPage * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.persons.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.persons.length / this.itemsPerPage);
    },
  },
  watch: {
    currentLanguage(newLang) {
      this.getPersons();
      this.getTranslations();
    },
  },
  mounted() {
    this.getPersons();
    this.getTranslations();
  },
  methods:{
    getTranslations() {
      api.get('/trans/')
          .then((response) => {
            const translations = response.data;
            const currentLang = this.currentLanguage;
            if (translations[currentLang]) {
              this.translations = translations[currentLang];
            } else {
              console.error(`Переводы для языка "${currentLang}" не найдены`);
            }
          })
          .catch((error) => {
            console.error("Ошибка при загрузке переводов:", error);
          });
    },
    getPersons() {
      api.get(`/famous-persons/?lang_code=${this.currentLanguage}`)
          .then(response => {
            this.persons = response.data;
            this.currentPage = parseInt(this.$route.query.page) || 0;
          })
          .catch(error => {
            console.error(error);
          });
    },
    prevPage() {
      if (this.currentPage > 0) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages - 1) {
        this.currentPage++;
      }
    },
  }
}
</script>

<template>
  <div style="display: flex">
    <side-bar :title="translations.popular_side || '{ popular_side }'"></side-bar>
    <div class="persons">
      <sections>
        <template #title>{{ translations.popular_person || '{ popular_person }' }}</template>
        <template #title-button>
          <div class="btn">
            <left @click="prevPage"/>
            <right @click="nextPage"/>
          </div>
        </template>
        <template #content>
          <div class="content">
            <popular-item
                v-for="person in paginatedPersons"
                :key="person.id"
                :id="person.id"
                :name="person.sur_name"
                :text="person.desc"
                :img="person.image"
                :position="person.position"
                :btn_title="translations.popular_person || '{ popular_person }'"
            />
          </div>
        </template>
        <template #btn>
          <div class="btn">
            <left @click="prevPage"/>
            <right  @click="nextPage"/>
          </div>
        </template>
      </sections>
    </div>
  </div>
</template>

<style scoped>
.btn {
  display: flex;
  gap: 1rem;
  align-items: center;
}
.persons {
  width: 65%;
  margin: 0 auto;
}
.content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
@media (max-width: 1024px) {
  .persons {
    width: 90%;
  }
}

@media (max-width: 768px) {

}
</style>