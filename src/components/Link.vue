<template>
  <div >
    <b-form @submit.prevent="addLink">
      <b-form-input class="link-input" type="text" placeholder="Add a Link" v-model="newLink" />
    </b-form>
    <hr>
    <ul>
        <li class="border m-2 p-3" v-for="(link,index) in linkArray" v-bind:key="index">
            <b-link class="text-left m-0" v-bind:href="link">{{ link }}</b-link>
            <b-button class="btn btn-sm btn-danger float-sm-right m-0 " @click="removeLink(index)"><span>&times;</span></b-button>
          </li>
    </ul>
   
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  name: 'Link',
  data(){
    return {
      newLink:''
    }
  },
  computed: 
  mapState([
    'title',
    'linkArray',
  ]),
  methods:{
      ...mapActions([
          'removeLink',
      ]),
      ...mapMutations([
      'ADD_LINK'
    ]),
    addLink: function(){
      this.ADD_LINK(this.newLink)
      this.newLink = ''
    },
  },
  removeLinks: function(link){
      this.removeLinks(link)
  }
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
}
</style>
