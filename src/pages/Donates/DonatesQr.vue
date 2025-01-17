<script>
import QRCode from "qrcode";
import api from "@/axios";

export default {
  name: "DonatesQr",
  data() {
    return {
      qrData: null,
      donate: {},
    };
  },
  async mounted() {
    await this.getContacts();
    this.generateQrCode();
  },
  methods: {
    async getContacts() {
      try {
        const response = await api.get(`/pay-link/`);
        this.donate = response.data;
      } catch (error) {
        console.error("Error loading payment details:", error);
      }
    },
    generateQrCode() {
      if (this.donate.link && this.donate.card_number) {
        const qrContent = `Link: ${this.donate.link}\nCard: ${this.donate.card_number}`;
        QRCode.toCanvas(this.$refs.qrCanvas, qrContent, {width: 200}, (error) => {
          if (error) {
            console.error("QR code generation error:", error);
          } else {
            this.qrData = qrContent;
          }
        });
      } else {
        console.error("Insufficient data for QR code generation");
      }
    },
  },
};
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
  border-radius: 8px;
}
</style>
