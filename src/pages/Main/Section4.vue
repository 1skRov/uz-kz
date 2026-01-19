<script>
  import SideBar from '@/pages/Main/SideBar.vue';
  import Sections from '@/components/Sections.vue';
  import More from '@/components/Buttons/more.vue';
  import CardGrid from '@/pages/Main/CardGrid.vue';
  import api from '@/axios';
  import { mapGetters } from 'vuex';

  export default {
    name: 'Section4',
    components: { CardGrid, More, Sections, SideBar },
    props: {
      title: {
        type: String,
        required: true,
        default: '{{ popular_persons }}',
      },
      btn_title: {
        type: String,
        default: '{{ learn_more }}',
      },
      isBackground: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        page: '04',
        persons: [],
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
    methods: {
      getCulture() {
        api.get(`/famous-persons/?lang_code=${this.currentLanguage}`)
          .then((response) => {
            this.persons = response.data;
          })
          .catch((error) => {
            console.error('известные личности', error);
          });
      },
      goToFamousPersons() {
        this.$router.push('/famous-persons');
      },
    },
  };
</script>

<template>
  <div class="section" id="section4">
    <side-bar class="side" :page="page" :icon="false" :isBackground="isBackground" />
    <div class="content">
      <sections>
        <template #title>
          {{ title }}
        </template>
        <template #title-button>
          <more @click="goToFamousPersons" :title="btn_title" />
        </template>
        <template #content>
          <CardGrid :cards="persons"></CardGrid>
        </template>
      </sections>
    </div>
  </div>
</template>

<style scoped>
  .section {
    display: flex;
    position: relative;
  }

  .content {
    display: flex;
    margin: 0 auto;
  }

  @media (max-width: 1024px) {
    .content {
    }
  }

  @media (max-width: 768px) {
  }
</style>
