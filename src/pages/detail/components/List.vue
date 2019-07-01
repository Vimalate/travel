<template>
    <div class="container">
        <div class="item" v-for="(item, index) in list" :key="index">
            <div class="item-title">
                <span class="item-title-icon">> {{item.title}}</span>
            </div>
            <!-- 递归组件 -->
            <div v-if="item.children" class="item-chilren">
                <detail-list :list="item.children"></detail-list>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'detailList',
    props:{
        list:Array
    },
 data() {
  return {
      
  }
 },
 components: {

 }
}
</script>

<style lang="stylus" scoped>
.item-title 
    line-height: 0.8rem;
    font-size: 0.32rem;
    padding: 0 0.2rem;
.item-chilren {
  padding: 0 0.2rem;
}
</style>

