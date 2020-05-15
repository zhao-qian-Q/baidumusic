// import Vue from '../node_modules/vue/dist/vue.min.js'
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import home from '../pages/Home.vue';
import singerList from '../pages/singerlist.vue'
import search from '../pages/Search.vue'
import singinglist from '../pages/Singinglist.vue'
import main from '../pages/Main.vue'
import singerDetails from '../pages/singerDetails.vue'
import songsListDetail from '../pages/SongslistDetail.vue'
import songPlay from '../pages/SongPlay.vue'
import homeMore from '../pages/HomeMore.vue'
let router = new Router({
  linkActiveClass: 'mui-active',
  routes: [
    {path:'/',redirect: 'home'},
    {path:'/home',component:home},
    {path:'/home/singerList',component:singerList},
    {path:'/home/search',component:search},
    {path:'/home/singinglist',component:singinglist},
    {path:'/home/main',component:main},
    {path:'/home/singerDetails/:tinguid',component:singerDetails},
    {path:'/home/songsListDetail/:type',component:songsListDetail},
    {path:'/home/songPlay/:songid',component:songPlay},
    {path:'/home/homeMore/:type/:title',component:homeMore},



  ]
})
export default router