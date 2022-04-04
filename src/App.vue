<template>
  <v-app :style="cssProps">
    <v-main>
      <div id="main">
        <logo-left />
        <logo-right />
        <project-section class="container" v-if="view_width < 1000" />
        <!-- <Contact-section class="main" /> -->
      </div>
    </v-main>
  </v-app>
</template>

<script>
// import ContactSection from '@/components/ContactSection.vue';
import LogoRight from '@/components/LogoRight.vue';
import LogoLeft from '@/components/LogoLeft.vue';
import ProjectSection from '@/components/ProjectSection.vue';

export default {
  components: {
    // ContactSection,
    LogoLeft,
    LogoRight,
    ProjectSection,
  },
  computed: {
    cssProps() {
      var themeColors = {}
      Object.keys(this.$vuetify.theme.themes.dark).forEach((color) => {
        themeColors[`--v-${color}`] = this.$vuetify.theme.themes.dark[color]
      })
      return themeColors
    },
    view_width() {
      return window.innerWidth
    }
  }
};

</script>

<style>
* {
  padding: 0px;
  margin: 0px;
}
#app {
  background-color: var(--v-primary);
  max-width: 100vw;
  display: grid;
}
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
    width: 100vw;
    display: grid;
    grid-template-columns: 50vw 50vw;
  }
}
</style>
