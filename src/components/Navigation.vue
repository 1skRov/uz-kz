<script>
export default {
  name: "Navigation",
  data(){
    return {
      menuItems: [
        { name: 'Руководство', icon: 'home' },
        { name: 'Информация', icon: 'info-circle' },
        { name: 'Контакты', icon: 'phone-square' }
      ]
    }
  }
}
</script>

<template>
<div class="navigation" >
  <div v-for="i in menuItems" :key="i.key" class="item">
    <div style="padding: 1rem 0;" >{{ i.name }}</div>
  </div>
</div>
</template>

<style scoped>
.navigation {
  display: flex;
  align-items: center;
  border: 1px solid #CFD3DA;
  border-radius: 8px;
  background-color: rgba(0, 114, 171, 0.02);
}
.item {
  width: 100%;
  align-items: center;
  text-align: center;
  font-weight: 500;
  letter-spacing: 2px;
}
.item + .item {
  border-left: 1px solid #CFD3DA;
}
</style>