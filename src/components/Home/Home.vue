<template>
	<div class="home">		
		<player></player>
		<!-- <comment></comment> -->
		<info></info>
		<pay v-show="isShow"></pay>
	</div>
</template>

<script>

import Player from 'components/Player/Player'
import Comment from 'components/Comment/Comment'
import Info from 'components/Info/Info'
import Pay from 'components/Pay/Pay'

export default {
	name: 'Home',	
	components:{
		Player,
		Comment,
		Info,
		Pay
	},
	data () {
		return {
			isShow:false
		}
	},
	mounted() {
		setTimeout(() => {
			this.startTime()
		}, 10000)
	},
	methods:{
		startTime() {
			this.timerId = setTimeout(() => {
				this.$nextTick(() => {
					this.isShow = true
					let video = document.querySelector('video')
					video.pause()				
				})
			}, 10000)
		}
	},
	destroyed() {
		clearTimeout(this.timerId)
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
