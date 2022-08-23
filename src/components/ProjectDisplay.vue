<template>
  <div class="project_display">
    <article>
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
          <v-btn>links</v-btn>
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
    </article>
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
  max-width: 25vw;
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
  position: sticky;
  height: 0;
  top: 12%;
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
  display: grid;
  grid-auto-flow: column;
  place-items: center;
  column-gap: 10px;
}
.bot_row {
  margin: 10% 0;
}

.tech_chip {
  border: 2px var(--v-text) solid;
  border-radius: 5px;
  padding: 0px 5px;
  display: inline-block;
  color: var(--v-anchor);
}
</style>