<script setup>
import { computed, onMounted, onUnmounted, ref } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";

import HeaderLogo from "@/assets/icons/HeaderLogo.vue";
import BurgerMenu from "@/assets/icons/BurgerMenu.vue";
import CloseIcon from "@/assets/icons/CloseIcon.vue";

import MenuWrapper from "@/components/Header/MenuWrapper.vue";
import LangWrapper from "@/components/Header/LangWrapper.vue";
import TabletHeaderMenu from "@/components/TabletHeaderMenu.vue";
import MailIcon from "@/assets/icons/MailIcon.vue";
import LocationIcon from "@/assets/icons/LocationIcon.vue";
import PhoneIcon from "@/assets/icons/PhoneIcon.vue";

const props = defineProps({
  contacts: {
    type: Object,
    default: () => ({}),
  },
});

const store = useStore();
const route = useRoute();
const router = useRouter();
const headerRef = ref(null);
const isMenuOpen = ref(false);
const viewportWidth = ref(window.innerWidth);

const currentLanguage = computed(() => store.getters.currentLanguage);
const availableLanguages = computed(() => store.getters.availableLanguages);
const tr = computed(() => store.getters.getTranslations);

const menuLinks = computed(() => [
  { title: tr.value.about_us || "{ about_us }", path: "/about-us" },
  { title: tr.value.regions || "{ regions }", path: "/regions/guide" },
  { title: tr.value.documents || "{ documents }", path: "/documents" },
  { title: tr.value.press_center || "{ press_center }", path: "/press-center" },
  {
    title: tr.value.popular_persons || "{ popular_persons }",
    path: "/famous-persons",
  },
  { title: tr.value.contacts || "{ contacts }", path: "/contacts" },
]);

const toggleMenu = () => {
  console.log(isMenuOpen.value);
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const returnMainPage = () => {
  router.push({ name: "MainPage" });
  closeMenu();
};

const handleNavigation = (path) => {
  router.push(path);
  closeMenu();
};

const handleOutsideClick = (event) => {
  if (headerRef.value && !headerRef.value.contains(event.target)) {
    closeMenu();
  }
};

const handleChangeLanguage = (code) => {
  store.dispatch("updateLanguage", code);
  closeMenu();
};
const onResize = () => {
  viewportWidth.value = window.innerWidth;
};
onMounted(() => window.addEventListener("resize", onResize, { passive: true }));
onUnmounted(() => window.removeEventListener("resize", onResize));
const isMobile = computed(() => viewportWidth.value <= 768);
const isTablet = computed(
  () => viewportWidth.value > 768 && viewportWidth.value <= 1440,
);
onMounted(() => window.addEventListener("click", handleOutsideClick));
onUnmounted(() => window.removeEventListener("click", handleOutsideClick));
</script>

<template>
  <header>
    <header-logo @click="returnMainPage"></header-logo>
    <nav class="nav-box">
      <ul>
        <li
          v-for="(m, index) in menuLinks"
          :key="index"
          @click="handleNavigation(m.path)"
        >
          {{ m.title }}
        </li>
      </ul>
    </nav>
    <div class="contacts-box">
      <div class="contacts-item loc">
        <location-icon />
        <span>{{ contacts.address }}</span>
      </div>
      <div class="contacts-item">
        <phone-icon />
        <div class="phones-col">
          <a :href="`tel:${contacts.phone1}`">{{ contacts.phone1 }}</a>
          <a v-if="contacts.phone2" :href="`tel:${contacts.phone2}`">{{
            contacts.phone2
          }}</a>
        </div>
      </div>
    </div>
    <div class="actions-wrapper">
      <LangWrapper
        :available-languages="availableLanguages"
        :lang="currentLanguage"
        @change-language="handleChangeLanguage"
      ></LangWrapper>
      <div class="mail-box">
        <mail-icon />
      </div>
    </div>
    <div class="menu-icon-wrapper" @click="toggleMenu">
      <close-icon v-if="isMenuOpen" />
      <burger-menu v-else />
    </div>
    <menu-wrapper
      v-if="isMenuOpen && isMobile"
      :navigation="menuLinks"
      :lang="currentLanguage"
      :available-languages="availableLanguages"
      :contacts="contacts"
      @select-navigation="handleNavigation"
      @change-language="handleChangeLanguage"
    ></menu-wrapper>

    <tablet-header-menu
      v-if="isMenuOpen && isTablet"
      :translate="tr"
      @close-menu="closeMenu"
    />
  </header>
</template>

<style scoped>
header {
  width: 100%;
  height: 79px;
  background-color: #fff;
  border-bottom: 1px solid var(--color-gray-main);
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
  position: sticky;
  top: 0;
}

.nav-box {
  height: 100%;
  display: flex;
}

.nav-box ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 24px;
}

.nav-box li {
  padding: 6px 16px;
  color: var(--color-text-dark);
  letter-spacing: 0.5px;
  cursor: pointer;
}

.actions-wrapper {
  height: 100%;
  display: flex;
}

.mail-box {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 80px;
  border-left: 1px solid var(--color-gray-main);
  cursor: pointer;
}

.contacts-box {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  flex: 0 1 440px;
  min-width: 220px;
  max-width: 450px;
}

.contacts-item {
  min-width: 180px;
  display: flex;
  align-items: center;
  gap: 16px;
}

.loc {
  width: 100%;
}

.phones-col {
  display: flex;
  flex-direction: column;
}

a {
  text-decoration: none;
  color: inherit;
}

.menu-icon-wrapper {
  display: none;
  width: 80px;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-left: 1px solid var(--color-gray-main);
}

@media (max-width: 1440px) {
  .menu-icon-wrapper {
    display: flex;
  }

  .nav-box {
    display: none;
  }

  .contacts-item {
    gap: 10px;
  }

  .contacts-box,
  .actions-wrapper {
    margin-left: auto;
    display: flex;
  }
}

@media (max-width: 768px) {
  header {
    height: 56px;
  }
  .nav-box,
  .contacts-box,
  .actions-wrapper {
    display: none;
  }

  .menu-icon-wrapper {
    width: 56px;
  }
}
</style>
