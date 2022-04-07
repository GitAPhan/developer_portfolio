<template>
    <div class="logo_right">
        <about-me v-if="$mq === 'lg'" />
        <section id="avatar_trigger" class="logo main_right">
            <tools-tech v-if="$mq != 'lg'" />
        </section>
        <section v-if="$mq === 'lg'" class="tech_quote">
            <figure class="quote">
                <h1>"Technology is a word that describes something that doesn't work"</h1>
                <figcaption>- Douglas Adams</figcaption>
            </figure>
        </section>
    </div>
</template>

<script>
import ScrollMagic from "scrollmagic";
import ToolsTech from './ToolsTech.vue'
import AboutMe from './AboutMe.vue'
export default {
    components: { ToolsTech, AboutMe },
    name: 'logo-right',
    mounted() {
        this.$nextTick(() => {
            // build scene only in lg screen mode
            if (this.$mq === 'lg') {
                var controller = new ScrollMagic.Controller();
                new ScrollMagic.Scene({
                    triggerElement: '#hide',
                    offset: -320,
                    triggerHook: 1,
                })
                    .setClassToggle(".quote", "hide")
                    .addTo(controller);
            }
        })
    }
}
</script>

<style>
.main_right {
    background-image: url("../assets/logo_right.png");
    background-position: left;
}
@media screen and (min-width: 1000px) {
    .logo_right {
        min-height: 475vh;
    }
    .main_right {
        position: sticky;
        top: 0;
    }
    .tech_quote {
        position: sticky;
        top: 0vh;
        height: 150vh;
    }
    .quote {
        position: sticky;
        top: 61vh;
        transform: translateX(min(15%, 150px));
        opacity: 1;
        max-width: 76%;
        transition: all 0.4s ease-out;
    }
    .quote.hide {
        opacity: 0;
        transform: translate(250px, -100px);
    }
}
</style>