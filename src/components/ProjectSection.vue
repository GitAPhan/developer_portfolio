<template>
    <div class="projects">
        <h1 class="projects_title" @click="model_value">Projects:</h1>
        <project-carousel class="highlighted_project" v-if="model != null" :project="project_view" />
        <v-sheet class="d-flex justify-center" v-if="$mq != 'lg'" color="primary" elevation="8" width="100vw">
            <v-slide-group v-model="model" mandatory show-arrows>
                <v-slide-item v-for="project in projects" :key="project.id" v-slot="{ active, toggle }">
                    <v-card :color="'anchor'" class="ma-1 d-flex align-center justify-center" height="100px"
                        width="150px" @click="toggle">
                        <v-img v-if="!active" class="accent--text" width="100%" :src="project.screenshot">
                            <v-card-title class="justify-center project_card_title">{{ project.name }}</v-card-title>
                        </v-img>
                        <v-scale-transition>
                            <v-icon v-if="active" color="anchor" size="28" v-text="'mdi-check-circle-outline'"></v-icon>
                        </v-scale-transition>
                    </v-card>
                </v-slide-item>
            </v-slide-group>
        </v-sheet>
        <project-display v-else :projects="projects" />
    </div>
</template>

<script>
import ProjectDisplay from './ProjectDisplay.vue'
import ProjectCarousel from './ProjectCarousel.vue'
import ScrollMagic from 'scrollmagic'
export default {
    components: { ProjectDisplay, ProjectCarousel },
    name: 'project-section',
    data() {
        return {
            model: null,
            projects: [
                {
                    "id": 1,
                    "name": "Scavenger Hunt",
                    "tech": ["VueJs", "Python", "Flask", "MariaDb", "MySql", "Vuetify"],
                    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem.",
                    "live_link": "https://github.com/GitAPhan/scavenger_hunt_frontend",
                    "github_link": "https://github.com/GitAPhan/scavenger_hunt_backend",
                    "screenshot": "http://fakeimg.pl/300x200/#d6cfcf/#464545?text=website&font=lobster",
                }, {
                    "id": 2,
                    "name": "Tweeter",
                    "tech": ["VueJs", "Python", "Flask", "MariaDb", "MySql"],
                    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem.",
                    "live_link": "https://github.com/GitAPhan/tweeter-project",
                    "github_link": "https://github.com/GitAPhan/tweeter_project_backend",
                    "screenshot": "https://dummyimage.com/300x200/d6cfcf/464545.jpg?text=screenshot",
                }, {
                    "id": 3,
                    "name": "Okotoks Pizza",
                    "tech": ["HTML5", "SASS"],
                    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem.",

                    "github_link": "https://github.com/GitAPhan/OkotoksPizza",
                    "screenshot": "http://loremflickr.com/g/300/200/website",
                }, {
                    "id": 4,
                    "name": "Pokemon Battle Simulator",
                    "tech": ["HTML5", "SASS", "SASS"],
                    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem.",
                    "live_link": "http://live_link.com",
                    "github_link": "https://github.com/GitAPhan/Classic_Pokemon_Battle_Hackathon",
                    "screenshot": "http://unsplash.it/g/300/200?random&gravity=center",
                },
            ],
        }
    },
    computed: {
        project_view() {
            return this.projects[this.model]
        },
    },
    methods: {
        model_value() {
            // used to test changing theme 
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark
            console.log('changing theme')
        }
    },
    mounted() {
        var controller = new ScrollMagic.Controller();
        // build scene only in lg screen mode
        if (this.$mq === 'lg') {
            new ScrollMagic.Scene({
                triggerElement: '#hide',
                offset: -400,
                triggerHook: 1,
            })
                .setClassToggle(".projects_title", "hide")
                .addTo(controller);
        }
    }
}
</script>

<style lang="scss">
.projects {
    background-color: var(--v-secondary);
    position: relative;
    place-items: center;
    height: 100vh;
    max-width: 100%;
    display: grid;
    padding: 10px 0px;
    grid-template-rows: auto 1fr auto;

    >h1 {
        justify-self: start;
        margin: 0px 5%;
    }

    row-gap: 10px;
}

.highlighted_project {
    position: relative;
    display: grid;
    height: 100%;
    width: 90%;
    padding: 15px;
    place-items: center;
    background-color: var(--v-primary);
}

.project_card_title {
    font-size: 1em;
}

@media screen and (min-width: 1000px) {
    .projects {
        // max-height: 100vh;
        background-color: var(--v-primary);
        grid-template-rows: auto 1fr;
        // overflow-y: scroll;
        -ms-overflow-style: none;
        /* IE and Edge */
        scrollbar-width: none;

        /* Firefox */
        >h1 {
            position: sticky;
            padding: 0px 5px 5px;
            margin: 0;
            top: 14.99vh;
            justify-self: end;
            background-color: var(--v-primary);
            z-index: 10;
        }
    }

    .projects::-webkit-scrollbar {
        display: none;
    }

    .projects_title {
        opacity: 1;
        transform: none;
        transition: all 0.4s ease-out;
    }

    .projects_title.hide {
        opacity: 0;
        transform: translate(100px, -100px);
    }
}
</style>