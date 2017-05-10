<template>
	<div class="category">
		<md-toolbar>
			<!-- <span class="category_nav"> -->
				<p class="md-title"><a href="/#/category">Category</a></p>
				<p class="md-title"><a href="/#/language">Language</a></p>
				<p class="md-title"><a href="/#/cost">Cost</a></p>
				<p class="md-title"><a href="/#/newResource">New Resource</a></p>
			<!-- </span> -->
		</md-toolbar>

		<md-layout md-gutter>
			<md-layout md-flex-xsmall="100" md-flex-small="50" md-flex-medium="50">
				<h1>Category Route Working</h1>
			</md-layout>

			<md-layout md-flex-xsmall="100" md-flex-small="50" md-flex-medium="50">
				<p>Testing with multiple nodes</p>
				<p v-for="(value, key) in learningType">{{ key }}</p>

				<!-- <li class="space" v-for="(value, key) in learningType[0]">
				    {{ key }}
				    <br>
				    {{ value.url }}
				</li> -->
			</md-layout>
		</md-layout>
	</div>
</template>

<script>
  export default {
    name: 'category',
    computed: {
      learningType () {
        return this.$store.state.learningType
      }
    }
  }
</script>

<style lang="scss" scoped>
	$light-grey: #DCDCDA;

	.category{
		margin: -10px;
		padding-top: 2%;
	    height: 100vh;
	    display: block;
	    background-color: $light-grey;
	}
	.md-title{
		margin-left:3%;
	}
</style>