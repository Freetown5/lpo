<template>
	<div class="cost">
		<h1>Cost Route Working</h1>
		<p>testing with multiple nodes</p>

		<li class="space" v-for="(value, key) in learningType[0]">
		    <strong>{{ key }}</strong>: {{ value.costMin }} - {{ value.costMax }}
	    </li>
	</div>
</template>

<script>
	export default {
	  name: 'cost',
	  computed: {
	    learningType () {
	      return this.$store.state.learningType
	    }
	  }
	}
</script>

<style lang="scss">
</style>