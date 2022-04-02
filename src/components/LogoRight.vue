<template>
    <div class="logo_right">
        <about-me v-if="view_width >= 1000"/>
        <section class="logo main_right">
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
}
@media screen and (min-width: 1000px) {
    .logo_right {
        height: 200vh;
    }
}
</style>