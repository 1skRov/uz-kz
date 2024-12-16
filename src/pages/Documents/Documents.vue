<script>
import Important from "@/pages/Documents/Important.vue";
import Articles from "@/pages/Documents/Articles.vue";
import SideBar from "@/components/SideBarText.vue";
import DocImp from "@/pages/Documents/DocImp.vue";

export default {
name: "Documents",
  components: {DocImp, SideBar, Articles, Important},

}
</script>

<template>
<doc-imp/>
</template>

<style scoped>

</style>