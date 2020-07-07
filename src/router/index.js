import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/Home'
import Index from '@/pages/Index'
import Cate from '@/pages/Cate'
import Login from '@/pages/Login'
import Zhuce from '@/pages/Zhuce'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect:"/home"
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
        redirect:"/home/index",
        children:[
             {
                 path:"index",
                 component:Index
             },
             {
                path:"cate",
                component:Cate
            }

        ]

      },
      {
          path:"/login",
          component:Login
      },
      {
          path:"/zhuce",
          component:Zhuce
      }
  ]
})
