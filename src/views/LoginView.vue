<script setup lang="ts">
import Header from '../components/Header.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

const login = () => {
  const loginEmail = import.meta.env.VITE_LOGIN_EMAIL
  const loginPassword = import.meta.env.VITE_LOGIN_PASSWORD

  if (email.value === loginEmail && password.value === loginPassword) {
    localStorage.setItem('user', JSON.stringify({ email: email.value }))
    router.push('/dashboard')
  } else {
    error.value = 'Invalid email or password'
  }
}
</script>

<template>
  <div class="page">
    <div class="left-sidebar"></div>
    <div class="center-page">
      <Header></Header>
      <div class="menu">
        <div class="login-card">
          <div class="title">Login</div>
          <form @submit.prevent="login">
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" v-model="email" required />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" v-model="password" required />
            </div>
            <button type="submit">Login</button>
            <p v-if="error">{{ error }}</p>
          </form>
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
      background-color: white;
      padding: 3vh 3vw;

      display: grid;
      grid-template-rows: 5vh, 7vh, 7vh, 5vh;

      font-size: 2vh;
      filter: drop-shadow(10px 10px 4px black);
      .title {
        font-size: 4vh;
      }
      .form-group {
        // display: grid;
        // grid-template-columns: 1fr 1fr;
        input {
          width: 100%;
          // padding: 8px;
          box-sizing: border-box;
          height: 3vh;
        }
        label {
          display: block;
          // margin-bottom: 5px;
        }
      }
      button {
        margin-top: 1vh;
        width: 100%;
        padding: 10px;
        background-color: #007bff;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }
      button:hover {
        background-color: #0056b3;
      }
    }
  }
  .login-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .form-group {
    margin-bottom: 15px;
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
