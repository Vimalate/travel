<template>
 <div class="container">
     <home-header></home-header>
     <home-swiper :swiperList='swiperList'></home-swiper>
     <home-icons :iconList='iconList'></home-icons>
     <home-recommend :recommendList='recommendList'></home-recommend>
     <home-weekend :weekendList='weekendList'></home-weekend>
 </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import {mapState} from 'vuex'
export default {
 data() {
  return {
      lastCity:'',
      iconList:[],
      swiperList:[],
      recommendList:[],
      weekendList:[]
  }
 },
 components: {
     HomeHeader,
     HomeSwiper,
     HomeIcons,
     HomeRecommend,
     HomeWeekend
 },
 computed:{
     ...mapState({currentCity:'city'}),
    

 },
 mounted () {
     this.lastCity=this.currentCity
     this.getHomeInfo()
 },
 activated () {
     if(this.lastCity!==this.currentCity){
         this.lastCity=this.currentCity
         this.getHomeInfo()
     }
 },
 methods:{
     getHomeInfo(){
         axios.get('../../../travel/dist/static/mock/index.json?city='+this.currentCity)
            .then(this.getSuccess)
     },
     getSuccess(res){
        //  console.log(res)
         res=res.data
         if(res.ret&&res.data){
            const data=res.data
            this.city=data.city
            this.iconList=data.iconList
            this.swiperList=data.swiperList
            this.recommendList=data.recommendList
            this.weekendList=data.weekendList
         }
         
         
        
     }
 }
}
</script>

<style scoped lang="stylus">

</style>
