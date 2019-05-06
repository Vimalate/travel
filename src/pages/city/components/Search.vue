<template>
<div>
    <div class="container">
        <input class="input" v-model="keyword" type="text" placeholder="请输入城市名">
    </div>
    <div class="search" v-show="keyword" ref="search">
            <ul>
                <li class="search-item border-bottom"
                v-for="(item, index) in list" :key="index"  @click="changeCityClick(item.name)"
                >{{item.name}}</li>
                <li class="search-item border-bottom" v-show="keywordNotFound">
                    没有找到匹配数据
                </li>
            </ul>
    </div>
</div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapActions } from 'vuex';
export default {
    data() {
    return {
        keyword:'',
        list:[],
        timer:null
    }
    },
    props:{
        cities:Object
    },
    methods:{
        changeCityClick (city) {
        //  this.$store.dispatch('changeCity',city)
            this.changeCity(city)
            this.$router.push('/')
     },
     ...mapActions(['changeCity'])
    },
    watch:{
        //监听输入数据的改变
    keyword(){
        if(this.timer){
            clearTimeout(this.timer)
        }
        if(!this.list){
            this.list=[]
            return
        }
        this.timer=setTimeout(()=>{
            const result=[]
            //  console.log('ok')
            for (let i in this.cities) {
                this.cities[i].forEach((value) => {
                  if(value.spell.indexOf(this.keyword)>-1||
                  value.name.indexOf(this.keyword)>-1){
                      result.push(value)
                  }  
                });
            }
            this.list=result
        },120)
    }
    },
 components: {

 },
 mounted () {
     this.scroll=new Bscroll(this.$refs.search)
 },
 computed:{
     keywordNotFound (){
         return !this.list.length
     }
 }
}
</script>

<style scoped lang="stylus">
    @import '~styles/varibles.styl';
    .container
        height .72rem
        padding 0 .1rem
        background-color $bgColor
        .input
            box-sizing border-box
            width 100%
            height .62rem
            line-height .62rem
            padding 0 .1rem
            text-align center
            border-radius .06rem
            color #666
    .search
        background-color #eee
        position absolute 
        top 1.58rem
        left 0
        right 0
        bottom 0
        overflow hidden
        z-index 1
        .search-item
            background-color #fff
            height .62rem
            line-height .62rem
            padding-left .2rem
            color #666


</style>
