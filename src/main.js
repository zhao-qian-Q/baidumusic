// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

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
import { Swipe, SwipeItem,Tab, Tabs,NavBar,Icon } from 'vant';
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(NavBar);
Vue.use(Icon);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
