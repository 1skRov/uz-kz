<script>

import api from "@/axios";

export default {
  name: "DonatesCard",
  data() {
    return {
      form: {
        number_card: "",
        name_card: "",
        cvv: null,
        price: null,
        confirmation: false,
      },
      submitting: false,
    };
  },
  methods: {
    validateForm() {
      const { number_card, name_card, cvv, price } = this.form;
      if (!number_card || !name_card || !cvv || !price) {
        alert("Все поля должны быть заполнены.");
        return false;
      }
      if (number_card.length !== 16 || isNaN(Number(number_card))) {
        alert("Номер карты должен состоять из 16 цифр.");
        return false;
      }
      if (cvv.toString().length !== 3 || isNaN(Number(cvv))) {
        alert("CVV должен состоять из 3 цифр.");
        return false;
      }
      if (isNaN(Number(price)) || Number(price) <= 0) {
        alert("Сумма должна быть положительным числом.");
        return false;
      }
      return true;
    },
    async submitForm() {

      const payload = { ...this.form };

      this.submitting = true;
      try {
        const response = await api.post("/donates/", payload, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log("Успешно отправлено:", response.data);
        alert("Ваша заявка успешно отправлена!");
        this.closeModal();
      } catch (error) {
        console.error("Ошибка при отправке заявки:", error);
        alert("Произошла ошибка при отправке заявки. Попробуйте позже.");
      } finally {
        this.submitting = false;
      }
    },
  },
};
</script>

<template>
  <div class="dialog-content">
    <div style="display: flex; flex-direction: column;">
      <div class="dialog-title font-gilroy">Хотите помочь нуждающимся?</div>
      <p style="color: #575F6C; margin-bottom: 2rem;">Заполните все формы ниже, и отправьте донат.</p>
    </div>
    <div class="form-grid">
      <div class="form-group">
        <label for="number_card">Номер карты</label>
        <input
            type="number"
            id="number_card"
            v-model="form.number_card"
            pattern="\d{16}"
            maxlength="16"
            inputmode="numeric"
        />
      </div>
      <div class="form-group">
        <label for="cvv">CVV</label>
        <input
            type="number"
            id="cvv"
            v-model="form.cvv"
            pattern="\d{3}"
            maxlength="3"
            inputmode="numeric"
        />
      </div>
      <div class="form-group">
        <label for="name_card">Имя на карте</label>
        <input type="text" id="name_card" v-model="form.name_card" />
      </div>
      <div class="form-group">
        <label for="price">Сумма</label>
        <input
            type="number"
            id="price"
            v-model="form.price"
            pattern="\d+"
            inputmode="numeric"
        />
      </div>
    </div>
    <div style="display: flex; align-items: center;">
      <label class="custom-checkbox">
        <input type="checkbox" v-model="form.confirmation" />
        <span class="checkmark"></span>
      </label>
      <span style="margin-left: 10px; font-weight: 500; letter-spacing: 2px; color: #333333">
        Я подтверждаю, что ознакомлен <a href="#" style="color: #333333; text-decoration: none; border-bottom: 1px solid rgba(136,134,134,0.7)">с правилами внесения пожертвований.</a>
      </span>
    </div>
    <div style="width: 100%;">
      <button :disabled="submitting || !form.confirmation" @click="submitForm" class="submit-btn font-gilroy">
        {{ submitting ? "Отправка..." : "Отправить заявку" }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.custom-checkbox {
  display: inline-block;
  position: relative;
  padding-left: 30px;
  cursor: pointer;
  font-size: 1rem;
  user-select: none;
  margin-bottom: 20px;
}
.custom-checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.custom-checkbox .checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #eee;
  border-radius: 5px;
  border: 1px solid #ccc;
}
.custom-checkbox input:checked ~ .checkmark {
  background-color: #fff;
  border: 1px solid #575F6C;
}
.custom-checkbox .checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
.custom-checkbox input:checked ~ .checkmark:after {
  display: block;
}
.custom-checkbox .checkmark:after {
  left: 7px;
  top: 3px;
  width: 5px;
  height: 10px;
  border: solid #333333;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}
.dialog-title {
  font-weight: 500;
  font-size: 40px;
  line-height: 32px;
  margin-bottom: 0;
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
  color: #333333;
}

.form-group input {
  padding: 10px;
  font-weight: 500;
  border: 1px solid #dde2e4;
  border-radius: 5px;
  background-color: #f9fafb;
  letter-spacing: 1.5px;
}

.submit-btn {
  display: block;
  width: 100%;
  margin: 2rem 0;
  padding: 0.7rem 1.5rem;
  font-weight: 500;
  background-color: #0072AB;
  color: white;
  border: 1px solid #CFD3DA;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.submit-btn:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.submit-btn:hover:not(:disabled) {
  background-color: #005f8b;
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
