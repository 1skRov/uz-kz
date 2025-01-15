<script>
import QRCode from "qrcode";

export default {
  name: "DonatesQr",
  data(){
    return {
      qrData: null,
    }
  },
  mounted() {
    this.generateQrCode();
  },
  methods: {
    generateQrCode() {
      const qrContent = `KZPAY|2|KASPIBANK|+7|1000|KZT|Donation for support`;
      QRCode.toCanvas(this.$refs.qrCanvas, qrContent, { width: 200 }, (error) => {
        if (error) {
          console.error("Ошибка генерации QR-кода:", error);
        } else {
          this.qrData = qrContent;
        }
      });
    },
  }
}
</script>

<template>
<div class="qr">
  <div style="width: 50vh; display: flex; align-items: center; justify-content: center;">
    <canvas ref="qrCanvas"></canvas>
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