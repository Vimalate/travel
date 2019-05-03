// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'
import swiper from 'vue-awesome-swiper'

Vue.use(swiper, /* { default global options } */)
Vue.config.productionTip = false
fastClick.attach(document.body);
/* eslint-disable no-new */ 
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
