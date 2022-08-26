<template>
  <div class="project_display">
    <h3 class="project_title">{{ project.name }}</h3>
    <div class="project_info">
      <section class="top_row">
        <v-img
          max-width="200px"
          :src="project.screenshot"
          alt="website screenshot"
        />
      </section>
      <section class="mid_row">
        <p class="tech_chip" v-if="'live_link' in project">
          <a :href="project.live_link">Demo</a>
        </p>
        <p
          class="tech_chip"
          v-for="git in project.github_link"
          :key="git"
        >
          <a :href="git">GitHub</a>
        </p>
        <!-- <p
          class="tech_chip"
          v-if="'live_link' in project"
          ><a :href="project.live_link">GITHUB</a></p> -->
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
img {
  max-width: 30vw;
}
.project_title {
  position: relative;
  text-align: right;
  padding-bottom: 5%;
}
.project_trigger {
  position: relative;
  bottom: 0px;
}
.project_info {
  position: relative;
}

.project_display {
  position: fixed;
  height: 100%;
  width: min(50vw, 900px);
  overflow: hidden;
  top: 13.7%;
  left: max(0, calc((100vw - 1650px) / 2));
  transition: all 1s ease-in-out;
  padding: 5%;
  z-index: 9;
}
.top_row {
  margin: 10% 0;
  display: grid;
  place-items: center;
}
.mid_row {
  position: relative;
  display: grid;
  // grid-template-columns: auto;
  grid-auto-flow: column;
  // overflow: hidden;
  width: max(calc(50vw - 50px), 400px);
  // max-width: 100%;
  place-items: center;
  column-gap: 5px;
}
.bot_row {
  margin: 10% 0;
}

.tech_chip {
  pointer-events: auto;
  border: 2px var(--v-text) solid;
  border-radius: 5px;
  padding: 0px 5px;
  display: inline-block;
  color: var(--v-anchor);
}
</style>