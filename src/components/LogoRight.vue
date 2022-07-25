<template>
  <div class="logo_right">
    <about-me v-if="$mq === 'lg'" />
    <section id="avatar_trigger" class="logo main_right">
      <!-- <tools-tech v-if="$mq != 'lg'" /> -->
    </section>
    <!-- <section v-if="$mq === 'lg'" class="tech_quote">
      <div class="quote">
        <p>
          Since graduating from a coding bootcamp and receiving my Full-Stack
          Development Diploma. I have played around with building different
          applications using JavaScript, VueJS, Python, Flask and MySQL just to
          name a few.
        </p>
      </div>
    </section> -->
  </div>
</template>

<script>
import ScrollMagic from "scrollmagic";
// import ToolsTech from './ToolsTech.vue'
import AboutMe from "./AboutMe.vue";
export default {
  components: {
    // ToolsTech,
    AboutMe,
  },
  name: "logo-right",
  mounted() {
    this.$nextTick(() => {
      // build scene only in lg screen mode
      if (this.$mq === "lg") {
        var controller = new ScrollMagic.Controller();
        new ScrollMagic.Scene({
          triggerElement: "#hide",
          offset: -320,
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
  max-height: 768px;
  background-size: auto 70%;
}
.logo_right {
  height: 100%;
}
@media screen and (min-width: 1000px) {
  .logo_right {
    min-height: 475%;
  }
  .main_right {
    position: sticky;
    top: 0;
    // background-size: auto 100%;
  }
  .tech_quote {
    position: sticky;
    top: 0vh;
    height: 150%;
  }
  .quote {
    position: sticky;
    top: 61vh;
    transform: translateX(min(17%, 150px));
    opacity: 1;
    max-width: 70%;
    transition: all 0.4s ease-out;
  }
  .quote > p {
    font-size: 20px;
  }
  .quote.hide {
    opacity: 0;
    transform: translate(250px, -100px);
  }
}
</style>