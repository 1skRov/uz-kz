<script>
export default {
  name: "SideBar",
  props: {
    title: "",
    isBackground: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<template>
  <aside
    class="side-bar"
    :style="{ backgroundColor: isBackground ? '#0072AB' : 'white' }"
  >
    <p
      class="font-gilroy"
      :style="{ color: isBackground ? 'white' : '#CFD3DA' }"
    >
      {{ title }}
    </p>
  </aside>
</template>

<style scoped>
.side-bar {
  width: 160px;
  border-right: 1px solid #ebeef0;
  display: flex;
  align-items: start;
  padding-top: 7rem;
}

p {
  text-align: center;
  font-size: 32px;
  font-weight: 500;
  text-transform: uppercase;
  writing-mode: vertical-rl;
  transform: translateX(-50%) rotate(180deg);
  margin: 0 auto;
}
@media (max-width: 1440px) {
  .side-bar {
    display: none;
  }
}

@media (max-width: 768px) {
}
</style>
