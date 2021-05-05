import Vue from 'vue';
import VueRouter from 'vue-router';
import login from '@/views/login/index.vue';
import logon from '@/views/logon/index.vue';
import main from '@/views/main/index.vue';
import notFound from '@/views/notFound/index.vue';
import Cookie from '@/utils/cookie';
import studentList from '@/views/main/studentList/index.vue';
import studentAdd from '@/views/main/studentAdd/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    component: login,
  },
  {
    path: '/logon',
    component: logon,
  },
  {
    path: '/main',
    component: main,
    redirect: '/main/studentList',
    children: [
      {
        path: 'studentList',
        component: studentList,
      },
      {
        path: 'studentAdd',
        component: studentAdd,
      },
    ],
  },
  {
    path: '/notFound',
    component: notFound,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'active',
});

router.beforeEach((to, from, next) => {
  // console.log(to);
  if (to.path === '/') {
    next('/login');
  }
  // 无组件与路由相对应
  if (to.matched.length === 0) {
    next('/notFound');
  }
  // 登录拦截
  if (to.matched[0].path === '/main') {
    const username = Cookie.getCookie('username');
    if (username) {
      next();
    } else {
      next('/login');
    }
  }
  next();
});

export default router;
