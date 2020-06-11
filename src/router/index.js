import Vue from 'vue';
import VueRouter from 'vue-router';
import CookieService from '@/services/cookieService';
import { CookieName } from '@/helpers/constants';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

function routeGuard(to, from, next) {
  const allow = CookieService.get(CookieName.TOKEN);
  if (allow) {
    next();
  } else {
    next({
      path: '/login',
      query: { redirectTo: to.fullPath },
    });
  }
}

function AuthGuard(to, from, next) {
  const allow = CookieService.get(CookieName.TOKEN);
  if (!allow) {
    next();
  } else {
    next({
      path: '/admin',
    });
  }
}

// Users
const Login = () => import('@/views/admin/Login');

const Business = () => import('@/views/admin/business/Business');
const AddBusiness = () => import('@/views/admin/business/AddBusiness');
const EditBusiness = () => import('@/views/admin/business/EditBusiness');

const Category = () => import('@/views/admin/category/Category');
const AddCategory = () => import('@/views/admin/category/AddCategory');
const EditCategory = () => import('@/views/admin/category/EditCategory');

const Admin = () => import('@/views/admin/Admin');
const Bus = () => import('@/views/Bus');

const Answer = () => import('@/views/Answer');
const Page404 = () => import('@/views/Page404');


const routes = [
  {
    path: '/',
    redirect: '/business',
    // component: Home,
  },
  {
    path: '/business',
    name: 'Home',
    component: Home,
  },
  {
    path: '/business/:id',
    name: 'Bus',
    component: Bus,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: AuthGuard,
  },
  {
    path: '/answer',
    name: 'Answer',
    component: Answer,
  },
  {
    path: '/admin',
    redirect: '/admin/business',
    name: 'Admin',
    component: Admin,
    beforeEnter: routeGuard,
    children: [
      {
        path: 'business',
        name: 'Business',
        component: Business,
      },
      {
        path: 'business/edit/:id',
        name: 'EditBusiness',
        component: EditBusiness,
      },
      {
        path: 'business/create',
        name: 'CreateBusiness',
        component: AddBusiness,
      },
      {
        path: 'category',
        name: 'Category',
        component: Category,
      },
      {
        path: 'category/edit/:id',
        name: 'EditCategory',
        component: EditCategory,
      },
      {
        path: 'category/create',
        name: 'CreateCategory',
        component: AddCategory,
      },
    ],
  },
  {
    path: '*',
    component: Page404,
  },
];

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes,
});

export default router;
