import Vue from 'vue'
import App from './App.vue'

import vueTabslider from './index.js'
Vue.use(vueTabslider)

new Vue({
  el: '#app',
  render: h => h(App)
})
