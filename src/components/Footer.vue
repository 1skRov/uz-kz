<script>

import FooterSandbars from "@/components/FooterSandbars.vue";
import BasicButton from "@/components/Buttons/button_basic.vue";
import {mapGetters} from "vuex";

export default {
  name: "Footer",
  components: {BasicButton, FooterSandbars},
  props: {
    contact_line:{
      type: Object,
    }
  },
  data(){
    return {}
  },
  computed: {
    ...mapGetters(['getTranslations']),
    aboutLinks() {
      return [
        { text: this.getTranslations.our_history || "{ our_history }", to: { name: 'AboutUs', hash: 'section-1' } },
        { text: this.getTranslations.culture_traditions || "{ culture_traditions }", to: { name: 'AboutUs', hash: 'section-2' } },
        { text: this.getTranslations.popular_persons || "{ popular_persons }", to: { name: 'AboutUs', hash: 'section-3' } },
        { text: this.getTranslations.youth_organizations || "{ youth_organizations }", to: { name: 'AboutUs', hash: 'section-4' } },
        { text: this.getTranslations.education || "{ education }", to: { name: 'AboutUs', hash: 'section-5' } },
        { text: this.getTranslations.sport || "{ sport }", to: { name: 'AboutUs', hash: 'section-5' } },
      ]
    },
    regionsLinks() {
      return [
        { text: this.getTranslations.all_regions || "{ all_regions }", to: { name: 'Regions' } },
      ]
    },
    documentsLinks(){
      return [
        { text: this.getTranslations.important_documents || "{ important_documents }", to: { name: 'Documents', hash: 'important' } },
        { text: this.getTranslations.charters || "{ charters }", to: { name: 'Documents', hash: 'charter' } },
        { text: this.getTranslations.plans || "{ plans }", to: { name: 'Documents', hash: 'plan' } },
        { text: this.getTranslations.projects || "{ projects }", to: { name: 'Documents', hash: 'projects' } },
      ]
    },
    pressCenterLinks() {
      return [
        {text: this.getTranslations.latest_news  || "{ latest_news  }", to: {name: 'PressCenter', hash: 'news'}},
        {text: this.getTranslations.video_material  || "{ video_material  }", to: {name: 'PressCenter', hash: 'video'}},
        {text: this.getTranslations.photos  || "{ photos  }", to: {name: 'PressCenter', hash: 'gallery'}},
        {text: this.getTranslations.interview  || "{ interview  }", to: {name: 'PressCenter', hash: 'interviews'}},
      ]
    },
    contactsLinks() {
      return [
        {text: this.getTranslations.republic_contacts  || "{ republic_contacts  }", to: {name: 'republic'}},
        {text: this.getTranslations.region_contacts  || "{ region_contacts  }", to: {name: 'regions'}},
      ]
    },
  },
  methods: {
    openDonate() {
      this.$router.push('/donates');
    },
    ReturnMainPage() {
      this.$router.push({ name: 'MainPage' });
    },
  }
}
</script>

<template>
  <div class="main">
    <div class="content-line-mobile">
      <div @click="ReturnMainPage">
        <svg width="95" height="45" viewBox="0 0 160 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0H160V80H0V0Z" fill="#0072AB"/>
          <path d="M28.744 48.16C27.576 48.16 26.568 48 25.72 47.68C24.872 47.344 24.168 46.888 23.608 46.312C23.064 45.72 22.656 45.024 22.384 44.224C22.128 43.408 22 42.512 22 41.536V31.192H25.744V41.224C25.744 41.896 25.816 42.472 25.96 42.952C26.12 43.416 26.328 43.8 26.584 44.104C26.856 44.392 27.176 44.6 27.544 44.728C27.928 44.856 28.344 44.92 28.792 44.92C29.704 44.92 30.44 44.64 31 44.08C31.576 43.52 31.864 42.568 31.864 41.224V31.192H35.608V41.536C35.608 42.512 35.472 43.408 35.2 44.224C34.928 45.04 34.512 45.744 33.952 46.336C33.392 46.912 32.68 47.36 31.816 47.68C30.952 48 29.928 48.16 28.744 48.16Z" fill="white"/>
          <path d="M51.1847 33.784C50.6727 34.312 50.0647 35 49.3607 35.848C48.6567 36.68 47.9287 37.592 47.1768 38.584C46.4248 39.576 45.6807 40.6 44.9447 41.656C44.2087 42.712 43.5527 43.72 42.9767 44.68H51.4488V47.824H38.3688V45.592C38.8168 44.776 39.3607 43.872 40.0007 42.88C40.6567 41.872 41.3368 40.864 42.0407 39.856C42.7447 38.832 43.4567 37.848 44.1768 36.904C44.9128 35.944 45.5928 35.088 46.2168 34.336H38.7528V31.192H51.1847V33.784Z" fill="white"/>
          <path d="M59.8812 48.04C58.9692 48.04 58.0572 48.008 57.1452 47.944C56.2492 47.896 55.3132 47.768 54.3372 47.56V31.432C55.1052 31.288 55.9452 31.184 56.8572 31.12C57.7692 31.04 58.6172 31 59.4012 31C60.4572 31 61.4252 31.08 62.3052 31.24C63.2012 31.384 63.9692 31.64 64.6092 32.008C65.2492 32.376 65.7452 32.864 66.0972 33.472C66.4652 34.064 66.6492 34.8 66.6492 35.68C66.6492 37.008 66.0092 38.056 64.7292 38.824C65.7852 39.224 66.5052 39.768 66.8892 40.456C67.2732 41.144 67.4652 41.92 67.4652 42.784C67.4652 44.528 66.8252 45.84 65.5452 46.72C64.2812 47.6 62.3932 48.04 59.8812 48.04ZM57.9852 40.576V44.872C58.2572 44.904 58.5532 44.928 58.8732 44.944C59.1932 44.96 59.5452 44.968 59.9292 44.968C61.0492 44.968 61.9532 44.808 62.6412 44.488C63.3292 44.168 63.6732 43.576 63.6732 42.712C63.6732 41.944 63.3852 41.4 62.8092 41.08C62.2332 40.744 61.4092 40.576 60.3372 40.576H57.9852ZM57.9852 37.72H59.8092C60.9612 37.72 61.7852 37.576 62.2812 37.288C62.7772 36.984 63.0252 36.504 63.0252 35.848C63.0252 35.176 62.7692 34.704 62.2572 34.432C61.7452 34.16 60.9932 34.024 60.0012 34.024C59.6812 34.024 59.3372 34.032 58.9692 34.048C58.6012 34.048 58.2732 34.064 57.9852 34.096V37.72Z" fill="white"/>
          <path d="M70.7022 47.824V31.192H81.9342V34.336H74.4462V37.6H81.0942V40.672H74.4462V44.68H82.4862V47.824H70.7022Z" fill="white"/>
          <path d="M95.3129 47.824C94.9769 47.28 94.5769 46.696 94.1129 46.072C93.6649 45.432 93.1689 44.8 92.6249 44.176C92.0969 43.536 91.5449 42.928 90.9689 42.352C90.3929 41.76 89.8169 41.24 89.2409 40.792V47.824H85.4969V31.192H89.2409V37.48C90.2169 36.456 91.1929 35.392 92.1689 34.288C93.1609 33.168 94.0809 32.136 94.9289 31.192H99.3689C98.2329 32.536 97.0889 33.832 95.9369 35.08C94.8009 36.328 93.6009 37.584 92.3369 38.848C93.6649 39.952 94.9449 41.264 96.1769 42.784C97.4249 44.304 98.6169 45.984 99.7529 47.824H95.3129Z" fill="white"/>
          <path d="M106.157 45.928C106.157 46.648 105.925 47.2 105.461 47.584C105.013 47.952 104.501 48.136 103.925 48.136C103.349 48.136 102.829 47.952 102.365 47.584C101.917 47.2 101.693 46.648 101.693 45.928C101.693 45.208 101.917 44.664 102.365 44.296C102.829 43.912 103.349 43.72 103.925 43.72C104.501 43.72 105.013 43.912 105.461 44.296C105.925 44.664 106.157 45.208 106.157 45.928Z" fill="white"/>
          <path d="M118.855 47.824C118.519 47.28 118.119 46.696 117.655 46.072C117.207 45.432 116.711 44.8 116.167 44.176C115.639 43.536 115.087 42.928 114.511 42.352C113.935 41.76 113.359 41.24 112.783 40.792V47.824H109.039V31.192H112.783V37.48C113.759 36.456 114.735 35.392 115.711 34.288C116.703 33.168 117.623 32.136 118.471 31.192H122.911C121.775 32.536 120.631 33.832 119.479 35.08C118.343 36.328 117.143 37.584 115.879 38.848C117.207 39.952 118.487 41.264 119.719 42.784C120.967 44.304 122.159 45.984 123.295 47.824H118.855Z" fill="white"/>
          <path d="M138.008 33.784C137.496 34.312 136.888 35 136.184 35.848C135.48 36.68 134.752 37.592 134 38.584C133.248 39.576 132.504 40.6 131.768 41.656C131.032 42.712 130.376 43.72 129.8 44.68H138.272V47.824H125.192V45.592C125.64 44.776 126.184 43.872 126.824 42.88C127.48 41.872 128.16 40.864 128.864 39.856C129.568 38.832 130.28 37.848 131 36.904C131.736 35.944 132.416 35.088 133.04 34.336H125.576V31.192H138.008V33.784Z" fill="white"/>
        </svg>
      </div>
      <div class="item-for-mobile">
        <div class="item-in-for-mobile">
          <svg width="35" color="#575F6C" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.6663 2.67969C11.525 2.67969 7.34338 6.86388 7.34338 12.0052C7.34338 17.9825 15.299 27.6922 15.6377 28.1016L16.6663 29.349L17.6949 28.1016C18.0336 27.6909 25.9892 17.9825 25.9892 12.0052C25.9892 6.86254 21.8076 2.67969 16.6663 2.67969ZM16.6663 5.34635C20.337 5.34635 23.3226 8.33454 23.3226 12.0052C23.3225 15.6119 19.1703 21.8149 16.6663 25.1016C14.1623 21.8176 10.0101 15.6172 10.0101 12.0052C10.0101 8.33454 12.9956 5.34635 16.6663 5.34635ZM16.6663 8.66667C14.825 8.66667 13.333 10.1587 13.333 12C13.333 13.8413 14.825 15.3333 16.6663 15.3333C18.5076 15.3333 19.9996 13.8413 19.9996 12C19.9996 10.1587 18.5076 8.66667 16.6663 8.66667Z" fill="#575F6C"/>
          </svg>
          <p>{{contact_line.address}}</p>
        </div>
        <div class="item-in-for-mobile">
          <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_345_284)">
              <path d="M19.7624 14.1333L15.3874 12.2583C15.2005 12.1787 14.9928 12.1619 14.7956 12.2105C14.5983 12.2591 14.4222 12.3705 14.2937 12.5279L12.3562 14.8951C9.31545 13.4614 6.86837 11.0143 5.43469 7.97358L7.80188 6.03608C7.95957 5.90783 8.07117 5.73169 8.11981 5.53434C8.16844 5.33699 8.15145 5.12916 8.07141 4.94233L6.19641 0.567328C6.10856 0.365925 5.9532 0.201486 5.7571 0.102366C5.561 0.0032464 5.33645 -0.0243417 5.12219 0.0243589L1.05969 0.961859C0.853118 1.00956 0.668812 1.12587 0.536855 1.29181C0.404898 1.45775 0.333082 1.66352 0.33313 1.87553C0.33313 11.8951 8.45422 20.0005 18.4581 20.0005C18.6702 20.0007 18.8761 19.9289 19.0421 19.7969C19.2081 19.665 19.3245 19.4806 19.3722 19.274L20.3097 15.2115C20.3581 14.9962 20.3299 14.7707 20.23 14.5739C20.1301 14.3772 19.9648 14.2214 19.7624 14.1333Z" fill="#575F6C"/>
            </g>
            <defs>
              <clipPath id="clip0_345_284">
                <rect width="20" height="20" fill="white" transform="translate(0.33313)"/>
              </clipPath>
            </defs>
          </svg>
          <div style="display: flex; flex-direction: column; gap: 5px">
            <p style="margin: 0">{{ contact_line.phone1 }}</p>
            <p style="margin: 0">{{ contact_line.phone2 }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <footer-sandbars :title="getTranslations.about_us || '{ about_us }'" :links="aboutLinks" :to="{ name: 'AboutUs' }"></footer-sandbars>
      <footer-sandbars :title="getTranslations.regions || '{ regions }'" :links="regionsLinks" :to="{ name: 'Regions' }"></footer-sandbars>
      <footer-sandbars :title="getTranslations.documents || '{ documents }'" :links="documentsLinks" :to="{ name: 'Documents' }"></footer-sandbars>
      <footer-sandbars :title="getTranslations.press_center || '{ press_center }'" :links="pressCenterLinks" :to="{ name: 'PressCenter' }"></footer-sandbars>
      <div>
        <footer-sandbars :title="getTranslations.contacts || '{ contacts }'" :links="contactsLinks" :to="{ name: 'Contacts' }"></footer-sandbars>
        <div class="sandbars hidden-bar">
          <h2 class="main-text">{{ getTranslations.donates || '{ donates }' }}</h2>
          <basic-button @click="openDonate" :title_button="getTranslations.donates || '{ donates }'" :is-blue="true"></basic-button>
        </div>
      </div>
    </div>
    <div class="content-line">
      <div @click="ReturnMainPage" class="icon" style="cursor: pointer;">
        <svg width="120" height="60" viewBox="0 0 160 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0H160V80H0V0Z" fill="#0072AB"/>
          <path d="M28.744 48.16C27.576 48.16 26.568 48 25.72 47.68C24.872 47.344 24.168 46.888 23.608 46.312C23.064 45.72 22.656 45.024 22.384 44.224C22.128 43.408 22 42.512 22 41.536V31.192H25.744V41.224C25.744 41.896 25.816 42.472 25.96 42.952C26.12 43.416 26.328 43.8 26.584 44.104C26.856 44.392 27.176 44.6 27.544 44.728C27.928 44.856 28.344 44.92 28.792 44.92C29.704 44.92 30.44 44.64 31 44.08C31.576 43.52 31.864 42.568 31.864 41.224V31.192H35.608V41.536C35.608 42.512 35.472 43.408 35.2 44.224C34.928 45.04 34.512 45.744 33.952 46.336C33.392 46.912 32.68 47.36 31.816 47.68C30.952 48 29.928 48.16 28.744 48.16Z" fill="white"/>
          <path d="M51.1847 33.784C50.6727 34.312 50.0647 35 49.3607 35.848C48.6567 36.68 47.9287 37.592 47.1768 38.584C46.4248 39.576 45.6807 40.6 44.9447 41.656C44.2087 42.712 43.5527 43.72 42.9767 44.68H51.4488V47.824H38.3688V45.592C38.8168 44.776 39.3607 43.872 40.0007 42.88C40.6567 41.872 41.3368 40.864 42.0407 39.856C42.7447 38.832 43.4567 37.848 44.1768 36.904C44.9128 35.944 45.5928 35.088 46.2168 34.336H38.7528V31.192H51.1847V33.784Z" fill="white"/>
          <path d="M59.8812 48.04C58.9692 48.04 58.0572 48.008 57.1452 47.944C56.2492 47.896 55.3132 47.768 54.3372 47.56V31.432C55.1052 31.288 55.9452 31.184 56.8572 31.12C57.7692 31.04 58.6172 31 59.4012 31C60.4572 31 61.4252 31.08 62.3052 31.24C63.2012 31.384 63.9692 31.64 64.6092 32.008C65.2492 32.376 65.7452 32.864 66.0972 33.472C66.4652 34.064 66.6492 34.8 66.6492 35.68C66.6492 37.008 66.0092 38.056 64.7292 38.824C65.7852 39.224 66.5052 39.768 66.8892 40.456C67.2732 41.144 67.4652 41.92 67.4652 42.784C67.4652 44.528 66.8252 45.84 65.5452 46.72C64.2812 47.6 62.3932 48.04 59.8812 48.04ZM57.9852 40.576V44.872C58.2572 44.904 58.5532 44.928 58.8732 44.944C59.1932 44.96 59.5452 44.968 59.9292 44.968C61.0492 44.968 61.9532 44.808 62.6412 44.488C63.3292 44.168 63.6732 43.576 63.6732 42.712C63.6732 41.944 63.3852 41.4 62.8092 41.08C62.2332 40.744 61.4092 40.576 60.3372 40.576H57.9852ZM57.9852 37.72H59.8092C60.9612 37.72 61.7852 37.576 62.2812 37.288C62.7772 36.984 63.0252 36.504 63.0252 35.848C63.0252 35.176 62.7692 34.704 62.2572 34.432C61.7452 34.16 60.9932 34.024 60.0012 34.024C59.6812 34.024 59.3372 34.032 58.9692 34.048C58.6012 34.048 58.2732 34.064 57.9852 34.096V37.72Z" fill="white"/>
          <path d="M70.7022 47.824V31.192H81.9342V34.336H74.4462V37.6H81.0942V40.672H74.4462V44.68H82.4862V47.824H70.7022Z" fill="white"/>
          <path d="M95.3129 47.824C94.9769 47.28 94.5769 46.696 94.1129 46.072C93.6649 45.432 93.1689 44.8 92.6249 44.176C92.0969 43.536 91.5449 42.928 90.9689 42.352C90.3929 41.76 89.8169 41.24 89.2409 40.792V47.824H85.4969V31.192H89.2409V37.48C90.2169 36.456 91.1929 35.392 92.1689 34.288C93.1609 33.168 94.0809 32.136 94.9289 31.192H99.3689C98.2329 32.536 97.0889 33.832 95.9369 35.08C94.8009 36.328 93.6009 37.584 92.3369 38.848C93.6649 39.952 94.9449 41.264 96.1769 42.784C97.4249 44.304 98.6169 45.984 99.7529 47.824H95.3129Z" fill="white"/>
          <path d="M106.157 45.928C106.157 46.648 105.925 47.2 105.461 47.584C105.013 47.952 104.501 48.136 103.925 48.136C103.349 48.136 102.829 47.952 102.365 47.584C101.917 47.2 101.693 46.648 101.693 45.928C101.693 45.208 101.917 44.664 102.365 44.296C102.829 43.912 103.349 43.72 103.925 43.72C104.501 43.72 105.013 43.912 105.461 44.296C105.925 44.664 106.157 45.208 106.157 45.928Z" fill="white"/>
          <path d="M118.855 47.824C118.519 47.28 118.119 46.696 117.655 46.072C117.207 45.432 116.711 44.8 116.167 44.176C115.639 43.536 115.087 42.928 114.511 42.352C113.935 41.76 113.359 41.24 112.783 40.792V47.824H109.039V31.192H112.783V37.48C113.759 36.456 114.735 35.392 115.711 34.288C116.703 33.168 117.623 32.136 118.471 31.192H122.911C121.775 32.536 120.631 33.832 119.479 35.08C118.343 36.328 117.143 37.584 115.879 38.848C117.207 39.952 118.487 41.264 119.719 42.784C120.967 44.304 122.159 45.984 123.295 47.824H118.855Z" fill="white"/>
          <path d="M138.008 33.784C137.496 34.312 136.888 35 136.184 35.848C135.48 36.68 134.752 37.592 134 38.584C133.248 39.576 132.504 40.6 131.768 41.656C131.032 42.712 130.376 43.72 129.8 44.68H138.272V47.824H125.192V45.592C125.64 44.776 126.184 43.872 126.824 42.88C127.48 41.872 128.16 40.864 128.864 39.856C129.568 38.832 130.28 37.848 131 36.904C131.736 35.944 132.416 35.088 133.04 34.336H125.576V31.192H138.008V33.784Z" fill="white"/>
        </svg>
      </div>
      <div class="item">
        <div class="item-in">
          <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.6663 2.67969C11.525 2.67969 7.34338 6.86388 7.34338 12.0052C7.34338 17.9825 15.299 27.6922 15.6377 28.1016L16.6663 29.349L17.6949 28.1016C18.0336 27.6909 25.9892 17.9825 25.9892 12.0052C25.9892 6.86254 21.8076 2.67969 16.6663 2.67969ZM16.6663 5.34635C20.337 5.34635 23.3226 8.33454 23.3226 12.0052C23.3225 15.6119 19.1703 21.8149 16.6663 25.1016C14.1623 21.8176 10.0101 15.6172 10.0101 12.0052C10.0101 8.33454 12.9956 5.34635 16.6663 5.34635ZM16.6663 8.66667C14.825 8.66667 13.333 10.1587 13.333 12C13.333 13.8413 14.825 15.3333 16.6663 15.3333C18.5076 15.3333 19.9996 13.8413 19.9996 12C19.9996 10.1587 18.5076 8.66667 16.6663 8.66667Z" fill="#CFD3DA"/>
          </svg>
          <p>{{contact_line.address}}</p>
        </div>
        <div class="item-in">
          <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_345_284)">
              <path d="M19.7624 14.1333L15.3874 12.2583C15.2005 12.1787 14.9928 12.1619 14.7956 12.2105C14.5983 12.2591 14.4222 12.3705 14.2937 12.5279L12.3562 14.8951C9.31545 13.4614 6.86837 11.0143 5.43469 7.97358L7.80188 6.03608C7.95957 5.90783 8.07117 5.73169 8.11981 5.53434C8.16844 5.33699 8.15145 5.12916 8.07141 4.94233L6.19641 0.567328C6.10856 0.365925 5.9532 0.201486 5.7571 0.102366C5.561 0.0032464 5.33645 -0.0243417 5.12219 0.0243589L1.05969 0.961859C0.853118 1.00956 0.668812 1.12587 0.536855 1.29181C0.404898 1.45775 0.333082 1.66352 0.33313 1.87553C0.33313 11.8951 8.45422 20.0005 18.4581 20.0005C18.6702 20.0007 18.8761 19.9289 19.0421 19.7969C19.2081 19.665 19.3245 19.4806 19.3722 19.274L20.3097 15.2115C20.3581 14.9962 20.3299 14.7707 20.23 14.5739C20.1301 14.3772 19.9648 14.2214 19.7624 14.1333Z" fill="#CFD3DA"/>
            </g>
            <defs>
              <clipPath id="clip0_345_284">
                <rect width="20" height="20" fill="white" transform="translate(0.33313)"/>
              </clipPath>
            </defs>
          </svg>
          <div style="display: flex; flex-direction: column; gap: 10px">
            <p style="margin: 0">{{ contact_line.phone1 }}</p>
            <p style="margin: 0">{{ contact_line.phone2 }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="text-line">
      <div class="text-end">{{ getTranslations.footerNote1 || '{ footerNote1 }' }}</div>
      <div class="text-line">
        <div class="text-end">{{ getTranslations.footerNote2 || '{ footerNote2 }' }}</div>
        <div class="text-end">{{ getTranslations.footerNote3 || '{ footerNote3 }' }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  background-color: #F7F8FA;
  padding: 56px 108px;
  gap: 3rem;

  .content-line-mobile {
    display: none;
  }
  /* links */

  .content {
    display: flex;
    justify-content: space-between;
  }

  /* address and contacts */

  .content-line {
    display: flex;
    align-items: center;
    border-top: 1px solid #EBEEF0;
    border-bottom: 1px solid #EBEEF0;

    .item {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .item-in {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        width: 40vw;
        margin: 0 auto;
      }
    }
  }

  /* footer notes */

  .text-line {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #575F6C;

    .text-end + .text-end {
      margin-left: 3rem;
    }
  }
}

@media (max-width: 1024px) {
  .main {
    padding: 30px 50px;
    gap: 1.5rem;

    .content {
      display: grid;
      grid-template-columns: repeat(auto-fill,
      minmax(230px, 1fr));
      grid-gap: 10px;
    }
  }
}
@media (max-width: 768px) {
  .main {
    padding: 30px;
    .content-line-mobile {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      .item-for-mobile {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .item-in-for-mobile {
          display: flex;
          align-items: center;
          gap: 1rem
        }
      }
    }

    .content {
      margin: 1.5rem 0;
      .hidden-bar {
        display: none;
      }
    }
    .content-line {
      display: none;
    }

    .text-line {
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 18px;

      .text-end + .text-end {
        margin-left: 0;
      }
    }
  }
}
</style>