import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
import VueSmoothScroll from 'vue-smooth-scroll'

import Home from '@/components/Home'
import FoodTracker from '@/components/FoodTracker'
import WoningInrichter from '@/components/WoningInrichter'
import DrumGenerator from '@/components/DrumGenerator'

Vue.use(Router)
Vue.use(Meta)
Vue.use(VueSmoothScroll)

export default new Router({
    mode: 'history',
    scrollBehavior: function(to, from, savedPosition) {
        if (to.hash) {
            return {selector: to.hash}
        } else {
            return { x: 0, y: 0 }
        }
    },
    routes: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/foodtracker',
        name: 'FoodTracker',
        component: FoodTracker
      },
      {
        path: '/woninginrichter',
        name: 'WoningInrichter',
        component: WoningInrichter
      },
      {
        path: '/drumgenerator',
        name: 'DrumGenerator',
        component: DrumGenerator
      }
    ]
})
