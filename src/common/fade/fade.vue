<template>
    <div class="container">
        <transition>
            <slot></slot>
        </transition>
    </div>
</template>

<script>
export default {
    name:'Fade',
 data() {
  return {

  }
 },
 components: {

 }
}
</script>

<style scoped lang="stylus">
    .v-enter,.v-leave-to
        opacity :0
    .v-enter-active,.v-leave-active
        transition opacity 0.5s
</style>
