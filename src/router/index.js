
import Vue from 'vue'
//配置路由相关信息
import VueRouter from 'vue-router'
import Login from "../views/Login";
//1.安装VueRouter插件
Vue.use(VueRouter);
//2.创建VueRouter对象
const routes=[
  {
    path:'/Login',
    name:'Login',
    component:Login
  }
]
const router =new VueRouter({
  //配合路由和组件指尖的应用关系
  routes
});
//3.将router对象传入到vue实例
export default router
