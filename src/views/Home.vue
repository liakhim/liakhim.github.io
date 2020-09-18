<template>
  <div class="home">
    <div class="container">
      <div class="content-block">
        <a href="#">
          <div class="block">
            <div class="block__title">
              <p>Standard $35+</p>
            </div>
            <div class="block__image">
              <img src="../assets/standart.jpg" alt="">
            </div>
          </div>
        </a>
        <a href="#">
          <div class="block">
            <div class="block__title">
              <p>Premium $200+</p>
            </div>
            <div class="block__image">
              <img src="../assets/premium.jpg" alt="">
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {

  }
}
</script>
<style lang="scss">
  .home {
    .container {
      .content-block {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: calc(100vh - 80px);
        a {
          .block {
            margin: 10px;
            max-width: 430px;
            border-radius: 10px;
            overflow: hidden;
            filter: drop-shadow(4px 4px 24px rgba(0, 0, 0, 0.1));
          }
        }
      }
    }
  }
</style>