<template>
  <h1 class="page-header">Page Header</h1>
  <ButtonEffect title="Button" effect= "1" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ButtonEffect from '@/components/CodyButtonEffect.vue'

export default defineComponent({
  name: 'Home',
  components: {
    ButtonEffect
  }
});
</script>
