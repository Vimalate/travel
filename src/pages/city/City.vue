<template>
    <div class="container">
        <city-header></city-header>
        <city-search :cities='cities'></city-search>
        <city-list :cities='cities' :hotCities='hotCities' :letter='letter'></city-list>
        <city-alphabet :cities='cities' @change='letterChange'></city-alphabet>
    </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
export default {
 data() {
  return {
      cities:{},
      hotCities:[],
      letter: ''
  }
 },
 components: {

    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet

 },
 mounted(){
     this.getCity()
 },
 
 methods:{
     getCity(){
         axios.get('/api/city.json')
        .then(this.getCityScucess)
     },
     getCityScucess(res){
        console.log(res)
        res=res.data
        if(res.ret&&res.data){
            const data=res.data
            this.cities=data.cities
            this.hotCities=data.hotCities
         }
     },
     letterChange(letter){
         this.letter=letter 
        //  console.log(letter)
        
     }
 }
}
</script>

<style scoped lang="stylus">

</style>
