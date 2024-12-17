<script>
import Important from "@/pages/Documents/Important.vue";
import Articles from "@/pages/Documents/Articles.vue";
import DocImp from "@/pages/Documents/DocImp.vue";
import Projects from "@/pages/Documents/Projects.vue";

export default {
name: "Documents",
  components: {Projects, DocImp, Articles, Important},

}
</script>

<template>
  <div>
    <doc-imp/>
    <projects />
  </div>
</template>

<style scoped>

</style>