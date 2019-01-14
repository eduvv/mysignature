import Vue from "vue";
import './plugins/vuetify'
import App from "./App.vue";
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false;

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fab, faFacebookSquare, faTwitterSquare,faInstagram,faLinkedin } from '@fortawesome/free-brands-svg-icons'


library.add(faCoffee)
library.add(faFacebookSquare)
library.add(faTwitterSquare)
library.add(faInstagram)
library.add(faLinkedin)

Vue.component('font-awesome-icon', FontAwesomeIcon)


new Vue({
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
