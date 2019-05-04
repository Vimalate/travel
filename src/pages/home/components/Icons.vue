<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page, index) in pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="img" >
            <img
              class="icon-img"
              :src="item.imgUrl"
              alt
            >
          </div>
          <p class="desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
        list:[
            {
                id:'01',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                desc:'景点门票'
            },
            {
                id:'02',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
                desc:'一日游'
            },
            {
                id:'03',
                imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/5ea666792b98f34c86faea912b5fbcf9.png',
                desc:'玩转五一'
            },
            {
                id:'04',
                imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/5ea666792b98f34c86faea912b5fbcf9.png',
                desc:'玩转五一'
            },
            {
                id:'05',
                imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/5ea666792b98f34c86faea912b5fbcf9.png',
                desc:'玩转五一'
            },
            {
                id:'06',
                imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/5ea666792b98f34c86faea912b5fbcf9.png',
                desc:'玩转五一'
            },
            {
                id:'07',
                imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/5ea666792b98f34c86faea912b5fbcf9.png',
                desc:'玩转五一'
            },
            {
                id:'08',
                imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/5ea666792b98f34c86faea912b5fbcf9.png',
                desc:'玩转五一'
            },
            {
                id:'09',
                imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/5ea666792b98f34c86faea912b5fbcf9.png',
                desc:'玩转五一'
            },
            {
                id:'010',
                imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/5ea666792b98f34c86faea912b5fbcf9.png',
                desc:'玩转五一'
            },
            {
                id:'011',
                imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/5ea666792b98f34c86faea912b5fbcf9.png',
                desc:'玩转五一'
            },
            {
                id:'012',
                imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/5ea666792b98f34c86faea912b5fbcf9.png',
                desc:'玩转五一'
            },
        ]
    };
  },
  computed: {
     pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
};
</script>

<style scoped lang="stylus">
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';

.icons >>> .swiper-container {
  height: 0;
  padding-bottom: 50%;
}

.icons {
  margin-top: 0.1rem;

  .icon {
    overflow: hidden;
    float: left;
    width: 25%;
    height: 0;
    padding-bottom: 25%;
    position: relative;

    .img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0.44rem;
      box-sizing: border-box;
      padding: 0.1rem;

      .icon-img {
        height: 100%;
        display: block;
        margin: 0 auto;
      }
    }

    .desc {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      line-height: 0.44rem;
      height: 0.44rem;
      color: $darkTextColor;
      text-align: center;
    }
  }
}
</style>
