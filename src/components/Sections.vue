<script>
export default {
  name: "Sections",
  props:{
    isHad:{
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },
  computed: {
    isMobile() {
      return (this.windowWidth <= 768 || this.isHad);
    },
  },
  mounted() {
    window.addEventListener('resize', this.updateWindowWidth);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateWindowWidth);
  },
  methods: {
    updateWindowWidth() {
      this.windowWidth = window.innerWidth;
    },
  },
};
</script>

<template>
  <div class="section">
    <div class="header">
      <div class="title font-gilroy">
        <slot name="title">
        </slot>
      </div>
      <div v-if="$slots['title-button'] && !isMobile">
        <slot name="title-button">
        </slot>
      </div>
    </div>
    <div class="content">
      <slot name="content">
      </slot>
    </div>
    <div class="end-button" v-if="isMobile && $slots.btn">
      <slot name="btn">
      </slot>
    </div>
  </div>
</template>

<style scoped>
.section {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 64px 0;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 56px;
}
.header .title {
  font-size: 40px;
  font-weight: 500;
}
.content{
  line-height: 30px;
}
.end-button {
  margin-top: 72px;
}

@media (max-width: 1024px) {
  .section  {
    padding: 48px 0;
  }
  .header {
    padding-bottom: 48px;
  }
  .header .title {
    font-size: 28px;
  }
  .end-button {
    margin-top: 48px;
  }
}

@media (max-width: 768px) {
  .section  {
    padding: 32px 0;
  }
  .header {
    padding-bottom: 25px;
  }
  .header .title {
    font-size: 24px;
  }
  .end-button {
    margin-top: 20px;
  }
  .content{
    line-height: 25px;
  }
}
</style>