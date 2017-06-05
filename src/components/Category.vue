<template>
	<div class="category">
		<md-toolbar class="category_nav">
			<!-- <span class="category_nav"> -->
				<p class="md-title"><a href="/#/category">Category</a></p>
				<p class="md-title"><a href="/#/language">Language</a></p>
				<p class="md-title"><a href="/#/cost">Cost</a></p>
				<p class="md-title"><a href="/#/newResource">New Resource</a></p>
			<!-- </span> -->
		</md-toolbar>

		<md-layout md-gutter>
			<md-layout md-flex-xsmall="100" md-flex-small="50" md-flex-medium="50">
				<h1 class="category_title">Search By: Category</h1>
				
				<md-layout md-column md-gutter>

					<md-layout md-flex>
						<p class="category_label--description">Description:</p>
						<p class="category_writtenContent">Category in this context means the type of material you are using to learn. This can mean online tutorials that allow you to work through content, open source projects that you can use to practice and refine already developed skills and online mentorship tools which means resources that connect you to actual develpers, engineers and scientists who can help with more specific issues or question as well as give general career advice.</p>
					</md-layout>
		
					<md-layout md-flex>
						<p class="category_label--instructions">Instructions:</p>
						<p class="category_writtenContent">Select one of the three options available by clicking on the radio button below and related results will show up on the right.</p>
					</md-layout>

					<md-layout md-flex>
						<div class="category_radioSelect">
						<!-- Try using the same model name for both options in v-model -->
							<md-radio id="online" name="online" v-model="online" md-value="online">Tutorial</md-radio>
							<md-radio id="openSource" name="open-source" v-model="openSource" md-value="openSource">Open Source Projects</md-radio>
							<md-radio v-model="mentors" id="mentor" name="mentors" md-value="mentors">Mentorship</md-radio>
						</div>
					</md-layout>

				</md-layout>
			</md-layout>

			<md-layout md-flex-xsmall="100" md-flex-small="50" md-flex-medium="50">
				<h1 class="category_title">Results for:{option 1}{option 2}</h1>

				<md-layout md-column md-gutter>
					<md-layout md-flex>
						<md-table-card>
							<md-table v-once>
								<md-table-header>
									<md-table-row>
										<md-table-head>Resource Name</md-table-head>
										<md-table-head>URL (Website)</md-table-head>
										<md-table-head>Blurb/Snippet</md-table-head>
									</md-table-row>
								</md-table-header>

								<md-table-body>
									<md-table-row v-for="(row, index) in 5" :key="index">
										<md-table-cell><a href="">Website Name</a></md-table-cell>
										<md-table-cell v-for="(col, index) in 1" :key="index">other content</md-table-cell>
										<md-table-cell v-for="(col, index) in 1" :key="index">This would be where a short description of the resource and what is special about it would go</md-table-cell>
									</md-table-row>
								</md-table-body>
							</md-table>
						</md-table-card>
						<!-- <p class="category_label--description">Testing with multiple nodes</p>
						<p v-for="(value, key) in learningType">{{ key }}</p> -->
					</md-layout>
				</md-layout>
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
    },
    data () {
      return {
        online: '',
        openSource: '',
        mentors: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
	
	.category{

	    &_nav{
	    	margin-top:-2%;
	    }

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
	    	margin:2%;
	    	margin-top: 5%;
	    	margin-bottom: -3%;
	    	font-weight: bold;
	    }

	    &_radioSelect{
	    	margin: 2%;
	    	margin-left: 30%;
	    	width: 30%;
	    }
	}
	.md-title{
		margin-left:3%;
	}
</style>