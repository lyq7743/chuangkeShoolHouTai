import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import Home from '@/pages/Home'
import Login from '@/pages/Login'

import Admin from '../components/Admin/Admin.vue'
import ClassManage from '../components/ClassManage/ClassManage.vue'
import CourseManage from '../components/CourseManage/CourseManage.vue'
import DirectSeeding from '../components/DirectSeeding/DirectSeeding.vue'
import TeacherManage from '../components/TeacherManage/TeacherManage.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },{
      path: '/',
      name: 'Login',
      component: Login
    },{
    	path: '/Admin',
      component: Admin
    },{
    	path: '/ClassManage',
      component: ClassManage
    },{
    	path: '/CourseManage',
      component: CourseManage
    },{
    	path: '/DirectSeeding',
      component: DirectSeeding
    },{
    	path: '/TeacherManage',
      component: TeacherManage
    }
  ]
})
