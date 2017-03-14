<template>
	<div class="category">
		<h1>Category Route Working</h1>
		<p>Testing with multiple nodes</p>
		<p v-for="(value, key) in learningType">{{ key }}</p>
		<!-- <li class="space" v-for="(value, key) in learningType[0]">
		    {{ key }}
		    <br>
		    {{ value.url }}
		</li> -->
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

<style lang="scss">
</style>