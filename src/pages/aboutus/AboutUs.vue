<script setup>
import {
  computed,
  nextTick,
  onBeforeUnmount,
  onMounted,
  reactive,
  ref,
  watch,
} from "vue";
import { useStore } from "vuex";

import WhoWeaAre from "@/pages/aboutus/WhoWeaAre.vue";
import OurHistory from "@/pages/aboutus/OurHistory.vue";
import CultureAndTraditions from "@/pages/aboutus/CultureAndTraditions.vue";
import PopularPersons from "@/pages/aboutus/PopularPersons.vue";
import YouthOrganization from "@/pages/aboutus/YouthOrganization.vue";
import EducationAndSport from "@/pages/aboutus/EducationAndSport.vue";
import Help from "@/pages/aboutus/Help.vue";

const store = useStore();
const getTranslations = computed(() => store.getters.getTranslations);

const sectionDefs = computed(() => [
  {
    key: "who_we_are",
    comp: WhoWeaAre,
    props: () => ({ title: getTranslations.value.who_we_are }),
  },
  {
    key: "our_history",
    comp: OurHistory,
    props: () => ({ title: getTranslations.value.our_history }),
  },
  {
    key: "culture_traditions",
    comp: CultureAndTraditions,
    props: () => ({ title: getTranslations.value.culture_traditions }),
    wrap: "cultureWrap",
  },
  {
    key: "popular_persons",
    comp: PopularPersons,
    props: () => ({
      title: getTranslations.value.popular_persons,
      btn_title: getTranslations.value.learn_more,
    }),
  },
  {
    key: "youth_organizations",
    comp: YouthOrganization,
    props: () => ({
      title: getTranslations.value.youth_organizations,
      btn_title: getTranslations.value.more_detail,
    }),
  },
  {
    key: "education",
    comp: EducationAndSport,
    props: () => ({
      data_ed: getTranslations.value.education,
      data_sp: getTranslations.value.sport,
      btn_title: getTranslations.value.more_detail,
    }),
  },
  {
    key: "help",
    comp: Help,
    props: () => ({
      title: getTranslations.value.help,
      btn_title: getTranslations.value.more_detail,
    }),
  },
]);

const navLabels = computed(() =>
  sectionDefs.value.map((s) => getTranslations.value?.[s.key] ?? s.key),
);

const sectionRefs = ref([]);
const dotRefs = ref([]);
const currentIndex = ref(0);

const tooltip = reactive({
  top: 0,
  left: 0,
  visible: true,
});

let observer = null;
const stateByIdx = new Map();
function setupObserver() {
  if (observer) observer.disconnect();
  stateByIdx.clear();

  observer = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        const idx = Number(e.target.dataset.index);
        stateByIdx.set(idx, {
          is: e.isIntersecting,
          ratio: e.intersectionRatio,
          top: e.boundingClientRect.top,
        });
      }

      // ВАЖНО: выбираем активную среди ВСЕХ intersecting
      const candidates = [...stateByIdx.entries()]
        .filter(([, v]) => v.is)
        .map(([idx, v]) => ({ idx, ...v }));

      if (!candidates.length) return;

      candidates.sort((a, b) => b.ratio - a.ratio || a.top - b.top);
      currentIndex.value = candidates[0].idx;
    },
    {
      threshold: [0, 0.15, 0.25, 0.35, 0.5, 0.65],
      rootMargin: "-20% 0px -55% 0px", // можно оставить твой, но 0 в threshold добавь обязательно
    },
  );

  sectionRefs.value.forEach((el) => el && observer.observe(el));
}

function updateTooltipPosition() {
  const dot = dotRefs.value[currentIndex.value];
  if (!dot) return;

  const r = dot.getBoundingClientRect();

  tooltip.top = Math.round(r.top + r.height / 2);
  tooltip.left = Math.round(r.right + 14);
}

function scrollToSection(index) {
  const el = sectionRefs.value[index];
  if (!el) return;

  const headerOffset = 110;
  const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;

  window.scrollTo({ top: y, behavior: "smooth" });
}

function onResizeOrScroll() {
  updateTooltipPosition();
}

onMounted(async () => {
  await nextTick();
  setupObserver();
  updateTooltipPosition();
  window.addEventListener("resize", onResizeOrScroll, { passive: true });
  window.addEventListener("scroll", onResizeOrScroll, { passive: true });
});

onBeforeUnmount(() => {
  if (observer) observer.disconnect();
  window.removeEventListener("resize", onResizeOrScroll);
  window.removeEventListener("scroll", onResizeOrScroll);
});

watch(currentIndex, async () => {
  await nextTick();
  updateTooltipPosition();
});
</script>

<template>
  <div class="about">
    <aside class="side-nav" aria-label="About sections navigation">
      <div class="side-nav__inner">
        <ul class="dots" role="list">
          <li v-for="(_, index) in navLabels" :key="index" class="dots__item">
            <button
              class="dot"
              :class="{ 'dot--active': currentIndex === index }"
              :aria-current="currentIndex === index ? 'true' : 'false'"
              type="button"
              @click="scrollToSection(index)"
              :ref="(el) => (dotRefs[index] = el)"
            >
              <span class="dot__inner" />
            </button>
          </li>
        </ul>

        <teleport to="body">
          <div
            v-show="tooltip.visible"
            class="dot-tooltip"
            :style="{
              top: tooltip.top + 'px',
              left: tooltip.left + 'px',
              transform: 'translateY(-50%)',
            }"
          >
            {{ navLabels[currentIndex] }}
          </div>
        </teleport>
      </div>
    </aside>

    <main class="content">
      <template v-for="(sec, index) in sectionDefs" :key="sec.key">
        <section v-if="sec.wrap === 'cultureWrap'" class="culture-wrap">
          <div class="culture-wrap__decor culture-wrap__decor--bottom">
            <img src="@/assets/images/cult-bottom.png" alt="" />
          </div>
          <div class="culture-wrap__decor culture-wrap__decor--top">
            <img src="@/assets/images/cult-top.png" alt="" />
          </div>

          <div
            class="section"
            :data-index="index"
            :ref="(el) => (sectionRefs[index] = el)"
          >
            <component :is="sec.comp" v-bind="sec.props()" />
          </div>
        </section>

        <div
          v-else
          class="section"
          :data-index="index"
          :ref="(el) => (sectionRefs[index] = el)"
        >
          <component :is="sec.comp" v-bind="sec.props()" />
        </div>
      </template>
    </main>
  </div>
</template>

<style scoped>
.about {
  position: relative;
  width: 100%;
}

.side-nav {
  position: absolute;
  top: 0;
  left: 0;
  width: 160px;
  height: 100%;
  border-right: 1px solid var(--color-gray-main);
  z-index: 50;
}

.side-nav__inner {
  position: sticky;
  top: 120px;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.dots {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.dot {
  width: 30px;
  height: 30px;
  border-radius: 999px;
  border: 1px solid var(--color-gray-main);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    transform 0.2s ease;
}

.dot__inner {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: #575f6c;
  transition:
    background-color 0.2s ease,
    transform 0.2s ease;
}

.dot--active {
  border-color: rgba(0, 114, 171, 0.25);
  transform: scale(1.06);
}

.dot--active .dot__inner {
  background: #0072ab;
  box-shadow: 0 0 0 4px rgba(0, 114, 171, 0.12);
}

.dot:hover {
  border-color: rgba(0, 114, 171, 0.25);
}

.dot:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px rgba(0, 114, 171, 0.22);
}

.dot-tooltip {
  position: fixed;
  z-index: 9999;
  background: #fff;
  border: 1px solid #e0e3e8;
  border-radius: 10px;
  padding: 12px 16px;
  font-size: 16px;
  color: #575f6c;
  font-weight: 500;
  max-width: 260px;
  line-height: 1.2;
  box-shadow: 0 8px 24px rgba(16, 24, 40, 0.08);
}

.content {
  margin: 0 auto;
}

.section {
  width: 1224px;
  margin: 0 auto;
}

.culture-wrap {
  position: relative;
  width: 100%;
  background-color: #f7f8fa;
}

.culture-wrap__decor {
  position: absolute;
  right: 0;
  pointer-events: none;
}

.culture-wrap__decor--bottom {
  bottom: 0;
}

.culture-wrap__decor--top {
  top: 0;
}
@media (max-width: 1440px) {
  .side-nav {
    display: none;
  }
  .dot-tooltip {
    display: none;
  }
}
@media (max-width: 1024px) {
  .section {
    width: 100%;
  }

  .side-nav {
    display: none;
  }

  .dot-tooltip {
    display: none;
  }
}

@media (max-width: 768px) {
  .side-nav {
    display: none;
  }
  .content {
    margin-left: 0;
  }
}
</style>
