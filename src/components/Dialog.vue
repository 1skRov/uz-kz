<script>
import MapFill from "@/components/MapFill.vue"
export default {
  name: "Dialog",
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
  },
  components:{MapFill},
  data() {
    return {
      form: {
        name: "ПУЛАТОВ ШЕРЗОД АББОЗОВИЧ",
        birthDate: "20.10.1000",
        iin: "2314123123123",
        phone: "+777777777",
        city: "",
      },
    };
  },
  methods: {
    closeModal() {
      this.$router.push('/')
    },
  }
}
</script>

<template>
  <div class="dialog-overlay">
    <div class="dialog-content">
      <div style="display: flex; align-items: center">
        <button class="close-btn" @click="closeModal">&times;</button>
        <h1 class="dialog-title font-gilroy">Хотите стать членом нашей Ассоциации?</h1>
      </div>
      <p style="color: #575F6C;">Заполните все формы ниже, и отправьте заявку.</p>
      <div class="form-grid">
        <div class="form-group">
          <label for="name">ВАШЕ ФИО:</label>
          <input type="text" id="name" v-model="form.name" />
        </div>
        <div class="form-group">
          <label for="birthDate">ДАТА РОЖДЕНИЯ:</label>
          <input type="text" id="birthDate" v-model="form.birthDate" />
        </div>
        <div class="form-group">
          <label for="iin">ВАШ ИИН:</label>
          <input type="text" id="iin" v-model="form.iin" />
        </div>
        <div class="form-group">
          <label for="phone">ВАШ ТЕЛЕФОН НОМЕР:</label>
          <input type="text" id="phone" v-model="form.phone" />
        </div>
      </div>
      <h2>В КАКОМ ГОРОДЕ ВЫ НАХОДИТЕСЬ?</h2>
      <div>
        <map-fill></map-fill>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dialog-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  overflow-y: auto;
}

.dialog-content {
  background: white;
  border-radius: 8px;
  width: 80%;
  max-width: 80%;
  max-height: 80vh;
  padding: 20px;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow-y: auto;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
}

.dialog-title {
  font-weight: 500;
  font-size: 40px;
  line-height: 32px;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-weight: 500;
  margin-bottom: 5px;
}

.form-group input {
  padding: 10px;
  font-weight: 500;
  border: 1px solid #dde2e4;
  border-radius: 5px;
  background-color: #f9fafb;
  letter-spacing: 1.5px;
}

h2 {
  font-weight: 500;
  line-height: 28px;
}
@media (max-width: 1024px) {
  .dialog-title {
    font-size: 28px;
  }
}

@media (max-width: 768px) {
  .form-grid {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>