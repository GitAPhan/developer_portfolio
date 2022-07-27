<template>
  <div class="left_logo">
    <section class="main_left">
      <hero-message :color_state="0" class="main_hero" />
      <!-- <soft-skills ref="soft_skills" v-if="$mq === 'lg'" /> -->
    </section>
    <!-- <project-section v-if="$mq === 'lg'" /> -->
  </div>
</template>

<script>
import HeroMessage from "@/components/HeroMessage.vue";
// import SoftSkills from "./SoftSkills.vue";
// import ProjectSection from "./ProjectSection.vue"
export default {
  name: "logo-left",
  components: {
    HeroMessage,
    // SoftSkills,
    // ProjectSection,
  },
  methods: {
    resize_soft_skills(value) {
      value = value + 85;
      this.$refs.soft_skills.$el.style = "width: " + value.toString() + "px";
    },
  },
  mounted() {
    if (this.$mq === "lg") {
      this.$root.$on("avatar_resize", this.resize_soft_skills);
    }
  },
  destroyed() {
    this.$root.$off("avatar_resize", this.resize_soft_skills);
  },
};
</script>

<style lang="scss" scoped>
.main_left {
  background-image: url("../assets/logo_left.png");
  background-position: right;
  background-size: auto 70%;
  height: 100%;
  max-height: 100vh;
  width: 100%;
  display: inline-flex;
}
.main_hero.hero_message {
  align-self: start;
  margin-top: max(42%, 160px);
  width: 100%;
  padding-left: 5%;
  height: 30%;
  max-width: 250px;
}
.left_logo {
  height: 100%;
}
@media screen and (min-width: 1000px) {
  .left_logo {
    position: relative;
    min-height: 475%;
  }
  .main_left {
    position: sticky;
    max-height: 768px;
    top: 0%;
    margin-bottom: 100%;
  }
  .main_hero.hero_message {
    margin-top: max(30%, 200px);
    width: 40%;
    margin-left: 15%;
    max-width: 355px;
  }
}
</style>