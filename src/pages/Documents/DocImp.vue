<script>
import Articles from "@/pages/Documents/Articles.vue";
import Important from "@/pages/Documents/Important.vue";
import SideBar from "@/components/SideBarText.vue";

export default {
  name: "DocImp",
  components: {SideBar, Important, Articles},
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
      <important/>
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