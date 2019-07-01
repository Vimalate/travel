<template>
    <div class="container">
        <div class="banner-container" @click='bannerShow'>
            <div class="banner"><img :src="bannerImg" alt=""></div>
            <div class="info">
                <div class="title">{{this.sightName}}</div>
                <div><span class="iconfont arrow-icon">&#xe692;</span> {{this.gallaryImgs.length}}</div>
            </div>
        </div>
        <commonFade>
        <common-gallary :imgs='gallaryImgs' v-show="showGallary" @hide='hide'></common-gallary>
        </commonFade>
    </div>
</template>

<script>
import commonGallary from '../../../common/gellary/Gallary'
import commonFade from '../../../common/fade/fade'
export default {
    props:{
        sightName:String,
        bannerImg:String,
        gallaryImgs:Array
    },
 data() {
  return {
      showGallary:false,
      imgs:[
          'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/e1e587f554e5a8372be44a4c6b73a5cf.jpg_750x200_5732f03f.jpg',
          'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/87a224d0349d94a11e97f31aa1aba4f5.jpg_750x200_1f78af87.jpg'
      
        ]
  }
 },
 components: {
     commonGallary,
     commonFade
 },
 methods:{
     bannerShow (){
         this.showGallary=true
     },
     hide (){
         this.showGallary=false
     }
 }
}
</script>

<style scoped lang="stylus">
    .container
        .banner-container
            display flex
            position relative
            .banner
                width 100%
                height 55vw
                overflow hidden
                .img
                    width 100%
            .info
                display flex
                width 100%
                box-sizing border-box
                color #fff
                line-height .7rem
                left: 0
                right: 0
                bottom 0.1rem
                padding 0 .2rem 0 .4rem
                background linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5))
                justify-content space-between
                position absolute
                .title
                    font-size .32rem
                
                
</style>
