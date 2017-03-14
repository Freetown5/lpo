<template>
  <div class="newResource">
     <!-- <h1>{{ header }}</h1> -->
    <h1 class="test-sass">Routing is making me crazy: Home
      <span class="nested-text">extra words</span>
    </h1>
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
    name: 'Home'
  }
</script>

<style lang="scss" scoped>
  $blue: #0114DD;

  .test-sass{
    font-size:3em;
    .nested-text{
      font-size: .5em;
      color: $blue;
    }
  }
</style>