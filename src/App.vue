<template>
  <div id="app">
    <Checker></Checker>
  </div>
</template>

<script>
import Checker from './components/Checker'

export default {
  name: 'app',
  components: {
    Checker
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
