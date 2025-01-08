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
    },
    to: String,
  }
}
</script>

<template>
  <div class="sandbars">
    <router-link class="main-text" :to="to">{{ title }}</router-link>
    <div v-for="(link, index) in links" :key=index>
      <router-link class="text" :to="link.to">{{ link.text }}</router-link>
    </div>
  </div>
</template>

<style scoped>
</style>