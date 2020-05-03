// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from "./router"//导入创建的路由配置表
//引入elementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios,axios)
Vue.config.productionTip = false
//使用elementUI
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //配置路由
  router,
  components: { App },
  template: '<App/>'
})
