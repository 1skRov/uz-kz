<script>
export default {
  name: "DonatesQr"
}
</script>

<template>
<div class="qr">
  <div style="width: 50vh">
    <img src="@/assets/images/kaspi.jpg" alt="qr" width="100%" height="100%">
  </div>
</div>
</template>

<style scoped>
.qr {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 0;
  width: 100%;
  height: auto;
  border: 1px solid red;
  border-radius: 8px
}
</style>