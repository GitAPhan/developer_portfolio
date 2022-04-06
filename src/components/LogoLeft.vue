<template>
    <div class="left_logo">
        <section class="logo main_left">
            <hero-message />
            <soft-skills ref="soft_skills" v-if="$mq === 'lg'" />
        </section>
        <about-me v-if="$mq != 'lg'" />
        <project-section v-else />
    </div>
</template>

<script>
import HeroMessage from "@/components/HeroMessage.vue"
import AboutMe from "@/components/AboutMe.vue"
import ProjectSection from "./ProjectSection.vue"
import SoftSkills from "./SoftSkills.vue"
export default {
    name: 'logo-left',
    components: {
        HeroMessage,
        AboutMe,
        ProjectSection,
        SoftSkills,
    },
    methods: {
        resize_soft_skills(value) {
            this.$refs.soft_skills.$el.style = 'width: ' + value.toString() + 'px'
        }
    },
    mounted() {
        if (this.$mq === 'lg') {
            this.$root.$on('avatar_resize', this.resize_soft_skills);
        }
    },
} 
</script>

<style>
.main_left {
    background-image: url("../assets/logo_left.png");
    background-position: right;
}
.hero_message {
    position: relative;
    top: 35vh;
    left: 8%;
    width: 50%;
    max-width: 250px;
    min-width: 160px;
}
@media screen and (min-width: 1000px) {
    .left_logo {
        position: relative;
        min-height: 475vh;
    }
    .main_left {
        position: sticky;
        top: 0vh;
        height: 200vh;
        margin-bottom: 100vh;
    }
    .hero_message {
        left: min(90px, 20%);
        max-width: 500px;
    }
    .soft_skills {
        top: 64vh;
        position: absolute;
        left: min(90px, 20%);
        max-height: 21%;
        overflow: hidden;
    }
    /* also in ProjectSection */
    .projects {
        position: relative;
        top: 60vh;
    }
}
</style>