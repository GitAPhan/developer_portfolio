<template>
    <div class="logo_right">
        <about-me v-if="$mq === 'lg'" />
        <section id="avatar_trigger" class="logo main_right">
            <tools-tech v-if="$mq != 'lg'" />
        </section>
        <section v-if="$mq === 'lg'" class="tech_text">
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
}
</script>

<style>
.main_right {
    background-image: url("../assets/logo_right.png");
    background-position: left;
}
@media screen and (min-width: 1000px) {
    .logo_right {
        min-height: 400vh;
    }
    .main_right {
        position: sticky;
        top: 0;
    }
    .tech_text {
        position: sticky;
        top: 0vh;
        height: 150vh;
    }
}
</style>