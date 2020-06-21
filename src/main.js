import 'core-js/stable';
import "regenerator-runtime/runtime";
import Vue from 'vue'
import App from './App'
import router from './router'
import CoreuiVue from '@coreui/vue'
import { iconsSet as icons } from './assets/icons/icons.js'
import store from './store/index'
import api from './services/http'

import PulseLoader from 'vue-spinner/src/PulseLoader.vue'


Vue.config.performance = true
Vue.use(CoreuiVue,api)
Vue.prototype.$log = console.log.bind(console)
Object.defineProperty(Vue.prototype, '$http', {value: api})


new Vue({
  el: '#app',
  router,
  store,
  icons,
  template: '<App/>',
  components: {
    App,
    PulseLoader
  }
})
