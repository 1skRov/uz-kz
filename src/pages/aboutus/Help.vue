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
    <div style="display: flex; flex-direction: column; gap: 3.5rem; padding: 3rem; width: 50%">
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
      <img src="@/assets/images/3.png" alt="help" class="responsive-image">
    </div>
  </div>
</template>

<style scoped>
.content {
  border: 1px solid #EBEEF0;
  border-radius: 8px;
  display: flex;
}

.title {
  font-size: 40px;
  line-height: 42px;
}

.text {
  line-height: 35px;
}

.btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.image-container {
  width: 50%;
  display: flex;
  flex-shrink:1;
  justify-content: center;
}

.responsive-image {
  width: auto;
  height: auto;
}
</style>