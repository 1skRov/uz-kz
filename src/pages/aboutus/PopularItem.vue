<script>
import BasicButton from "@/components/Buttons/button_basic.vue";

export default {
  name: "PopularItem",
  components: { BasicButton },
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  data(){
    return {
      windowWidth: window.innerWidth,
    }
  },
  computed: {
    isMobile() {
      return this.windowWidth <= 1024;
    },
  },
  methods: {
    handleMainClick() {
      if (this.isMobile) {
        this.openDetails();
      }
    },
    openDetails() {
      this.$router.push({
        name: "FamousPersonDetails",
        params: { id: this.id },
        query: { name: this.name, text: this.text },
      });
    },
    updateWindowWidth() {
      this.windowWidth = window.innerWidth;
    },
  },
  mounted() {
    window.addEventListener("resize", this.updateWindowWidth);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateWindowWidth);
  },
};
</script>

<template>
  <div class="main" @click="handleMainClick">
    <div class="left-img">
      <img
          src="@/assets/images/1.png"
          alt="Person Image"
          style="width: 100%; height: 100%; object-fit: cover;"
      />
    </div>
    <div class="right-content">
      <p class="font-gilroy">{{ name }}</p>
      <span class="truncate-text-line">{{ text }}</span>
      <div class="btn">
        <basic-button :is-blue="true" @click="openDetails" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  width: 100%;
  border-radius: 8px;
  background-color: #FAFCFD;
  border: 1px solid #EBEEF0;
  display: flex;
  overflow: hidden;
}
.left-img {
  width: 15%;
  min-width: 15%;
  max-width: 25%;
  flex-shrink: 0;
  height: auto;
}
.right-content {
  display: flex;
  flex-direction: column;
  padding: 20px 35px;
  gap: 1rem;
}
p {
  font-size: 32px;
  margin: 0;
  font-weight: 500;
}
span {
  color: #575F6C;
}
@media (max-width: 1024px) {
  .left-img {
    width: 20%;
  }

  p {
    font-size: 28px;
  }

  .btn {
    display: none;
  }
}

@media (max-width: 768px) {
  .main {
    flex-direction: column;
    overflow: hidden;
  }
  .left-img {
    height: 15rem;
    width: 100%;
    max-width: 100%;
    min-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  p {
    font-size: 18px;
  }
  .right-content {
    padding: 15px 20px;
  }
}
</style>
