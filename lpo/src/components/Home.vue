<template>
  <div class="newResource">
     <!-- <h1>{{ header }}</h1> -->
    <h1>Routing is making me fucking crazy: Home</h1>
    <md-avatar class="md-avatar-icon md-accent">
      <md-icon>exit_to_app</md-icon>
    </md-avatar>
    <ul>
      <li>Words</li>
    </ul> 

    <li class="space" v-for="(value, key) in sources[0]">
      {{ key }}
      <br>
      {{ value.url }}
    </li>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data: {
      header: 'Testing Home Page'
    },
    computed: {
      sources () {
        return this.$store.firebase.source
      }
    }
  }
</script>