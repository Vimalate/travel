<template>
 <div class="recommend">
     <div class="recommend-title">周末去哪儿</div>
     <ul>
         <li class="item" border-bottom v-for="item of weekendList" :key='item.id'>
            <div class="img"><img :src="item.imgUrl" alt=""></div>
            <div class="info">
                <p class="title">{{item.title}}</p>
                <p class="desc">{{item.desc}}</p>
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
     weekendList:Array
 },
 components: {

 }
}
</script>

<style scoped lang="stylus">
    @import '~styles/mixins.styl';
    .recommend-title
        background-color #eeeeee
        text-indent .2rem
        line-height .8rem
    .item
        .img 
            img
                width 100%
        .info
            padding .1rem
            .title
                font-size .30rem
                line-height .54rem
                ellipsis()
            .desc
                line-height .4rem
                font-size .24rem
                ellipsis()
            
</style>
