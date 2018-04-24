<template>
	<div class="home">		
		<player></player>
		<!-- <comment></comment> -->
		<info></info>
	</div>
</template>

<script>

import Player from 'components/Player/Player'
import Comment from 'components/Comment/Comment'
import Info from 'components/Info/Info'

export default {
	name: 'Home',	
	components:{
		Player,
		Comment,
		Info
	},
	data () {
		return {
			
		}
	},
	mounted() {
		
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
