import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

const vuetify = new Vuetify({
    theme: {
        dark: true,
        themes: {
            dark: {
                primary: '#464545',
                text: '#ffffff',
                secondary: '#450303',
                accent: '#d6cfcf',
                anchor: '#f1f1f1',
                background: "#1f1f1f"
            },
            light: {
                primary: '#f1f1f1',
                text: '#1f1f1f',
                secondary: '#450303',
                accent: '#d6cfcf',
                anchor: '#464545',
                background: "#FFFFFF"
            }
        },
    },
})

export default vuetify
