<template>
	<div class="home">		
		<player></player>
		<comment></comment>
	</div>
</template>

<script>

import Player from 'components/Player/Player'
import Comment from 'components/Comment/Comment'

export default {
	name: 'Home',	
	components:{
		Player,
		Comment
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
