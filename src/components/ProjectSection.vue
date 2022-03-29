<template>
    <div class="projects">
        <h1>Projects:</h1>
        <!-- <project-card v-for="project in projects" :key="project.id" :project="project" /> -->
        <v-sheet class="mx-auto" elevation="8" max-width="800">
            <v-slide-group v-model="model" class="pa-4" mandatory show-arrows>
                <v-slide-item
                    v-for="project in projects"
                    :key="project.id"
                    v-slot="{ active, toggle }"
                >
                    <v-card
                        :color="active ? 'primary' : 'secondary'"
                        class="ma-4"
                        height="200px"
                        width="100px"
                        @click="toggle"
                    >
                        <v-card-title>{{ project.id }}</v-card-title>
                        <v-row class="fill-height" align="center" justify="center">
                            <v-scale-transition>
                                <v-icon
                                    v-if="active"
                                    color="white"
                                    size="48"
                                    v-text="'mdi-close-circle-outline'"
                                ></v-icon>
                            </v-scale-transition>
                        </v-row>
                    </v-card>
                </v-slide-item>
            </v-slide-group>
        </v-sheet>
    </div>
</template>

<script>
// import ProjectCard from './ProjectCard.vue'
export default {
    // components: { ProjectCard },
    name: 'project-section',
    data() {
        return {
            model: null,
            projects: [
                {
                    "id": 1,
                    "name": "project name",
                    "tech": ["tech", "used", "here"],
                    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem.",
                    "live_link": "http://live_link.com",
                    "github_link": "https://github.com/",
                    "screenshot": "image",
                }, {
                    "id": 2,
                    "name": "project name",
                    "tech": ["tech", "used", "here"],
                    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem.",
                    "live_link": "http://live_link.com",
                    "github_link": "https://github.com/",
                    "screenshot": "image",
                }, {
                    "id": 3,
                    "name": "project name",
                    "tech": ["tech", "used", "here"],
                    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem.",
                    "live_link": "http://live_link.com",
                    "github_link": "https://github.com/",
                    "screenshot": "image",
                }, {
                    "id": 4,
                    "name": "project name",
                    "tech": ["tech", "used", "here"],
                    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem.",
                    "live_link": "http://live_link.com",
                    "github_link": "https://github.com/",
                    "screenshot": "image",
                },
            ]
        }
    },
    methods: {
        toggle() {
            console.log('toggle')
        }
    },
}
</script>

<style>
.projects {
    height: 100vh;
    background-color: red;
}
</style> 