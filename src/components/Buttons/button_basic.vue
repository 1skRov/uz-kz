<script setup>
  defineProps({
    title_button: {
      type: String,
      default: 'Подробнее',
    },
    isBlue: {
      type: Boolean,
      default: false,
    },
  });
</script>

<template>
  <button :class="{ 'btn-blue': isBlue }">
    <span>{{ title_button }}</span>
  </button>
</template>

<style scoped>
  button {
    cursor: pointer;
    border: 1px solid #CFD3DA;
    border-radius: 6px;
    background: #FFFFFF;
    padding: 16px 24px;
    transition: background 0.1s;
  }

  button span {
    color: var(--color-text-dark);
    font-weight: 600;
    line-height: 140%;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .btn-blue {
    background: var(--color-primary);
    border: none;
  }

  .btn-blue span {
    color: #FFFFFF;
  }

  .btn-blue:hover {
    background: #0056b3;
  }

  @media (max-width: 768px) {
    button {
      padding: 8px 12px;
    }
  }
</style>
