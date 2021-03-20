<template>
  <h1 class="page-header">Page Header</h1>
  <ButtonEffect title= "Test1"/>
  <ButtonEffect2/>
  <ButtonEffect3 title="Test3"/>
  <ButtonEffect4 title="Test4"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ButtonEffect from '@/components/CodyButtonEffect.vue'
import ButtonEffect2 from '@/components/CodyButtonEffectV2.vue'
import ButtonEffect3 from '@/components/CodyButtonEffectV3.vue'
import ButtonEffect4 from '@/components/CodyButtonEffectV4.vue'


export default defineComponent({
  name: 'Home',
  components: {
    ButtonEffect,
    ButtonEffect2,
    ButtonEffect3,
    ButtonEffect4
  },
});
</script>
