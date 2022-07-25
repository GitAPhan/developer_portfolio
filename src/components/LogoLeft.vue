<template>
  <div class="left_logo">
    <section class="main_left">
      <hero-message :color_state="0" class="main_hero" />
      <soft-skills ref="soft_skills" v-if="$mq === 'lg'" />
    </section>
    <!-- <about-me v-if="$mq != 'lg'" />
        <project-section v-else /> -->
  </div>
</template>

<script>
import HeroMessage from "@/components/HeroMessage.vue";
import SoftSkills from "./SoftSkills.vue";
// import AboutMe from "@/components/AboutMe.vue"
// import ProjectSection from "./ProjectSection.vue"
export default {
  name: "logo-left",
  components: {
    HeroMessage,
    SoftSkills,
    // AboutMe,
    // ProjectSection,
  },
  methods: {
    resize_soft_skills(value) {
      this.$refs.soft_skills.$el.style = "width: " + value.toString() + "px";
    },
  },
  mounted() {
    if (this.$mq === "lg") {
      this.$root.$on("avatar_resize", this.resize_soft_skills);
    }
  },
};
</script>

<style lang="scss" scoped>
.main_left {
  background-image: url("../assets/logo_left.png");
  background-position: right;
  background-size: auto 70%;
  height: 100%;
  width: 100%;
  display: inline-flex;
}
.main_hero.hero_message {
  // position: relative;
  justify-self: center;
  align-self: center;
  // top: 20%;
  // left: 1%;
  width: 60%;
  padding-left: 8%;
  // max-width: 250px;
  // min-width: 160px;
}
.left_logo {
  height: 100%;
}
@media screen and (min-width: 1000px) {
  .left_logo {
    position: relative;
    // min-height: 475%;
  }
  .main_left {
    // position: sticky;
    max-height: 768px;
    // top: 0vh;
    background-size: auto 100%;
    // margin-bottom: 100%;
  }
  .main_hero.hero_message {
    // left: max(100px, 10%);
    max-width: 355px;
  }
  .main_left > .soft_skills {
    // top: 64%;
    // position: absolute;
    /* left: max(100px, 10%); */
    /* max-height: 21%; */
    /* overflow: hidden; */
  }
  /* also in ProjectSection */
  .projects {
    // position: relative;
    // top: 60%;
  }
}
</style>