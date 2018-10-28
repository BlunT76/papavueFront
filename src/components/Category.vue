<template>
  <b-container fluid>
    <b-card class="bg-light border-0 shadow-sm pb-1 nopadding">  
        <b-form @submit.prevent="addCategory" inline class="mt-2 mb-2">
        <b-form-input class="link-input mr-2" size="sm" type="text" placeholder="Add a Category" v-model="newCat" />
        <b-button variant="info" size="sm" type="submit">Add Category</b-button>
        <!-- <b-alert v-show="success" show small variant="success" class="ml-2 mt-3 p-0 w-50">Success Action</b-alert>
        <b-alert v-show="error" show small variant="danger" class="ml-2 mt-3 p-0 w-50">Something bad happened!</b-alert> -->
        </b-form>
         
        
    </b-card>  
    <b-card no-body class="shadow-sm border-0">
        <b-tabs pills card vertical small>
      
            <b-tab active v-for="(cat,index) in catget" v-bind:key="index"  :title="cat.name">
                <b-form @submit.prevent="addLink(cat.id)" inline>
                    <label for="link" class="d-block">Enter the link</label>
                    <b-form-input id="link" class="link-input mr-2" size="sm" type="text" placeholder="Add a Link" v-model="newLink" required/>
                    <b-form-input class="link-input mr-2" size="sm" type="text" placeholder="Add a Desc" v-model="newLinkDesc" required/>
                    <b-button variant="info" size="sm" type="submit" v-bind:value="cat.id" v-model="cat_id" name="category_id">Add Link</b-button>
                </b-form>
                <hr>
                <b-list-group>
                    <b-list-group-item class="border mb-1 mt-1 p-1 text-left" v-for="(link,i) in cat.links" v-bind:key="i">
                        <b-link class="text-left m-0 align-middle" v-bind:href="link.url">{{ link.desc }}</b-link>
                        <b-button v-if="link.user_id == getUId" class="btn btn-sm btn-danger float-sm-right m-0" @click="removeLink(link.id)"><span>&times;</span></b-button>
                    </b-list-group-item>
                </b-list-group>
            </b-tab>

  </b-tabs>
</b-card>

    
   </b-container>
  
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'


export default {
  name: 'Category',
  data(){
    return {
      newLink:'',
      newLinkDesc:'',
      newCat:'',
      cat_id:'',
    //   error:false,
    //   success: true
      //userid: getUId()
    }
  },
  computed: {
    catget(){
        return this.$store.state.catArray
    },
    getUId(){
        return this.$store.getters.getUserId
    },
    getLogged: function (){
        this.$store.getters.getLoggedIn
    }
  },
  methods:{
      linkClass () {
      //if (this.tabIndex === idx) {
        return ['bg-info', 'text-danger']
      //} else {
        //return ['bg-info', 'text-light']
      
    },
      ...mapActions([
        'removeCategory',
        //'removeLink',
      ]),
      ...mapMutations([
        'ADD_LINK',
        'ADD_CATEGORY',
        'FETCH_CAT',
        'REMOVE_LINK'
    ]),
    addLink: function(id){
        console.log("TEST",this.newLink, this.newLinkDesc,id)
        this.ADD_LINK([this.newLink, this.newLinkDesc,id])
        this.$store.dispatch('fetchCat')
      //this.newLink = ''
    },
    addCategory: function(newCat){
        this.ADD_CATEGORY(this.newCat)
    },
    fetchCat: function(){
        this.FETCH_CAT()
    },
    removeLink: function(link){
          console.log('REMOVE:', link)
        this.REMOVE_LINK(link)
        this.$store.dispatch('fetchCat')
    },
    
  },
   mounted: function (){
      this.$store.dispatch('fetchCat')
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  text-align: left;
}
.nav-pills .nav-link, .nav-pills > .nav-link {
    color: #333;
}
.nav-pills:hover .nav-link:hover, .nav-pills:hover > .nav-link:hover{
    color: #333;
    background-color: #CCC;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
}
.nav-pills .nav-link.active, .nav-pills .show > .nav-link {
    color: #fff;
    background-color: #17A2B8!important;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
}
.nav-pills:hover .nav-link.active:hover, .nav-pills:hover .show > .nav-link:hover {
    color: #fff;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
}
.nopadding{
    padding: 0!important;
}
.card-body {
    -ms-flex: 1 1 auto;
    -webkit-box-flex: 1;
    flex: 1 1 auto;
    padding: 0.5rem!important;
}
</style>
