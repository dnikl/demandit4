import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
require('dotenv').config()

import DefaultLayout from '@/layouts/DefaultLayout.vue'
import AboutLayout from '@/layouts/AboutLayout.vue'

Vue.component('default-layout', DefaultLayout);
Vue.component('about-layout', AboutLayout);

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
