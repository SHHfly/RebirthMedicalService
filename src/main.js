import Vue from 'vue'
import App from './App.vue'
import i18n from './i18n'
import router from './router';
import './assets/styles/reset.less'
import './assets/styles/global.less'

Vue.config.productionTip = false



router.beforeEach((to, from, next) => {
  // 在这里进行权限检查或其他操作
  next();
});

new Vue({
  i18n,
  router,
  render: h => h(App),
}).$mount('#app')
