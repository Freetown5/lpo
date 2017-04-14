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
          <!-- <md-avatar class="md-avatar-icon md-accent">
            <md-icon>exit_to_app</md-icon>
          </md-avatar> -->
          <i class="material-icons" v-on:click="content[0] = 'some words'">keyboard_arrow_left</i>
          <p id="home_intro">{{ content[0] }}</p>
          <i class="material-icons" v-on:click="consoleWorking()">keyboard_arrow_right</i>
        </div>
      </md-layout>
    </md-layout>

  <!-- Icons are not extended so they have their original class names-->
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
        content: [ 'Welcome to LearnProg. Your source for finding great on line learning tools for programming.',
          'First, select which option is most important to you when choosing a programming resource.',
          'Then, continue narrowing down the sources you want by entering more information about what you are looking for before clicking "filter".',
          'After you\'ve gotten the results you wanted, find out more about each of the choices listed by clicking on the learn more button next to it.',
          'Have fun learning!!' ],
        slide: []
      }
    },
    methods: {
      consoleWorking () {
        var homeIntroContent = document.getElementById('home_intro').innerHTML
        console.log(homeIntroContent)
        console.log(this.content[1])

        if (homeIntroContent === this.content[0]) {
          console.log("It's Equal!!!")
          homeIntroContent = this.content[1]
          console.log(homeIntroContent)
        }
      }
    }
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
      width: 100%
    }

    &_intro{
      width:70%;
      float:left;
    }
  }

  .material-icons{
    float: left;
    margin: 2%;
    margin-top: 5%;
  }

</style>