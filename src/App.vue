<template>
  <div id="app">
    <mainHeader></mainHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import mainHeader from './components/main-header.vue'

export default {
  name: 'App',
  components: {
    mainHeader
  }
}
</script>

<style>
#app {

}
</style>
