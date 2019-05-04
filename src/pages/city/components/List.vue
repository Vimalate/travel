<template>
 <div class="container" ref="wrapper">
     <div>
        <div class="area">
            <div class="title border-topbottom">当前城市</div>
            <div class="button-list">
                <div class="buttons">
                    <div class="button">北京</div>
                </div>
            </div>
        </div>
        <div class="area">
            <div class="title border-topbottom">热门城市</div>
            <div class="button-list">
                <div class="buttons">
                    <div class="button">北京</div>
                </div>
                <div class="buttons">
                    <div class="button">北京</div>
                </div>
                <div class="buttons">
                    <div class="button">北京</div>
                </div>
                <div class="buttons">
                    <div class="button">北京</div>
                </div>
                <div class="buttons">
                    <div class="button">北京</div>
                </div>
            </div>
        </div>
        <div class="area">
            <div class="title border-topbottom">A</div>
            <div class="item-list">
                <div class="item border-bottom">
                    阿拉尔
                </div>
                <div class="item border-bottom">
                    阿拉尔
                </div>
                <div class="item border-bottom">
                    阿拉尔
                </div>
                <div class="item border-bottom">
                    阿拉尔
                </div>

                <div class="item border-bottom">
                    阿拉尔
                </div>
                <div class="item border-bottom">
                    阿拉尔
                </div>

                <div class="item border-bottom">
                    阿拉尔
                </div>
            </div>
        </div>
        <div class="area">
            <div class="title border-topbottom">A</div>
            <div class="item-list">
                <div class="item border-bottom">
                    阿拉尔
                </div>
                <div class="item border-bottom">
                    阿拉尔
                </div>
                <div class="item border-bottom">
                    阿拉尔
                </div>
                <div class="item border-bottom">
                    阿拉尔
                </div>

                <div class="item border-bottom">
                    阿拉尔
                </div>
                <div class="item border-bottom">
                    阿拉尔
                </div>

                <div class="item border-bottom">
                    阿拉尔
                </div>
            </div>
        </div>
        <div class="area">
            <div class="title border-topbottom">A</div>
            <div class="item-list">
                <div class="item border-bottom">
                    阿拉尔
                </div>
                <div class="item border-bottom">
                    阿拉尔
                </div>
                <div class="item border-bottom">
                    阿拉尔
                </div>
                <div class="item border-bottom">
                    阿拉尔
                </div>

                <div class="item border-bottom">
                    阿拉尔
                </div>
                <div class="item border-bottom">
                    阿拉尔
                </div>

                <div class="item border-bottom">
                    阿拉尔
                </div>
            </div>
        </div>
     </div>
 </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
 data() {
  return {

  }
 },
 mounted () {
     this.scroll=new Bscroll(this.$refs.wrapper)
 },
 components: {

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
