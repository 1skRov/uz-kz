<script>
import PopularItem from "@/pages/aboutus/PopularItem.vue";

export default {
  name: "Guide",
  components: {PopularItem}
}
</script>

<template>
  <div style="display: flex; flex-direction: column; gap: 1rem">
    <popular-item />
    <popular-item />
    <popular-item />
  </div>
</template>

<style scoped>

</style>