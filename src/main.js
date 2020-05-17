// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'

import http from './api/http'
Vue.use(VueAxios, http)
// Vue.use(http)
// import Music from './api/music'
// Vue.use(Music)

import Router from 'vue-router'
Vue.use(Router)

Vue.config.productionTip = false
// 引入清除默认样式css
import './assets/lib/base.css'
// 引js
// import './assets/lib/mui/js/mui.js'

// 引入菜单
import './assets/lib/mui/css/mui.min.css'
import { Tabbar, TabItem } from 'mint-ui';

Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);



// 引入vant
// import Vue from 'vue';
import '@vant/touch-emulator';
import { Swipe, SwipeItem,Tab, Tabs,NavBar,Icon,List,PullRefresh,Cell, CellGroup,Search } from 'vant';
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(NavBar);
Vue.use(Icon);
Vue.use(List);//下拉刷新与下滑加载
Vue.use(PullRefresh);//下拉刷新
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Search);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
