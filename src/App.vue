<template>
  <div id="app">  
    <wx-audio></wx-audio>  
    <router-view/>
  </div>
</template>

<script>
import WxAudio from 'components/Audio/Audio'
export default {
  name: 'App',
  components:{
    WxAudio
  }
}
</script>

<style>

</style>
