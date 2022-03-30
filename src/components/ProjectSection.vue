<template>
    <div class="projects">
        <h1 @click="model_value">Projects:</h1>
        <project-card class="highlighted_project" v-if="model != null" :project="project_view" />
        <v-sheet color="anchor" class="mx-auto" elevation="8" width="100vw">
            <v-slide-group v-model="model" class="pa-4" mandatory show-arrows>
                <v-slide-item
                    v-for="project in projects"
                    :key="project.id"
                    v-slot="{ active, toggle }"
                >
                    <v-card
                        :color="active ? 'primary' : 'secondary'"
                        class="ma-4"
                        height="100px"
                        width="150px"
                        hover
                        @click="toggle"
                    >
                        <v-scale-transition>
                            <v-icon
                                v-if="active"
                                color="accent"
                                size="28"
                                v-text="'mdi-check-circle-outline'"
                            ></v-icon>
                        </v-scale-transition>
                    </v-card>
                </v-slide-item>
            </v-slide-group>
        </v-sheet>
    </div>
</template>

<script>
import ProjectCard from './ProjectCard.vue'
export default {
    components: { ProjectCard },
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
                    "screenshot": "https://dummyimage.com/300x200/d6cfcf/464545.jpg?text=screenshot",
                }, {
                    "id": 2,
                    "name": "project name2",
                    "tech": ["tech", "used", "here"],
                    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem.",
                    "live_link": "http://live_link.com",
                    "github_link": "https://github.com/",
                    "screenshot": "https://dummyimage.com/300x200/d6cfcf/464545.jpg?text=screenshot1",
                }, {
                    "id": 3,
                    "name": "project name3",
                    "tech": ["tech", "used", "here"],
                    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem.",
                    "live_link": "http://live_link.com",
                    "github_link": "https://github.com/",
                    "screenshot": "https://dummyimage.com/300x200/d6cfcf/464545.jpg?text=screenshot2",
                }, {
                    "id": 4,
                    "name": "project name4",
                    "tech": ["tech", "used", "here"],
                    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem.",
                    "live_link": "http://live_link.com",
                    "github_link": "https://github.com/",
                    "screenshot": "https://dummyimage.com/300x200/d6cfcf/464545.jpg?text=screenshot3",
                },
            ],
        }
    },
    computed: {
        project_view() {
            return this.projects[this.model]
        }
    },
    methods: {
        model_value() {
            console.log(this.model)
        }
    },
}
</script>

<style lang="scss">
.projects {
    position: relative;
    place-items: center;
    height: 100vh;
    display: grid;
    grid-template-rows: 55px 1fr 194px;
    > h1 {
        justify-self: start;
        margin: 0px 5%;
    }
    row-gap: 10px;
}
.v-application .ma-4 {
    display: grid;
}
.highlighted_project {
    height: 100%;
    width: 90%;
}
</style>