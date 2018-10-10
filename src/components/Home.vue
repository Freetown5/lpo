<template>
  <div class="home">
    <h1>{{ header }}</h1>
    <md-avatar class="md-avatar-icon md-accent">
      <md-icon>exit_to_app</md-icon>
    </md-avatar>
    <!-- The below equation in v-on worked when h1 was set to {{ header }} -->
    <!-- <button v-on:click="header = header[1]">Get something in console</button> -->
    <button v-on:click="consoleWorking()">Get something in console</button>
    <ul>
      <li class="space" v-for="(value, key) in source[0]">
      {{ key }}
        <br>
        {{ value.url }}  
      </li>
    </ul>
  </div>
</template>

<script>
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
    name: 'home',
    firebase: {
      source: sourceRef
    },
    data: function () {
      return {
        header: [
          'words',
          'more words',
          'even more words'
        ]
      }
    },
    methods: {
      consoleWorking () {
        console.log('console working?')
      }
    }
  }
</script>