<script>
import Sections from "@/components/Sections.vue";

export default {
  name: "Education",
  components: {Sections}
}
</script>

<template>
<div class="main">
  <div></div>
  <div>
    <div style="width: 100%; height: 70vh; border-radius: 8px; overflow: hidden">
      <img src="@/assets/images/2.png" alt="education" style="width: 100%; height: 100%">
    </div>
    <div>
      <sections>
        <template #title>title</template>
        <template #content>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ducimus ea impedit nam vero. Beatae commodi consectetur facilis, laudantium nostrum numquam quas quibusdam quidem voluptate voluptatum. Ad architecto blanditiis consequuntur, cum dignissimos dolor, id impedit necessitatibus nihil placeat quam sed tempora! Ab dolorem enim ex molestias mollitia officia optio voluptates.</template>
      </sections>
    </div>
  </div>
</div>
</template>

<style scoped>
.main {
  width: 65%;
  margin: 50px auto;
}
</style>