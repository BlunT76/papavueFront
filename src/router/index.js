import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/login/LoginPage'
import RegisterPage from '@/login/RegisterPage'
import Category from '../components/Category'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path:'/',
        name: 'Category',
        component: Category
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/register',
      name: 'RegisterPage',
      component: RegisterPage
    }
  ]
})