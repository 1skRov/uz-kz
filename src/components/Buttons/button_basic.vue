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
  transition: background 0.1s;
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
    padding: 16px 26px;
  }
}

@media (max-width: 768px) {
  .btn {
    padding: 10px 20px;
  }
}
</style>
