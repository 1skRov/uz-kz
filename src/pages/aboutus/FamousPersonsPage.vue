<script>
import SideBar from "@/components/SideBarText.vue";
import Sections from "@/components/Sections.vue";
import Left from "@/components/Buttons/left.vue";
import Right from "@/components/Buttons/right.vue";
import PopularItem from "@/pages/aboutus/PopularItem.vue";
export default {
  name: "FamousPersonsPage",
  components: {PopularItem, SideBar, Left, Right, Sections},
  data(){
    return{
      title: "Известные личности",
      persons: [
        {
          id: 1,
          name: "Иван Иванов",
          description: "Известный ученый, внесший большой вклад в развитие физики.внесший большой вклад в развитие физикивнесший большой вклад в развитие физикивнесший большой вклад в развитие физикивнесший большой вклад в развитие физикивнесший большой вклад в развитие физикивнесший большой вклад в развитие физики",
          image: "@/assets/images/ivan.jpg"
        },
        {
          id: 2,
          name: "Мария Петрова",
          description: "Выдающаяся художница, известная своими абстрактными картинами.",
          image: "@/assets/images/maria.jpg"
        },
        {
          id: 3,
          name: "Алексей Сидоров",
          description: "Талантливый музыкант, который получил мировое признание.",
          image: "@/assets/images/alexey.jpg"
        },
        {
          id: 4,
          name: "Ольга Смирнова",
          description: "Писательница, чьи романы переведены на десятки языков.",
          image: "@/assets/images/olga.jpg"
        },
        {
          id: 5,
          name: "Дмитрий Кузнецов",
          description: "Инноватор и предприниматель в области технологий.",
          image: "@/assets/images/dmitry.jpg"
        }
      ]
    }
  }
}
</script>

<template>
  <div style="display: flex">
    <side-bar :title="title"></side-bar>
    <div class="persons">
      <sections>
        <template #title>{{title}}</template>
        <template #title-button>
          <div class="btn">
            <left/>
            <right/>
          </div>
        </template>
        <template #content>
          <div class="content">
            <popular-item
                v-for="person in persons"
                :key="person.id"
                :id="person.id"
                :name="person.name"
                :text="person.description"
            />
          </div>
        </template>
        <template #btn>
          <div class="btn">
            <left/>
            <right/>
          </div>
        </template>
      </sections>
    </div>
  </div>
</template>

<style scoped>
.btn {
  display: flex;
  gap: 1rem;
  align-items: center;
}
.persons {
  width: 65%;
  margin: 0 auto;
}
.content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
@media (max-width: 1024px) {
  .persons {
    width: 90%;
  }
}

@media (max-width: 768px) {

}
</style>