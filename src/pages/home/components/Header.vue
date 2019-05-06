<template>
 <div class="header-container">
     <div class="header-left"><div class="iconfont back-icon">&#xe624;</div></div>
     <div class="header-input">
         <span class="iconfont city-icon">&#xe632;</span>
         <input class="input" type="text" placeholder="请输入城市名">
     </div>
     <router-link to="/city" tag="div">
     <div class="header-right">
         {{this.city}}
          <span class="iconfont arrow-icon">&#xe64a;</span>
     </div>
     </router-link>
 </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
 data() {
  return {

  }
 },
 computed:{
      ...mapState(['city'])
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
            .input
                
            .city-icon
                margin-right .1rem
        .header-right
            min-width  1.04rem
            padding 0 .1rem
            float right
            text-align center
            ellipsis()
            .arrow-icon
                margin-left: -.04rem
                font-size: .24rem


</style>
