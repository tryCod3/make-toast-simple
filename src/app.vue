<!-- App.vue -->
<template>
  <div id="app">
    <button @click="showSuccessToast">Show Success Toast</button>
    <button @click="showErrorToast">Show Error Toast</button>
    <button @click="showInfoToast">Show Info Toast</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  methods: {
    showSuccessToast() {
      this.$toast.config({
        type: 'success',
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium iste totam temporibus, eveniet mollitia facere libero consequuntur voluptatum. Illo enim sequi dolor mollitia aspernatur quasi et amet quibusdam qui consectetur.",
        iconClose: true,
        isProgress: true,
      })
    },
    showErrorToast() {
      this.$toast.config({
        type: 'error',
        message: "abc xyz",
        isProgress: true,
      })
    },
    showInfoToast(){
      this.$toast.config({
        type: 'info',
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium iste totam temporibus, eveniet mollitia facere libero consequuntur voluptatum. Illo enim sequi dolor mollitia aspernatur quasi et amet quibusdam qui consectetur.",
        iconClose: true,
        isProgress: true,
      })
    }
  },
});
</script>
