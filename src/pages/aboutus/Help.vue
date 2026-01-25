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
      default: "{{ help }}",
    },
    btn_title: {
      type: String,
      default: "{{ more_detail }}",
    },
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
    },
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
      api
        .get(`/help-those-in-need/?lang_code=${this.currentLanguage}`)
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
          (this.currentHelpIndex - 1 + this.helpList.length) %
          this.helpList.length;
      }
    },
    goRight() {
      if (this.helpList.length > 0) {
        this.currentHelpIndex =
          (this.currentHelpIndex + 1) % this.helpList.length;
      }
    },
  },
};
</script>

<template>
  <div class="help-content">
    <div class="text-container">
      <div class="title font-gilroy">{{ title }}</div>
      <div class="text" v-html="currentHelp.mini_desc"></div>
      <div class="btn">
        <basic-button
          :title_button="btn_title"
          :is-blue="true"
          @click="goToDonate"
        />
        <div style="display: flex; gap: 1rem">
          <div @click="goLeft"><left /></div>
          <div @click="goRight"><right /></div>
        </div>
      </div>
    </div>
    <div class="image-container">
      <img
        :src="BASE_URL + currentHelp.image"
        alt="help"
        class="responsive-image"
      />
    </div>
  </div>
</template>

<style scoped>
.help-content {
  width: 100%;
  border: 1px solid #ebeef0;
  border-radius: 8px;
  display: flex;
  background-color: rgba(0, 114, 171, 0.02);
  overflow: hidden;
  margin-bottom: 40px;
}

.title {
  font-size: 40px;
  font-weight: 500;
  line-height: 130%;
}

.text {
  line-height: 200%;
  color: var(--color-text-main);
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
  object-position: center;
  max-width: 100%;
}

@media (max-width: 1024px) {
  .help-content {
    width: 90%;
    margin: 0 auto 40px auto;
  }
  .text-container {
    gap: 10px;
    padding: 30px;
  }
  .title {
    font-size: 28px;
  }

  .text {
    line-height: 28px;
  }
}

@media (max-width: 768px) {
  .help-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    border: none;
    background: #ffffff;
    border-radius: 0;
  }

  .text-container {
    width: 100%;
    padding: 20px;
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
