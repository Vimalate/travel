<template>
 <div class="container" ref="wrapper">
     <div>
        <div class="area">
            <div class="title border-topbottom">当前城市</div>
            <div class="button-list">
                <div class="buttons">
                    <div class="button">{{this.city}}</div>
                </div>
            </div>
        </div>
        <div class="area">
            <div class="title border-topbottom">热门城市</div>
            <div class="button-list">
                <div class="buttons"  v-for="item of hotCities" 
                :key='item.id' @click="changeCityClick(item.name)" >
                    <div class="button">{{item.name}}</div>
                </div>
            </div>
        </div>
        <div class="area"  v-for="(items, key) in cities" :key="key" :ref="key">
            <div class="title border-topbottom">{{key}}</div>
            <div class="item-list">
                <div class="item border-bottom" v-for="item of items"
                 :key='item.id'  @click="changeCityClick(item.name)">
                    {{item.name}}
                </div>
            </div>
        </div>
     </div>
 </div>
</template>

<script>
import Bscroll from 'better-scroll'
import {mapState, mapActions} from 'vuex'
export default {
 data() {
  return {

  }
 },
 props:{
     cities:Object,
     hotCities:Array,
     letter:String
 },
 mounted () {
     this.scroll=new Bscroll(this.$refs.wrapper)
 },
 components: {

 },
 computed:{
      ...mapState(['city'])
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
    letter(){

        if(this.letter){
            const element = this.$refs[this.letter][0]//动态绑定dom元素，this.letter即为Key(ABCD)
            this.scroll.scrollToElement(element,500)//兄弟组件Alphabet的letter改变，滚动到对应位置
        }
        // console.log(this.letter)
    }
 }
}
</script>

<style scoped lang="stylus">
    @import '~styles/varibles.styl';
    .border-topbottom
        &:before
            border-color #cccccc
        &:after
            background-color #cccccc
    .container
        overflow hidden
        position absolute
        top 1.58rem
        left 0
        right 0
        bottom 0
        .title
            line-height .54rem
            background-color #eeeeee
            padding-left .2rem
            font-size .26rem
        .button-list
            padding .1rem .6rem .1rem .1rem
            overflow hidden
            .buttons
                width 33.33%
                float left 
                box-sizing border-box
                .button
                    margin .1rem
                    text-align center
                    padding .1rem 0
                    border-radius .06rem
                    border .02rem solid #ccc
        .item-list
            .item
                line-height .76rem
                padding-left .2rem
</style>
