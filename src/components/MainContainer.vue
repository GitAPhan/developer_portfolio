<template>
  <div class="outer-view d-flex justify-center align-center">
    <v-app-bar
      class="d-flex justify-center align-center header"
      v-if="$mq === 'lg'"
      absolute
      color="rbga(0, 0, 0, 0.0)"
      dark
      hide-on-scroll
      scroll-target="#scrolling-techniques-4"
    >
      <a href="#about_me">about me</a>
      <a href="#tech_trigger">tech stack</a>
      <a href="#project_trigger1">projects1</a>
      <a href="#project_trigger2">projects2</a>
      <a href="#project_trigger3">projects3</a>
      <a href="#project_trigger4">projects4</a>
      <a href="#footer">contact</a>
    </v-app-bar>
    <div id="scrolling-techniques-4" class="inner-view main">
      <span id="about_me" />
      <logo-left />
      <about-me v-if="$mq != 'lg'" />
      <logo-right />
      <project-section v-if="$mq != 'lg'" />
      <Contact-section class="contact_section" />
      <a :href="test" class="nav_arrow down"><v-icon>mdi-arrow-down-thick</v-icon></a>
      <!-- <v-icon class="down_arrow" @click="scroll_down">mdi-arrow-down-thick</v-icon> -->
    </div>
  </div>
</template>

<script>
import LogoLeft from "./LogoLeft.vue";
import AboutMe from "@/components/AboutMe.vue";
import LogoRight from "./LogoRight.vue";
import ProjectSection from "./ProjectSection.vue";
import ContactSection from "./ContactSection.vue";
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
    scroll_down() {
      let sect = document.querySelector(".main");
      console.log(sect.scrollTop);
      let pageHeight = sect.clientHeight;
      let scrollHeight = pageHeight;
      if (sect.scrollTop >= pageHeight) {
        scrollHeight -= sect.clientHeight / 2;
      }
      sect.scrollTo({ top: scrollHeight, behavior: "smooth" });
      console.log(scrollHeight);
    },
    please() {
      console.log(document.querySelector(".about_me_container"))
      return "#project_trigger"
    }
  },
  data() {
    return {
      test: this.please(),
      location: {
        "#about_me":  document.querySelector("#about_me"),
      },
    };
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
  opacity: 0.5;
  transform: scale(1);
  text-decoration: none;
}
.nav_arrow.down{
  bottom: 10px;
}
.nav_arrow:hover {
  opacity: 1;
  transform: scale(1.4);
}
@media screen and (min-width: 1000px) {
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