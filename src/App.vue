<template>
  <v-app :style="cssProps">
    <v-main>
      <main-container />
    </v-main>
  </v-app>
</template>

<script>
import MainContainer from "./components/MainContainer.vue";

export default {
  components: {
    MainContainer,
  },
  computed: {
    cssProps() {
      var themeColors = {};
      var theme = "light";
      if (this.$vuetify.theme.isDark) {
        theme = "dark";
      }
      Object.keys(this.$vuetify.theme.themes[theme]).forEach((color) => {
        themeColors[`--v-${color}`] = this.$vuetify.theme.themes[theme][color];
      });
      return themeColors;
    },
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
  color: var(--v-text);
}
</style>
