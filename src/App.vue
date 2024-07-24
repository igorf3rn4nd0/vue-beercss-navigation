<template>
  <div class="page active">
    <vue-beercss-navigation class="left" v-model="entrys"/>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const entrys = ref([
  {
    icon: 'home',
    name: 'home',
    label: 'Home',
    path: '/'
  },
  {
    icon: 'settings',
    name: 'testePage',
    label: 'Teste',
    path: '/TestePage'
  }
])
</script>

<style scoped>
</style>
