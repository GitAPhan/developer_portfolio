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
                accent: '#450303',
                secondary: '#717070',
                anchor: '#f7f7f7',
                background: "#1f1f1f"
            },
            light: {
                primary: '#d6cfcf',
                text: '#1f1f1f',
                accent: '#450303',
                secondary: '#a59e9e',
                anchor: '#1f1e1e',
                background: "#FFFFFF"
            }
        },
    },
})

export default vuetify
