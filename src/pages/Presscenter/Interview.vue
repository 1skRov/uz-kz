<script>
import Sections from "@/components/Sections.vue";
import Right from "@/components/Buttons/right.vue";
import Left from "@/components/Buttons/left.vue";
import BasicButton from "@/components/Buttons/button_basic.vue";

export default {
  name: "Interview",
  components: {BasicButton, Left, Right, Sections},
  data() {
    return {
      title: "Интервью",
      text:"Благотворительные инициативы общества собирают с каждым разом всё больше участников, которые приносят лекарства, одежду, продукты, игрушки. Эти простые вещи обладают добавочной ценностью — они несут в себе тепло, заботу и стремление облегчить и украсить жизнь людей, находящихся в трудной жизненной ситуации.",
      author: "author"
    }
  }
}
</script>

<template>
  <div class="content">
    <div style="display: flex; flex-direction: column; gap: 3.5rem; padding: 3rem; width: 50%">
      <div class="title font-gilroy">{{title}}</div>
      <div class="text"> {{text}}</div>
<!--      <div class="author"> {{author}}</div>-->
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