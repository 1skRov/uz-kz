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
      persons: [],
      currentPage: 0,
      itemsPerPage: 3,
    }
  },
  computed: {
    ...mapGetters(['currentLanguage', 'getTranslations']),
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
    },
  },
  mounted() {
    this.getPersons();
  },
  methods:{
    getPersons() {
      api.get(`/famous-persons/?lang_code=${this.currentLanguage}`)
          .then(response => {
            this.persons = response.data;
            const pageFromQuery = parseInt(this.$route.query.page);
            this.currentPage = isNaN(pageFromQuery) ? 0 : pageFromQuery;
          })
          .catch(error => {
            console.error(error);
          });
    },
    prevPage() {
      if (this.currentPage > 0) {
        this.currentPage--;
        this.updateRoute();
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages - 1) {
        this.currentPage++;
        this.updateRoute();
      }
    },
    updateRoute() {
      this.$router.push({ query: { ...this.$route.query, page: this.currentPage } });
    },
  }
}
</script>

<template>
  <div style="display: flex">
    <side-bar :title="getTranslations.popular_side || '{ popular_side }'"></side-bar>
    <div class="persons">
      <sections>
        <template #title>{{ getTranslations.popular_persons || '{ popular_persons }' }}</template>
        <template #title-button>
          <div class="btn">
            <div @click="prevPage"><left/></div>
            <div @click="nextPage"><right/></div>
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
                :btn_title="getTranslations.popular_person || '{ popular_person }'"
            />
          </div>
        </template>
        <template #btn>
          <div class="btn">
            <div @click="prevPage"><left/></div>
            <div @click="nextPage"><right/></div>
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