<template>
	<div class="newResource">
		<md-toolbar class="newResource_nav">
			<!-- <span class="category_nav"> -->
				<p class="md-title"><a href="/#/category">Category</a></p>
				<p class="md-title"><a href="/#/language">Language</a></p>
				<p class="md-title"><a href="/#/cost">Cost</a></p>
				<p class="md-title"><a href="/#/newResource">New Resource</a></p>
			<!-- </span> -->
		</md-toolbar>

		<md-layout md-gutter>
			<md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="100">
				<h1 class="newResource_title">New Resource: Hard Coded</h1>
				<p>More words and things</p>
			</md-layout>	
		</md-layout>
	</div>
</template>

<script>
	export default {
	  name: 'newResource',
	  computed: {
    learningType () {
      return this.$store.state.learningType
    }
	  }
	}
</script>

<style lang="scss" scoped>
	$light-grey:#DCDCDA;

	.newResource{
		background-color: $light-grey;
	}
</style>