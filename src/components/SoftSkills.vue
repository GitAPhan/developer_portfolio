<template>
    <div class="soft_skills">
        <img class="skill" src="@/assets/line_inquisitive_thinker.png" alt="inquisitve thinker" />
        <img class="skill" src="@/assets/line_problem_solver.png" alt="problem solver" />
        <img class="skill" src="@/assets/line_diy_enthusiast.png" alt="diy enthusiast" />
        <img class="skill" src="@/assets/line_sporty_spice.png" alt="sporty spice" />
        <img class="skill" src="@/assets/line_music_lover.png" alt="music lover" />
        <img class="skill" src="@/assets/line_adaptable.png" alt="adaptable" />
        <img class="skill" src="@/assets/line_quick_learner.png" alt="quick learner" />
        <img class="skill" src="@/assets/line_independant.png" alt="independant" />
        <img class="skill" src="@/assets/line_team_player.png" alt="team player" />
    </div>
</template>

<script>
import ScrollMagic from 'scrollmagic'
export default {
    name: 'soft-skills',
    mounted() {
        if (this.$mq === 'lg') {
            var controller = new ScrollMagic.Controller();
            // build scenes
            var revealElements = document.getElementsByClassName("skill");
            for (var i = 0; i < revealElements.length; i++) { // create a scene for each element
                new ScrollMagic.Scene({
                    triggerElement: '#avatar_trigger', // y value not modified, so we can use element as trigger as well
                    offset: 150 + (i * 35),
                    triggerHook: 0.5,
                })
                    .setClassToggle(revealElements[i], "visible") // add class toggle
                    .addTo(controller);
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.soft_skills {
    // width: 45%;
    display: grid;
    row-gap: 0px;
    :nth-child(1) {
        width: 100%;
    }
    :nth-child(2) {
        width: 95%;
    }
    :nth-child(3) {
        width: 89%;
    }
    :nth-child(4) {
        width: 83%;
    }
    :nth-child(5) {
        width: 77%;
    }
    :nth-child(6) {
        width: 71%;
    }
    :nth-child(7) {
        width: 65%;
    }
    :nth-child(8) {
        width: 59%;
    }
    :nth-child(9) {
        width: 55%;
    }
}
@media screen and (min-width: 1000px) {
    .skill {
        opacity: 0;
        transition: all 0.6s ease-in-out;
        transform: translateX(-40px);
    }
    .skill.visible {
        opacity: 1;
        transform: none;
    }
}
</style>