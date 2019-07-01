<template>
  <div class="container">
    <ul class="list">
      <li
        class="item"
        v-for="items in letters"
        :key="items"
        :ref="items"
        @click="lettersClick"
        @touchstart.prevent="touchStart"
        @touchmove="touchMove"
        @touchend="touchEnd"
      >{{items}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      canMove: false,
      startY: 0,
      timer: null
    };
  },
  props: {
    cities: Object
  },
  updated() {
    this.startY = this.$refs["A"][0].offsetTop;
  },
  methods: {
    lettersClick (e) {
      this.$emit("change", e.target.innerText);
    },
    touchStart () {
      this.canMove = true;
    },
    touchMove (e) {
      if (this.canMove) {
        if (this.timer) {
          clearTimeout(this.timer);
        //   console.log('ok')
        } //后不能接else,只需要有的时候清除，setTimeout节流代码要执行
          this.timer = setTimeout(() => {
            const touchY = e.touches[0].clientY - 79;
            const index = Math.floor((touchY - this.startY) / 20);
            // console.log(index)
            if (index >= 0 && index < this.letters.length) {
              this.$emit("change", this.letters[index]);
            }
          }, 16);
        
      }
    },
    touchEnd() {
      this.canMove = false;
    }
  },
  computed: {
    letters() {
      const letters = [];
      for (let i in this.cities) {
        letters.push(i);
      }
      return letters;
      console.log(letters);
    }
  },
  components: {}
};
</script>

<style scoped lang="stylus">
@import '~styles/varibles.styl';

.list {
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .item {
    text-align: center;
    line-height: 0.4rem;
    color: $bgColor;
  }
}
</style>
