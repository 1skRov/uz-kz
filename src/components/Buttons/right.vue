<script>
export default {
  name: "right",
  props: {
    isWhite: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<template>
  <div
      class="btn"
      :class="{ 'btn--disabled': disabled }"
  >
    <svg
        width="40"
        height="16"
        viewBox="0 0 40 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
      <path
          d="M1 7.27417C0.447715 7.27417 -4.82823e-08 7.72189 0 8.27417C4.82823e-08 8.82645 0.447715 9.27417 1 9.27417L1 7.27417ZM39.2168 8.98127C39.6073 8.59075 39.6073 7.95758 39.2168 7.56706L32.8528 1.2031C32.4623 0.812575 31.8291 0.812575 31.4386 1.2031C31.0481 1.59362 31.0481 2.22679 31.4386 2.61731L37.0955 8.27417L31.4386 13.931C31.0481 14.3215 31.0481 14.9547 31.4386 15.3452C31.8291 15.7358 32.4623 15.7358 32.8528 15.3452L39.2168 8.98127ZM1 9.27417L38.5097 9.27417L38.5097 7.27417L1 7.27417L1 9.27417Z"
          :fill="isWhite ? '#FFFFFF' : (disabled ? '#B0B0B0' : '#0072AB')"
      />
    </svg>
  </div>
</template>

<style scoped>
.btn {
  cursor: pointer;
  transition: opacity 0.3s, cursor 0.3s;
}

.btn--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
