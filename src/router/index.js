// import Vue from '../node_modules/vue/dist/vue.min.js'
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import home from '@/components/Home';
let router = new Router({
  routes: [
    { path: '/', component: home },

  ]
})
export default router