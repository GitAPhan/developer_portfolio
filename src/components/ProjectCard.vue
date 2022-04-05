<template>
    <div>
        <v-sheet
            v-if="project != undefined"
            class="project_card"
            color="primary"
            width="100%"
            height="100%"
        >
            <h2>{{ project.name }}</h2>
            <h4>{{ project.tech }}</h4>
            <p>{{ project.description }}</p>
            <img :src="project.screenshot" />
            <v-card-actions class="pa-0">
                <v-btn color="accent" :href="project.github_link" text>github</v-btn>
                <!-- live link button to only be present if value is not undefined -->
                <v-btn
                    v-if="project.live_link != undefined"
                    color="accent"
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
    position: absolute;
    display: grid;
    grid-template-rows: auto auto 1fr auto;
    place-items: center;
    padding: 15px;
    > img {
        width: 100%;
        max-width: 450px;
    }
    overflow-y: scroll;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
}
.project_card::-webkit-scrollbar {
    display: none;
}
</style>