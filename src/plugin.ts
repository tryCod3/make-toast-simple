import { VueConstructor } from 'vue';
import { IToastBuilder, IToastOptions } from './interface';
import ToastComponent from './components/toast/ToastComponent.vue';


function createVueByOptions(Vue: VueConstructor, options: IToastOptions){
  const keys = Object.keys(options)
  const props: any = {}
  if(keys.length > 0){
    for(const key of keys){
      if(key in options){
        props[key] = options[key as keyof IToastOptions];
      }
    }
  }
  const appInstance = new Vue({
    render: h => h(ToastComponent, {props}),
  })
  return appInstance; 
}

export default {
  install(Vue: VueConstructor, options: IToastOptions = {}) {
    const toastList = document.createElement('div');
    toastList.setAttribute('style', 'position: fixed; top: 10px; width: 99%; margin: auto');
    document.body.appendChild(toastList);
    Vue.prototype.$toast = {
      config(builder: IToastBuilder) {
        const toastContainer = document.createElement('div');
        toastList.appendChild(toastContainer);
        const appInstance = createVueByOptions(Vue, options);
        appInstance.$mount(toastContainer);
        appInstance.$emit('toast', builder);
      },
    };
  },
};
