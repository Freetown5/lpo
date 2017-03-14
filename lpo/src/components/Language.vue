<template>
	<div class="language">
		<h1>Language Route Working</h1>
		<p>testing with multiple nodes</p>
		<li class="space" v-for="(value, key) in learningType[0]">
		  <strong>{{ key }}</strong>:{{ value.languages }} 
	  </li>
	</div>
</template>

<script>
	export default {
	  name: 'language',
	  computed: {
	    learningType () {
      return this.$store.state.learningType
	    }
	  }
	}
</script>

<style lang="scss">
</style>