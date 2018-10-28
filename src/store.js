import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
//import Router from 'vue-router'
import Router from './router';

Vue.use(Vuex)
let API_URL = "http://localhost:8000/api/";
export default new Vuex.Store({
  state: {
    title: 'papaVue',
    linkArray: [],
    catArray:[],
    user:{},
    loggedIn:false,
    user_token: localStorage.getItem("user_token") || "",
    showRegister: false,
  },
  mutations: {
    //CATEGORIES SECTION
    ADD_CATEGORY:(state,cat) =>{
      console.log(cat)
      axios.post(API_URL + 'addcategory',{"name": cat},{headers: { "Content-Type": "application/json", "X-Requested-With": "XMLHttpRequest", 'Authorization': 'Bearer ' + state.user_token }})
      .then((response) =>{
        console.log(response)
        state.catArray.push({"name": cat})
      },(error) => {
        console.log(error)
      })
    },
    FETCH_CAT:(state,cat) =>{
      // if(!state.user_token == ""){
      //   axios.get(API_URL + 'categories',{headers: { "Content-Type": "application/json", "X-Requested-With": "XMLHttpRequest", 'Authorization': 'Bearer ' + state.user_token }})
      //   .then((response) => {
             console.table("cat: ",cat)
            state.catArray = cat
      //     }, (error) => {
      //       console.log(error)
      //   })
      // } else {
      //   state.catArray = []
      // }
    },
    //LINKS SECTION
    ADD_LINK: (state, link) => {
      let obj ={
        'url': link[0],
        'desc': link[1],
        'cat_id':link[2]
      }
      //state.linkArray.push(link)
      console.log(API_URL + 'addlink',{"url":obj.url,"desc":obj.desc,"cat_id":obj.cat_id},{headers: { "Content-Type": "application/json", "X-Requested-With": "XMLHttpRequest", 'Authorization': 'Bearer ' + state.user_token }})
      axios.post(API_URL + 'addlink',{"url":obj.url,"desc":obj.desc,"cat_id":obj.cat_id},{headers: { "Content-Type": "application/json", "X-Requested-With": "XMLHttpRequest", 'Authorization': 'Bearer ' + state.user_token }})
      .then((response) =>{
        console.log(response)
      }, (error) => {
        console.log(error)
      })
    },
    REMOVE_LINK:(state, link) => {
      state.linkArray.splice(link,1)
    },
    FETCH_LINK:(state) =>{
      console.log(API_URL + 'links')
      axios.get(API_URL + 'categories',{headers: { "Content-Type": "application/json", "X-Requested-With": "XMLHttpRequest", 'Authorization': 'Bearer ' + state.user_token }})
      .then((response) => {
          console.log(response.data)
          state.linkArray = response.data
        }, (error) => {
          console.log(error)
      })
    },
    UPLOAD_LINK:(state,link) => {
      axios.post(API_URL + 'addlink',{link},{headers: { "Content-Type": "application/json", "X-Requested-With": "XMLHttpRequest", 'Authorization': 'Bearer ' + state.user_token }})
      .then((response) =>{
        console.log(response)
      }, (error) => {
        console.log(error)
      })
    },
    //AUTHENTIFICATION SECTION
    LOGIN:(state,user) => {
      console.log(user)
      state.loggedIn = true;
    },
    LOGOUT:(state,user) => {
      localStorage.removeItem('user_token')
      state.loggedIn = false
      state.catArray = []
      console.log("LOGOUT")
      console.table(state.catArray)
      Router.push('/')
    },
    REGISTER:(state,user)=>{
      let datauser = JSON.stringify({
        name: user.name,
        email: user.email,
        password: user.password,
        password_confirmation: user.password_confirmation
      })
      axios.post(API_URL + 'auth/signup',datauser,{headers: { "Content-Type": "application/json", "X-Requested-With": "XMLHttpRequest" }})
      .then((response) => {
        console.log(response)

      }, (error) =>{
        console.log(error)
      })
    },
  },
  actions: {
    addCategory: (context,cat) => {
      context.commit("ADD_CATEGORY", cat)
    },
    removeLink: (context, link) => {       // Add this:
      context.commit("REMOVE_LINK", link)
    },
    uploadLink: (context,link) => {
      context.commit("UPLOAD_LINK", link)
    },
    login: (context,user,dispatch) => {
      let datauser = JSON.stringify({
        email: user.email,
        password: user.password
      })
      axios.post(API_URL + 'auth/login',datauser,{headers: { "Content-Type": "application/json", "X-Requested-With": "XMLHttpRequest" }})
      .then((response) => {
        console.log(response)
        let loggedIn = true
        context.commit("LOGIN", loggedIn)
        //state.loggedIn = true;
        localStorage.setItem("user_token", response.data.access_token )
        Router.push('/')
        
        // axios.get(API_URL + 'categories',{headers: { "Content-Type": "application/json", "X-Requested-With": "XMLHttpRequest", 'Authorization': 'Bearer ' + state.user_token }})
        // .then((response) => {
        //     console.table(response.data)
        //     state.catArray = response.data
        //   }, (error) => {
        //     console.log(error)
        // })
        console.log("LOGIN")
        //console.table(state.catArray)
      }, (error) =>{
        console.log(error)
      })
      
      //context.commit("FETCH_CAT", user)
    },
    logout:(context,user) => {
      context.commit("LOGOUT",user)
      //context.commit("FETCH_CAT", user)
      //localStorage.removeItem('user_token')
    },
    register: (context,user) => {
      context.commit("REGISTER", user)
    },
    fetchCat: (context) => {
      let tok = localStorage.getItem('user_token')
      console.log(tok)
      axios.get(API_URL + 'categories',{headers: { "Content-Type": "application/json", "X-Requested-With": "XMLHttpRequest", 'Authorization': 'Bearer ' + tok }})
        .then((response) => {
            console.log('FETCHCAT:')
            console.log(response)
            context.commit("FETCH_CAT", response.data.cat)
            //state.catArray = response.data
          }, (error) => {
            console.log(error)
        })
      
      //context.commit("FETCH_CAT")
    }
  },
  getters: {
    getLoggedIn: state => {
      return state.loggedIn
    },
    getCatArray: state => {
      return state.catArray
    },
    getToken: state => {
      return state.user_token
    }
  }
})
