<template>
  <v-app :style="cssProps">
    <v-main>
      <logo-left class="logo" />
      <about-me class="main" />
      <logo-right class="logo" />
      <project-section class="main" />
      <Contact-section class="main" />
    </v-main>
  </v-app>
</template>

<script>
import ContactSection from '@/components/ContactSection.vue';
import LogoRight from '@/components/LogoRight.vue';
import LogoLeft from '@/components/LogoLeft.vue';
import ProjectSection from '@/components/ProjectSection.vue';
import AboutMe from '@/components/AboutMe.vue';

export default {
  components: {
    ContactSection,
    LogoLeft,
    LogoRight,
    ProjectSection,
    AboutMe,
  },
  mounted() {
    console.log('please!!!!');
  },
  computed: {
    cssProps() {
      var themeColors = {}
      Object.keys(this.$vuetify.theme.themes.dark).forEach((color) => {
        themeColors[`--v-${color}`] = this.$vuetify.theme.themes.dark[color]
      })
      return themeColors
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
  display: grid;
  place-items: center;
  background-color: var(--v-primary);
  max-width: 100vw;
  /* overflow-x: hidden; */
}
.logo {
  height: 100vh;
  background-repeat: no-repeat;
  background-size: auto 70%;
  width: 100%;
  max-width: 100vw;
}
.main {
  max-width: 100vw;
  width: 100%;
}
</style>
