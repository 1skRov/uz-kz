<script>
export default {
  name: "FooterSandbars",
  props: {
    title: {
      type: String,
      required: true,
    },
    links: {
      type: Array,
    }
  }
}
</script>

<template>
  <div class="sandbars">
    <h2 class="main-text">{{ title }}</h2>
    <div v-for="(link, index) in links" :key=index>
      <router-link class="text" :to="link.to">{{ link.text }}</router-link>
    </div>
  </div>
</template>

<style scoped>
</style>