<template>
  <v-app :style="cssProps">
    <v-main>
      <div id="main">
        <logo-left />
        <logo-right />
        <project-section v-if="$mq != 'lg'" />
        <Contact-section class="contact_section" />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import ContactSection from '@/components/ContactSection.vue';
import LogoRight from '@/components/LogoRight.vue';
import LogoLeft from '@/components/LogoLeft.vue';
import ProjectSection from '@/components/ProjectSection.vue';

export default {
  components: {
    ContactSection,
    LogoLeft,
    LogoRight,
    ProjectSection,
  },
  computed: {
    cssProps() {
      var themeColors = {}
      var theme = 'light'
      if (this.$vuetify.theme.isDark) {
        theme = 'dark'
      }
      Object.keys(this.$vuetify.theme.themes[theme]).forEach((color) => {
        themeColors[`--v-${color}`] = this.$vuetify.theme.themes[theme][color]
      })
      return themeColors
    },
  },
  mounted () {
    console.log(this.$mq);
  },
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
  color: var(--v-text);
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
  .contact_section {
    grid-column: span 2;
  }
}
</style>
