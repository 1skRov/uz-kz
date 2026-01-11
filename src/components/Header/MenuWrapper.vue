<script setup>
  import LocationIcon from '@/assets/icons/LocationIcon.vue';
  import GlobeIcon from '@/assets/icons/GlobeIcon.vue';
  import MailIcon from '@/assets/icons/MailIcon.vue';
  import PhoneIcon from '@/assets/icons/PhoneIcon.vue';

  const props = defineProps({
    navigation: {
      type: Array,
      default: () => [],
    },
    lang: {
      type: String,
      default: 'RU',
    },
    contacts: {
      type: Object,
      default: () => ({}),
    },
  });

  const emit = defineEmits(['select-navigation', 'donats', 'open-mail']);
</script>

<template>
  <div class="mobile-menu">
    <nav class="menu-nav">
      <ul class="nav-list">
        <li
          v-for="item in navigation"
          :key="item.path"
          @click="emit('select-navigation', item.path)"
        >
          <span class="font-gilroy nav-item-title">{{ item.title }}</span>
        </li>
      </ul>

      <button type="button" class="donate-btn" @click="emit('donats')">Донаты</button>
    </nav>

    <div class="menu-footer">
      <div class="actions-row">
        <div class="action-box lang-box">
          <globe-icon />
          <span>{{ lang }}</span>
        </div>
        <a
          :href="`mailto:${contacts.email}`"
          class="action-box mail-box"
          @click.prevent="emit('open-mail')"
        >
          <mail-icon />
        </a>
      </div>

      <div class="contacts-block">
        <div class="contact-row">
          <location-icon class="icon-shrink" />
          <span>{{ contacts.address }}</span>
        </div>
        <div class="contact-row">
          <phone-icon class="icon-shrink" />
          <div class="phones-col">
            <a :href="`tel:${contacts.phone1}`">{{ contacts.phone1 }}</a>
            <a v-if="contacts.phone2" :href="`tel:${contacts.phone2}`">{{ contacts.phone2 }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .mobile-menu {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: #ffffff;
    border-bottom: 1px solid var(--color-gray-main);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
    box-sizing: border-box;
    padding: 24px 20px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    z-index: 999;
  }

  .nav-list {
    list-style: none;
    padding: 0;
    margin: 0 0 24px 0;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .nav-item-title {
    font-size: 24px;
    font-weight: 500;
    line-height: 130%;
    cursor: pointer;
    transition: color 0.2s;
  }

  .nav-item-title:hover {
    color: var(--color-primary);
  }

  .donate-btn {
    width: 100%;
    padding: 10px 16px;
    border-radius: 6px;
    background: var(--color-primary);
    border: none;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    color: #ffffff;
    cursor: pointer;
  }

  .actions-row {
    padding-bottom: 24px;
    display: flex;
    justify-content: space-between;
  }

  .action-box {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--color-gray-main);
    height: 80px;
    cursor: pointer;
  }

  .lang-box {
    display: flex;
    gap: 10px;
    padding: 0 24px 0 16px;
    font-size: 14px;
  }

  .lang-box span {
    text-transform: uppercase;
  }

  .mail-box {
    width: 80px;
    height: 80px;
  }

  .contacts-block {
    border-top: 1px solid var(--color-gray-main);
    padding-top: 24px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .contact-row {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    font-size: 14px;
    line-height: 140%;
    color: var(--color-text-dark);
  }

  .icon-shrink {
    flex-shrink: 0;
  }

  .phones-col {
    display: flex;
    flex-direction: column;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
</style>
