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
      btn_title:"Стать членов ассоциации",
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
        <div style="position: relative; z-index: 2;">
          <h1 class="font-gilroy title" style="word-wrap: break-word;">
            {{ title }}
          </h1>
          <p class="desc">
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
      gap: 10px;
      height: 100%;
      width: 70%;
      justify-content: end;
    }



    .large-image img,
    .small-images img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 8px;
    }

    .small-images {
      display: grid;
      grid-template-rows: repeat(3, 1fr);
      gap: 10px;
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

    .title {
      font-size: 40px;
      line-height: 52px;
      font-weight: 500;
    }
    .desc {
      font-size: 14px;
      margin-top: 24px;
      margin-bottom: 40px;
      color:#575F6C;
      line-height: 32px;
      word-wrap: break-word;
    }
  }
}

@media (max-width: 1024px) {
  .content {
    width: 90%;
  }
  .tablet-space {
    .tablet-space-img {
      padding: 40px 0;
      .image-grid {
        height: 100%;
        width: 95%;
      }
    }
  }
  .tablet-space {
    .backdrop-blur-container {
      padding: 40px;
      width: 60%;

      .title {
        font-size: 28px;
        line-height: 36px;
        margin: 0;
      }

      .desc {
        font-size: 14px;
        margin-top: 15px;
        margin-bottom: 30px;
        line-height: 28px;
      }
    }
  }
}

@media (max-width: 768px) {
  .content {
    width: 100%;
  }
  .tablet-space {
    margin-bottom: 40vh;
    .tablet-space-img {
      padding: 0;
      .image-grid {
        grid-template-columns: 1fr;
        width: 100%;
      }

      .small-images {
        display: none;
      }

    }

    .backdrop-blur-container {
      left: 50% ;
      transform: translateX(-50%);
      padding: 30px 20px;
      border-radius: 8px;
      width: 75%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      border: none;

      .title {
        font-size: 24px;
        line-height: 40px;
      }
      .desc {
        font-size: 12px;
        margin: 20px 0;
        line-height: 30px;
      }
    }
  }
}
</style>