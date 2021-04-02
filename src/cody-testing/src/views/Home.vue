<template>
  <div>
    <h1 class="page-header">Page Header</h1>
    <AlertEffect>test</AlertEffect> 
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
});
</script>
