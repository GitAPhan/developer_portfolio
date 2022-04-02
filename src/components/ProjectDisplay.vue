<template>
    <div>
        <article v-for="project in projects" :key="project.id">
            <v-sheet class="pa-6 d-flex justify-center align-center" color="primary">
                <span v-if="project.id %2 === 0">
                    <h2>{{ project.name }}</h2>
                    <h4>{{ project.tech }}</h4>
                    <p>{{ project.description }}</p>
                </span>
                <span>
                    <img :src="project.screenshot" />
                    <v-card-actions class="pa-0">
                        <v-btn color="secondary" :href="project.github_link" text>github</v-btn>
                        <!-- live link button to only be present if value is not undefined -->
                        <v-btn
                            v-if="project.live_link != undefined"
                            color="secondary"
                            :href="project.live_link"
                            text
                        >demo</v-btn>
                    </v-card-actions>
                </span>
                <span v-if="project.id %2 === 1">
                    <h2>{{ project.name }}</h2>
                    <h4>{{ project.tech }}</h4>
                    <p>{{ project.description }}</p>
                </span>
            </v-sheet>
        </article>
    </div>
</template>

<script>
export default {
    name: 'project-display',
    props: {
        projects: {
            type: Array,
            required: true
        },
    },
}
</script>

<style lang="scss" scoped>
img{
    width: 200px;
}
</style>