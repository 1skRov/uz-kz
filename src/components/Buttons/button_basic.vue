<script>
export default {
  name: "BasicButton",
  props: {
    title_button: {
      type: String,
      required: true,
      default: "Подробнее"
    },
    isBlue: {
      type: Boolean,
      default: false
    }
  },
}
</script>

<template>
  <button
      :class="['btn', { 'btn-blue': isBlue }]">
    <b>{{ title_button }}</b>
  </button>
</template>

<style scoped>
.btn {
  cursor: pointer;
  border: 1px solid #CFD3DA;
  border-radius: 6px;
  background: #FFF;
  padding: 16px 36px;
  transition: background 0.1s;
}
b  {
  letter-spacing: 1.5px;
}

.btn:hover {
  background: rgb(249, 250, 251);
}

.btn-blue {
  background: #0072AB;
  color: white;
  border: none;
}

.btn-blue:hover {
  background: #0056b3;
}
@media (max-width: 1024px) {
  .btn {
    padding: 13px 18px;
  }
  b  {
    font-size: 12px;
  }
}

@media (max-width: 768px) {
  .btn {
    padding: 10px 20px;
  }
}
</style>
