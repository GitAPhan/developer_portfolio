<template>
    <div class="left_logo">
        <section class="logo main_left">
            <hero-message class="hero" />
            <v-avatar class="profile_avatar" :size="avatar_size">
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
}
.hero {
    position: relative;
    top: 35vh;
    right:-8%;
    width: 50%;
    max-width: 250px;
    min-width: 160px;
}
.profile_avatar {
    position: relative;
    right: -8%;
    top: 37vh;
}
@media screen and (min-width: 1000px) {
    .left_logo {
        position: relative;
        height: 200vh;
    }
    .main_left {
        position: sticky;
        top: 0vh;
        /* border: white 2px solid; */
    }
    .hero {
        right: min(-90px, -20%);
        max-width: 500px;
    } 
    .profile_avatar {
        right: min(-90px, -20%);
    }
    
}
</style>