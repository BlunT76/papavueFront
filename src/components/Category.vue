<template>
  <b-container fluid>
      
    <b-form @submit.prevent="addCategory" inline class="mt-2 mb-2 w-50">
    <b-form-input class="link-input mr-2" size="sm" type="text" placeholder="Add a Category" v-model="newCat" />
    <b-button variant="info" size="sm" type="submit">Add Category</b-button>
    </b-form>
      
    <!-- <ul>
        <li class="border m-2 p-3" v-for="(cat,index) in catArray" v-bind:key="index">
            <p class="text-left m-0">{{ cat.name }}</p>
            <b-button class="btn btn-sm btn-danger float-sm-right m-0 " @click="removeCategory(index)"><span>&times;</span></b-button>
          </li>
    </ul> -->
    <b-card no-body>
        <b-tabs pills card vertical small>
      
            <b-tab  active v-for="(cat,index) in catget" v-bind:key="index"  :title="cat.name">
                <b-form @submit.prevent="addLink(cat.id)" inline>
                    <b-form-input class="link-input mr-2" size="sm" type="text" placeholder="Add a Link" v-model="newLink" />
                    <b-form-input class="link-input mr-2" size="sm" type="text" placeholder="Add a Desc" v-model="newLinkDesc" />
                    <b-button variant="info" size="sm" type="submit" v-bind:value="cat.id" v-model="cat_id" name="category_id">Add Link</b-button>
                </b-form>
                <hr>
                <b-list-group>
                    <b-list-group-item class="border m-2 p-3" v-for="(link,index) in cat.links" v-bind:key="index">
                        <b-link class="text-left m-0" v-bind:href="link.url">{{ link.desc }}</b-link>
                        <b-button class="btn btn-sm btn-danger float-sm-right m-0 " @click="removeLink(index)"><span>&times;</span></b-button>
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
      cat_id:''
    }
  },
  computed: {
    catget(){
        return this.$store.state.catArray
    }
  },
  methods:{
      ...mapActions([
        'removeCategory',
        'removeLink',
      ]),
      ...mapMutations([
        'ADD_LINK',
        'ADD_CATEGORY',
        'FETCH_CAT'
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
    }
  },
   mounted: function (){
    //if(mapState.user_token && !mapState.user_token == ""){
      //this.fetchCat()
      this.$store.dispatch('fetchCat')
    //}
    
  }
//   removeLinks: function(link){
//       this.removeLinks(link)
//   },
  
//   removeCategory: function(cat){
//       this.removeCategory(cat)
//   },
//   mounted: function(){
//       this.fetchCat()
//   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 0 10px;
  text-align: left;
}
a {
  color: #42b983;
  color: #17A2B8
}
</style>
