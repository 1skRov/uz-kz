<script>
import api, {BASE_URL} from "@/axios";

export default {
  name: "DonatesQr",
  data(){
    return {
      BASE_URL,
      translations: {},
    }
  },
  mounted() {
    this.getTranslations();
  },
  methods: {
    getTranslations() {
      api.get('/trans/')
          .then((response) => {
            const translations = response.data;
            const currentLang = this.currentLanguage;
            if (translations[currentLang]) {
              this.translations = translations[currentLang];
            } else {
              console.error(`Переводы для языка "${currentLang}" не найдены`);
            }
          })
          .catch((error) => {
            console.error("Ошибка при загрузке переводов:", error);
          });
    },
  }
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