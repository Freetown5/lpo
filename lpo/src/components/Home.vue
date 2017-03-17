<template>
  <div class="home">
    
    <md-layout md-gutter>
      <!-- logo -->
      <md-layout md-flex-xsmall="100" md-flex-small="50" md-flex-medium="50">
        <div class="home_container">
          <h1>Logo Here</h1>
        </div>
      </md-layout>

      <!-- sliding content -->
      <md-layout md-flex-xsmall="100" md-flex-small="50" md-flex-medium="50">
        <div class="home_container">
          <md-avatar class="md-avatar-icon md-accent">
            <md-icon>exit_to_app</md-icon>
          </md-avatar>
          <p>sliding content here</p>
        </div>
      </md-layout>
    </md-layout>

  </div>
</template>

<script>
  export default {
    name: 'Home'
  }
</script>

<style lang="scss" scoped>
/* tried setting padding and margin of all outer containers to 0, didn't work */
  $middle-grey:#A2A2A0;

  .home{
    margin: -10px;
    height: 110vh;
    display: block;
    background-color: $middle-grey;

    &_container{
      margin-top: 33%;
      margin-left: 10%;
    }
  }
</style>