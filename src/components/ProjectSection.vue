<template>
  <div id="project_trigger" class="projects">
    <h1 class="projects_title" @click="change_project_view">Projects:</h1>
    <project-carousel
      class="highlighted_project"
      v-if="model != null"
      :project="project_view"
    />
    <v-sheet
      class="d-flex justify-center"
      v-if="$mq != 'lg'"
      color="primary"
      elevation="8"
      width="100vw"
      style="margin-bottom: 15px;"
    >
      <v-slide-group v-model="model" mandatory show-arrows>
        <v-slide-item
          v-for="proj in projects"
          :key="proj.id"
          v-slot="{ active, toggle }"
        >
          <v-card
            :color="'anchor'"
            class="ma-1 d-flex align-center justify-center"
            height="40px"
            width="100px"
            @click="toggle"
          >
            <v-icon
              v-if="!active"
              color="primary"
              size="28">{{proj.icon}}</v-icon>
            

            <v-scale-transition>
              <v-icon
                v-if="active"
                color="anchor"
                size="28"
                v-text="'mdi-check-circle-outline'"
              />
            </v-scale-transition>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
    <project-display
      class="project_display"
      v-else
      :project="projects[proj_id]"
    />
    <div class="project_section">
      <section id="project_trigger1" class="project"></section>
      <section id="project_trigger2" class="project"></section>
      <section id="project_trigger3" class="project"></section>
      <section id="project_trigger4" class="project"></section>
    </div>
  </div>
</template>

<script>
import ProjectDisplay from "./ProjectDisplay.vue";
import ProjectCarousel from "./ProjectCarousel.vue";
import ScrollMagic from "scrollmagic";
export default {
  components: {
    ProjectDisplay,
    ProjectCarousel,
  },
  name: "project-section",
  data() {
    return {
      model: null,
      proj_id: 0,
      projects: [
        {
          id: 1,
          name: "Scavenger Hunt",
          tech: ["VueJs", "Python", "Flask", "MariaDb", "Vuetify"],
          description: {
            intro:
              "For this project, I had to come up with an idea for an app/website, design the database, api and frontend and build a minimum viable product of it. My main challenge was that I wanted to build a unique app to not only showcase my knowledge but also demonstrate my creativity and passion for thinking outside-the-box. When I hung out with friends I would love to come up with different games to entertain and pass the time (although they are all mainly drinking games).  I thought for this project I would bring that part of me along for the journey. Also, because of the recent pandemic, I have felt fairly detached from human interactions that aren’t virtual. So I preferred to build an app that would complement actual physical interactions and facilitate building connections.",
            synopsis:
              "Scavenger Hunt is an interactive game where players would hunt for checkpoints in the form of qr codes placed by the game master within the game area. These checkpoints would have challenges that the players would complete in order to obtain points and tokens. Tokens can be traded for hints of the checkpoint locations or for more points. Only points are calculated in the end to determine the winner.",
            tech: "This full-stack application was built using the frontend framework VueJs with the help of the Vuetify library to make it look pretty. I used Flask and Python for the backend and MariaDb for all my database needs.",
          },
          live_link: "https://scavenger.ga",
          github_link: [
            "https://github.com/GitAPhan/scavenger_hunt_frontend",
            "https://github.com/GitAPhan/scavenger_hunt_backend",
          ],
          icon: "mdi-magnify",
        },
        {
          id: 2,
          name: "Okotoks Pizza",
          tech: ["HTML5", "SCSS"],
          description: {
            intro:
              "This project was used to develop my requirements gathering, prototyping, SEO and mobile responsiveness skills",
            synopsis:
              "A consumer-facing website with the focus to drive traffic to learn about the staff and the history of the restaurant, view the menu, and seek contact details to call, email or visit the store. This project was used to develop my requirements gathering, prototyping, SEO and mobile responsiveness skills.",
            tech: "This frontend application was build using only HTML5 and SASS. Deployed using Google Cloud Platform(GCP) and Apache",
          },
          live_link: "https://okpizza.ml",
          github_link: ["https://github.com/GitAPhan/OkotoksPizza"],
          icon: "mdi-pizza",
        },
        {
          id: 3,
          name: "Tweeter",
          tech: ["VueJs", "Python", "Flask", "MariaDb"],
          description: {
            intro:
              "As my first full-stack application I was solely focused on building an application that worked. This project allowed me to learn a lot about how to organize my project and keep my components in my frontend framework simple and small. I found myself needlessly making the components more difficult and complex to work with. My next step with this project will be to redo the frontend to simplify my components and make my code easier to understand.",
            synopsis:
              "A Twitter-clone application that includes authentication, user profile management, tweet posts, follows of profiles and likes of tweets and comments.",
            tech: "This full-stack application was built using the frontend framework VueJs, Flask and Python was used to build the api, and MariaDb was used for the database. Deployed using Google cloud platform",
          },
          github_link: [
            "https://github.com/GitAPhan/tweeter-project",
            "https://github.com/GitAPhan/tweeter_project_backend",
          ],
          icon: "mdi-twitter",
        },
        {
          id: 4,
          name: "Pokemon Battle Simulator",
          tech: ["HTML5", "SCSS", "JavaScript"],
          description: {
            intro:
              "For this turn-based application, users are able to select their desired pokemon. They will be able to see their pokemon’s health, attack options and mana, as well as the enemy pokemon and their health.",
            synopsis:
              "For this turn-based application, users are able to select their desired pokemon to battle with. sers will be able to see their pokemon’s health, attack options and mana, as well as the enemy pokemon and their health. Built as part of a solo hackathon, we were given 8 hours and tasked to build a Pokemon battle simulator.",
            tech: "This frontend application was built using HTML5, SASS and JavaScript.",
          },
          live_link: "http://battlemon.ml",
          github_link: [
            "https://github.com/GitAPhan/Classic_Pokemon_Battle_Hackathon",
          ],
          icon: "mdi-pokemon-go",
        },
      ],
    };
  },
  computed: {
    project_view() {
      return this.projects[this.model];
    },
  },
  methods: {
    model_value() {
      // used to test changing theme
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      console.log("changing theme");
    },
    change_project_view: function (event) {
      console.log("change project view", event.type);
      if (event.type === "enter") {
        this.proj_id += 1;
      } else if (event.type === "leave") {
        this.proj_id -= 1;
      }
      // if (this.proj_id === 4) {
      //   this.proj_id = 0;
      // }
    },
  },
  mounted() {
    if (this.$mq === "lg") {
      var controller = new ScrollMagic.Controller();
      // build scene only in lg screen mode
      this.$nextTick(() => {
        new ScrollMagic.Scene({
          triggerElement: "#project_trigger",
          triggerHook: 0.5,
          offset: 150,
        })
          .setClassToggle(".project_display", "appear")
          .addTo(controller);
      });
      new ScrollMagic.Scene({
        triggerElement: "#project_trigger1",
        triggerHook: 0,
        offset: 50,
      })
        .on("enter leave", this.change_project_view)
        .addTo(controller);
      new ScrollMagic.Scene({
        triggerElement: "#project_trigger2",
        triggerHook: 0,
        offset: 50,
      })
        .on("enter leave", this.change_project_view)
        .addTo(controller);
      new ScrollMagic.Scene({
        triggerElement: "#project_trigger3",
        triggerHook: 0,
        offset: 50,
      })
        .on("enter leave", this.change_project_view)
        .addTo(controller);
      this.$nextTick(() => {
        new ScrollMagic.Scene({
          triggerElement: "#project_trigger4",
          triggerHook: 0,
          offset: 50,
        })
          .setClassToggle(".project_display", "disappear")
          .addTo(controller);
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.projects {
  background-color: var(--v-secondary);
  position: relative;
  place-items: center;
  height: 100vh;
  width: 100%;
  display: grid;
  padding: 10px 0px 20px;
  grid-template-rows: auto 1fr auto;
  row-gap: 10px;

  > h1 {
    justify-self: start;
    margin: 0px 5%;
  }
}
.project_section {
  display: none;
}

.highlighted_project {
  position: relative;
  display: grid;
  height: 100%;
  width: 90%;
  padding: 15px;
  place-items: center;
  background-color: var(--v-primary);
}

@media screen and (min-width: 1000px) {
  .projects {
    background-color: var(--v-primary);
    // height: 100%;
    height: min(1800px, 200vh);
    row-gap: 0px;
    padding-bottom: min(900px, 100vh);

    > h1 {
      position: sticky;
      padding: 0px;
      margin: 0 0 0 5%;
      top: 14.99%;
      justify-self: start;
      text-shadow: 3px 3px 5px var(--v-primary);
      z-index: 10;
    }
    .project_section {
      display: grid;
      height: 100%;
      grid-auto-rows: 1fr 1fr 1fr 1fr;
    }
    .project {
      position: relative;
      display: block;
      height: 100%;
      // max-height: min(450px, 50vh);
      width: 100%;
      // z-index: -1;
    }
  }
  .project_display {
    // display: none;
    opacity: 0;
    pointer-events: none;
  }
  .project_display.appear {
    // display: block;
    opacity: 1;
  }
  .appear.disappear {
    // display: block;
    opacity: 0;
  }

  .projects::-webkit-scrollbar {
    display: none;
  }

  .projects_title {
    opacity: 1;
    transform: none;
    transition: all 0.4s ease-out;
  }

  .projects_title.hide {
    transform: translate(100px, -100px);
  }
  // #project_trigger1:target {
  //   scroll-margin-top: 70px;
  // }
  // #project_trigger2:target {
  //   scroll-margin-top: -70px;
  // }
  // #project_trigger3:target {
  //   scroll-margin-top: -70px;
  // }
  // #project_trigger4:target {
  //   scroll-margin-top: -10px;
  // }
}
</style>