<script>
import SideBar from "@/pages/Main/SideBar.vue";
import More from "@/components/Buttons/more.vue";

export default {
  name: "Sections",
  components: {More, SideBar},
}
</script>

<template>
  <div class="section">
    <div class="header">
      <div class="title font-gilroy">
        <slot name="title">
        </slot>
      </div>
      <div v-if="$slots['title-button']">
        <slot name="title-button">
        </slot>
      </div>
    </div>
    <div class="content">
      <slot name="content">
      </slot>
    </div>
    <div class="end-button" v-if="$slots.btn">
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
}
.content{
  line-height: 30px;
}
.end-button {
  margin-top: 72px;
}
</style>