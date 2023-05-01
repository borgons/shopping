import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { createRouter, createWebHashHistory } from "vue-router";

import Dashboard  from '../pages/Dashboard.vue'
import MarketPlace  from '../pages/MarketPlace.vue'
import ShoppingCart from '../pages/ShoppingCart.vue'
import BillingConfirm from '../pages/BillingConfirmation.vue'
import PersonalInfo from '../pages/PersonalInfo.vue'
import MustPurchased from '../pages/alertPages/MustPurchased.vue'
import MustLoggedIn from '../pages/alertPages/MustLoggedIn.vue'

// Authentication 
import SignIn from '../pages/authentication/SignIn.vue'
import SignUp from '../pages/authentication/SignUp.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/marketPlace',
    name: 'MarketPlace',
    component: MarketPlace
  },
  {
    path: '/shoppingCart',
    name: 'ShoppingCart',
    component: ShoppingCart, 
    meta: { requiresAuth: true}
  },
  {
    path: '/billingConfirm',
    name: 'BillingConfirm',
    component: BillingConfirm, 
    meta: { requiresAuth: true}
  },
  {
    path: '/personalInfo',
    name: 'PersonalInfo',
    component: PersonalInfo,
    meta: { requiresAuth: true} 
  },
  {
    path: '/mustPurchased',
    name: 'MustPurchased',
    component: MustPurchased
  }, 
  {
    path: '/mustLoggedIn',
    name: 'MustLoggedIn',
    component: MustLoggedIn
  }, 
  {
    path: '/signIn',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/signUp',
    name: 'SignUp',
    component: SignUp
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const getCurrentUser = () => {
  return new Promise(( resolve, reject ) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener()
        resolve(user)
      },
      reject
    )
  })
}

router.beforeEach( async (to, from, next) => {
  if(to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next()
    } else {
      next('/mustLoggedIn')
    } 
  } else {
    next()
  }
})

export default router
