<template>
  <div class="home">
     <!-- <h1>{{ header }}</h1> -->
    <h1>{{ header[1] }}</h1>
    <md-avatar class="md-avatar-icon md-accent">
      <md-icon>exit_to_app</md-icon>
    </md-avatar>
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
    }
  }
</script>