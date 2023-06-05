<template>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" :class="[`svg-size-${size}`]">
    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>  
</template>

<script lang="ts">
import Vue  from 'vue';
import PropsSvg from '@/mixins/PropsSvg';

export default Vue.extend({
  name: "CloseSvg",
  mixins: [PropsSvg]
})
</script>

<style lang="scss" scoped>
</style>