import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Category from '@/pages/Category'
import Article from '@/pages/Article'
import User from '@/pages/User'
import Home from '@/pages/Home'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/home',
      // redirect:'/Home',
      component: Home
    },{
      path: '/category',
      component: Category
    },{
      path: '/article',
      component: Article
    },{
      path: '/user',
      component: User
    }]
})
