<template>
 <div class="voice">
   <button class="btn">按住说话</button>
 </div>
</template>

<script>
 export default {
   data () {
     return {

     }
   },
   components: {

   }
 }
</script>


<style lang="stylus" scoped>
.voice {
  width: 100%;
  height: 100%;

  .btn {
    width: 100%;
    height: 60px;
    border: 1px solid #0081dc;
    border-radius: 12px;
    font-size: 28px;
    outline: none;
    background: none;
    user-select: none;
  }
}
</style>
