// import Vue from 'vue';
// import App from './app.vue';
// import ToastPlugin from './plugin';
// import '../styles/index.scss';

// const optionToast = {
//   pPosition: 'right',
//   pTitle: 'Toast'
// }
// Vue.use(ToastPlugin, optionToast);

// export default new Vue({
//   render: h => h(App)
// }).$mount("#app")



import ToastPlugin from './plugin';
import {IToastBuilder, IToastOptions} from '@/interface';
import '../styles/index.scss';


export {
  ToastPlugin,
  IToastBuilder,
  IToastOptions
}