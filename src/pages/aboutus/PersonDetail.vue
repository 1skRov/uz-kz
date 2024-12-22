<script>
export default {
  name: "PersonDetails",
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      name: this.$route.query.name || '',
      text: this.$route.query.text || '',
    };
  },
  methods: {
    closeModal() {
      this.$router.go(-1);
    },
  }
};
</script>

<template>
  <div class="dialog-overlay">
    <div class="dialog-content">
      <div class="left">
        <div class="left-image">
          <img src="@/assets/images/img.png" alt="person" />
        </div>
      </div>
      <div class="right">
        <button class="close-btn" @click="closeModal">&times;</button>
        <div class="over">
          <div class="dialog-title font-gilroy">{{ name }}</div>
          <div class="job">Председатель, член АНК, член НЭС АНК</div>
          <div class="dialog-text">{{ text }}{{ text }}{{ text }}{{ text }}{{ text }}{{ text }}{{ text }}{{ text }}{{ text }}{{ text }}{{ text }}{{ text }}{{ text }}{{ text }}{{ text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dialog-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.dialog-content {
  display: flex;
  background: white;
  border-radius: 8px;
  width: 80%;
  max-width: 80vw;
  max-height: 70vh;
  padding: 20px;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

.left {
  flex-basis: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 10px;
}

.left-image {
  width: 100%;
  height: 50vh;
  border-radius: 8px;
  overflow: hidden;
}

.left img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.right {
  flex-basis: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 10px;
  overflow-y: auto;
  max-height: 60vh;
  margin-top: 30px;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 35px;
  cursor: pointer;
}

.dialog-title {
  font-weight: 500;
  font-size: 40px;
  margin-bottom: 10px;
}
.job {
  margin-bottom: 15px;
}

.dialog-text {
  line-height: 2rem;
  color: #333;
}
@media (max-width: 1024px) {
  .dialog-title {
    font-size: 28px;
  }
}

@media (max-width: 768px) {
  .dialog-content {
    display: flex;
    flex-direction: column;
  }

  .left {
    padding: 20px 0 0 0;
  }

  .left-image {
    width: 100%;
    height: 20vh;
  }

  .right {
    flex-basis: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    overflow-y: auto;
    max-height: 60vh;
    margin-top: 10px;
  }
  .dialog-title {
    font-size: 24px;
  }
}
</style>
