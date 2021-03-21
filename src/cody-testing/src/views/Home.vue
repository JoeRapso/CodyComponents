<template>
  <h1 class="page-header">Page Header</h1>
  <!--The component tag allows the swaping of components.
      In this case the <component> tag is bound to "ButtonEffect1" component, and props can be passed to it.
      And once the button is clicked on, it swaps to a different component-->
  <component :is="ButtonEffect1" title="Button1" v-on:click="ButtonEffect1 = 'ButtonEffect4'"></component>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ButtonEffect from '@/components/CodyButtonEffect.vue';
import ButtonEffect2 from '@/components/CodyButtonEffectV2.vue';
import ButtonEffect3 from '@/components/CodyButtonEffectV3.vue';
import ButtonEffect4 from '@/components/CodyButtonEffectV4.vue';


export default defineComponent({
  name: 'Home',
  components: {
    ButtonEffect,
    ButtonEffect2,
    ButtonEffect3,
    ButtonEffect4
  },
  data () {
    return {
      ButtonEffect1: 'ButtonEffect',
      ButtonEffect2: 'ButtonEffect2',
      ButtonEffect3: 'ButtonEffect3',
      ButtonEffect4: 'ButtonEffect4',
    }
  }
});
</script>
