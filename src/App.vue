<template>
  <div id="app">    
    <wx-audio></wx-audio>
    <router-view/>
    <up-arrow></up-arrow>
  </div>
</template>

<script>
import Audio from 'components/Audio/Audio'
import UpArrow from 'components/UpArrow/UpArrow'

export default {
  name: 'App',
  components:{
    'wx-audio':Audio,
    UpArrow
  }
}
</script>

<style>

</style>
