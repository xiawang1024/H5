<template>
  <div id="app">
    <wx-audio></wx-audio>
    <!-- <router-view/> -->
    <home/>
    <!-- <up-arrow></up-arrow> -->
  </div>
</template>

<script>
import WxAudio from 'components/Audio/Audio'
import UpArrow from 'components/UpArrow/UpArrow'
import Home from 'components/Home/Home'

export default {
  name: 'App',
  components:{
    WxAudio,
    UpArrow,
    Home
  }
}
</script>

<style>

</style>
