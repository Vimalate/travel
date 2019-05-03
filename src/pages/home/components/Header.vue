<template>
 <div class="header-container">
     <div class="header-left"><div class="iconfont back-icon">&#xe624;</div></div>
     <div class="header-input">
         <span class="iconfont city-icon">&#xe632;</span>
         输入城市/景点/游玩主题
     </div>
     <div class="header-right">
         城市
          <span class="iconfont arrow-icon">&#xe64a;</span>
     </div>
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
    .header-container
        display :flex
        line-height: 0.86rem
        background-color: $bgColor
        color :#fff
        .header-left
            width :0.64rem
            float left
            .back-icon
                font-size .3rem
                text-align center
        .header-input
            height 0.64rem
            box-sizing border-box
            display flex
            align-items center
            flex 1
            margin-top .12rem
            margin-left .2rem
            padding  .1rem
            background #ffffff
            color #cccccc
            border-radius .1rem
            .city-icon
                margin-right .1rem
        .header-right
            width 1.24rem
            float right
            text-align center
            .arrow-icon
                margin-left: -.04rem
                font-size: .24rem


</style>
