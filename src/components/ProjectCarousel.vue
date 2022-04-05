<template>
    <div>
        <v-carousel-transition>
            <project-card v-if="project1 != undefined" :project="project1" :key="project1.id+.2" />
        
            <project-card v-if="project2 != undefined" :project="project2" :key="project2.id+.2" />
        </v-carousel-transition>
    </div>
</template>

<script>
import ProjectCard from "@/components/ProjectCard.vue"
export default {
    name: 'project-carousel',
    data() {
        return {
            project1: this.project,
            project2: undefined,
        }
    },
    props: {
        project: {
            type: Object,
            required: true
        },
    },
    watch: {
        project() {
            if (this.project2 === undefined) {
                this.project1 = undefined
                setTimeout(() => {this.project2 = this.project},1)
            } else {
                this.project2 = undefined
                setTimeout(() => {this.project1 = this.project},1)
            }
        }
    },
    components: {
        ProjectCard,
    },
}
</script>

<style lang="scss">
</style>