<template>
    <div class="container" @click="gallaryHide">
        <div class="wrapper">
            <swiper :options="swiperOptions">
            <swiper-slide v-for="(item,index) of imgs" :key='index'>
                <img class="img" :src="item" alt="">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        </div>
 </div>
</template>

<script>
export default {
    data() {
    return {
        swiperOptions: {
            pagination: '.swiper-pagination',
            paginationType: 'fraction',
            observeParents: true,//自我刷新
            observer: true
        }  
    }
},
props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods:{
      gallaryHide () {
          this.$emit('hide')
      }
  },
 components: {

 }
}
</script>

<style scoped lang="stylus">
    .container
        display flex
        justify-content center
        flex-direction column
        position fixed
        left 0
        right 0
        top 0
        bottom 0
        background-color #000
        z-index 10
        .wrapper
            width 100%
            height 100vw
            .img
                width 100%
            .swiper-pagination
                color #fff
                bottom -1rem
                position static
</style>
