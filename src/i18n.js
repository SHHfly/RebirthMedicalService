import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

// 引入语言包文件
import en from './assets/locales/en.json';
import zh from './assets/locales/zh.json';

// 定义语言包
const messages = {
  en,
  zh
};

// 创建i18n实例
const i18n = new VueI18n({
  locale: 'en', // 默认语言
  messages
});

export default i18n;    