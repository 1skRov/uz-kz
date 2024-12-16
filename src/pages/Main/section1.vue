<script>
import SideBar from "@/pages/Main/SideBar.vue";
import Button_basic from "@/components/Buttons/button_basic.vue";
import Dialog from "@/components/Dialog.vue";

export default {
  name: "section1",
  components: {Dialog, Button_basic, SideBar},
  data() {
    return {
      page: "01",
      title:"«Ассоциация этнокультурных объединений узбеков Республики Казахстан «Дустлик»",
      desc: "Для узбекской общины в Казахстане единство это основа нашего общего будущего и залог процветания и развития нашего народа.",
      btn_title:"СТать членов ассоциации",
      images: [
        require("@/assets/images/help.png"),
        require("@/assets/images/help.png"),
        require("@/assets/images/help.png"),
        require("@/assets/images/help.png"),
      ],
    };
  },
  methods: {
    openModal() {
      this.$router.push('/member-association')
    },
  }
}
</script>

<template>
<div style="display: flex">
  <side-bar :page="page" />
  <div class="content">
    <div class="tablet-space">
      <div class="tablet-space-img">
        <div class="image-grid">
          <div class="large-image">
            <img :src="images[0]" alt="Large image" />
          </div>
          <div class="small-images">
            <img v-for="(image, index) in images.slice(1, 4)" :key="index" :src="image" alt="Small image" />
          </div>
        </div>
      </div>
      <div class="backdrop-blur-container">
        <div style="position: relative; z-index: 40;">
          <h1 class="font-gilroy" style="word-wrap: break-word;">
            {{ title }}
          </h1>
          <p>
            {{ desc}}
          </p>
        </div>
        <div>
          <Button_basic :title_button="btn_title" @click="openModal"/>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.content {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
}
.tablet-space {
  position:relative;
  width:100%;

  .tablet-space-img {
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 69px 0;

    .image-grid {
      display: grid;
      grid-template-columns: 3fr 1fr;
      //grid-template-rows: repeat(2, 1fr); /* Три строки */
      gap: 10px;
      height: 100%; /* Высота сетки */
      width: 70%;
      justify-content: end;
    }



    .large-image img,
    .small-images img {
      width: 100%;
      height: 100%;
      object-fit: cover; /* Изображения заполняют блок без искажений */
      border-radius: 8px;
    }

    .small-images {
      display: grid;
      grid-template-rows: repeat(3, 1fr);
      gap: 10px; /* Отступы между изображениями */
    }

    .small-images img {
      height: 100%;
    }
  }

  .backdrop-blur-container {
    background-color: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
    padding: 40px 80px;
    border-radius: 0 8px 8px 0;
    border-left: 1px solid #0072AB;
    overflow: hidden;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 40%;

    h1 {
      font-size: 40px;
      line-height: 52px;
      font-weight: 500;
    }
    p {
      font-size: 14px;
      margin-top: 24px;
      margin-bottom: 40px;
      color:#575F6C;
      line-height: 32px;
      word-wrap: break-word;
    }
  }
}
</style>