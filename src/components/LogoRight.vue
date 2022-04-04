<template>
    <div class="logo_right">
        <about-me v-if="view_width >= 1000" />
        <section class="logo main_right">
            <tools-tech v-if="view_width < 1000" />
        </section>
        <section v-if="view_width >= 1000" class="tech_text">
            <tools-tech />
        </section>
    </div>
</template>

<script>
import ToolsTech from './ToolsTech.vue'
import AboutMe from './AboutMe.vue'
export default {
    components: { ToolsTech, AboutMe },
    name: 'logo-right',
    computed: {
        view_width() {
            return window.innerWidth
        }
    },
}
</script>

<style>
.main_right {
    background-image: url("../assets/logo_right.png");
    background-position: left;
    scroll-snap-type: y proximity;
}
@media screen and (min-width: 1000px) {
    .logo_right {
        min-height: 300vh;
    }
    .main_right {
        position: sticky;
        top: 0;
    }
    .tech_text {
        position: relative;
        height: 100vh;
    }
}
</style>