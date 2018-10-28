<template>
  <div id="app">
    <Navbar />
    
      <router-view></router-view>
      <!-- <b-row>
      <b-col cols="4"> -->
        <!-- <Category /> -->
      <!-- </b-col>
      <b-col cols="8">
        <Link />
      </b-col>
      </b-row> -->
    
  </div>
</template>

<script>
import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
//import HelloWorld from './components/HelloWorld.vue'
import Category from './components/Category.vue'
//import Link from './components/Link.vue'
import Navbar from './components/Navbar.vue'

import LoginPage from './login/LoginPage'
import RegisterPage from './login/RegisterPage'

import axios from 'axios'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import { mapState, mapMutations } from 'vuex'  // Add mapMutations

export default {
  name: 'app',
  components: {
    Navbar,
    LoginPage,
    RegisterPage,
    //HelloWorld,
    //Link,
    Category
  },
  data: function (){
    return {
      links:[]
    }
  },
  computed: 
  mapState([
    'linkArray',
    'catArray',
    'user_token'
  ]),
  methods: {
    ...mapMutations([
      'ADD_LINK',
      'FETCH_LINK',
      'FETCH_CAT'
    ]),
    addLink: function(){
      this.ADD_LINK(this.newLink)
      this.newLink = ''
    },
    fetchLink: function(){
      this.FETCH_LINK()
    },
    fetchCat: function(){
      this.FETCH_CAT()
    }
  
  },
  mounted: function (){
    //this.$store.dispatch('fetchCat')
    //if(mapState.user_token && !mapState.user_token == ""){
      //this.fetchCat()
    //}
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
