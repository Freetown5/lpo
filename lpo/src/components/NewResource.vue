<template>
	<div class="newResource">
		<!-- <h1>{{ title }}</h1> -->
		<h1>New Resource: Hard Coded</h1>
		<p>More words and things</p>
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
</style>