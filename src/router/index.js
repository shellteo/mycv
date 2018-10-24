import Vue from 'vue'
import Router from 'vue-router'
import myCV from '@/pages/myCV'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'myCV',
      component: myCV
    }
  ]
})
