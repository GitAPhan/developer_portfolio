<template>
  <div class="outer-view d-flex justify-center align-center">
    <div class="inner-view main">
      <logo-left />
    <about-me v-if="$mq != 'lg'" />
      <logo-right />
      <!-- <project-section v-if="$mq != 'lg'" />
      <Contact-section class="contact_section" /> -->
    </div>
  </div>
</template>

<script>
import LogoLeft from "./LogoLeft.vue";
import AboutMe from "@/components/AboutMe.vue"
import LogoRight from './LogoRight.vue';
// import ProjectSection from './ProjectSection.vue';
// import ContactSection from './ContactSection.vue';
export default {
  name: "main-container",
  components: {
    LogoLeft,
    AboutMe,
    LogoRight,
    // ProjectSection,
    // ContactSection,
  },
};
</script>

<style lang="scss" scoped>
.outer-view {
    width: 100%;
    height: 100%;
}
/* logo-left & logo-right */
.main {
  height: 100%;
  width: 100%;
    overflow-y: scroll;
}
// .logo {
//   height: 100%;
//   background-repeat: no-repeat;
//   background-size: auto 70%;
//   width: 100%;
//   scroll-snap-type: y proximity;
// }
@media screen and (min-width: 1000px) {
  .main {
    // position: relative;
    max-width: 1366px;
    max-height: 768px;
    // width: 100%;
    display: grid;
    grid-template-columns: 50% 50%;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  .main::-webkit-scrollbar {
    display: none;
  }
  .contact_section {
    grid-column: span 2;
  }
}
</style>