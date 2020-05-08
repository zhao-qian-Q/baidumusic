// import Vue from '../node_modules/vue/dist/vue.min.js'
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import home from '../components/Home.vue';
import singerList from '../components/singercomponent/singerlist.vue'
import search from '../components/tabbercomponents/Search.vue'
import singinglist from '../components/tabbercomponents/Singinglist.vue'
import main from '../components/tabbercomponents/Main.vue'
let router = new Router({
  linkActiveClass: 'mui-active',
  routes: [
    {path:'/',redirect: 'home'},
    {path:'/home',component:home},
    {path:'/home/singerList',component:singerList},
    {path:'/home/search',component:search},
    {path:'/home/singinglist',component:singinglist},
    {path:'/home/main',component:main},


  ]
})
export default router