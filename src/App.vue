<template>
  <v-app>
    <v-main id="app">
      <logo-left class="logo" />
      <about-me class="main" />
      <logo-right class="logo" />
      <project-section class="main" />
      <footer-section class="main" />
    </v-main>
  </v-app>
</template>

<script>
import FooterSection from '@/components/FooterSection.vue';
import LogoRight from '@/components/LogoRight.vue';
import LogoLeft from '@/components/LogoLeft.vue';
import ProjectSection from '@/components/ProjectSection.vue';
import AboutMe from '@/components/AboutMe.vue';

export default {
  components: {
    FooterSection,
    LogoLeft,
    LogoRight,
    ProjectSection,
    AboutMe,
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
  background-color: #464545;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
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
