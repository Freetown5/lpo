<template>
  <div class="home">
     <!-- <h1>{{ header }}</h1> -->
    <h1>{{ header }}</h1>
    <md-avatar class="md-avatar-icon md-accent">
      <md-icon>exit_to_app</md-icon>
    </md-avatar>
    <!-- The below equation in v-on worked when h1 was set to {{ header }} -->
    <!-- <button v-on:click="header = header[1]">Get something in console</button> -->
    <button v-on:click="consoleWorking()">Get something in console</button>
    <ul>
      <li>Words</li>
    </ul> 
  </div>
</template>

<script>
  export default {
    name: 'home',
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