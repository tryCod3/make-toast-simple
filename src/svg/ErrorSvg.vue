<template>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" :class="[`svg-size-${size}`]">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
  </svg>
</template>

<script lang="ts">
import Vue from 'vue';
import PropsSvg from '@/mixins/PropsSvg';

export default Vue.extend({
  name: "SuccessSvg",
  mixins: [PropsSvg]
})
</script>

<style lang="scss" scoped>

</style>