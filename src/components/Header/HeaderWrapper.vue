<script setup>
  import { computed, onMounted, onUnmounted, ref } from 'vue';
  import { useStore } from 'vuex';
  import { useRoute, useRouter } from 'vue-router';

  import HeaderLogo from '@/assets/icons/HeaderLogo.vue';
  import BurgerMenu from '@/assets/icons/BurgerMenu.vue';
  import CloseIcon from '@/assets/icons/CloseIcon.vue';

  import MenuWrapper from '@/components/Header/MenuWrapper.vue';

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

  const currentLanguage = computed(() => store.getters.currentLanguage);
  const availableLanguages = computed(() => store.getters.availableLanguages);
  const tr = computed(() => store.getters.getTranslations);

  const menuLinks = computed(() => [
    { title: tr.value.about_us || '{ about_us }', path: '/about-us' },
    { title: tr.value.regions || '{ regions }', path: '/regions/guide' },
    { title: tr.value.documents || '{ documents }', path: '/documents' },
    { title: tr.value.press_center || '{ press_center }', path: '/press-center' },
    { title: tr.value.popular_persons || '{ popular_persons }', path: '/famous-persons' },
    { title: tr.value.contacts || '{ contacts }', path: '/contacts' },
  ]);

  const toggleMenu = () => {
    console.log(isMenuOpen.value);
    isMenuOpen.value = !isMenuOpen.value;
  };

  const closeMenu = () => {
    isMenuOpen.value = false;
  };

  const returnMainPage = () => {
    router.push({ name: 'MainPage' });
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
    store.dispatch('updateLanguage', code);
    closeMenu();
  };

  onMounted(() => window.addEventListener('click', handleOutsideClick));
  onUnmounted(() => window.removeEventListener('click', handleOutsideClick));
</script>

<template>
  <header>
    <header-logo @click="returnMainPage"></header-logo>
    <div class="menu-icon-wrapper" @click="toggleMenu">
      <close-icon v-if="isMenuOpen" />
      <burger-menu v-else />
    </div>
    <menu-wrapper
      v-if="isMenuOpen"
      :navigation="menuLinks"
      :lang="currentLanguage"
      :available-languages="availableLanguages"
      :contacts="contacts"
      @select-navigation="handleNavigation"
      @change-language="handleChangeLanguage"
    ></menu-wrapper>
  </header>
</template>

<style scoped>
  header {
    width: 100%;
    height: 56px;
    background-color: #fff;
    border-bottom: 1px solid var(--color-gray-main);
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 100;
  }

  .menu-icon-wrapper {
    width: 56px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: 1px solid var(--color-gray-main);
  }
</style>
