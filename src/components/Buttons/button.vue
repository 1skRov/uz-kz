<script>
export default {
  name: "BasicButton",
  props: {
    title_button: {
      type: String,
      required: true
    },
  },
}
</script>

<template>
<button class="btn">
  {{ title_button }}
</button>
</template>

<style scoped>
.btn {
  text-transform: uppercase;
  cursor: pointer;
  border: 1px solid #CFD3DA;
  border-radius: 6px;
  font-weight: 500;
  background: #FFF;
  padding: 16px 36px;
}
.btn:hover {
  background: rgb(249, 250, 251);
}
</style>