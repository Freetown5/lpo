<template>
  <div id="app">
    <h1>Testing Database</h1>
    <md-avatar class="md-avatar-icon md-accent">
      <md-icon>exit_to_app</md-icon>
    </md-avatar>
    <ul>
      <li class="space" v-for="(value, key) in source[0]">
        {{ key }}
        <br>
        {{ value.url }}  
      </li>
    </ul>
    <!-- <hello></hello> -->
  </div>
</template>

<script>
  // import Hello from './components/Hello
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
    }
    // components: {
    //   Hello
    // }
  }
  // methods: {
  //   function getKeys () {
  //     let theKeys = Object.keys(Firebase.source)
  //   }
  // }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
