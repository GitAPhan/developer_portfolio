<template>
  <div>
    <article :class="'proj'+(project.id).toString()" v-for="project in projects" :key="project.id">
      <!-- <v-sheet class="pa-6 d-flex justify-center align-center" color="primary"> -->
      <!-- <span v-if="project.id %2 === 0">
                    <h2>{{ project.name }}</h2>
                    <h4>{{ project.tech }}</h4>
                    <p>{{ project.description }}</p>
                </span>
                <span>
                    <img :src="project.screenshot" />
                    <v-card-actions class="pa-0">
                        <v-btn color="secondary" :href="project.github_link" text>github</v-btn>
                        live link button to only be present if value is not undefined
                        <v-btn
                            v-if="project.live_link != undefined"
                            color="secondary"
                            :href="project.live_link"
                            text
                        >demo</v-btn>
                    </v-card-actions>
                </span>
                <span v-if="project.id %2 === 1">
                    <h2>{{ project.name }}</h2>
                    <h4>{{ project.tech }}</h4>
                    <p>{{ project.description }}</p>
                </span>-->
      <!-- <v-card elevation="4" color="primary"> -->
      <!-- <v-container> -->
      <!-- <div> -->
      <h3 class="project_title">{{ project.name }}</h3>
      <div class="project_info">
        <section class="top_row">
          <!-- <v-card-title>{{ project.name }}</v-card-title>
                <v-img max-width="25vw" :src="project.screenshot" alt="website screenshot" />
                <v-card-actions>
                    <v-btn :href="project.github_link">
                        <v-icon>mdi-github</v-icon>
                    </v-btn>
                    <v-btn v-if="project.live_link != undefined" :href="project.live_link">
                        <v-icon>mdi-application-export</v-icon>
                    </v-btn>
                </v-card-actions> -->
          <v-img max-width="200px" :src="project.screenshot" />
        </section>
        <section class="mid_row">
          <v-btn>links</v-btn>
          <p
            class="tech_chip"
            v-for="tag in project.tech"
            :key="tag + project.id * 0.22 + 0.002"
          >
            {{ tag }}
          </p>
        </section>
        <section class="bot_row">
          <p>{{ project.description.synopsis }}</p>
        </section>
        <!--  <v-row class="bot_col">
                <v-card-subtitle class="d-flex">
                    <p class="tech_chip" v-for="tag in project.tech"
                        :key="tag + project.id * .22 + .002">{{ tag }}</p>
                </v-card-subtitle>
                <v-card-text>
                    <p v-for="desc in project.description" :key="desc + 12 * project.id">{{ desc }}</p>
                </v-card-text> -->
        <!-- 
            </v-row>
                    </v-container> -->
        <!-- </v-card> -->
        <!-- </v-sheet> -->
      </div>
    <span class="project_trigger" :id="'proj_trig_'+(project.id).toString()"></span>
    </article>
  </div>
</template>

<script>
import ScrollMagic from 'scrollmagic';
export default {
  name: "project-display",
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
  mounted () {
    var controller = new ScrollMagic.Controller();
    // build scenes
        this.projects.forEach(proj => {
        new ScrollMagic.Scene({
            triggerElement: "#proj_trig_"+(proj.id).toString(),
            offset: -150,
            triggerHook: 1,
            duration: "80%",
        })
        .setClassToggle(".proj"+proj.id.toString(), "appear")
        .addTo(controller);
    });
  },
};
</script>

<style lang="scss" scoped>
img {
  max-width: 25vw;
}
.project_title {
  position: sticky;
  text-align: right;
  top: 16.75%;
  padding-bottom: 15%;
}
.appear {
    opacity: 1;
    .project_info {
        .top_row {
            opacity: 1;
            position: fixed;
            top: 30%;
            left: 0%
        }
        .mid_row {
            opacity: 1;
            position: fixed;
            top: 50%;
            left: 0%

        }
        .bot_row {            
            opacity: 1;
            position: fixed;
            top: 60%;
            left: 0%
        }
    }
}
.project_trigger {
    position: relative;
    bottom: 0px;
}
.project_info {
    position: relative;
}

article {
    opacity: 0;
    transition: all 1s ease-in-out;
  padding: 5%;
  height: 100vh;
  padding-bottom: 25%;
}
.top_row {
    opacity: 0;
    position: relative;
    margin: 10% 0;
    display: grid;
    place-items: center;
    width: 50%;
}
.mid_row {
    opacity: 0;
    position: relative;
  display: grid;
  grid-auto-flow: column;
  place-items: center;
  column-gap: 10px;
  width: 50%;
}
.bot_row {
    opacity: 0;
    position: relative;
    margin: 10% 0;
    width: 50%;
}

.tech_chip {
  border: 2px var(--v-text) solid;
  border-radius: 5px;
  padding: 0px 5px;
  display: inline-block;
  // margin-right: 5px;
  color: var(--v-anchor);
}
</style>