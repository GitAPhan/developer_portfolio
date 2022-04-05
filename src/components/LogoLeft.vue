<template>
    <div class="left_logo">
        <section class="logo main_left">
            <hero-message />
        </section>
        <soft-skills ref="soft_skills" v-if="view_width >= 1000" />
        <about-me v-if="view_width < 1000" />
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
    data() {
        return {
            avatar_size: undefined
        }
    },
    computed: {
        view_width() {
            return window.innerWidth
        },
    },
    watch: {
        avatar_size() {
            this.$refs.soft_skills.style.width = this.avatar_size 
            console.log(this.$refs.soft_skills)
        }
    },
    mounted () {
        this.$root.$on('avatar_size', (size)=>{this.avatar_size = size
        console.log(size)});
    },
}
</script>

<style>
.main_left {
    background-image: url("../assets/logo_left.png");
    background-position: right;
    scroll-snap-type: y proximity;
}
.hero_message {
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
        top: 164vh;
        position: absolute;
        left: min(64px, 20%);
        width: 22%;
    }
}
</style>