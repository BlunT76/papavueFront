<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Category from './components/Category.vue'
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
    Category,
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
      'FETCH_CAT',
      'STOREUSERID'
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
    if(localStorage.getItem("userId")){
      this.STOREUSERID(localStorage.getItem("userId"))
      //this.STOREUSERNAME(localStorage.getItem("username"))
    }
    
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
