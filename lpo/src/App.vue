<template>
  <div id="app">
    <router-view></router-view>
   <!--  <li class="space" v-for="(value, key) in source[0]">
      {{ key }}
      <br>
      {{ value.url }}  
    </li> -->
  </div>
</template>


<style>
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
