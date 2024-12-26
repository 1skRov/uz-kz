<script>
import Sections from "@/components/Sections.vue";

export default {
  name: "WhoWeaAre",
  components: {Sections},
  props:{
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      title:"Кто мы?",
      content:"Идея создания и разработка данного Портала принадлежит председателю узбекского этнокультурного центра города Астана Ш.Пулатову при непосредственной поддержки спонсоров и партнеров из числа ниже указанных компаний и организаций. Отельную благодарность выражаем этнокультурному центру города Алматы в лице председателя А.Исматуллаева за поддержку и выражение солидарности в воплощении данной инициативы.",
    }
  }
}
</script>

<template>
  <div>
    <sections>
      <template #title>{{ data.title || title }}</template>
      <template #content>{{ data.mini_desc || content }}</template>
    </sections>
  </div>
</template>

<style scoped>
</style>