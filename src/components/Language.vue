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

				<md-layout md-column md-gutter>
					<md-layout md-flex>
						<p class="language_label--description"> Description:</p>
						<p class="language_writtenContent">
							Here, you can find our what online resources are best for you by filtering based on which progamming language you wish to learn.
						</p>
					</md-layout>

					<md-layout md-flex>
						<p class="language_label--instructions">Instructions:</p>
						<p class="category_writtenContent">click on the arrow in the dropdown menu to see all options and then select a language by clicking on it. Select multiple languages by holding down the shift key while clicking. Each option your filtering by should appear below the menu.</p>
					</md-layout>
				</md-layout>
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
		margin: -10px;
		background-color: $light-grey;

		&_writtenContent{
			margin: 2%;
		}

		&_title{
			margin-top: 10%;
			margin-left: 25%;
			margin-right: 25%;
			text-align: center;
		}

		&_label--description{
			margin: 2%;
			margin-bottom: -.5%;
			font-weight: bold;
		}

		&_label--instructions{
			margin: 2%;
			margin-top: 5%;
			margin-bottom: -3%;
			font-weight: bold;
		}
	}

	.md-title{
		margin-left: 3%;
	}
</style>