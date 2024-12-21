<script>
import Left from "@/components/Buttons/left.vue";
import Right from "@/components/Buttons/right.vue";
import BasicButton from "@/components/Buttons/button_basic.vue";

export default {
  name: "Help",
  components: {BasicButton, Right, Left},
  data() {
    return {
      title: "Помощь нуждающимся",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis consectetur nisi, vel bibendum arcu. Nulla facilisi. Sed condimentum, neque vel bibendum fermentum, lectus massa eleifend ex, vel sagittis nisi arcu ac arcu.",
      bth_title: "подробнее"
    };
  }
}
</script>

<template>
  <div class="content">
    <div class="text-container">
      <div class="title font-gilroy">{{title}}</div>
      <div class="text"> {{text}}</div>
      <div class="btn">
        <basic-button :title_button="bth_title" :is-blue="true"/>
        <div style="display: flex; gap: 1rem">
          <left/>
          <right/>
        </div>
      </div>
    </div>
    <div class="image-container">
      <img src="@/assets/images/help.png" alt="help" class="responsive-image">
    </div>
  </div>
</template>

<style scoped>
.content {
  border: 1px solid #EBEEF0;
  border-radius: 8px;
  display: flex;
  background-color: rgba(0, 114, 171, 0.02);
  overflow: hidden;
}

.title {
  font-size: 40px;
  line-height: 42px;
  font-weight: 500;
}

.text {
  line-height: 35px;
}

.btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.text-container {
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  padding: 50px;
  width: 50%;
  box-sizing: border-box;
}
.image-container {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.responsive-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  max-width: 100%;
}
@media (max-width: 1024px) {
  .title {
    font-size: 28px;
    line-height: 32px;
  }

  .text {
    line-height: 28px;
  }
}

@media (max-width: 768px) {
  .content {
    display: flex;
    flex-direction: column;
  }
  .text-container {
    width: 100%;
    padding: 30px;
  }
  .image-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .responsive-image {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
}
</style>