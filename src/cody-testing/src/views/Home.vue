<template>
  <div>
    <h1 class="page-header">Page Header</h1>
    <AlertEffect alert="Warning" button="On" @successAlertClosed="successAlertClosed" @errorAlertClosed="errorAlertClosed" @warningAlertClosed="warningAlertClosed">
      <p class="text-sm"><strong>Info:</strong> <a href="#0" class="color-inherit">Learn more</a></p>
    </AlertEffect> 
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AlertEffect from '@/components/AlertEffect.vue';

export default defineComponent({
  name: 'Home',
  components: {
    AlertEffect
  },
  methods: {
    successAlertClosed() {
      window.alert('Success Alert Closed');
    },
    errorAlertClosed() {
      window.alert('Error Alert Closed');
    },
    warningAlertClosed() {
      window.alert('Warning Alert Closed');
    }
  }
});
</script>
