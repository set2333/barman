import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import Antd from 'ant-design-vue';
import ru from './i18n/ru.json';
import App from './App.vue';

const i18n = createI18n({
  locale: 'ru',
  messages: { ru },
  legacy: false,
})

createApp(App, { i18n })
  .use(i18n)
  .use(Antd)
  .mount('#app');
