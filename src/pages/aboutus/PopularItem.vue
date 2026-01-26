<script>
import BasicButton from "@/components/Buttons/button_basic.vue";
import { BASE_URL } from "@/axios";
import { slugify } from "@/utils/slugify";

export default {
  name: "PopularItem",
  components: { BasicButton },
  props: {
    img: "",
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
    btn_title: {
      type: String,
    },
    position: "",
    route_name: {
      type: String,
      default: "FamousPersonDetails",
    },
  },
  data() {
    return {
      windowWidth: window.innerWidth,
      BASE_URL,
    };
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
      const slug = slugify(this.name);
      this.$router.push({
        name: this.route_name,
        params: { id: this.id, slug: slug },
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
  <div class="popular-wrapper" @click="handleMainClick">
    <div class="left-img">
      <img :src="BASE_URL + img" alt="Person Image" style="" />
    </div>
    <div class="right-content">
      <p class="font-gilroy">{{ name }}</p>
      <div class="truncate-text-line description" v-html="text"></div>
      <div class="btn">
        <basic-button :is-blue="true" @click="openDetails" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.popular-wrapper {
  width: 100%;
  height: 240px;
  border-radius: 8px;
  background-color: #fafcfd;
  border: 1px solid #ebeef0;
  display: flex;
  overflow: hidden;
}

.left-img {
  width: 184px;
  min-width: 184px;
  flex-shrink: 0;
  height: 100%;
}

.left-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.right-content {
  display: flex;
  flex-direction: column;
  padding: 30px;
  justify-content: space-between;
}

.right-content p {
  font-size: 32px;
  margin: 0;
  font-weight: 500;
  line-height: 120%;
}

.description {
  color: #575f6c;
  line-height: 150%;
  font-size: 18px !important;
}

@media (max-width: 1024px) {
  .popular-wrapper {
    height: 180px;
  }

  .left-img {
    width: 140px;
    min-width: 140px;
  }

  .left-img img {
    object-position: top;
  }

  .right-content p {
    font-size: 28px;
  }

  .btn {
    display: none;
  }

  .right-content {
    padding: 20px;
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .popular-wrapper {
    flex-direction: column;
    overflow: hidden;
    height: 300px;
  }

  .left-img {
    height: 220px;
    width: 100%;
    min-width: 100%;
  }

  .right-content p {
    font-size: 18px;
    margin-bottom: 5px;
  }

  .right-content {
    padding: 10px;
  }

  .description {
    font-size: 12px !important;
  }

  .description :deep(p) {
    margin: 0;
  }
}
</style>
