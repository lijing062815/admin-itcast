// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import './styles/index.scss'

Vue.config.productionTip = false
Vue.use(ElementUI);

// 注册一个全局守卫，作用是在路由跳转前，对路由进行判断，防止未登录的用户跳转到其他页面去
router.beforeEach((to, form, next) => {
    let token = localStorage.getItem('mytoken')
        // 如果已经登录，不干涉后面对页面的访问
    if (token) {
        next()
    } else {
        if (to.path !== '/login') {
            // 如果页面没有登录，但你访问其他需要登录的页面，那我就让你跳到登录页面去
            next({ path: '/login' })
        } else {
            // 如果没有登录，但是你访问的login，那就不干涉你，让你访问
            next()
        }
    }
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})