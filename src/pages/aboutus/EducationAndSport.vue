<script>
import Sections from "@/components/Sections.vue";
import buttonBasic from "@/components/Buttons/button_basic.vue"
import api, {BASE_URL} from "@/axios";
import {mapGetters} from "vuex";
export default {
  name: "EducationAndSport",
  components: {Sections, buttonBasic},
  props:{
    data_ed: {
      type: String,
      required: true,
      default: "{{ education }}"
    },
    data_sp: {
      type: String,
      required: true,
      default: "{{ sport }}"
    },
    btn_title: {
      type: String,
      default: "{{ more_detail }}"
    }
  },
  data() {
    return{
      ed: {},
      sp: {},
    }
  },
  computed: {
    ...mapGetters(['currentLanguage']),
  },
  watch: {
    currentLanguage(newLang) {
      this.getEducation();
      this.getSport();
    },
  },
  mounted() {
    this.getEducation();
    this.getSport();
  },
  methods: {
    getEducation() {
      api.get(`/education/?lang_code=${this.currentLanguage}`)
          .then((response) => {
            const arr = response.data;
            if (Array.isArray(arr) && arr.length > 0) {
              this.ed = arr[0];
            } else {this.ed= {}}
          })
          .catch((error) => {
            console.error(error);
          });
    },
    getSport() {
      api.get(`/sport/?lang_code=${this.currentLanguage}`)
          .then((response) => {
            const arr = response.data;
            if (Array.isArray(arr) && arr.length > 0) {
              this.sp = arr[0];
            } else {this.sp = {}}
          })
          .catch((error) => {
            console.error(error);
          });
    },
    goToEducation() {
      this.$router.push('/education')
    },
    goToSport() {
      this.$router.push('/sport')
    }
  }
}
</script>

<template>
<div>
  <sections>
    <template #content>
      <div class="content">
        <div class="ed">
          <div class="icon">
            <svg viewBox="0 0 205 165" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M77.7307 76.4656L59.6196 81.3184C56.2854 82.2118 54.3068 85.6389 55.2001 88.9731L81.082 185.566C81.9754 188.9 85.4025 190.878 88.7367 189.985L106.848 185.132C110.182 184.239 112.161 180.812 111.267 177.478L85.3853 80.885C84.4919 77.5508 81.0648 75.5722 77.7307 76.4656Z" stroke="#EBEEF0" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M156.212 55.4363L138.101 60.2891C134.767 61.1825 132.788 64.6096 133.682 67.9438L159.563 164.536C160.457 167.871 163.884 169.849 167.218 168.956L185.329 164.103C188.663 163.21 190.642 159.782 189.749 156.448L163.867 59.8557C162.973 56.5215 159.546 54.5429 156.212 55.4363Z" stroke="#EBEEF0" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M167.102 71.9297L185.213 67.0768C186.814 66.6478 188.52 66.8724 189.956 67.7012C191.391 68.53 192.439 69.8951 192.868 71.4962L209.044 131.867C209.473 133.468 209.248 135.174 208.42 136.609C207.591 138.045 206.226 139.092 204.625 139.521L186.513 144.374" stroke="#EBEEF0" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M77.8469 173.492L59.7358 178.344C58.1347 178.773 56.4287 178.549 54.9932 177.72C53.5577 176.891 52.5102 175.526 52.0812 173.925L35.905 113.555C35.476 111.953 35.7005 110.248 36.5294 108.812C37.3582 107.376 38.7233 106.329 40.3244 105.9L58.4355 101.047" stroke="#EBEEF0" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M98.3264 129.181L146.623 116.24" stroke="#EBEEF0" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M200.956 101.682L213.03 98.4464" stroke="#EBEEF0" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M31.9189 146.975L43.993 143.74" stroke="#EBEEF0" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div style="display: flex; flex-direction: column; gap: 2rem; z-index: 200">
            <div class="title font-gilroy">{{data_ed}}</div>
            <div class="text" v-html="ed.mini_desc"></div>
            <div class="btn" style="color: #FFFFFF">
              <buttonBasic :title_button="btn_title" :is-blue="true" @click="goToEducation" style="color: #FFFFFF"></buttonBasic>
            </div>
          </div>
        </div>
        <div class="sp">
          <div class="icon">
            <svg viewBox="0 0 205 165" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.4485 122.827L103.063 50.2665L206.56 74.2985L128.945 146.859L25.4485 122.827Z" stroke="#EBEEF0" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M190.399 195.097L167.752 110.579L116.004 98.5625" stroke="#EBEEF0" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M188.443 91.2039L199.483 132.407C199.821 133.69 199.731 135.049 199.226 136.277C195.99 144.423 181.19 174.918 139.459 186.1C97.7284 197.281 69.6647 178.272 62.7888 172.835C61.7377 172.024 60.9801 170.893 60.6311 169.612L49.5908 128.409" stroke="#EBEEF0" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div style="display: flex; flex-direction: column; gap: 2rem">
            <div class="title font-gilroy">{{data_sp}}</div>
            <div class="text" v-html="sp.mini_desc"></div>
            <div class="btn">
              <buttonBasic :title_button="btn_title" :is-blue="true" @click="goToSport"></buttonBasic>
            </div>
          </div>
        </div>
      </div>
    </template>
  </sections>
</div>
</template>

<style scoped>
.content {
  width: 100%;
  display: flex;
  gap: 2rem;
}

.ed, .sp {
  width: 50%;
  border: 1px solid #EBEEF0;
  border-radius: 8px;
  position: relative;
  padding: 2.5rem;
  background-color: rgba(0, 114, 171, 0.02);
}

.icon{
  position: absolute;
  bottom:0;
  right:0;
  z-index: 0;
  width: 205px;
  height: 165px
}

.title {
  font-size: 40px;
  line-height: 50px;
}

.text {
  line-height: 38px;
}

@media (max-width: 1024px) {
  .title {
    font-size: 28px;
    line-height: 32px;
  }

  .text {
    line-height: 28px;
  }

  .icon {
    width: 150px;
    height: 120px
  }
}

@media (max-width: 768px) {
  .content {
    display: flex;
    flex-direction: column;
  }

  .title {
    font-size: 24px;
    line-height: 28px;
  }

  .text {
    line-height: 28px;
  }

  .ed, .sp {
    width: 83%;
  }
}
</style>