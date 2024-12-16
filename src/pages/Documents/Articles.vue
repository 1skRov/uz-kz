<script>
import Sections from "@/components/Sections.vue";
import DocumentItem from "@/pages/Documents/DocumentItem.vue";

export default {
  name: "Articles",
  components: {DocumentItem, Sections},
  props:{
    title: {
      type: String,
    },
  }
}
</script>

<template>
<div>
  <sections>
    <template #title>{{title}}</template>
    <template #content>
      <div style="display: flex; flex-direction: column; gap: 1rem">
        <document-item/>
        <document-item/>
        <document-item/>
        <document-item/>
      </div>
    </template>
  </sections>
</div>
</template>

<style scoped>

</style>