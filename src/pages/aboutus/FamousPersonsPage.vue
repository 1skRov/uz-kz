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
      title: "Известные личности",
      persons_plh: [
        {
          id: 1,
          name: "Иван Иванов",
          description: "Известный ученый, внесший большой вклад в развитие физики.внесший большой вклад в развитие физикивнесший большой вклад в развитие физикивнесший большой вклад в развитие физикивнесший большой вклад в развитие физикивнесший большой вклад в развитие физикивнесший большой вклад в развитие физики",
          image: "@/assets/images/ivan.jpg"
        },
        {
          id: 2,
          name: "Мария Петрова",
          description: "Выдающаяся художница, известная своими абстрактными картинами.",
          image: "@/assets/images/maria.jpg"
        },
        {
          id: 3,
          name: "Алексей Сидоров",
          description: "Талантливый музыкант, который получил мировое признание.",
          image: "@/assets/images/alexey.jpg"
        },
        {
          id: 4,
          name: "Ольга Смирнова",
          description: "Писательница, чьи романы переведены на десятки языков.",
          image: "@/assets/images/olga.jpg"
        },
      ],
      persons:[],
      currentPage: 0,
      itemsPerPage: 3,
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
    },
  },
  mounted() {
    this.getPersons();
  },
  methods:{
    getPersons() {
      api.get(`/famous/?lang_code=${this.currentLanguage}`, {
        headers: {
          'ngrok-skip-browser-warning': 'true',
        },
      })
          .then(response => {
            const data = response.data;
            this.persons = data || this.persons_plh;
            this.currentPage = parseInt(this.$route.query.page) || 0;
          })
          .catch(error => {
            console.error("Ошибка при загрузке данных:", error);
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
    <side-bar :title="title"></side-bar>
    <div class="persons">
      <sections>
        <template #title>{{title}}</template>
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
                :name="person.title"
                :text="person.desc"
                :btn_title="person.buttons_title"
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