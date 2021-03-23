<template>
  <h1 class="page-header">Page Header</h1>
  <!--The component tag allows the swaping of components.
      In this case the <component> tag is bound to "ButtonEffect1" component, and props can be passed to it.
      And once the button is clicked on, it swaps to a different component
  <component :is="ButtonEffect1" title="Button1" v-on:click="ButtonEffect1 = 'ButtonEffect4'"></component>
  -->
  <ButtonEffect title="Title" effect="1"/>
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
