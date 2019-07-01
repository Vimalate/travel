# travel

> A Vue.js project
>線上預覽 https://vimalate.github.io/travel/dist
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report


#  .wrapper >>> .swiper-pagination-bullet-active  
没效果的原因是因为style 设置着scoped，只能作用当前组件
表示的是在wrapeer下所有出现.swiper-pagination-bullet-active 
#   vs code整段右移或者左移
选中按TAB右移，按SHIFT+TAB左移
#改动了配置，重启服务器

#如何去除vue项目中的 # --- History模式
const router = new VueRouter({
  mode: 'history',
  routes: [...]
})

#vuex 组件computed引入mapstate报 was assigned to but it has no setter.错
## ...mapState(['city']),
##解决方法 
...mapState({currentCity:'city'}),

# 解决详情页 因keep-alive导致点击不加载对应id详情页
<keep-alive exclude="Detail">
  <router-view/>
</keep-alive>