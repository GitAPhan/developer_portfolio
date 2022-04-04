<template>
    <div class="left_logo">
        <section class="logo main_left">
            <hero-message class="hero" />
        </section>
        <about-me v-if="view_width < 1000" />
        <project-section v-else />
    </div>
</template>

<script>
import HeroMessage from "@/components/HeroMessage.vue"
import AboutMe from "@/components/AboutMe.vue"
import ProjectSection from "./ProjectSection.vue"
// import SoftSkills from "./SoftSkills.vue"
export default {
    name: 'logo-left',
    components: {
        HeroMessage,
        AboutMe,
        ProjectSection,
        // SoftSkills,
    },
    computed: {
        view_width() {
            return window.innerWidth
        },
        avatar_size() {
            if (this.view_width > 1400) {
                return 180
            } else if (this.view_width >= 1000) {
                return 128
            } else if (this.view_width >= 500) {
                return 110
            } else {
                return 95
            }
        }
    },
}
</script>

<style>
.main_left {
    background-image: url("../assets/logo_left.png");
    background-position: right;
    scroll-snap-type: y proximity;
}
.hero {
    position: relative;
    top: 35vh;
    right: -8%;
    width: 50%;
    max-width: 250px;
    min-width: 160px;
}
@media screen and (min-width: 1000px) {
    .left_logo {
        position: relative;
        height: 300vh;
    }
    .main_left {
        position: sticky;
        top: 0vh;
        margin-bottom: 100vh;
    }
    .hero {
        right: min(-90px, -20%);
        max-width: 500px;
    }
    .soft_skills {
        top: 40vh;
        position: relative;
        right: min(-90px, -20%);
        display: grid;
        grid-auto-flow: row;
        justify-self: end;
        row-gap: 0px;
        width: 22%;
    }
}
</style>