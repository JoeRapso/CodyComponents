<template>
  <div>
    <h1 class="page-header">Page Header</h1>
    <ButtonEffect title="Button" effect="0" @click="onClick" /> 
    <ButtonEffect title="Button" effect="1" @click="onClick" />
    <ButtonEffect title="Button" effect="2" @click="onClick" />
    <ButtonEffect title="Button" effect="3" @click="onClick" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ButtonEffect from '@/components/CodyButtonEffect.vue';

export default defineComponent({
  name: 'Home',
  components: {
    ButtonEffect
  },
  methods: {
    onClick() {
      window.alert('Button Clicked');
    }
  }
});
</script>
