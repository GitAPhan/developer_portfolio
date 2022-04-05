import Vue from 'vue';
import VueMq from 'vue-mq';

Vue.use(VueMq, {
    breakpoints: {
        sm: 550,
        md: 1000,
        lg: 1800,
    }
});


export default VueMq
