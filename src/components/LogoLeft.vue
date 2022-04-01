<template>
    <div>
        <section class="logo main_left">
            <hero-message class="hero" />
            <v-avatar class="profile_avatar" size="110">
                <img alt="Avatar" src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460" />
            </v-avatar>
        </section>
        <about-me v-if="view_width < 1000" />
    </div>
</template>

<script>
import HeroMessage from "@/components/HeroMessage.vue"
import AboutMe from "@/components/AboutMe.vue"
export default {
    name: 'logo-left',
    components: {
        HeroMessage,
        AboutMe
    },
    computed: {
        view_width() {
            return window.innerWidth 
        }
    },
}
</script>

<style>
.main_left {
    background-image: url("../assets/logo_left.png");
    background-position: right;
}
.hero {
    position: relative;
    top: 30vh;
    left: 8%;
    width: 50%;
    max-width: 250px;
    min-width: 160px;
}
.profile_avatar {
    position: relative;
    left: 8%;
    top: 30vh;
}
</style>