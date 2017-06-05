<template>
	<div class="cost">
		<md-toolbar class="cost_nav">
			<!-- <span class="category_nav"> -->
				<p class="md-title"><a href="/#/category">Category</a></p>
				<p class="md-title"><a href="/#/language">Language</a></p>
				<p class="md-title"><a href="/#/cost">Cost</a></p>
				<p class="md-title"><a href="/#/newResource">New Resource</a></p>
			<!-- </span> -->
		</md-toolbar>

		<md-layout md-gutter>
			<md-layout md-flex-xsmall="100" md-flex-small="50" md-flex-medium="50">
				<h1>Search By: Cost</h1>
		</md-layout>

		<md-layout md-flex-xsmall="100"md-flex-small="50"md-flex-medium="50">
			<p>testing with multiple nodes</p>

			<li class="space" v-for="(value, key) in learningType[0]">
		    	<strong>{{ key }}</strong>: {{ value.costMin }} - {{ value.costMax }}
	    	</li>
	    </md-layout>
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

<style lang="scss" scoped>
	$light-grey: #DCDCDA;

	.cost{
		background-color: $light-grey;
	}
</style>