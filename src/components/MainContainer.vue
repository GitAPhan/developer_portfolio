<template>
  <div id="main">
    <logo-left />
    <logo-right />
    <project-section v-if="$mq != 'lg'" />
    <Contact-section class="contact_section" />
  </div>
</template>

<script>
import ContactSection from './ContactSection.vue';
import LogoLeft from './LogoLeft.vue';
import LogoRight from './LogoRight.vue';
import ProjectSection from './ProjectSection.vue';
export default {
  name: "main-container",
  components: {
    ContactSection,
    LogoLeft,
    LogoRight,
    ProjectSection,
  },
};
</script>

<style lang="scss" scoped>
/* logo-left & logo-right */
.logo {
  height: 100vh;
  background-repeat: no-repeat;
  background-size: auto 70%;
  width: 100%;
  scroll-snap-type: y proximity;
}
@media screen and (min-width: 1000px) {
  #main {
    position: relative;
    max-width: 1366px;
    max-height: 768px;
    width: 100vw;
    display: grid;
    grid-template-columns: 50vw 50vw;
  }
  .contact_section {
    grid-column: span 2;
  }
}
</style>