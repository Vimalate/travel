webpackJsonp([1],{"/f48":function(t,e){},"9n10":function(t,e){},M6Sr:function(t,e){},"N+zL":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.slideClass},[this._t("default")],2)},staticRenderFns:[]},n=i("VU/8")({name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}},s,!1,null,null,null);e.default=n.exports},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",{attrs:{exclude:"Detail"}},[e("router-view")],1)],1)},staticRenderFns:[]};var a=i("VU/8")({name:"App"},n,!1,function(t){i("lDNt")},null,null).exports,r=i("/ocq"),o=i("Dd8w"),c=i.n(o),l=i("NYxO"),u={data:function(){return{}},computed:c()({},Object(l.c)(["city"])),components:{}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-container"},[this._m(0),this._v(" "),this._m(1),this._v(" "),e("router-link",{attrs:{to:"/city",tag:"div"}},[e("div",{staticClass:"header-right"},[this._v("\n        "+this._s(this.city)+"\n         "),e("span",{staticClass:"iconfont arrow-icon"},[this._v("")])])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-left"},[e("div",{staticClass:"iconfont back-icon"},[this._v("")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-input"},[e("span",{staticClass:"iconfont city-icon"},[this._v("")]),this._v(" "),e("input",{staticClass:"input",attrs:{type:"text",placeholder:"请输入城市名"}})])}]};var p=i("VU/8")(u,d,!1,function(t){i("p6Ws")},"data-v-4be4328a",null).exports,h={name:"HomeSwiper",data:function(){return{swiperOption:{pagination:".swiper-pagination",loop:!0,autoplay:2e3,autoplayDisableOnInteraction:!1}}},props:{swiperList:Array},components:{}},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[e("swiper",{attrs:{options:this.swiperOption}},[this._l(this.swiperList,function(t){return e("swiper-slide",{key:t.id},[e("img",{staticClass:"swiper-img",attrs:{src:t.imgUrl,alt:""}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)},staticRenderFns:[]};var m=i("VU/8")(h,v,!1,function(t){i("uope")},"data-v-1cc69072",null).exports,f={data:function(){return{swiperOption:{pagination:".swiper-pagination",autoplay:!1}}},props:{iconList:Array},computed:{pages:function(){var t=[];return this.iconList.forEach(function(e,i){var s=Math.floor(i/8);t[s]||(t[s]=[]),t[s].push(e)}),t}}},_={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"icons"},[i("swiper",{attrs:{options:t.swiperOption}},t._l(t.pages,function(e,s){return i("swiper-slide",{key:s},t._l(e,function(e){return i("div",{key:e.id,staticClass:"icon"},[i("div",{staticClass:"img"},[i("img",{staticClass:"icon-img",attrs:{src:e.imgUrl,alt:""}})]),t._v(" "),i("p",{staticClass:"desc"},[t._v(t._s(e.desc))])])}),0)}),1)],1)},staticRenderFns:[]};var C=i("VU/8")(f,_,!1,function(t){i("WwoQ")},"data-v-a95ab1bc",null).exports,w={data:function(){return{}},props:{recommendList:Array},components:{}},y={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"recommend"},[i("div",{staticClass:"recommend-title"},[t._v("热销推荐")]),t._v(" "),i("ul",t._l(t.recommendList,function(e){return i("router-link",{key:e.id,staticClass:"item",attrs:{tag:"li","border-bottom":"",to:"/detail/"+e.id}},[i("div",{staticClass:"img"},[i("img",{attrs:{src:e.imgUrl,alt:""}})]),t._v(" "),i("div",{staticClass:"info"},[i("p",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"desc"},[t._v(t._s(e.desc))]),t._v(" "),i("button",{staticClass:"button"},[t._v("查看详情")])])])}),1)])},staticRenderFns:[]};var g=i("VU/8")(w,y,!1,function(t){i("bbm1")},"data-v-b3255616",null).exports,b={data:function(){return{}},props:{weekendList:Array},components:{}},k={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"recommend"},[i("div",{staticClass:"recommend-title"},[t._v("周末去哪儿")]),t._v(" "),i("ul",t._l(t.weekendList,function(e){return i("li",{key:e.id,staticClass:"item",attrs:{"border-bottom":""}},[i("div",{staticClass:"img"},[i("img",{attrs:{src:e.imgUrl,alt:""}})]),t._v(" "),i("div",{staticClass:"info"},[i("p",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"desc"},[t._v(t._s(e.desc))])])])}),0)])},staticRenderFns:[]};var x=i("VU/8")(b,k,!1,function(t){i("UUkh")},"data-v-6b307148",null).exports,$=i("mtWM"),S=i.n($),L={data:function(){return{lastCity:"",iconList:[],swiperList:[],recommendList:[],weekendList:[]}},components:{HomeHeader:p,HomeSwiper:m,HomeIcons:C,HomeRecommend:g,HomeWeekend:x},computed:c()({},Object(l.c)({currentCity:"city"})),mounted:function(){this.lastCity=this.currentCity,this.getHomeInfo()},activated:function(){this.lastCity!==this.currentCity&&(this.lastCity=this.currentCity,this.getHomeInfo())},methods:{getHomeInfo:function(){S.a.get("../../../static/mock/index.json?city="+this.currentCity).then(this.getSuccess)},getSuccess:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.city=e.city,this.iconList=e.iconList,this.swiperList=e.swiperList,this.recommendList=e.recommendList,this.weekendList=e.weekendList}}}},E={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("home-header"),t._v(" "),i("home-swiper",{attrs:{swiperList:t.swiperList}}),t._v(" "),i("home-icons",{attrs:{iconList:t.iconList}}),t._v(" "),i("home-recommend",{attrs:{recommendList:t.recommendList}}),t._v(" "),i("home-weekend",{attrs:{weekendList:t.weekendList}})],1)},staticRenderFns:[]};var U=i("VU/8")(L,E,!1,function(t){i("/f48")},"data-v-239b712c",null).exports,F={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("router-link",{attrs:{to:"/",tag:"div"}},[e("div",{staticClass:"iconfont back-icon"},[this._v("")])]),this._v("\n    城市选择\n")],1)},staticRenderFns:[]};var N=i("VU/8")({data:function(){return{}},components:{}},F,!1,function(t){i("c88s")},"data-v-c2ef67b0",null).exports,R=i("GQaK"),V={data:function(){return{keyword:"",list:[],timer:null}},props:{cities:Object},methods:c()({changeCityClick:function(t){this.changeCity(t),this.$router.push("/")}},Object(l.b)(["changeCity"])),watch:{keyword:function(){var t=this;this.timer&&clearTimeout(this.timer),this.list?this.timer=setTimeout(function(){var e=[];for(var i in t.cities)t.cities[i].forEach(function(i){(i.spell.indexOf(t.keyword)>-1||i.name.indexOf(t.keyword)>-1)&&e.push(i)});t.list=e},120):this.list=[]}},components:{},mounted:function(){this.scroll=new R.a(this.$refs.search)},computed:{keywordNotFound:function(){return!this.list.length}}},j={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"container"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"input",attrs:{type:"text",placeholder:"请输入城市名"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.keyword,expression:"keyword"}],ref:"search",staticClass:"search"},[i("ul",[t._l(t.list,function(e,s){return i("li",{key:s,staticClass:"search-item border-bottom",on:{click:function(i){return t.changeCityClick(e.name)}}},[t._v(t._s(e.name))])}),t._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:t.keywordNotFound,expression:"keywordNotFound"}],staticClass:"search-item border-bottom"},[t._v("\r\n                    没有找到匹配数据\r\n                ")])],2)])])},staticRenderFns:[]};var I=i("VU/8")(V,j,!1,function(t){i("fLxG")},"data-v-37f1187c",null).exports,O={data:function(){return{}},props:{cities:Object,hotCities:Array,letter:String},mounted:function(){this.scroll=new R.a(this.$refs.wrapper)},components:{},computed:c()({},Object(l.c)(["city"])),methods:c()({changeCityClick:function(t){this.changeCity(t),this.$router.push("/")}},Object(l.b)(["changeCity"])),watch:{letter:function(){if(this.letter){var t=this.$refs[this.letter][0];this.scroll.scrollToElement(t,500)}}}},T={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"wrapper",staticClass:"container"},[i("div",[i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("当前城市")]),t._v(" "),i("div",{staticClass:"button-list"},[i("div",{staticClass:"buttons"},[i("div",{staticClass:"button"},[t._v(t._s(this.city))])])])]),t._v(" "),i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("热门城市")]),t._v(" "),i("div",{staticClass:"button-list"},t._l(t.hotCities,function(e){return i("div",{key:e.id,staticClass:"buttons",on:{click:function(i){return t.changeCityClick(e.name)}}},[i("div",{staticClass:"button"},[t._v(t._s(e.name))])])}),0)]),t._v(" "),t._l(t.cities,function(e,s){return i("div",{key:s,ref:s,refInFor:!0,staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v(t._s(s))]),t._v(" "),i("div",{staticClass:"item-list"},t._l(e,function(e){return i("div",{key:e.id,staticClass:"item border-bottom",on:{click:function(i){return t.changeCityClick(e.name)}}},[t._v("\n                   "+t._s(e.name)+"\n               ")])}),0)])})],2)])},staticRenderFns:[]};var A=i("VU/8")(O,T,!1,function(t){i("Xtzn")},"data-v-1be73e25",null).exports,H={data:function(){return{canMove:!1,startY:0,timer:null}},props:{cities:Object},updated:function(){this.startY=this.$refs.A[0].offsetTop},methods:{lettersClick:function(t){this.$emit("change",t.target.innerText)},touchStart:function(){this.canMove=!0},touchMove:function(t){var e=this;this.canMove&&(this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){var i=t.touches[0].clientY-79,s=Math.floor((i-e.startY)/20);s>=0&&s<e.letters.length&&e.$emit("change",e.letters[s])},16))},touchEnd:function(){this.canMove=!1}},computed:{letters:function(){var t=[];for(var e in this.cities)t.push(e);return t}},components:{}},M={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("ul",{staticClass:"list"},t._l(t.letters,function(e){return i("li",{key:e,ref:e,refInFor:!0,staticClass:"item",on:{click:t.lettersClick,touchstart:function(e){return e.preventDefault(),t.touchStart(e)},touchmove:t.touchMove,touchend:t.touchEnd}},[t._v(t._s(e))])}),0)])},staticRenderFns:[]};var D={data:function(){return{cities:{},hotCities:[],letter:""}},components:{CityHeader:N,CitySearch:I,CityList:A,CityAlphabet:i("VU/8")(H,M,!1,function(t){i("SmsA")},"data-v-6128d7bd",null).exports},mounted:function(){this.getCity()},methods:{getCity:function(){S.a.get("../../../static/mock/city.json").then(this.getCityScucess)},getCityScucess:function(t){if(console.log(t),(t=t.data).ret&&t.data){var e=t.data;this.cities=e.cities,this.hotCities=e.hotCities}},letterChange:function(t){this.letter=t}}},z={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("city-header"),t._v(" "),i("city-search",{attrs:{cities:t.cities}}),t._v(" "),i("city-list",{attrs:{cities:t.cities,hotCities:t.hotCities,letter:t.letter}}),t._v(" "),i("city-alphabet",{attrs:{cities:t.cities},on:{change:t.letterChange}})],1)},staticRenderFns:[]};var P=i("VU/8")(D,z,!1,function(t){i("eMCR")},"data-v-e659ed84",null).exports,G={data:function(){return{swiperOptions:{pagination:".swiper-pagination",paginationType:"fraction",observeParents:!0,observer:!0}}},props:{imgs:{type:Array,default:function(){return[]}}},methods:{gallaryHide:function(){this.$emit("hide")}},components:{}},W={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container",on:{click:this.gallaryHide}},[e("div",{staticClass:"wrapper"},[e("swiper",{attrs:{options:this.swiperOptions}},[this._l(this.imgs,function(t,i){return e("swiper-slide",{key:i},[e("img",{staticClass:"img",attrs:{src:t,alt:""}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)])},staticRenderFns:[]};var Y=i("VU/8")(G,W,!1,function(t){i("jkSa")},"data-v-33f12b38",null).exports,X={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("transition",[this._t("default")],2)],1)},staticRenderFns:[]};var q=i("VU/8")({name:"Fade",data:function(){return{}},components:{}},X,!1,function(t){i("RdlX")},"data-v-2879a2b6",null).exports,B={props:{sightName:String,bannerImg:String,gallaryImgs:Array},data:function(){return{showGallary:!1,imgs:["http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/e1e587f554e5a8372be44a4c6b73a5cf.jpg_750x200_5732f03f.jpg","http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/87a224d0349d94a11e97f31aa1aba4f5.jpg_750x200_1f78af87.jpg"]}},components:{commonGallary:Y,commonFade:q},methods:{bannerShow:function(){this.showGallary=!0},hide:function(){this.showGallary=!1}}},J={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("div",{staticClass:"banner-container",on:{click:t.bannerShow}},[i("div",{staticClass:"banner"},[i("img",{attrs:{src:t.bannerImg,alt:""}})]),t._v(" "),i("div",{staticClass:"info"},[i("div",{staticClass:"title"},[t._v(t._s(this.sightName))]),t._v(" "),i("div",[i("span",{staticClass:"iconfont arrow-icon"},[t._v("")]),t._v(" "+t._s(this.gallaryImgs.length))])])]),t._v(" "),i("commonFade",[i("common-gallary",{directives:[{name:"show",rawName:"v-show",value:t.showGallary,expression:"showGallary"}],attrs:{imgs:t.gallaryImgs},on:{hide:t.hide}})],1)],1)},staticRenderFns:[]};var Q=i("VU/8")(B,J,!1,function(t){i("xAPP")},"data-v-4b99edbb",null).exports,K={data:function(){return{absShow:!0,opacity:{opacity:0}}},components:{},activated:function(){window.addEventListener("scroll",this.handleScroll)},deactivated:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){var t=document.documentElement.scrollTop;if(t>70){this.absShow=!1;var e=t/140;e=e>1?1:e,this.opacity={opacity:e}}else this.absShow=!0}},computed:{}},Z={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("router-link",{directives:[{name:"show",rawName:"v-show",value:t.absShow,expression:"absShow"}],staticClass:"header-abs",attrs:{to:"/",tag:"div"}},[i("div",{staticClass:"iconfont back"},[t._v("")])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.absShow,expression:"!absShow"}],staticClass:"header-fixed",style:t.opacity},[i("router-link",{attrs:{to:"/",tag:"div"}},[i("div",{staticClass:"iconfont back-icon"},[t._v("")])]),t._v(" "),i("p",[t._v("景点详情")])],1)],1)},staticRenderFns:[]};var tt=i("VU/8")(K,Z,!1,function(t){i("auJa")},"data-v-52eb460a",null).exports,et={name:"detailList",props:{list:Array},data:function(){return{}},components:{}},it={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},t._l(t.list,function(e,s){return i("div",{key:s,staticClass:"item"},[i("div",{staticClass:"item-title"},[i("span",{staticClass:"item-title-icon"},[t._v("> "+t._s(e.title))])]),t._v(" "),e.children?i("div",{staticClass:"item-chilren"},[i("detail-list",{attrs:{list:e.children}})],1):t._e()])}),0)},staticRenderFns:[]};var st={name:"Detail",data:function(){return{bannerImg:"",categoryList:[],gallaryImgs:[],sightName:""}},methods:{getDetail:function(){S.a.get("../../../static/mock/detail.json",{params:{id:this.$route.params.id}}).then(this.success)},success:function(t){var e=t.data;if(e.ret&&e.data){var i=e.data;this.bannerImg=i.bannerImg,this.categoryList=i.categoryList,this.sightName=i.sightName,this.gallaryImgs=i.gallaryImgs,console.log(e)}}},mounted:function(){this.getDetail()},components:{detailBanner:Q,detailHeader:tt,detailList:i("VU/8")(et,it,!1,function(t){i("W5cn")},"data-v-b44c40ec",null).exports}},nt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("detail-header"),this._v(" "),e("detail-banner",{attrs:{sightName:this.sightName,bannerImg:this.bannerImg,gallaryImgs:this.gallaryImgs}}),this._v(" "),e("detail-list",{attrs:{list:this.categoryList}}),this._v(" "),e("div",{staticClass:"content"})],1)},staticRenderFns:[]};var at=i("VU/8")(st,nt,!1,function(t){i("VpvT")},"data-v-6e87742a",null).exports;s.a.use(r.a);var rt=new r.a({routes:[{path:"/",name:"Home",component:U},{path:"/city",name:"City",component:P},{path:"/detail/:id",name:"Detail",component:at}],scrollBehavior:function(t,e,i){return{x:0,y:0}}}),ot=i("v5o6"),ct=i.n(ot),lt=(i("9n10"),i("M6Sr"),i("TzC8"),i("v2ns"),i("F3EI")),ut=i.n(lt),dt="北京";try{localStorage.city&&(dt=localStorage.city)}catch(t){}var pt={city:dt},ht={changeCity:function(t,e){t.city=e;try{localStorage.city=e}catch(t){}}},vt=i("UjVw"),mt=i.n(vt);s.a.use(l.a);var ft=new l.a.Store({state:pt,actions:{changeCity:function(t,e){t.commit("changeCity",e)}},mutations:ht,getters:mt.a});s.a.use(ut.a),s.a.config.productionTip=!1,ct.a.attach(document.body),new s.a({el:"#app",router:rt,store:ft,components:{App:a},template:"<App/>"})},RdlX:function(t,e){},SmsA:function(t,e){},TzC8:function(t,e){},UUkh:function(t,e){},UjVw:function(t,e){},VpvT:function(t,e){},W5cn:function(t,e){},WwoQ:function(t,e){},Xtzn:function(t,e){},auJa:function(t,e){},bbm1:function(t,e){},c88s:function(t,e){},eMCR:function(t,e){},fLxG:function(t,e){},jkSa:function(t,e){},lDNt:function(t,e){},p6Ws:function(t,e){},pYmz:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s="undefined"!=typeof window;s&&(window.Swiper=i("gsqX"));var n={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&s&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&s){delete t.options.notNextTick;var e=!1;for(var i in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(i)&&t.options[i]&&(e=!0,t.defaultSwiperClasses[i]=t.options[i]);var n=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(n):n()}}(this.options.notNextTick||this.notNextTick)?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),i("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]},r=i("VU/8")(n,a,!1,null,null,null);e.default=r.exports},uope:function(t,e){},v2ns:function(t,e){},xAPP:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.c5b9d544d2d5113751b5.js.map