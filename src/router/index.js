import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [


  {
    path:'/',
    redirect:'/home'

  },


  {
    path:'/puxingSmartParking',
    name:"PuxingSmartParking",
    component: () => import( '../views/PuxingSmartParking/PuxingSmartParking.vue')

  },


  {
    path: '/home',
    name: 'Home',
    component: () => import( '../views/home/home.vue')
  },


  {
    path:'/solution',
    name:'Solution',
     component: () => import( '../views/solution/solution.vue')
  },

  {
    path:'/about',
    name: 'About',
     component: () => import( '../views/about/about.vue')
  },

  {
    path:'/putian',
    name: 'Putian',
    component: () => import( '../views/projects/Putian.vue')
  },

  {
    path:'/beijing',
    name: 'Beijing',
    component: () => import( '../views/projects/BeiJing.vue')
  },

  {
    path:'/constantUs',
    name: 'ConstantUs',
    component: () => import( '../views/constantUs/ConstantUs')
  },


]

const router = new VueRouter({
 // mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass:'active'
})

export default router
