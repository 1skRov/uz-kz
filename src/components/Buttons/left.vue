<script>
export default {
  name: "left",
  props:{
    isWhite:{
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  }
}
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
          d="M0.292893 7.56706C-0.0976311 7.95759 -0.0976311 8.59075 0.292893 8.98128L6.65685 15.3452C7.04738 15.7358 7.68054 15.7358 8.07107 15.3452C8.46159 14.9547 8.46159 14.3215 8.07107 13.931L2.41421 8.27417L8.07107 2.61732C8.46159 2.22679 8.46159 1.59363 8.07107 1.2031C7.68054 0.812577 7.04738 0.812577 6.65685 1.2031L0.292893 7.56706ZM38.5097 9.27417C39.062 9.27417 39.5097 8.82645 39.5097 8.27417C39.5097 7.72188 39.062 7.27417 38.5097 7.27417L38.5097 9.27417ZM1 9.27417L38.5097 9.27417L38.5097 7.27417L1 7.27417L1 9.27417Z"
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