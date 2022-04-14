<template>
    <div>
        <article v-for="project in projects" :key="project.id">
            <v-sheet class="pa-6 d-flex justify-center align-center" color="primary">
                <!-- <span v-if="project.id %2 === 0">
                    <h2>{{ project.name }}</h2>
                    <h4>{{ project.tech }}</h4>
                    <p>{{ project.description }}</p>
                </span>
                <span>
                    <img :src="project.screenshot" />
                    <v-card-actions class="pa-0">
                        <v-btn color="secondary" :href="project.github_link" text>github</v-btn>
                        live link button to only be present if value is not undefined
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
                </span>-->
                <v-card elevation="4" color="primary">
                    <v-container>
                        <v-row no-gutters>
                            <v-col>
                                <v-card-title>{{ project.name }}</v-card-title>
                                <v-img max-width="25vw" :src="project.screenshot" alt="website screenshot" />
                                <v-card-actions>
                                    <v-btn :href="project.github_link">
                                        <v-icon>mdi-github</v-icon>
                                    </v-btn>
                                    <v-btn
                                        v-if="project.live_link != undefined"
                                        :href="project.live_link"
                                    >
                                        <v-icon>mdi-application-export</v-icon>
                                    </v-btn>
                                </v-card-actions>
                            </v-col>
                            <v-col>
                                <v-card-subtitle class="d-flex">
                                    <p
                                        class="tech_chip"
                                        v-for="tag in project.tech"
                                        :key="tag + project.id"
                                    >{{ tag }}</p>
                                </v-card-subtitle>
                                <v-card-text>
                                    <p>{{ project.description }}</p>
                                </v-card-text>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card>
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
img {
    max-width: 25vw;
}
.tech_chip {
    border: 2px var(--v-text) solid;
    border-radius: 5px;
    padding: 0px 5px;
    margin-right: 5px;
    color: var(--v-anchor);
}
</style>