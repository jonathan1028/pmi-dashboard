<script setup lang="ts">
import Header from '../components/Header.vue'
</script>

<template>
  <div class="page">
    <div class="left-sidebar"></div>
    <div class="center-page">
      <Header></Header>
      <div class="menu">
        <div class="login-card">
          <div class="title">Login</div>
          <div>Username:</div>
          <div>Password:</div>
        </div>
      </div>
    </div>
    <div class="right-sidebar"></div>
  </div>
</template>

<style lang="scss">
.page {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 20vw 60vw 20vw;
  background-color: rgb(83, 82, 82);
  color: white;
  .menu {
    a {
      text-decoration: none;
      color: white;
    }
    height: 80vh;
    border: 1px solid white;
    padding: 10vh 15vw 10vh 15vw;
    .login-card {
      color: black;
      padding-left: 2vw;
      .title {
        font-size: 4vh;
      }
      display: grid;
      grid-template-rows: 5vh, 5vh, 5vh;
      height: 15vh;
      background-color: white;
      margin-bottom: 2vh;
      font-size: 2vh;
      filter: drop-shadow(10px 10px 4px black);
    }
  }
}
</style>
