<template>
 <div class="container">
     <router-link to='/' tag="div">
        <div class="iconfont back-icon">&#xe624;</div>
     </router-link>
     城市选择
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
        overflow hidden
        line-height $headerHeight
        height $headerHeight
        background-color $bgColor
        color #ffffff
        font-size .32rem
        text-align center
        position relative
        .back-icon
            width .64rem
            text-align center
            font-size .4rem
            position absolute
            top 0
            left 0
</style>
