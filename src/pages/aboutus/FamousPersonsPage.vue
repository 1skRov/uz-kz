<script>
import SideBar from "@/components/SideBarText.vue";
import Sections from "@/components/Sections.vue";
import Left from "@/components/Buttons/left.vue";
import Right from "@/components/Buttons/right.vue";
import PopularItem from "@/pages/aboutus/PopularItem.vue";
import api from "@/axios";
import { mapGetters } from "vuex";

export default {
  name: "FamousPersonsPage",
  components: { PopularItem, SideBar, Left, Right, Sections },
  data() {
    return {
      persons: [],
      visibleCount: 6,
      step: 3,
      observer: null,
    };
  },
  computed: {
    ...mapGetters(["currentLanguage", "getTranslations"]),
    visiblePersons() {
      return this.persons.slice(0, this.visibleCount);
    },
    hasMore() {
      return this.visibleCount < this.persons.length;
    },
  },
  watch: {
    currentLanguage() {
      this.getPersons();
    },
  },
  mounted() {
    this.getPersons();

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.loadMore();
        }
      },
      {
        root: null,
        rootMargin: "200px",
        threshold: 0,
      },
    );

    this.$nextTick(() => {
      if (this.$refs.loadTrigger) {
        this.observer.observe(this.$refs.loadTrigger);
      }
    });
  },

  beforeDestroy() {
    if (this.observer) this.observer.disconnect();
  },
  methods: {
    getPersons() {
      api
        .get(`/famous-persons/?lang_code=${this.currentLanguage}`)
        .then((res) => {
          this.persons = res.data;
          this.visibleCount = 6; // сброс
        })
        .catch(console.error);
    },

    loadMore() {
      if (!this.hasMore) return;
      this.visibleCount += this.step;
    },
  },
};
</script>

<template>
  <div class="famous-wrapper">
    <side-bar
      class="side"
      :title="getTranslations.popular_side || '{ popular_side }'"
    ></side-bar>
    <div class="persons">
      <sections>
        <template #title
          >{{ getTranslations.popular_persons || "{ popular_persons }" }}
        </template>
        <template #content>
          <div class="content">
            <popular-item
              v-for="person in visiblePersons"
              :key="person.id"
              :id="person.id"
              :name="person.sur_name"
              :text="person.desc"
              :img="person.image"
              :position="person.position"
              :btn_title="getTranslations.popular_person"
            />
          </div>
        </template>
      </sections>
    </div>
  </div>
</template>

<style scoped>
.famous-wrapper {
  display: flex;
  position: relative;
}

.persons {
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
</style>
