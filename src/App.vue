<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import Home from './components/Home'
  export default {
    name: 'app',
    components: {
      Home
    },
    methods: {
    }
  }
</script>

<style lang="scss">
  // Color Scheme
  $pale-green: #b9c6ae;
  $navy: #0b4f6c;
  $rust: #875f62; 
  $moss-green: #7a9b76;
  $blue-green: #0892a5;

  .md-theme-default{
    background: $pale-green;
  }

  #app { 
    font-family: 'Avenir', Helvetica, Arial, sans-serif; 
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale; 
    /*text-align: center;*/ 
    color: #2c3e50; 
    margin-top: 60px;    
    margin:10px;
  }
</style>
