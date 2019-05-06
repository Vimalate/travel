<template>
    <div class="container">
    <detail-header></detail-header>
    <detail-banner :sightName='sightName' 
    :bannerImg='bannerImg' :gallaryImgs='gallaryImgs'>
    </detail-banner>
    <detail-list :list='categoryList'></detail-list>
    <div class="content"></div>
 </div>
</template>

<script>
import detailBanner from './components/Banner'
import detailHeader from './components/Header'
import detailList from './components/List'
import aixos from 'axios'
export default {
    name:'Detail',
 data() {
  return {
      bannerImg:'',
      categoryList:[],
      gallaryImgs:[],
      sightName:'',
  }
 },
methods:{
    getDetail () {
        aixos.get('/api/detail.json',
            {
                params:{
                    id:this.$route.params.id
                }
            }
        )
        .then(this.success)
    },
    success (res) {
        const result=res.data
        if(result.ret&&result.data){
            const data=result.data
            this.bannerImg=data.bannerImg
            this.categoryList=data.categoryList
            this.sightName=data.sightName
            this.gallaryImgs=data.gallaryImgs
            console.log(result)
        }
    }
 },
 mounted () {
     this.getDetail()
 },
 components: {
     detailBanner,
     detailHeader,
     detailList
 }
}
</script>

<style scoped lang="stylus">
    .container
        .content
            height 20rem
</style>
