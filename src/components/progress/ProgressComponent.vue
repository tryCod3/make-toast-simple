<template>
  <div class="progress-container">
    <div :class="['progress-wrapper', `bg-${type}`]">
      <div class="progress" :style="{
        'width': `${progressPercent}%`,
        'transition': `all ${progressDuration}s ease-out ${progressDelay}s`
      }"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

const time_delay = 100

export default Vue.extend({
  props: {
    delay: {
      type: Number,
      default: 1000
    },
    duration: {
      type: Number,
      default: 3000,
      validator(value: number){
        return value > 0;
      }
    },
    precent: {
      type: Number,
      default: 100
    },
    type:{
      type: String,
      default: "success"
    }
  },
  data(){
    return {
      progressDelay: this.delay,
      progressDuration: this.duration,
      progressPercent: this.precent,
    }
  },
  created(){
    this.progressDuration /= 1000;
    this.progressDelay /= 1000;
  },
  methods:{
    startProgress(){
      const promisePrecent = new Promise((resolve) => {
        let id: any = null
        id = setTimeout(() => {
          // console.log("promisePrecent")
          this.progressPercent = 0;
          resolve(id)
        }, time_delay)
      })
      const promiseHideToast = new Promise((resolve) => {
        let id: any = null
        id = setTimeout(() => {
          // console.log("promiseHideToast")
          this.$emit('hideToast')
          resolve(id)
        }, this.duration + this.delay)
      })
      Promise.all([promisePrecent, promiseHideToast])
      .then((values) => {
        // console.log(values)
        for(const value of values){
          clearTimeout(value as number)
        }
      })
    }
  },
  mounted(){
    this.startProgress()
  },
})
</script>

<style lang="scss" scoped>
.progress-container{
  padding: 3px 0px;
  width: 100%;
  .progress-wrapper{
    border-radius: 5px;
    height: 100%;
    overflow: hidden;
  }
  .progress{
    background-color: white;
    height: 4px;
  }
}

</style>