import Vue from 'vue'
import Router from 'vue-router'
import myCV from '@/pages/myCV'
import cv2 from '@/pages/cv2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'myCV',
      component: myCV
    },
    {
      path: '/cv2',
      name: 'cv2',
      component: cv2
    }
  ]
})
