// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Router from 'vue-router'
Vue.use(Router)

Vue.config.productionTip = false
// 引入清除默认样式css
import './assets/lib/base.css'

// 引入菜单
import './assets/lib/mui/css/mui.min.css'
import { Tabbar, TabItem } from 'mint-ui';

Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
