<script>
import BasicButton from "@/components/Buttons/button_basic.vue";
import FooterSandbars from "@/components/FooterSandbars.vue";

export default {
  name: "TabletHeaderMenu",
  components: { FooterSandbars, BasicButton },
  props: {
    translate: Object,
  },
  data() {
    return {
      aboutLinks: [
        {
          text: this.translate.our_history || "{ our_history }",
          to: { name: "AboutUs", hash: "#section-1" },
        },
        {
          text: this.translate.culture_traditions || "{ culture_traditions }",
          to: { name: "AboutUs", hash: "#section-2" },
        },
        {
          text: this.translate.popular_persons || "{ popular_persons }",
          to: { name: "AboutUs", hash: "#section-3" },
        },
        {
          text: this.translate.youth_organizations || "{ youth_organizations }",
          to: { name: "AboutUs", hash: "#section-4" },
        },
        {
          text: this.translate.education || "{ education }",
          to: { name: "AboutUs", hash: "#section-5" },
        },
        {
          text: this.translate.sport || "{ sport }",
          to: { name: "AboutUs", hash: "#section-5" },
        },
      ],
      regionsLinks: [
        // { text: "Ассоциация узбеков РК 'Дустлик'", to: { name: 'Regions', hash: '#some-section' } },
        // { text: "АСТАНА Узбекский ЭКЦ г. Астаны", to: { name: 'Regions', hash: '#some-section' } },
        // { text: "АЛМАТЫ Узбекский ЭКЦ г. Алматы", to: { name: 'Regions', hash: '#some-section' } },
        // { text: "Узбекский ЭКЦ г. Шымкент", to: { name: 'Regions', hash: '#some-section' } },
        {
          text: this.translate.all_regions || "{ all_regions }",
          to: { name: "Regions", hash: "#guide" },
        },
      ],
      documentsLinks: [
        {
          text: this.translate.important_documents || "{ important_documents }",
          to: { name: "Documents", hash: "#charter" },
        },
        {
          text: this.translate.charters || "{ charters }",
          to: { name: "Documents", hash: "#plan2018" },
        },
        {
          text: this.translate.plans || "{ plans }",
          to: { name: "Documents", hash: "#report2017" },
        },
        {
          text: this.translate.projects || "{ projects }",
          to: { name: "Documents", hash: "#projects" },
        },
      ],
      pressCenterLinks: [
        {
          text: this.translate.latest_news || "{ latest_news }",
          to: { name: "PressCenter", hash: "#news" },
        },
        {
          text: this.translate.video_material || "{ video_material }",
          to: { name: "PressCenter", hash: "#video" },
        },
        {
          text: this.translate.photos || "{ photos }",
          to: { name: "PressCenter", hash: "#gallery" },
        },
        {
          text: this.translate.interview || "{ interview }",
          to: { name: "PressCenter", hash: "#interviews" },
        },
      ],
      contactsLinks: [
        {
          text: this.translate.republic_contacts || "{ republic_contacts  }",
          to: { name: "republic" },
        },
        {
          text: this.translate.region_contacts || "{ region_contacts  }",
          to: { name: "regions" },
        },
      ],
    };
  },
  methods: {
    openDonate() {
      this.$router.push("/donates");
      this.$emit("close-menu");
    },
    closeMenu() {
      this.$emit("close-menu");
    },
  },
};
</script>

<template>
  <div class="header__tablet-content">
    <footer-sandbars
      :title="translate.about_us || '{ about_us }'"
      :to="'/about-us'"
      :links="aboutLinks"
      :is-header="true"
      @close-menu="closeMenu"
    ></footer-sandbars>
    <footer-sandbars
      :title="translate.regions || '{ regions }'"
      :to="'/regions'"
      :links="regionsLinks"
      :is-header="true"
      @close-menu="closeMenu"
    ></footer-sandbars>
    <footer-sandbars
      :title="translate.documents || '{ documents }'"
      :to="'/documents'"
      :links="documentsLinks"
      :is-header="true"
      @close-menu="closeMenu"
    ></footer-sandbars>
    <footer-sandbars
      :title="translate.press_center || '{ press_center }'"
      :to="'/press-center'"
      :links="pressCenterLinks"
      :is-header="true"
      @close-menu="closeMenu"
    ></footer-sandbars>
    <footer-sandbars
      :title="translate.contacts || '{ contacts }'"
      :to="'/contacts'"
      :links="contactsLinks"
      :is-header="true"
      @close-menu="closeMenu"
    ></footer-sandbars>
    <div class="header-sandbars">
      <div class="main-text font-gilroy">
        {{ translate.donates || "{ donates }" }}
      </div>
      <basic-button
        style="margin-top: 16px"
        @click="openDonate"
        :title_button="translate.donates || '{ donates }'"
        :is-blue="true"
      ></basic-button>
    </div>
  </div>
</template>

<style scoped>
.header__tablet-content {
  box-sizing: border-box;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(20px, 4vw, 48px);
  align-items: start;
  background: #ffffff;
  border-top: 1px solid var(--color-gray-main);
  border-bottom: 1px solid var(--color-gray-main);
}
</style>
