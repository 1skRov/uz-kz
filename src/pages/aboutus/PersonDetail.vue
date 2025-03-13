<script>
import api, {BASE_URL} from "@/axios";
import {mapGetters} from "vuex";

export default {
  name: "PersonDetails",
  props: {
    id: {
      type: [Number, String],
      required: true,
    },
  },
  data() {
    return {
      BASE_URL,
      person: {},
    };
  },
  computed: {
    ...mapGetters(['currentLanguage']),
  },
  mounted() {
    this.getPerson();
  },
  methods: {
    getPerson() {
      api.get(`/famous-persons/?lang_code=${this.currentLanguage}`)
          .then(response => {
            console.log(response.data)
            this.person = response.data.find(item => item.id === Number(this.id)) || {};
            console.log("person", this.person)
          })
          .catch(error => {
            console.error(error);
          });
    },
    closeModal() {
      this.$router.go(-1);
    },
  }
};
</script>

<template>
  <div class="modal-overlay" @click.self="closeModal">
    <div class="modal">
      <div class="modal-close">
        <button @click="closeModal">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
      <div class="modal-content">
        <div class="modal-image">
          <img :src="BASE_URL + person.image" :alt="person.image"/>
        </div>
        <div class="modal-information">
          <p class="font-gilroy title">{{ person.sur_name }}</p>
          <p class="position">{{ person.position }}</p>
          <div class="text">
            <div v-html="person.desc"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  border-radius: 8px;
  background: #FFFFFF;
  width: 60vw;
  max-width: 60vw;
  position: relative;
  height: 80vh;
  padding: 15px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.modal-close {
  display: flex;
  align-items: center;
  justify-content: end;
}

.modal-close button {
  border: none;
  width: 35px;
  height: 35px;
  background: none;
  cursor: pointer;
}

.modal-close button svg {
  fill: none;
  color: #0072ab;
}

.modal-close button:hover svg {
  color: #078fd3;
}

.modal-content {
  display: flex;
}

.modal-image {
  display: flex;
  width: 370px;
  min-width: 370px;
  height: 500px;
  max-height: 500px;
  padding: 0 20px;
}

.modal-image img {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  object-fit: cover;
}

.modal-information {
  padding: 0 5px 0 10px;
  height: 100%;
  max-height: 75vh;
  display: flex;
  flex-direction: column;
}

.title {
  margin: 0 0 10px 0;
  font-weight: 500;
  font-size: 40px;
}

.position {
  margin: 10px 0;
  color: #575F6C;
}

.text {
  line-height: 2rem;
  color: #333;
  overflow-y: auto;
}

@media (max-width: 1024px) {
  .modal {
    width: 85vw;
    max-width: 85vw;
  }

  .modal-image {
    width: 300px;
    min-width: 300px;
    height: 400px;
    max-height: 400px;
    padding: 0 10px;
  }

  .title {
    font-size: 28px;
  }
}

@media (max-width: 768px) {
  .modal {
    height: 85vh;
    overflow: hidden;
  }

  .modal-content {
    display: flex;
    flex-direction: column;
    max-height: 80vh;
    overflow-y: auto;
  }

  .modal-image {
    display: flex;
    justify-content: center;
    padding: 0;
    width: 100%;
    min-width: 320px;
    height: 450px;
    max-height: 450px;
  }

  .title {
    font-size: 20px;
    margin: 10px 0;
  }
  .text {
    overflow-y: unset;
  }
}
</style>

