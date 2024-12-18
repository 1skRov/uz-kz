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
        path: '/regions',
        name: 'Regions',
        component: () => import(/* webpackChunkName: "about" */ '@/pages/Regions/Regions.vue'),
        redirect: '/regions/guide',
        children: [
          {
            path: 'guide',
            name: 'guide',
            component: () => import(/* webpackChunkName: "about" */ '@/pages/Regions/Guide.vue'),
          },
          {
            path: 'info',
            name: 'info',
            component: () => import(/* webpackChunkName: "about" */ '@/pages/Regions/Informations.vue'),
          },
          {
            path: 'regions-contacts',
            name: 'regions-contacts',
            component: () => import(/* webpackChunkName: "about" */ '@/pages/Regions/Contacts.vue'),
          },
        ]
      },
      {
        path: '/documents',
        name: 'Documents',
        component: () => import(/* webpackChunkName: "about" */ '@/pages/Documents/Documents.vue')
      },
      {
        path: '/press-center',
        name: 'PressCenter',
        component: () => import(/* webpackChunkName: "about" */ '@/pages/Presscenter/PressCenter.vue')
      },
      {
        path:'/member-association',
        name:'MemberAssociation',
        component: () => import(/* webpackChunkName: "about" */ '@/components/Dialog.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import(/* webpackChunkName: "about" */ '@/components/404Page.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
