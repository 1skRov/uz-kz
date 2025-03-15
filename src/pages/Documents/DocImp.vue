<script>
import Articles from "@/pages/Documents/Articles.vue";
import Important from "@/pages/Documents/Important.vue";
import SideBar from "@/components/SideBarText.vue";
import Plans from "@/pages/Documents/Plans.vue";

export default {
  name: "DocImp",
  components: {Plans, SideBar, Important, Articles},
  props: {
    translations: {
      type: Object,
    },
    isBackground: {
      type: Boolean,
      default: false
    }
  },
}
</script>

<template>
  <div style="display: flex" id="doc1">
    <side-bar :title="translations.documents_side || '{ documents_side }'" :isBackground="isBackground"></side-bar>
    <div class="documents">
      <div id="important">
        <important :title="translations.important_documents"/>
      </div>
      <div id="charter">
        <articles :title="translations.charters"/>
      </div>
      <div is="plan">
        <plans :title="translations.plans"/>
      </div>
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