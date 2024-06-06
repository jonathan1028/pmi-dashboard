<script setup lang="ts">
import Header from '../components/Header.vue'
</script>

<template>
  <div class="page">
    <div class="left-sidebar"></div>
    <div class="center-page">
      <Header></Header>
      <div class="menu">
        <router-link to="/login">
          <div class="menu-card">Login</div>
        </router-link>
        <router-link to="/processes">
          <div class="menu-card">Processes</div>
        </router-link>
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
    .menu-card {
      display: flex;
      justify-content: center; /* Align horizontal */
      align-items: center; /* Align vertical */
      height: 15vh;
      background-color: blue;
      margin-bottom: 2vh;
      font-size: 3cqi;
      filter: drop-shadow(10px 10px 4px black);
      text-shadow: 0.3vh 0.3vh 0.1vh black;
    }
  }
}
@media (max-width: 1024px) {
  body {
    // font-size: 0.875rem;
  }
  .header {
    // background-color: red;
  }
  .page {
    // background-color: red;
    display: grid;
    grid-template-columns: 100vw;
  }
}
@media (max-width: 600px) {
  body {
    // font-size: 0.875rem;
  }
  .header {
    // background-color: red;
  }
  .page {
    // background-color: red;
    display: grid;
    grid-template-columns: 100vw;
  }
}
</style>
