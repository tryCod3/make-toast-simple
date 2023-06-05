import Vue from 'vue';

export default Vue.extend ({
  props: {
    size: {
      type: String,
      default: 'medium',
      validator(value: string){
        return ['small', 'medium', 'large'].includes(value)
      }
    }
  }
})
