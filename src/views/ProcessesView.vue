<script setup lang="ts">
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
</script>

<template>
  <div class="page">
    <div class="left-sidebar"></div>
    <div class="center-page">
      <div class="header">PMI Automations</div>
      <div class="title">Processes</div>
      <div class="processes-list">
        <div class="list-header">Leasing</div>
        <ul>
          <li v-for="(item, index) in list1" :key="index" class="item-{{index}}">
            {{ item }}
          </li>
        </ul>
        <div class="list-header">Move-Ins</div>
        <ul>
          <li v-for="(item, index) in list2" :key="index" class="item-{{index}}">
            {{ item }}
          </li>
        </ul>
        <div class="list-header">Move-Outs</div>
        <ul>
          <li v-for="(item, index) in list3" :key="index" class="item-{{index}}">
            {{ item }}
          </li>
        </ul>
        <div class="list-header">Lease Renewals</div>
        <ul>
          <li v-for="(item, index) in list4" :key="index" class="item-{{index}}">
            {{ item }}
          </li>
        </ul>
        <div class="list-header">Client Sales</div>
        <ul>
          <li v-for="(item, index) in list5" :key="index" class="item-{{index}}">
            {{ item }}
          </li>
        </ul>
        <div class="list-header">Client Onboarding</div>
        <ul>
          <li v-for="(item, index) in list6" :key="index" class="item-{{index}}">
            {{ item }}
          </li>
        </ul>
        <div class="list-header">Reporting</div>
        <div class="list-header">Maintenance</div>
      </div>
    </div>
    <div class="right-sidebar"></div>
  </div>
</template>

<style lang="scss">
.page {
  width: 100vw;
  height: auto;
  display: grid;
  grid-template-columns: 20vw 60vw 20vw;
  background-color: rgb(83, 82, 82);
  color: white;
  .header {
    height: 20vh;
    background-color: white;
    color: rgb(83, 82, 82);
    font-size: 15vh;
    text-shadow: 0.3vh 0.3vh 0.1vh black;
  }
  .title {
    font-size: 7vh;
  }
  .processes-list {
    // height: 200vh;
    border: 1px solid white;
    // padding: 10vh 15vw 10vh 15vw;
    padding: 2vh 2vw 2vh 2vw;
    ul {
      padding-left: 1.5vw;
    }
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
</style>
