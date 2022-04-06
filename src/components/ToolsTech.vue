<template>
    <div class="tools_n_tech">
        <h1>Tools & Technologies</h1>
        <p>HTML5, CSS, SASS, Javascript, VueJS</p>
        <p>Bash, Git, Google Cloud Services, Figma, Postman</p>
        <p>SQL Databases (MariaDB), Database Tools(DBeaver)</p>
        <p>Python, Flask, Rest API, Apache</p>
        <p>Linux, Windows</p>
    </div>
</template>

<script>
import ScrollMagic from "scrollmagic";
export default {
    name: 'tools-tech',
    mounted() {
        var controller = new ScrollMagic.Controller();
        // build scene only in lg screen mode
        if (this.$mq === 'lg') {
            new ScrollMagic.Scene({
                triggerElement: '#hide',
                triggerHook: 1,
            })
                .setClassToggle(".tools_n_tech", "hide")
                .addTo(controller);
        }
    }
}
</script>

<style lang="scss" scoped>
.tools_n_tech {
    position: relative;
    top: 61vh;
    left: min(18%, 75px);
    max-width: 76vw;
    color: var(--v-text);
    font-size: clamp(13.2px, min(3.55vw, 3.55vh), 14.5px);
    > p {
        margin: 0;
        color: var(--v-anchor);
    }
}
@media screen and (min-width: 1000px) {
    .tools_n_tech {
        position: sticky;
        top: 61vh;
        transform: translateX(min(15%, 150px));
        // exit transition
        opacity: 1;
        transition: all 0.4s ease-out;
    }
    .tools_n_tech.hide {
        opacity: 0;
        transform: none;
    }
}
</style>