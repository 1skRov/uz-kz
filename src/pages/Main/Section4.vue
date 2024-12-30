<script>
import SideBar from "@/pages/Main/SideBar.vue";
import Sections from "@/components/Sections.vue";
import More from "@/components/Buttons/more.vue";
import CardGrid from "@/pages/Main/CardGrid.vue";
import api from "@/axios";
import {mapGetters} from "vuex";

export default {
  name: "Section4",
  components: {CardGrid, More, Sections, SideBar},
  props:{
    title: {
      type: String,
      required: true,
      default: "{{ popular_persons }}"
    },
    btn_title: {
      type: String,
      default: "{{ learn_more }}"
    }
  },
  data() {
    return {
      page: "04",
      persons:[],
      cards: [
        {
          id: 1,
          category: "Category 1",
          heading: "Example Card Heading 1",
          image: require("@/assets/images/help.png"),
        },
        {
          id: 2,
          category: "Category 2",
          heading: "Example Card Heading 2",
          image: "https://images.unsplash.com/photo-1557187666-4fd70cf76254?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        },
        {
          id: 3,
          category: "Category 3",
          heading: "Example Card Heading 3",
          image: "https://images.unsplash.com/photo-1556680262-9990363a3e6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        },
        {
          id: 4,
          category: "Category 4",
          heading: "Example Card Heading 4",
          image: "https://images.unsplash.com/photo-1557004396-66e4174d7bf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        },
      ],
    };
  },
  computed: {
    ...mapGetters(['currentLanguage']),
  },
  watch: {
    currentLanguage(newLang) {
      this.getCulture();
    },
  },
  mounted() {
    this.getCulture();
  },
  methods:{
    getCulture() {
      api.get(`/famous-persons/?lang_code=${this.currentLanguage}`, {
        headers: {
          'ngrok-skip-browser-warning': 'true'
        }
      })
          .then((response) => {
            this.persons = response.data;
          })
          .catch((error) => {
            console.error(error);
          });
    },
    goToFamousPersons(){
      this.$router.push('/famous-persons')
    }
  },
};
</script>

<template>
  <div class="section">
    <side-bar :page="page" :icon="false" />
    <div class="content">
      <sections>
        <template #title>
          {{title}}
        </template>
        <template #title-button>
          <more @click="goToFamousPersons" :title="btn_title"/>
        </template>
        <template #content>
          <CardGrid :cards="persons"></CardGrid>
        </template>
        <template #btn>
          <div class="mob-has">
            <more @click="goToFamousPersons" :title="btn_title"/>
          </div>
        </template>
      </sections>
    </div>
  </div>
</template>

<style scoped>
.section {
  display: flex;
}
.content {
  width: 70%;
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
}
@media (max-width: 1024px) {
  .content {
    width: 90%;
  }
}

@media (max-width: 768px) {
}
</style>
