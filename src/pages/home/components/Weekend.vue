<template>
 <div class="recommend">
     <div class="recommend-title">周末去哪儿</div>
     <ul>
         <li class="item" border-bottom v-for="item of recommendList" :key='item.id'>
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
      recommendList:[
          {
              id:'01',
              imgUrl:'http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg',
              desc:'浪漫的主题公园',
              title:'华谊兄弟电影世界'
          },
           {
              id:'02',
              imgUrl:'http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg',
              desc:'浪漫的主题公园',
              title:'华谊兄弟电影世界'
          },
           {
              id:'03',
              imgUrl:'http://img1.qunarzz.com/sight/source/1511/1d/fe098e8cfec117.jpg_r_640x214_a9be292a.jpg',
              desc:'浪漫的主题公园',
              title:'华谊兄弟电影世界'
          }
      ]
  }
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
        .img 
            img
                width 100%
        .info
            padding .1rem
            .title
                font-size .32rem
                line-height .54rem
                ellipsis()
            .desc
                line-height .4rem
                color #cccccc
                ellipsis()
            
</style>
