<template>
    <div>
        <article>
            <v-slide-y-reverse-transition
                :leave-absolute="true"
                :hide-on-leave="true"
                mode="in"
                origin="top left"
                :group="true"
            >
                <project-card v-if="view" :project="project" :key="project.id + .2" />
                <project-card v-else :project="project" :key="project.id + .3" />
            </v-slide-y-reverse-transition>
        </article>
    </div>
</template>

<script>
import ProjectCard from "@/components/ProjectCard.vue"
export default {
    name: 'project-carousel',
    data() {
        return {
            view: null,
        }
    },
    props: {
        project: {
            type: Object,
            required: true
        },
    },
    watch: {
        project: function () {
            this.view = !this.view
        }
    },
    components: {
        ProjectCard,
    },
}
</script>

<style lang="scss">
.highlighted_project > article {
    height: 100%;
    width: 100%;
    position: relative;
    overflow: hidden;
    overflow-y: scroll;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
}
.highlighted_project > article::-webkit-scrollbar {
    display: none;
}
</style>