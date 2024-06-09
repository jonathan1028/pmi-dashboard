import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      meta: { requiresAuth: true },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DashboardView.vue')
    },
    {
      path: '/login',
      name: 'login',

      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('user')
  if (to.matched.some((record) => record.meta.requiresAuth) && !loggedIn) {
    next('/login')
  } else {
    next()
  }
})

export default router

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: HomeView
//     },
//     {
//       path: '/about',
//       name: 'about',
//       // route level code-splitting
//       // this generates a separate chunk (About.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import('../views/AboutView.vue')
//     },
//     {
//       path: '/resumes',
//       name: 'resume',
//       children: [
//         { path: '', component: ResumesMenuView },
//         { path: 'dataannotation_software_developer', component: DataAnnotation_Software_Developer },
//         { path: 'cfo_resume', component: CFO_Resume },
//         { path: 'eng_mgr_resume', component: Eng_Mgr_Resume },
//         { path: 'vectra_AI_eng_mgr_resume_v2', component: Vectra_AI_Eng_Mgr_Resume_v2 },
//         { path: 'machine_lrn_resume', component: Machine_Lrn_Resume }
//       ]
//     }
//   ]
// })

// export default router
