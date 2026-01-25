<script>
import Articles from "@/pages/Documents/Articles.vue";
import Important from "@/pages/Documents/Important.vue";
import SideBar from "@/components/SideBarText.vue";
import Plans from "@/pages/Documents/Plans.vue";

export default {
  name: "DocImp",
  components: { Plans, SideBar, Important, Articles },
  props: {
    translations: {
      type: Object,
    },
    isBackground: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<template>
  <div id="doc1" class="doc-imp-page">
    <side-bar
      class="side"
      :title="translations.documents_side || '{ documents_side }'"
      :isBackground="isBackground"
    ></side-bar>
    <div class="documents">
      <important :title="translations.important_documents" />
      <articles :title="translations.charters" />
      <plans :title="translations.plans" />
    </div>
  </div>
</template>

<style scoped>
.doc-imp-page {
  display: flex;
  position: relative;
}

.documents {
  margin: 0 auto;
}

@media (max-width: 1024px) {
  .documents {
    width: 90%;
    margin: 0 auto;
  }
}
</style>
