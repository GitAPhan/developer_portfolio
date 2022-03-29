import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

const vuetify = new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#464545',
                secondary: '#D6CFCF',
                anchor: '#c4c4c4',
                accent: '#540303'
            },
        },
    },
})

export default vuetify
