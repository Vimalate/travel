# travel

> A Vue.js project

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