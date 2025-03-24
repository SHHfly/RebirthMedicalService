// src/router/index.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/home.vue';
import List from '../views/list.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/list',
    name: 'List',
    component: List
  }
];

const router = new VueRouter({
  mode: 'hash', // 使用 HTML5 History 模式
  routes
});

export default router;