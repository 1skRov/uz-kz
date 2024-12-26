<script>
import Articles from "@/pages/Documents/Articles.vue";
import Important from "@/pages/Documents/Important.vue";
import SideBar from "@/components/SideBarText.vue";

export default {
  name: "DocImp",
  components: {SideBar, Important, Articles},
  props:{
    important:{
      type: Object,
      required: true,
    },
    charters:{
      type: Array,
      required: true,
    },
    plans:{
      type: Array,
      required: true,
    },
  },
  data(){
    return{
      title1: "Уставы",
      title2: "Планы на 2025год"
    }
  }
}
</script>

<template>
  <div style="display: flex">
    <side-bar :title="title1"></side-bar>
    <div class="documents">
      <important :data="important"/>
      <articles :title="title1"/>
      <articles :title="title2"/>
    </div>
  </div>
</template>

<style scoped>
.documents {
  width: 65%;
  margin: 0 auto;
}
@media (max-width: 1024px) {
  .documents {
    width: 90%;
  }
}

@media (max-width: 768px) {

}
</style>