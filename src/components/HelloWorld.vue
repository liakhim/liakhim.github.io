<template>
  <div class="first-page">
    <div class="container">
      <HeaderComponent/>
      <h1>test</h1>
      <FooterComponent/>
    </div>
  </div>
</template>

<script>
  import HeaderComponent from "@/components/HeaderComponent.vue"
  import FooterComponent from "@/components/FooterComponent.vue"
export default {
  name: 'HelloWorld',
  components: {
    HeaderComponent, FooterComponent
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
