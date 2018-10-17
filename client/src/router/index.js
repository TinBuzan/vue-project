import Vue from 'vue'
import Router from 'vue-router'
import FinancialData from '@/components/FinancialData'
import Login from '@/components/Login'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/financialdata',
      name: 'financialdata',
      component: FinancialData
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
