<template>
  <div class="logo_right">
    <about-me v-if="$mq === 'lg'" />
    <section id="avatar_trigger" class="logo main_right">
      <tools-tech v-if="$mq != 'lg'" />
    </section>
    <span id="tech_trigger"/>
    <section v-if="$mq === 'lg'" class="tech_quote">
      <tools-tech class="quote"/>
    </section>
    
  </div>
</template>

<script>
import ScrollMagic from "scrollmagic";
import ToolsTech from './ToolsTech.vue'
import AboutMe from "./AboutMe.vue";
export default {
  components: {
    ToolsTech,
    AboutMe,
  },
  name: "logo-right",
  mounted() {
    this.$nextTick(() => {
      // build scene only in lg screen mode
      if (this.$mq === "lg") {
        var controller = new ScrollMagic.Controller();
        new ScrollMagic.Scene({
          triggerElement: "#footer",
          offset: 100,
          triggerHook: 1,
        })
          .setClassToggle(".quote", "hide")
          .addTo(controller);
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.main_right {
  background-image: url("../assets/logo_right.png");
  background-position: left;
  height: 100%;
  max-height: min(900px, 100vh);
  background-size: auto 70%;
}
@media screen and (max-width: 1000px) {.logo_right {
  height: 100vh;
}
  
}
@media screen and (min-width: 1000px) {
  #tech_trigger {
    scroll-margin: 40vh;
  }
  .logo_right {
    height: 100%;
  }
  .main_right {
    position: sticky;
    top: 0;
    // padding-bottom: 50%;
  }
  .tech_quote {
    position: sticky;
    top: 0;
    height: 100%;
    max-height: min(900px, 100vh);
  }
  .quote {
    position: sticky;
    top: 62.5%;
    transform: translateX(80px);
    opacity: 1;
    max-width: 70%;
    transition: all 0.4s ease-out;
  }
  .quote > p {
    font-size: 1vw;
  }
  .quote.hide {
    opacity: 0;
    transform: translate(250px, -100px);
  }
}
</style>