import Vue from 'vue'
import App from './App.vue'
import i18n from './i18n'
import router from './router';
import ElementUI from 'element-ui';
// import 'element-ui/packages/theme-chalk/src/index.scss'; //db3a1b
import 'element-ui/lib/theme-chalk/index.css'
import './assets/styles/reset.scss'
import './assets/styles/global.scss'

Vue.config.productionTip = false

Vue.use(ElementUI);

router.beforeEach((to, from, next) => {
  // 在这里进行权限检查或其他操作
  next();
});

new Vue({
  i18n,
  router,
  render: h => h(App),
}).$mount('#app')
