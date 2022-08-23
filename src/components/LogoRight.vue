<template>
  <div class="logo_right">
    <about-me v-if="$mq === 'lg'" />
    <section id="avatar_trigger" class="logo main_right">
      <tools-tech v-if="$mq != 'lg'" />
    </section>
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
          triggerElement: "#avatar_trigger",
          offset: -30,
          triggerHook: 0,
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
  max-height: 768px;
  background-size: auto 70%;
}
.logo_right {
  height: 100%;
}
@media screen and (min-width: 1000px) {
  .logo_right {
    min-height: 550%;
  }
  .main_right {
    position: sticky;
    top: 0;
    // background-size: auto 100%;
  }
  .tech_quote {
    position: sticky;
    top: 0;
    height: 100%;
  }
  .quote {
    position: sticky;
    top: 61%;
    transform: translateX(min(17%, 150px));
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