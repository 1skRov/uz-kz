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
    isHeader: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeMenu() {
      this.$emit("close-menu");
    },
  },
};
</script>

<template>
  <div :class="isHeader ? 'header-sandbars' : 'sandbars'">
    <router-link class="main-text font-gilroy" :to="to" @click="closeMenu">{{
      title
    }}</router-link>
    <div v-for="(link, index) in links" :key="index">
      <router-link class="text" :to="link.to" @click="closeMenu">{{
        link.text
      }}</router-link>
    </div>
  </div>
</template>

<style scoped></style>
