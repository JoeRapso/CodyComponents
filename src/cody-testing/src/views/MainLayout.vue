<template>
  <div class="app-ui">
    <div class="container max-width-lg">
      <router-view />
    </div>
    <!-- Footer -->
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Main',
  components: {
  }
});
</script>
<style lang="scss">
.container{
  position: relative;
}
</style>
