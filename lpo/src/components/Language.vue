<template>
	<div class="language">
		<md-toolbar class="language_nav">
			<!-- <span class="category_nav"> -->
				<p class="md-title"><a href="/#/category">Category</a></p>
				<p class="md-title"><a href="/#/language">Language</a></p>
				<p class="md-title"><a href="/#/cost">Cost</a></p>
				<p class="md-title"><a href="/#/newResource">New Resource</a></p>
			<!-- </span> -->
		</md-toolbar>

		<md-layout md-gutter>
			<md-layout md-flex-xsmall="100" md-flex-small="50" md-flex-medium="50">
				<h1 class="language_title">Search By: Language Route</h1>
			</md-layout>

			<md-layout md-flex-xsmall="100" md-flex-small="50" md-flex-medium="50">
				<li class="space" v-for="(value, key) in learningType[0]">
		  		<strong>{{ key }}</strong>:{{ value.languages }} 
	  			</li>
	  		</md-layout>
	  	</md-layout>
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

<style lang="scss" scoped>
	$light-grey:#DCDCDA;

	.language{
		background-color: $light-grey;
	}
</style>