<script>
import SideBar from "@/components/SideBarText.vue";
import Sections from "@/components/Sections.vue";
import Left from "@/components/Buttons/left.vue";
import Right from "@/components/Buttons/right.vue";
import PopularItem from "@/pages/aboutus/PopularItem.vue";
export default {
  name: "FamousPersonsPage",
  components: {PopularItem, SideBar, Left, Right, Sections},
  data(){
    return{
      title: "Известные личности",
    }
  }
}
</script>

<template>
  <div style="display: flex">
    <side-bar :title="title"></side-bar>
    <div class="persons">
      <sections>
        <template #title>{{title}}</template>
        <template #title-button>
          <div class="btn">
            <left/>
            <right/>
          </div>
        </template>
        <template #content>
          <div class="content">
            <popular-item></popular-item>
            <popular-item></popular-item>
            <popular-item></popular-item>
            <popular-item></popular-item>
            <popular-item></popular-item>
          </div>
        </template>
      </sections>
    </div>
  </div>
</template>

<style scoped>
.btn {
  display: flex;
  gap: 1rem;
  align-items: center;
}
.persons {
  width: 65%;
  margin: 0 auto;
}
.content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>