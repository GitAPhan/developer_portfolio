<template>
    <div>
        <v-sheet class="project_card" color="primary">
            <h2>{{ project.name }}</h2>
            <h4>{{ project.tech }}</h4>
            <p>{{ project.description }}</p>
            <img :src="project.screenshot" />
            <v-card-actions class="pa-0">
                <v-btn color="anchor" :href="project.github_link" text>github</v-btn>
                <!-- live link button to only be present if value is not undefined -->
                <v-btn
                    v-if="project.live_link != undefined"
                    color="anchor"
                    :href="project.live_link"
                    text
                >demo</v-btn>
            </v-card-actions>
        </v-sheet>
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
}
</script>

<style lang="scss">
.project_card {
    // max-height: 450px;
    // width: 100%;
    height: 100%;
    position: absolute;
    display: grid;
    grid-template-rows: auto auto 1fr auto auto;
    place-items: center;
    > img {
        width: 100%;
        max-width: 450px;
    }
    > h2 {
        position: sticky;
        top: 0;
        padding: 0px 5px 5px;
        background-color: var(--v-primary);
    }
    > p {
        color: var(--v-anchor);
    }
}
</style>