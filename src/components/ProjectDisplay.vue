<template>
  <div class="project_display">
    <div class="project_info">
    <h3 class="project_title">{{ project.name }}</h3>
      <section class="top_row">
        <v-carousel height="23vh" style="max-height: 300px; pointer-events: auto;" cycle hide-delimiters show-arrows-on-hover>
          <v-carousel-item v-if="project.id === 1">
            <v-img contain width="100%" height="100%" src="@/assets/scavenger-large.gif" />
          </v-carousel-item>
          <v-carousel-item v-if="project.id === 2">
            <v-img contain width="100%" height="100%" src="@/assets/okpizza-mobile-large.gif" />
          </v-carousel-item>
          <v-carousel-item v-if="project.id === 2">
            <v-img contain width="100%" height="100%" src="@/assets/okpizza-tablet-large.gif" />
          </v-carousel-item>
          <v-carousel-item v-if="project.id === 2">
            <v-img contain width="100%" height="100%" src="@/assets/okpizza-large.png" />
          </v-carousel-item>
          <v-carousel-item v-if="project.id === 3">
            <v-img contain width="100%" height="100%" src="@/assets/tweeter.gif" />
          </v-carousel-item>
          <v-carousel-item v-if="project.id === 3">
            <v-img contain width="100%" height="100%" src="@/assets/Tweeter-database-relations.png" />
          </v-carousel-item>
          <v-carousel-item v-if="project.id === 4">
            <v-img contain width="100%" height="100%" src="@/assets/battlemon-0-large.gif" />
          </v-carousel-item>
          <v-carousel-item v-if="project.id === 4">
            <v-img contain width="100%" height="100%" src="@/assets/battlemon-1-large.gif" />
          </v-carousel-item>
          <v-carousel-item v-if="project.id === 4">
            <v-img contain width="100%" height="100%" src="@/assets/battlemon-2-large.gif" />
          </v-carousel-item>
        </v-carousel>
      </section>
      <section class="mid_row">
        <p class="tech_chip" v-if="'live_link' in project">
          <a :href="project.live_link">Demo</a>
        </p>
        <p class="tech_chip" v-for="git in project.github_link" :key="git">
          <a :href="git">GitHub</a>
        </p>
        <p
          class="tech_chip"
          v-for="tag in project.tech"
          :key="tag + project.id + 0.22"
        >
          {{ tag }}
        </p>
      </section>
      <section class="bot_row">
        <p>{{ project.description.synopsis }}</p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "project-display",
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.project_img {
  width: min(450px, 30vw);
}
.project_title {
  position: relative;
  place-self: end end;
  text-align: right;
  padding: 5% 0%;
}
.project_trigger {
  position: relative;
  bottom: 0px;
}
.project_info {
  position: relative;
  width: min(45vw, 720px);
  max-height: min(70vh, 630px);
}

.project_display {
  position: fixed;
  display: grid;
  place-items: center;
  height: 100%;
  width: min(45vw, 720px);
  // width: min(40vw, 640px);
  top: 0%;
  // left: max(2.5%, calc(2.5% + (50vh - 800px)));
  transition: all 1s ease-in-out;
  z-index: 9;
}
.top_row {
  margin: 5% 0;
}
.mid_row {
  display: flex;
  flex-wrap: wrap;
  place-content: center;
  column-gap: 10px;
}
.bot_row {
  margin: 5% 0;
}

.tech_chip {
  pointer-events: auto;
  border: 2px var(--v-text) solid;
  border-radius: 5px;
  padding: 2px 5px;
  color: var(--v-anchor);
}
</style>