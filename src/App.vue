<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  html, body {
    padding: 0;
    margin: 0;
    height: 100%;
  }
  #app {
    height: 100%;
  }
  a {
    color: #428bca;
    text-decoration: none;
    background-color: transparent;
  }
</style>
