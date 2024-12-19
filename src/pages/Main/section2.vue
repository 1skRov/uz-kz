<script>
import SideBar from "@/pages/Main/SideBar.vue";
import More from "@/components/Buttons/more.vue";
import Sections from "@/components/Sections.vue";

export default {
  name: "section2",
  components: {Sections, More, SideBar},
  data(){
    return {
      page: "02",
    }
  },
  methods: {
    goToAboutUS() {
      this.$router.push('/about-us')
    }
  }
}
</script>

<template>
<div class="section">
    <side-bar :page="page" :icon="false" class="sidebar"/>
    <div class="content">
      <sections>
        <template #title>
          О нас
        </template>
        <template #content>
          <p>Идея создания и разработка данного Портала принадлежит председателю узбекского этнокультурного центра города Астана Ш.Пулатову при непосредственной поддержки спонсоров и партнеров из числа ниже указанных компаний и организаций. Отельную благодарность выражаем этнокультурному центру города Алматы в лице председателя А.Исматуллаева за поддержку и выражение солидарности в воплощении данной инициативы.</p>
        </template>
        <template #btn>
          <more @click="goToAboutUS"/>
        </template>
      </sections>
  </div>
</div>
</template>

<style scoped>
.section {
  display: flex;
}
.content {
  width: 70%;
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  border-top: 1px solid #DDE2E4;
}

@media (max-width: 1024px) {
  .sidebar {
    display: none;
  }

  .content {
    width: 90%;
  }
}
</style>