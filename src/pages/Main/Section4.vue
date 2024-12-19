<script>
import SideBar from "@/pages/Main/SideBar.vue";
import Sections from "@/components/Sections.vue";
import More from "@/components/Buttons/more.vue";
import CardGrid from "@/pages/Main/CardGrid.vue";

export default {
  name: "Section4",
  components: {CardGrid, More, Sections, SideBar},
  data() {
    return {
      page: "04",
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
  methods:{
    goToFamousPersons(){
      this.$router.push('/famous-persons')
    }
  }
};
</script>

<template>
  <div class="section">
    <side-bar :page="page" :icon="false" />
    <div class="content">
      <sections>
        <template #title>
          Известные личности
        </template>
        <template #title-button>
          <more @click="goToFamousPersons"/>
        </template>
        <template #content>
          <CardGrid :cards="cards"></CardGrid>
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
  border-top: 1px solid #dde2e4;
}

</style>
