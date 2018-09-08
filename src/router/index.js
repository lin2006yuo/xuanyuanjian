import Vue from 'vue'
import Router from 'vue-router'
import Banner from 'pages/banner/banner'
import Index from 'pages/index/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Banner',
      component: Banner
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    }
  ]
})
