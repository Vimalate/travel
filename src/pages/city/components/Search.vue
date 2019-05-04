<template>
 <div class="container">
     <input class="input" type="text" placeholder="请输入城市名">
 </div>
</template>

<script>
export default {
 data() {
  return {

  }
 },
 components: {

 }
}
</script>

<style scoped lang="stylus">
    @import '~styles/varibles.styl';
    .container
        height .72rem
        padding 0 .1rem
        background-color $bgColor
        .input
            box-sizing border-box
            width 100%
            height .62rem
            line-height .62rem
            padding 0 .1rem
            text-align center
            border-radius .06rem
            color #666

</style>
