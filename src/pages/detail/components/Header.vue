<template>
 <div class="container">
    <router-link to='/' tag="div" class="header-abs" v-show="absShow">
        <div class="iconfont back">&#xe624;</div>
    </router-link>
    <div class="header-fixed" v-show="!absShow" :style="opacity">
        <router-link to='/' tag="div">
            <div class="iconfont back-icon">&#xe624;</div>
        </router-link>
        <p>景点详情</p>
    </div>
 </div>
</template>

<script>
export default {
 data() {
  return {
      absShow:true,
      opacity:{
          opacity:0
      }
  }
 },
 components: {

 },
activated () {
    //有keep-alive,页面更新即执行，监听滚动事件
    window.addEventListener('scroll',this.handleScroll)
},
deactivated () {
    //页面隐藏，解绑全局事件
    window.removeEventListener('scroll',this.handleScroll)
},
methods:{
    handleScroll () {
        const top =document.documentElement.scrollTop
        // console.log(top)
        if(top>70){
            this.absShow=false
            let opacity=top/140
            opacity=opacity>1?1:opacity
            this.opacity={opacity}
        }else{
            this.absShow=true
        }
        
    }
},
 computed: {
     
 },
}
</script>

<style scoped lang="stylus">
@import '~styles/varibles.styl';
    .container
        .header-abs
            position absolute
            left .2rem
            top .2rem
            width .8rem 
            height .8rem
            line-height .8rem
            border-radius .4rem
            text-align center
            background-color rgba(0,0,0,0.3)
            z-index 1
            .back
                color #ffffff
                font-size .32rem
        .header-fixed
            z-index: 2
            position: fixed
            top: 0
            left: 0
            right: 0
            height: $headerHeight
            line-height: $headerHeight
            text-align: center
            color: #fff
            background: $bgColor
            font-size: .32rem
            .back-icon
                width .64rem
                text-align center
                font-size .4rem
                position absolute
                top 0
                left 0
</style>
