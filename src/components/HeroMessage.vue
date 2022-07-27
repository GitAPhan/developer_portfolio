<template>
  <div @click="change_fname_color" class="hero_message">
    <img src="../assets/heroL_hello_world.png" alt="hello world" />
    <div class="fname" ref="fname" />
    <img
      v-if="color_state === 2"
      src="../assets/heroL_phan_white.png"
      alt="Phan"
    />
    <img v-else src="../assets/heroL_phan_black.png" alt="Phan" />
    <img src="../assets/heroL_full_stack.png" alt="a Full-Stack" />
    <img ref="developer" src="../assets/heroL_developer.png" alt="Developer" />
    <v-avatar class="avatar" :size="avatar_size + 40">
      <img alt="Avatar" src="../assets/hero_picture.png" />
    </v-avatar>
    <soft-skills class="soft-skills"/>
  </div>
</template>

<script>
import ScrollMagic from "scrollmagic";
import SoftSkills from "@/components/SoftSkills.vue";
export default {
  name: "hero-message",
  components: {
    SoftSkills,
  },
  data() {
    return {
      avatar_size: undefined,
      isWhite: true,
    };
  },
  mounted() {
    // determine avatar size based off previous sibling's clientWidth
    this.$nextTick(() => {
      this.avatarSize();
    });
    // scroll magic for avatar disappearing
    if (this.$mq === "lg") {
      var controller = new ScrollMagic.Controller();
      // build scenes
      new ScrollMagic.Scene({
        triggerElement: "#avatar_trigger",
        offset: 150,
        triggerHook: 0.8,
      })
        .setClassToggle(".avatar", "hide") // add class toggle
        .addTo(controller);
      new ScrollMagic.Scene({
        triggerElement: "#avatar_trigger",
        offset: 200,
        triggerHook: 0.85,
      })
        .setClassToggle(".avatar", "disappear") // add class toggle
        .addTo(controller);
      new ScrollMagic.Scene({
        triggerElement: "#avatar_trigger",
        offset: 275,
        triggerHook: 0.85,
      })
        .setClassToggle(".soft-skills", "reappear") // add class toggle
        .addTo(controller);
      new ScrollMagic.Scene({
        triggerElement: "#avatar_trigger",
        offset: 210,
        triggerHook: 0.8,
      })
        .setClassToggle(".fname", "hidden") // add class toggle
        .addTo(controller);
    }
  },
  created() {
    window.addEventListener("resize", this.avatarSize);
  },
  destroyed() {
    window.removeEventListener("resize", this.avatarSize);
  },
  methods: {
    avatarSize() {
      if (this.$mq === "lg") {
        this.$root.$emit(
          "avatar_resize",
          this.$refs.developer.clientWidth * 0.8
        );
      }
      this.avatar_size = Math.round(this.$refs.developer.clientWidth * 0.69);
    },
    change_fname_color: function () {
      console.log(this.isWhite);
      this.isWhite = !this.isWhite;
    },
  },
  props: {
    color_state: {
      type: Number,
      require: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.hero_message {
  display: grid;

  :nth-child(1) {
    width: 100%;
  }

  .fname {
    width: 94%;
    height: 0px;
    position: relative;
    background-image: url("../assets/heroL_andrew_white.png");
    background-size: cover;
    background-repeat: no-repeat;
    overflow-y: visible;
    overflow-x: hidden;
    padding-bottom: 19%;
  }

  :nth-child(3) {
    width: 82%;
  }

  :nth-child(4) {
    width: 79%;
  }

  :nth-child(5) {
    width: 75%;
  }
}
.soft-skills{
  width: 70%;
  .reappear {
  display: grid;
}
}

.avatar {
  opacity: 1;
  transform: none;
  transition: all 1s ease-in-out;
}

.avatar.hide {
  opacity: 0;
  transform: translate(80px, -180px);
}
.disappear {
  display: none;
}

.fname.hidden {
  background-image: url("../assets/heroL_andrew_black.png");
}
@media screen and (max-width: 1000px) {
  .soft-skills {
    display: none;
  }
}
</style>