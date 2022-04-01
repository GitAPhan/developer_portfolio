<template>
    <div>
        <v-scale-transition>
            <v-sheet
                v-if="project1 != undefined"
                class="project_card"
                color="primary"
                width="100%"
                height="100%"
            >
                <h2>{{ project1.name }}</h2>
                <h4>{{ project1.tech }}</h4>
                <h6>{{ project1.description }}</h6>
                <img :src="project1.screenshot" />
                <v-card-actions class="pa-0">
                    <v-btn color="secondary" :href="project1.github_link" text>github</v-btn>

                    <v-btn color="secondary" :href="project1.live_link" text>demo</v-btn>
                </v-card-actions>
            </v-sheet>
        </v-scale-transition>
        <v-scale-transition>
            <v-sheet
                v-if="project2 != undefined"
                class="project_card"
                color="primary"
                width="100%"
                height="100%"
            >
                <h2>{{ project2.name }}</h2>
                <h4>{{ project2.tech }}</h4>
                <h6>{{ project2.description }}</h6>
                <img :src="project2.screenshot" />
                <v-card-actions class="pa-0">
                    <v-btn color="secondary" :href="project2.github_link" text>github</v-btn>

                    <v-btn color="secondary" :href="project2.live_link" text>demo</v-btn>
                </v-card-actions>
            </v-sheet>
        </v-scale-transition>
    </div>
</template>

<script>
export default {
    name: 'project-card',
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
                setTimeout(() => { this.project2 = this.project }, 100)
            } else {
                this.project2 = undefined
                setTimeout(() => { this.project1 = this.project }, 100)
            }
        }
    },
}
</script>

<style lang="scss">
.project_card {
    position: absolute;
    display: grid;
    grid-template-rows: auto auto 1fr auto;
    place-items: center;
    padding: 15px;
    > img {
        width: 100%;
    }
}
</style>