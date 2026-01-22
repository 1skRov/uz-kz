<script setup>
import GlobeIcon from "@/assets/icons/GlobeIcon.vue";
import { ref } from "vue";

const props = defineProps({
  lang: {
    type: String,
    default: "RU",
  },
  availableLanguages: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(["change-language"]);
const isLangSelectOpen = ref(false);

const toggleLangSelect = () => {
  isLangSelectOpen.value = !isLangSelectOpen.value;
};

const selectLanguage = (code) => {
  emit("change-language", code);
  isLangSelectOpen.value = false;
};
</script>

<template>
  <div class="lang-wrapper">
    <div class="lang-box" @click="toggleLangSelect">
      <globe-icon />
      <span>{{ lang }}</span>
    </div>

    <div v-if="isLangSelectOpen" class="lang-menu">
      <p
        v-for="a in availableLanguages"
        :key="a.code"
        :class="{ selected: a.code === lang }"
        @click="selectLanguage(a.code)"
      >
        {{ a.title }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.lang-wrapper {
  position: relative;
}

.lang-box {
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid var(--color-gray-main);
  height: 100%;
  cursor: pointer;
  gap: 10px;
  padding: 0 24px 0 16px;
  font-size: 14px;
}

.lang-box span {
  text-transform: uppercase;
}

.lang-menu {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  width: 109px;
  border-radius: 8px;
  border: 1px solid var(--color-primary);
  background: #ffffff;
  z-index: 20;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.lang-menu p {
  display: flex;
  align-items: center;
  margin: 0;
  height: 48px;
  padding: 0 16px;
  font-size: 13px;
  color: var(--color-text-dark);
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
}

.lang-menu p.selected {
  color: var(--color-primary);
}
</style>
