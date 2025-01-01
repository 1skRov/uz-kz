<script>
import api from "@/axios";
import MapFill from "@/components/MapFill.vue"
import {mapGetters} from "vuex";
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
        name: "",
        birthDate: "",
        iin: "",
        phone: "",
        city: "",
      },
      regionCode: null,
      errors: {},
      submitting: false,
      list: {},
    };
  },
  computed: {
    ...mapGetters(["currentLanguage"]),
  },
  watch: {
    currentLanguage(newLang) {
      this.getTranslations();
    },
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
              this.list = translations[currentLang];
            } else {
              console.error(`Переводы для языка "${currentLang}" не найдены`);
            }
          })
          .catch((error) => {
            console.error("Ошибка при загрузке переводов:", error);
          });
    },
    handleRegionSelected(regionCode) {
      this.regionCode = regionCode;
    },
    closeModal() {
      this.$router.push('/')
    },
    validateIIN() {
      this.form.iin = this.form.iin.replace(/\D/g, "").slice(0, 12);
    },
    validateForm() {
      let isValid = true;
      this.errors = {
        name: !this.form.name ? "ФИО обязательно." : null,
        birthDate: !this.form.birthDate ? "Дата рождения обязательна." : null,
        iin: !this.form.iin ? "ИИН обязателен." : null,
        phone: !this.form.phone ? "Телефон обязателен." : null,
      };
      for (const key in this.errors) {
        if (this.errors[key]) {
          isValid = false;
        }
      }
      return isValid;
    },
    async submitForm() {
      if (!this.validateForm()) {
        return;
      }

      const payload = {
        name: this.form.name,
        iin: this.form.iin,
        date_birth: this.form.birthDate,
        phone_number: this.form.phone,
        region_code: this.regionCode,
      };

      this.submitting = true;
      try {
        const response = await api.post("/jointogroups/", payload, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        this.closeModal();
      } catch (error) {
        console.error("Ошибка при отправке заявки:", error);
        alert("Произошла ошибка при отправке заявки. Попробуйте позже.");
      } finally {
        this.submitting = false;
      }
    },
  }
}
</script>

<template>
  <div class="dialog-overlay">
    <div class="dialog-content">
      <div class="dialog-header">
        <button class="close-btn" @click="closeModal">&times;</button>
        <h1 class="dialog-title font-gilroy">{{ list.association_title || '{ association_title }' }}</h1>
        <p class="dialog-description">{{ list.association_description || '{ association_description }' }}</p>
      </div>
      <div class="dialog-body">
        <div class="form-grid">
          <div class="form-group">
            <label for="name">{{ list.your_fcs || '{ your_fcs }' }}</label>
            <input type="text" id="name" v-model="form.name" />
            <span class="error-message" v-if="errors.name">{{ errors.name }}</span>
          </div>
          <div class="form-group">
            <label for="birthDate">{{ list.date_of_birth || '{ date_of_birth }' }}</label>
            <input type="date" id="birthDate" v-model="form.birthDate" />
            <span class="error-message" v-if="errors.birthDate">{{ errors.birthDate }}</span>
          </div>
          <div class="form-group">
            <label for="iin">{{ list.iin || '{ iin }' }}</label>
            <input
                type="text"
                id="iin"
                v-model="form.iin"
                maxlength="12"
                @input="validateIIN"
            />
            <span class="error-message" v-if="errors.iin">{{ errors.iin }}</span>
          </div>
          <div class="form-group">
            <label for="phone">{{ list.phone_number || '{ phone_number }' }}</label>
            <input type="text" id="phone" v-model="form.phone" />
            <span class="error-message" v-if="errors.phone">{{ errors.phone }}</span>
          </div>
        </div>
        <div class="city">{{ list.country || '{ country }' }}</div>
        <div>
          <map-fill @region-selected="handleRegionSelected"></map-fill>
        </div>
        <div style="width: 100%; display: flex; justify-content: end;">
          <button :disabled="submitting" @click="submitForm" class="submit-btn font-gilroy">
            {{ submitting ? "..." : (list.send_request_btn || '{ send_request_btn }') }}
          </button>
        </div>
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
}

.dialog-content {
  background: white;
  border-radius: 8px;
  width: 80%;
  max-width: 80%;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}
.dialog-header {
  position: sticky;
  top: 0;
  background: white;
  z-index: 1;
  padding: 20px;
}
.dialog-header .close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #0072AB;
}
.dialog-header .dialog-title {
  font-weight: 500;
  font-size: 28px;
  margin-bottom: 0.5rem;
}
.dialog-header .dialog-description {
  color: #575F6C;
  margin: 0;
}

.dialog-body {
  padding: 20px;
  overflow-y: auto;
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

.city {
  font-weight: 500;
  line-height: 28px;
  margin: 2rem 0 0;
  color: #333333;
}
.submit-btn {
  display: block;
  margin: 2rem 0;
  padding: 0.5rem 1.5rem;
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
.error-message {
  color: red;
  font-size: 12px;
  margin-top: 5px;
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