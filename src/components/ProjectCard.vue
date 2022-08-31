<template>
  <div>
    <v-sheet class="project_card" color="primary">
      <h2>{{ project.name }}</h2>
      <v-card
        color="primary"
        elevation="0"
        no-gutters
        class="d-inline-flex flex-wrap justify-center ma-0 pa-0"
      >
        <p
          class="tech_chip"
          v-for="tag in project.tech"
          :key="tag + project.id * 0.23 + 0.001"
        >
          {{ tag }}
        </p>
      </v-card>
      <p>{{ project.description["synopsis"] }}</p>
      <v-carousel
        height="23vh"
        style="min-height: 160px;"
        cycle
        hide-delimiter-background
        :show-arrows="false"
      >
        <v-carousel-item v-if="project.id === 1">
          <v-img
            contain
            width="100%"
            height="100%"
            src="@/assets/scavenger-small.gif"
          />
        </v-carousel-item>
        <v-carousel-item v-if="project.id === 2">
          <v-img
            contain
            width="100%"
            height="100%"
            src="@/assets/okpizza-mobile-small.gif"
          />
        </v-carousel-item>
        <v-carousel-item v-if="project.id === 2">
          <v-img
            contain
            width="100%"
            height="100%"
            src="@/assets/okpizza-tablet-small.gif"
          />
        </v-carousel-item>
        <v-carousel-item v-if="project.id === 2">
          <v-img
            contain
            width="100%"
            height="100%"
            src="@/assets/okpizza-small.png"
          />
        </v-carousel-item>
        <v-carousel-item v-if="project.id === 3">
          <v-img
            contain
            width="100%"
            height="100%"
            src="@/assets/tweeter.gif"
          />
        </v-carousel-item>
        <v-carousel-item v-if="project.id === 3">
          <v-img
            contain
            width="100%"
            height="100%"
            src="@/assets/Tweeter-database-relations.png"
          />
        </v-carousel-item>
        <v-carousel-item v-if="project.id === 4">
          <v-img
            contain
            width="100%"
            height="100%"
            src="@/assets/battlemon-0-small.gif"
          />
        </v-carousel-item>
        <v-carousel-item v-if="project.id === 4">
          <v-img
            contain
            width="100%"
            height="100%"
            src="@/assets/battlemon-1-small.gif"
          />
        </v-carousel-item>
        <v-carousel-item v-if="project.id === 4">
          <v-img
            contain
            width="100%"
            height="100%"
            src="@/assets/battlemon-2-small.gif"
          />
        </v-carousel-item>
      </v-carousel>
      <v-card-actions class="pa-0">
        <v-btn
          v-for="link in project.github_link"
          color="anchor"
          :href="link"
          :key="link"
          text
          >github</v-btn
        >
        <!-- live link button to only be present if value is not undefined -->
        <v-btn
          v-if="project.live_link != undefined"
          color="anchor"
          :href="project.live_link"
          text
          >demo</v-btn
        >
      </v-card-actions>
    </v-sheet>
  </div>
</template>

<script>
export default {
  name: "project-card",
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.project_card {
  height: 100%;
  position: absolute;
  display: grid;
  grid-template-rows: auto auto 1fr auto auto;
  place-items: center;

  > img {
    width: 100%;
    max-width: 450px;
  }

  > h2 {
    position: sticky;
    top: 0;
    padding: 0px 5px;
    margin-bottom: 15px;
    background-color: var(--v-primary);
    z-index: 10;
  }

  > p {
    color: var(--v-anchor);
  }

  .tech_chip {
    border: 2px var(--v-text) solid;
    border-radius: 5px;
    padding: 0px 5px;
    margin-right: 5px;
    color: var(--v-anchor);
  }
}
</style>