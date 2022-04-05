import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueMq from './plugins/VueMq'

Vue.config.productionTip = false

new Vue({
  vuetify,
  VueMq,
  render: h => h(App)
}).$mount('#app')
