<template>
  <div id="app">
    <component :is="layout">
      <router-view></router-view>
    </component>
  </div>
</template>
<script>
  export default {
    computed: {
      layout() {
        return this.$route.meta.layout || 'default-layout'
      }
    }
  }
</script>
<style lang="scss">

@import "styles/global";
@import "styles/color";
@import "styles/fonts";
@import "styles/normalize";
#app {
  height: 100vh;
}
</style>
