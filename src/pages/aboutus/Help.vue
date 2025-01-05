<script>
import Left from "@/components/Buttons/left.vue";
import Right from "@/components/Buttons/right.vue";
import BasicButton from "@/components/Buttons/button_basic.vue";
import api, { BASE_URL } from "@/axios";
import { mapGetters } from "vuex";

export default {
  name: "Help",
  components: { BasicButton, Right, Left },
  props: {
    title: {
      type: String,
      default: "{{ help }}"
    },
    btn_title: {
      type: String,
      default: "{{ more_detail }}"
    }
  },
  data() {
    return {
      BASE_URL,
      helpList: [],
      currentHelpIndex: 0,
      transitioning: false,
    };
  },
  computed: {
    ...mapGetters(["currentLanguage"]),
    currentHelp() {
      return this.helpList[this.currentHelpIndex] || {};
    }
  },
  watch: {
    currentLanguage(newLang) {
      this.getHelp();
    },
  },
  mounted() {
    this.getHelp();
  },
  methods: {
    getHelp() {
      api.get(`/help-those-in-need/?lang_code=${this.currentLanguage}`)
          .then((response) => {
            this.helpList = response.data;
            this.currentHelpIndex = 0;
          })
          .catch((error) => {
            console.error(error);
          });
    },
    goToDonate() {
      this.$router.push("/donates");
    },
    goLeft() {
      if (this.helpList.length > 0) {
        this.currentHelpIndex =
            (this.currentHelpIndex - 1 + this.helpList.length) % this.helpList.length;
      }
    },
    goRight() {
      if (this.helpList.length > 0) {
        this.currentHelpIndex =
            (this.currentHelpIndex + 1) % this.helpList.length;
      }
    }
  }
};
</script>

<template>
  <div class="content">
    <div class="text-container">
      <div class="title font-gilroy">{{ title }}</div>
      <div class="text" v-html="currentHelp.mini_desc"></div>
      <div class="btn">
        <basic-button :title_button="btn_title" :is-blue="true" @click="goToDonate" />
        <div style="display: flex; gap: 1rem">
          <left @click="goLeft" />
          <right @click="goRight" />
        </div>
      </div>
    </div>
    <div class="image-container">
      <img :src="BASE_URL + currentHelp.image" alt="help" class="responsive-image" />
    </div>
  </div>
</template>

<style scoped>
.content {
  border: 1px solid #EBEEF0;
  border-radius: 8px;
  display: flex;
  background-color: rgba(0, 114, 171, 0.02);
  overflow: hidden;
}

.title {
  font-size: 40px;
  line-height: 42px;
  font-weight: 500;
}

.text {
  line-height: 35px;
}

.btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.text-container {
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  padding: 50px;
  width: 50%;
  box-sizing: border-box;
}
.image-container {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.responsive-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  max-width: 100%;
}
@media (max-width: 1024px) {
  .title {
    font-size: 28px;
    line-height: 32px;
  }

  .text {
    line-height: 28px;
  }
}

@media (max-width: 768px) {
  .content {
    display: flex;
    flex-direction: column;
  }
  .text-container {
    width: 100%;
    padding: 30px;
  }
  .image-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .responsive-image {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
}
</style>