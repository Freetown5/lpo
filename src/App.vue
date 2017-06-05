<template>
  <div id="app">
    <router-view></router-view>
    <li class="space" v-for="(value, key) in source[0]">
      {{ key }}
      <br>
      {{ value.url }}  
    </li>
  </div>
</template>

<script>
  import Home from './components/Home'
  import Firebase from 'firebase'

  let config = {
    apiKey: 'AIzaSyCHs1Kln9hhK9Ua5-b48KPRHWcAj6bMN8U',
    authDomain: 'progsources-2aa3d.firebaseapp.com',
    databaseURL: 'https://progsources-2aa3d.firebaseio.com',
    storageBucket: 'progsources-2aa3d.appspot.com',
    messagingSenderId: '456563027788'
  }

  let app = Firebase.initializeApp(config)
  let db = app.database()

  let sourceRef = db.ref('learning-type')

  export default {
    name: 'app',
    firebase: {
      source: sourceRef
    },
    components: {
      Home
    },
    methods: {
    // function getKeys () {
    //   let theKeys = Object.keys(Firebase.source)
    // }
    }
  }
</script>

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
