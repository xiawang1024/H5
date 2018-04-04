<template>
	<div class="home">		
		<sign-up></sign-up>
	</div>
</template>

<script>



import SignUp from '../SignUp/SignUp'

export default {
	name: 'Home',	
	components:{
		SignUp
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
<style lang="stylus">
.home,.swiper-container
    position absolute
    top 0
    right 0
    bottom 0
    left 0
    width 100%
    height 100%
</style>
