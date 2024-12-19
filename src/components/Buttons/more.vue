<script>
export default {
  name: "more",
  props: {
    title: {
      type: String,
      default: "Узнать больше"
    },
  }
}
</script>

<template>
  <button>
    <div class="title">{{ title }}</div>
    <svg width="44" height="44" viewBox="0 0 54 46" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.8707 31C13.9925 39.1947 21.769 45 30.8682 45C42.7206 45 52.3288 35.1503 52.3288 23C52.3288 10.8497 42.7206 1 30.8682 1C21.769 1 13.9925 6.80529 10.8707 15" stroke="#CFD3DA" stroke-width="2" stroke-linecap="round"/>
      <path d="M1 22C0.447715 22 -4.82823e-08 22.4477 0 23C4.82823e-08 23.5523 0.447715 24 1 24L1 22ZM36.7071 23.7071C37.0976 23.3166 37.0976 22.6834 36.7071 22.2929L30.3431 15.9289C29.9526 15.5384 29.3195 15.5384 28.9289 15.9289C28.5384 16.3195 28.5384 16.9526 28.9289 17.3431L34.5858 23L28.9289 28.6569C28.5384 29.0474 28.5384 29.6805 28.9289 30.0711C29.3195 30.4616 29.9526 30.4616 30.3431 30.0711L36.7071 23.7071ZM1 24L36 24L36 22L1 22L1 24Z" fill="#0072AB"/>
    </svg>
  </button>
</template>

<style scoped>
button {
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  text-transform: uppercase;
  gap: 2rem;
  align-items: center;

  .title {
    font-weight: 500;
    letter-spacing: 1.5px;
    color: #0072AB;
  };
}

@media (max-width: 1024px) {
  svg {
    width: 38px;
    height: 38px;
  }
}

@media (max-width: 768px) {
  svg {
    width: 32px;
    height: 32px;
  }
}
</style>