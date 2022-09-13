<template>
  <div id="footer" class="footer">
    <!-- soft skills and logo -->
    <section class="soft_logo">
      <soft-skills class="soft_skills" v-if="$mq != 'lg'" />
      <hero-message :color_state="2" class="contact_hero" v-if="$mq === 'lg'" />
      <img class="contact_logo" src="@/assets/logo_full.png" alt="AP logo" />
    </section>
    <section class="contact_right">
      <!-- summary 'about-me' -->
      <tools-tech v-if="$mq === 'lg'" />
      <more-me />
      <!-- contact info -->
      <article class="contact_me">
        <h3>github:</h3>
        <a href="https://github.com/GitAPhan">github.com/GitAPhan</a>
        <h3>linkedin:</h3>
        <a href="https://linkedin.com/in/phandandrew"
          >linkedin.com/in/phandandrew</a
        >
        <h3>email:</h3>
        <a href="mailto:itsandrewphan@gmail.com">itsandrewphan@gmail.com</a>
      </article>
    </section>
  </div>
</template>

<script>
import SoftSkills from "@/components/SoftSkills.vue";
import MoreMe from "@/components/MoreMe.vue";
import HeroMessage from "@/components/HeroMessage.vue";
import ToolsTech from "@/components/ToolsTech.vue";
export default {
  components: { SoftSkills, MoreMe, HeroMessage, ToolsTech },
  name: "contact-section",
};
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  height: 100%;
  display: grid;
  grid-template-rows: auto auto auto;
}
.soft_logo {
  display: grid;
  align-items: center;
  > .contact_logo {
    max-width: 60%;
    max-height: 60%;
  }
}
.contact_right {
  display: grid;
  align-self: center;
  place-items: center;
}
.contact_me {
  place-self: center;
  display: grid;
  align-items: center;
  grid-template-columns: 2fr 3fr;
}
@media screen and (max-width: 1000px) {
  .soft_logo {
    grid-template-columns: 2fr 1fr;
    width: 80%;
    place-self: center;
    .soft_skills {
      max-width: 80%;
      grid-auto-flow: row;
      justify-self: start;
    }
    > .contact_logo {
      max-width: 100%;
    }
  }
  .footer {
    height: 100vh;
    .contact_right {
      height: 100%;
    }
  }
  .contact_me {
    width: 80%;
    margin: auto;
  }
}
@media screen and (min-width: 1000px) {
  .contact_hero {
    align-self: start;
    margin-top: 7px;
    width: 75%;
  }
  .footer {
    position: relative;
    grid-template-columns: 1fr 1fr;
    height: min(900px, 100vh);
    grid-template-rows: none;
    column-gap: 20px;
    background-color: var(--v-primary);
  }
  .soft_logo {
    grid-auto-flow: row;
    align-self: center;
    justify-self: end;
    padding: 0;
    height: 70%;
    max-height: 1000px;
    .contact_logo {
      align-self: end;
      margin-bottom: 7px;
    }
  }
  .contact_right {
    height: 70%;
    justify-self: start;
    justify-items: start;
    :nth-child(1) {
      align-self: start;
    }
  }
  .contact_me {
    justify-self: start;
    align-self: end;
    padding: 0;
  }
}
</style>