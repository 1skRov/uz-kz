<script>
import Sections from "@/components/Sections.vue";
import Right from "@/components/Buttons/right.vue";
import Left from "@/components/Buttons/left.vue";

export default {
  name: "Interview",
  components: {Left, Right, Sections}
}
</script>

<template>
  <div>
    <sections>
      <template #title></template>
      <template #title-button>
        <div class="btn">
          <left @click="scrollLeft" />
          <right @click="scrollRight" />
        </div>
      </template>
      <template #content></template>
    </sections>
  </div>
</template>

<style scoped>
.btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
}
</style>