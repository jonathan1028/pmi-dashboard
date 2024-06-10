<script setup lang="ts">
import Header from '../components/Header.vue'
import LeasesExpiring from '../components/LeasesExpiring.vue'
import axios from 'axios'

import { ref, onMounted } from 'vue'

const list1 = [
  'View property condition',
  'Transfer utilities to manager',
  'Complete make-ready',
  'Listing photos',
  'Listing live',
  'Receive applications',
  'Process applications',
  'Owner signoff',
  'Draft lease',
  'Obtain signatures',
  'Obtain move-in funds'
]
const list2 = [
  'Final inspection before move-in',
  'Tenant moves in',
  'Tenant inspection documents received'
]
const list3 = [
  'Transfer utilities to manager',
  'View property condition',
  'Send deposit check / deposit retainage notice'
]
const list4 = [
  'Request desires of tenant and owner',
  'Receive desires of tenant and owner',
  'Draft lease renewal',
  'Send out for signatures'
]
const list5 = [
  'Request zoom call',
  'Have zoom call',
  'Answer follow-up questions',
  'Draft mgmt agreement'
]
const list6 = ['Data entry', 'Property inspection and documentation']

// Create a reactive variable to track the button state
const expiringLeasesIsClicked = ref(false)
const companyProcessesIsClicked = ref(false)
// Function to toggle the button state
const expiringLeasesIsClickedToggle = () => {
  expiringLeasesIsClicked.value = !expiringLeasesIsClicked.value
  console.log('Button Click Value:', expiringLeasesIsClicked)
}
const companyProcessesIsClickedToggle = () => {
  companyProcessesIsClicked.value = !companyProcessesIsClicked.value
  console.log('Button Click Value:', expiringLeasesIsClicked)
}
</script>

<template>
  <div class="page">
    <div class="left-sidebar"></div>
    <div class="center-page">
      <Header class="header"></Header>
      <div class="page-title">Dashboard</div>
      <div class="col1">
        <div class="section-title">Leasing</div>
        <div class="buttons-list">
          <button
            :class="{
              'is-clicked': expiringLeasesIsClicked,
              'not-clicked': !expiringLeasesIsClicked
            }"
            @click="expiringLeasesIsClickedToggle()"
          >
            View Expiring Leases
          </button>
          <button
            :class="{
              'is-clicked': companyProcessesIsClicked,
              'not-clicked': !companyProcessesIsClicked
            }"
            @click="companyProcessesIsClickedToggle()"
          >
            View Company Processes
          </button>
        </div>
      </div>

      <div class="col2">
        <div v-if="expiringLeasesIsClicked" class="col2-data">
          <LeasesExpiring class="header"></LeasesExpiring>
        </div>
        <div v-if="companyProcessesIsClicked" class="col2-data">
          <div class="title">Company Procesess</div>
        </div>
      </div>
    </div>
    <div class="right-sidebar"></div>
  </div>
</template>

<style lang="scss">
.page {
  width: 100vw;
  min-height: 100vh;
  height: fit-content;
  display: grid;
  grid-template-columns: 20vw 60vw 20vw;
  background-color: rgb(83, 82, 82);
  color: white;

  .center-page {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 20vh 10vh auto;
    grid-template-areas:
      'header header'
      'page-title page-title'
      'col1 col2';
    font-size: 2cqi;
    .header {
      grid-area: header;
    }

    .page-title {
      // display: flex;
      grid-area: page-title;
      font-size: 3cqi;
      text-align: center;
      // align-items: center;
      margin: auto;
    }
    .is-clicked {
      background-color: lightblue;
    }
    .not-clicked {
      background-color: white;
    }
    .buttons-list {
      margin-left: 2cqi;
    }
    button {
      padding: 0.5cqi;
      border-radius: 0.5cqi;
      font-size: 1.5cqi;
      filter: drop-shadow(0.25cqi 0.25cqi 0.25cqi black);
    }
    button:hover {
      border: 0.2cqi solid blue;
    }
    .col1 {
      grid-area: col1;
      padding: 2cqi 2cqi 2cqi 2cqi;
      border: 1px solid white;
      .section-title {
        font-weight: 600;
      }
      .processes-list {
        height: auto;
        .menu-card {
          display: flex;
          justify-content: center; /* Align horizontal */
          align-items: center; /* Align vertical */
          height: 15vh;
          background-color: blue;
          margin-bottom: 2vh;
          font-size: 4vh;
          filter: drop-shadow(10px 10px 4px black);
          text-shadow: 0.3vh 0.3vh 0.1vh black;
        }
      }
    }
    .col2 {
      grid-area: col2;
      border: 1px solid white;
      padding: 2cqi 2cqi 2cqi 2cqi;
      font-size: 1.4cqi;
      .title {
        font-weight: 600;
        font-size: 1.8cqi;
      }
      .title2 {
        margin-top: 1cqi;
        font-size: 1.8cqi;
        font-weight: 600;
      }

      ol {
        padding-left: 2.5cqi;
      }
      li {
        font-weight: 200;
      }
    }
  }
}
@media (max-width: 1024px) {
  .page {
    // background-color: red;
    display: grid;
    grid-template-columns: 100vw;
    .left-sidebar {
      display: none;
    }
    .right-sidebar {
      display: none;
    }
  }
}
@media (max-width: 600px) {
  .page {
    // background-color: red;
    display: grid;
    grid-template-columns: 100vw;
  }
}
</style>
