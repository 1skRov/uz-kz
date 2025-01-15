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
        component: () => import('@/pages/Main/MainPage.vue')
      },
      {
        path: '/about-us',
        name: 'AboutUs',
        component: () => import('@/pages/aboutus/AboutUs.vue')
      },
      {
        path: '/about-us/organization/:id',
        name: 'OrganizationDetails',
        component: () => import('@/pages/aboutus/OrganizationDetails.vue'),
        props: true,
      },
      {
        path: '/regions',
        name: 'Regions',
        component: () => import('@/pages/Regions/Regions.vue'),
        redirect: '/regions/guide',
        children: [
          {
            path: 'guide',
            name: 'guide',
            component: () => import('@/pages/Regions/Guide.vue'),
          },
          {
            path: 'info',
            name: 'info',
            component: () => import('@/pages/Regions/Informations.vue'),
          },
          {
            path: 'regions-contacts',
            name: 'regions-contacts',
            // component: () => import('@/pages/Regions/Contacts.vue'),
            component: () => import('@/pages/Regions/Contacts'),
          },
        ]
      },
      {
        path: '/documents',
        name: 'Documents',
        component: () => import('@/pages/Documents/Documents.vue')
      },
      {
        path: '/press-center',
        name: 'PressCenter',
        component: () => import('@/pages/Presscenter/PressCenter.vue')
      },
      {
        path: '/news/:id',
        name: 'NewsDetails',
        component: () => import('@/pages/Presscenter/NewsDetail.vue'),
        props: true,
      },
      {
        path: '/contacts',
        name: 'Contacts',
        redirect: '/contacts/republic',
        component: () => import('@/pages/Contacts/Contacts.vue'),
        children: [
          {
            path: 'republic',
            name: 'republic',
            component: () => import('@/pages/Contacts/Republic.vue'),
          },
          {
            path: 'regions',
            name: 'regions',
            component: () => import('@/pages/Contacts/Regions.vue'),
          },
        ]
      },
      {
        path: '/donates',
        name: 'Donates',
        redirect: '/donates/card',
        component: () => import('@/pages/Donates/Donates.vue'),
        children: [
          {
            path: 'card',
            name: 'card',
            component: () => import('@/pages/Donates/DonatesCard.vue'),
          },
          {
            path: 'qr',
            name: 'qr',
            component: () => import('@/pages/Donates/DonatesQr.vue'),
          },
        ]
      },
      {
        path:'/famous-persons',
        name:'FamousPersons',
        component: () => import('@/pages/aboutus/FamousPersonsPage.vue')
      },
      {
        path: '/famous-persons/:id',
        name: 'FamousPersonDetails',
        component: () => import('@/pages/aboutus/PersonDetail.vue'),
        props: true
      },
      {
        path:'/sport',
        name:'Sport',
        component: () => import('@/pages/Regions/Sport.vue')
      },
      {
        path:'/education',
        name:'Education',
        component: () => import('@/pages/Regions/Education.vue')
      },
      // {
      //   path:'/project',
      //   name:'Project',
      //   component: () => import('@/pages/Regions/Project.vue')
      // },
      // {
      //   path:'/organization',
      //   name:'Sport',
      //   component: () => import('@/pages/Regions/Sport.vue')
      // },
      {
        path:'/member-association',
        name:'MemberAssociation',
        component: () => import('@/components/Dialog.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('@/components/404Page.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    return { top: 0 }
  }
})

export default router
