import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/views/Hello'
import aboutPage from '@/views/about'
import showuiPage from '@/views/showui'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/about',
      name: 'about',
      component: aboutPage
    },
    {
      path: '/showui',
      name: 'showui',
      component: showuiPage
    }

  ]
})
