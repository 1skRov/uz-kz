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
    class="side-bar-region"
    :style="{ backgroundColor: isBackground ? '#0072AB' : 'white' }"
  >
    <div class="side-bar-sticky"></div>
    <p
      class="font-gilroy"
      :style="{ color: isBackground ? 'white' : '#CFD3DA' }"
    >
      {{ title }}
    </p>
  </aside>
</template>

<style scoped>
.side-bar-region {
  width: 160px;
  height: 100%;
  border-right: 1px solid #ebeef0;
  padding-top: 7rem;
}

.side-bar-sticky {
  position: sticky;
  top: 0;
  height: 100vh;
  width: 100%;
}

p {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 0;
  font-size: 32px;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 135%;
  writing-mode: vertical-rl;
  transform: translateX(-50%) rotate(180deg);
}

@media (max-width: 1440px) {
  .side-bar-region {
    display: none;
  }
}
</style>
