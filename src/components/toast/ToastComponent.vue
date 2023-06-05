<!-- ToastComponent.vue -->
<template>
  <transition name="fade">
    <div v-if="isShow" class="flex" :style="{
      'justify-content': `${loadPosition(position)}`
    }">
      <div :class="[`toast-container`, `bg-${type}`]" key="toast">
        <div class="toast-header flex flex-space-between flex-aligns-center">
          <div class="flex flex-space-between flex-aligns-center" :class="`${iconClose ? 'flex-row' : 'flex-1 flex-row-reverse'}`">
          <component :is="svgTitle"/>
          <p class="toast-header-title">{{title}}</p>
        </div>
        <div v-if="iconClose" @click="hideToast"  class="toast-header-icon flex flex-aligns-center">
          <CloseSvg size="small" />
        </div>
      </div>
      <div :class="['toast', type]">{{ message }}</div>
      <ProgressComponent 
        v-if="isProgress" 
        :type="type"
        :duration="duration"
        @hideToast="hideToast"
        />
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue , {PropType} from 'vue';
import ProgressComponent from '@/components/progress/ProgressComponent.vue';
import {IToastBuilder, TToastType, TToastPosition} from '@/interface'
import CloseSvg from '@/svg/CloseSvg.vue';
import SuccessSvg from '@/svg/SuccessSvg.vue';
import ErrorSvg from '@/svg/ErrorSvg.vue';

let timeOutHidden: any = null
const DEFAULT_TYPE = 'success';
const DEFAULT_DURATION = 3000;
const DEFAULT_POSITION = 'right';

type TypeProps = IToastBuilder & {
  isShow: boolean,
  svgTitle: any
}

export default Vue.extend({
  components:{
    CloseSvg,
    ProgressComponent
  },
  props: {
    pType:{
      type: String as PropType<TToastType>
    },
    pPosition:{
      type: String as PropType<TToastPosition>,
    } ,
    pTitle: {
      type: String,
    },
    pDuration: {
      type: Number
    }
  },
  data(): TypeProps {
    return {
      type: 'success',
      message: '',
      title: '',
      duration: 0,
      iconClose: false,
      isShow: false,
      isProgress: false,
      svgTitle: '',
      position: 'right'
    };
  },
  mounted() {
    this.$root.$on('toast', (payload: IToastBuilder) => {
      this.assignDatas(payload);
      this.showToast();
    });
  },
  methods: {
    showToast() {
      this.isShow = true
      if(!this.isProgress){
        timeOutHidden = setTimeout(() => {
          this.hideToast()
        }, this.duration);
      }
    },
    hideToast(){
      this.isShow = false
      if(timeOutHidden !== null){
        clearTimeout(timeOutHidden)
        timeOutHidden = null;
      }
    },
    assignDatas(payload: IToastBuilder){
      this.type = payload.type ?? this.pType ?? DEFAULT_TYPE;
      this.position = payload.position ?? this.pPosition ?? DEFAULT_POSITION
      this.duration = payload.duration ?? this.pDuration ?? DEFAULT_DURATION,
      this.title = payload.title ?? this.pTitle ?? `${this.convertFirstLetter(this.type)}`;
      this.message = payload.message;
      this.svgTitle = this.loadSvgType(this.type)
      this.isProgress = payload.isProgress ?? false
      this.iconClose = payload.iconClose ?? false
    },
    convertFirstLetter(str: string){
      if(str.length === 0) return str;
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
    loadSvgType(type: string){
      switch(type){
        case 'success':
          return SuccessSvg
        case 'error':
          return ErrorSvg
        default:
          return SuccessSvg
      }
    },
    loadPosition(position: string | undefined){
      if(!position) return 'end';
      switch(position){
        case 'left':
          return 'start';
        case 'center':
            return 'center';
        default: // right
          return 'end'
      }
    }
  },
});
</script>

<style lang="scss" scoped>


.toast-container {
  z-index: 9999;
  min-width: 350px;
  max-width: 350px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid white;
  margin-bottom: 5px;
  .toast {
    padding: 5px;
    border-radius: 4px;
    color: white;
    font-size: 1.2em;
    max-height: 3.8em;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    &-header{
      &-title{
        font-size: 2em;
        color: white;
        width: 175px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}


</style>
