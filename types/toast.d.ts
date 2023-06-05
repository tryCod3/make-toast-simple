import {IToastHandler, IToastBuilder} from '../src/interface';

declare module 'vue/types/vue'  {
  interface Vue {
    $toast: IToastHandler<IToastBuilder>
  }
}