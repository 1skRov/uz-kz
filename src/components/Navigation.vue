<script>
export default {
  name: "Navigation",
  data(){
    return {
      menuItems: [
        { name: 'Руководство', icon: 'home', route: '/regions/guide' },
        { name: 'Информация', icon: 'info-circle', route: '/regions/info' },
        { name: 'Контакты', icon: 'phone-square', route: '/regions/regions-contacts' }
      ]
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    isActive(route) {
      return this.$route.path === route;
    }
  }
}
</script>

<template>
  <div class="navigation">
    <div
        v-for="item in menuItems"
        :key="item.route"
        class="item"
        :class="{ active: isActive(item.route) }"
        @click="navigateTo(item.route)"
    >
      <div style="padding: 1rem 0;">{{ item.name }}</div>
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
  overflow: hidden;
}
.item {
  width: 100%;
  align-items: center;
  text-align: center;
  font-weight: 500;
  letter-spacing: 2px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}
.item:hover {
  background-color: rgba(0, 114, 171, 0.1);
}
.item.active {
  background-color: #0072AB;
  color: white;
}
.item + .item {
  border-left: 1px solid #CFD3DA;
}
</style>