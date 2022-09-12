<template>
  <div class="outer-view d-flex justify-center align-center">
    <v-app-bar
      class="d-flex justify-center align-center header"
      v-if="$mq === 'lg'"
      absolute
      color="rbga(0, 0, 0, 0.0)"
      dark
      scroll-target="#scrolling-techniques-4"
    >
      <a href="#about_me">about me</a>
      <a href="#project_trigger">projects</a>
      <a href="#footer">contact</a>
    </v-app-bar>
    <div
      ref="main_container"
      id="scrolling-techniques-4"
      class="inner-view main"
    >
      <span id="about_me" />
      <logo-left />
      <about-me v-if="$mq != 'lg'" />
      <logo-right />
      <project-section v-if="$mq != 'lg'" />
      <Contact-section class="contact_section" />
      <a :href="nav_link('down')" class="nav_arrow down"
        ><v-icon>mdi-arrow-down-thick</v-icon></a
      >
      <a v-if="$mq != 'lg'" :href="nav_link('up')" class="nav_arrow up"
        ><v-icon>mdi-arrow-up-thick</v-icon></a
      >
    </div>
  </div>
</template>

<script>
import LogoLeft from "./LogoLeft.vue";
import AboutMe from "@/components/AboutMe.vue";
import LogoRight from "./LogoRight.vue";
import ProjectSection from "./ProjectSection.vue";
import ContactSection from "./ContactSection.vue";
import ScrollMagic from "scrollmagic";
export default {
  name: "main-container",
  components: {
    LogoLeft,
    AboutMe,
    LogoRight,
    ProjectSection,
    ContactSection,
  },
  methods: {
    add_to_ind: function (event) {
      if (event.type === "enter") {
        this.nav_link_indicator += 1;
      } else if (event.type === "leave") {
        this.nav_link_indicator -= 1;
      }
    },
    nav_link: function (dir) {
      if (this.$mq === "lg") {
        return this.nav_link_location[this.nav_link_indicator];
      } else {
        if (dir === "down") {
          return this.nav_link_location[this.nav_link_indicator - 5];
        } else {
          return this.nav_link_location[this.nav_link_indicator - 7];
        }
      }
    },
  },
  data() {
    return {
      nav_link_indicator: 7,
      nav_link_location: {
        0: "#about_me",
        1: "#about_me",
        2: "#about_me_container",
        3: "#avatar_trigger",
        4: "#project_trigger",
        5: "#footer",
        6: "#about_me",
        7: "#tech_trigger",
        8: "#project_trigger",
        9: "#footer",
      },
    };
  },
  mounted() {
    var controller = new ScrollMagic.Controller();
    if (this.$mq === "lg") {
      new ScrollMagic.Scene({
        triggerElement: "#tech_trigger",
        triggerHook: 0.62,
      })
        .on("enter leave", this.add_to_ind)
        .addTo(controller);
      this.$nextTick(() => {
        new ScrollMagic.Scene({
          triggerElement: "#project_trigger",
          triggerHook: 0.49,
          offset: 250,
        })
          .on("enter leave", this.add_to_ind)
          .addTo(controller);
      });
    } else {
      new ScrollMagic.Scene({
        triggerElement: "#about_me_container",
        triggerHook: 1,
        offset: 50,
      })
        .setClassToggle(".up", "appear")
        .addTo(controller);
      new ScrollMagic.Scene({
        triggerElement: "#about_me_container",
        triggerHook: 0,
        offset: -10,
      })
        .on("enter leave", this.add_to_ind)
        .addTo(controller);
      new ScrollMagic.Scene({
        triggerElement: "#avatar_trigger",
        triggerHook: 0,
        offset: -10,
      })
        .on("enter leave", this.add_to_ind)
        .addTo(controller);
      new ScrollMagic.Scene({
        triggerElement: "#project_trigger",
        triggerHook: 0,
        offset: -10,
      })
        .on("enter leave", this.add_to_ind)
        .addTo(controller);
    }
    new ScrollMagic.Scene({
      triggerElement: "#footer",
      triggerHook: 0,
      offset: -20,
    })
      .setClassToggle(".down", "hide")
      .on("enter leave", this.add_to_ind)
      .addTo(controller);
  },
};
</script>

<style lang="scss" scoped>
.outer-view {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
/* logo-left & logo-right */
.main {
  height: 100vh;
  width: 100%;
  overflow-y: scroll;
  margin: auto;
  scroll-behavior: smooth;
}
.nav_arrow {
  position: absolute;
  left: calc(50vw - 12px);
  opacity: 0.7;
  transform: scale(1);
  transition: all ease-in-out 0.1s;
  text-decoration: none;
}
.nav_arrow.up {
  opacity: 0;
  pointer-events: none;
}
.nav_arrow.up.appear {
  opacity: 0.7;
  pointer-events: auto;
  top: 10px;
}
.nav_arrow.down {
  bottom: 10px;
}
.nav_arrow.down.hide {
  opacity: 0;
  pointer-events: none;
}
@media screen and (min-width: 1000px) {
  .nav_arrow:hover {
    opacity: 0.5;
    transform: scale(1.4);
  }
  #about_me {
    grid-column: span 2;
  }
  .main {
    // position: relative;
    max-width: min(1600px, 100vw);

    max-height: min(900px, 100vh);
    // width: 100%;
    display: grid;
    grid-template-columns: 50% 50%;
    scrollbar-width: none;
    -ms-overflow-style: none;
    padding: 20px;
  }
  .header a {
    margin: 10px;
    text-decoration: none;
  }
  .main::-webkit-scrollbar {
    display: none;
  }
  .contact_section {
    grid-column: span 2;
  }
}
</style>