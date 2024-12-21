<script>
import Sections from "@/components/Sections.vue";
import More from "@/components/Buttons/more.vue";
import CardGrid from "@/pages/Main/CardGrid.vue";

export default {
  name: "PopularPersons",
  components: {CardGrid, More, Sections},
  data() {
    return {
      title: "Известные личности",
      cards: [
        {
          id: 1,
          category: "Category 1",
          heading: "Example Card Heading 1",
          image: "https://images.unsplash.com/photo-1557177324-56c542165309?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
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
    }
  }
}
</script>

<template>
<div>
  <sections>
    <template #title>{{title}}</template>
    <template #title-button>
      <more/>
    </template>
    <template #content>
     <CardGrid :cards="cards"></CardGrid>
    </template>
    <template #btn>
      <more/>
    </template>
  </sections>
</div>
</template>

<style scoped>
</style>