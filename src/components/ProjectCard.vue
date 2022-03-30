<template>
    <div>
        <v-slide-x-reverse-transition>
            <v-sheet @click="change" ref="fade" class="project_card" color="anchor" width="100%" height="100%">
                <h2>{{ project.name }}</h2>
                <h4>{{ project.tech }}</h4>
                <h6>{{ project.description }}</h6>
                <img :src="project.screenshot" />
            </v-sheet>
        </v-slide-x-reverse-transition>
    </div>
</template>

<script>
export default {
    name: 'project-card',
    props: {
        project: {
            type: Object,
            required: true
        },
    },
    methods: {
        change() {
            this.$refs.fade.opacity = 0
            setTimeout(() => {this.$refs.fade.opacity = 1}, 4000)
        }
    },
    watch: {
        project() {
            this.change()
            console.log(this.$refs)
        }
    },
    mounted () {
        console.log('break');
    },
}
</script>

<style>
.project_card {
    display: grid;
    place-items: center;
    padding: 25px;
}
</style>