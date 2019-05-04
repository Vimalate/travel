<template>
 <div class="recommend">
     <div class="recommend-title">热销推荐</div>
     <ul>
         <li class="item" border-bottom v-for="item of recommendList" :key='item.id'>
            <div class="img"><img :src="item.imgUrl" alt=""></div>
            <div class="info">
                <p class="title">{{item.title}}</p>
                <p class="desc">{{item.desc}}</p>
                <button class="button">查看详情</button>
            </div>
         </li>
     </ul>
 </div>
</template>

<script>
export default {
 data() {
  return {
     
  }
 },
 props:{
     recommendList:Array
 },
 components: {

 }
}
</script>

<style scoped lang="stylus">
    @import '~styles/mixins.styl';
    .recommend-title
        margin-top .2rem
        background-color #eeeeee
        text-indent .2rem
        line-height .8rem
    .item
        display flex
        height 1.9rem
        overflow hidden
        .img img
            width 1.7rem
            height 1.7rem
            padding .1rem
        .info
            padding .1rem
            flex 1
            min-width 0
            .title
                font-size .32rem
                line-height .54rem
                ellipsis()
            .desc
                line-height .4rem
                color #cccccc
                ellipsis()
            .button
                margin-top .16rem
                line-height .44rem
                background-color #ff9300
                padding 0 .1rem
                border-radius .06rem
                color #fff
</style>
