import { createRouter, createWebHashHistory } from 'vue-router'
import FullMainPage from "@/pages/FullPage.vue";
const routes = [
  {
    path: '/',
    name: 'home',
    component: FullMainPage,
    children: [
      {
        path: '',
        name: 'MainPage',
        component: () => import(/* webpackChunkName: "about" */ '@/pages/Main/MainPage.vue')
      },
      {
        path: '/about-us',
        name: 'AboutUs',
        component: () => import(/* webpackChunkName: "about" */ '@/pages/aboutus/AboutUs.vue')
      },
      {
        path:'/member-association',
        name:'MemberAssociation',
        component: () => import(/* webpackChunkName: "about" */ '@/components/Dialog.vue')
      }
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
