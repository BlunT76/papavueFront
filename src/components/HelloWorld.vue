<template>
  <div class="mt-3">
    <!-- <h1>{{ title }}</h1> -->
    <b-form @submit.prevent="addLink">
      <b-form-input class="link-input" type="text" placeholder="Add a Link" v-model="newLink" />
    </b-form>
    <hr>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'  // Add mapMutations

export default {
  name: 'HelloWorld',
  data(){
    return {
      newLink:''
    }
  },
  computed: mapState([
    'title'
  ]),
  methods: {
    ...mapMutations([
      'ADD_LINK'
    ]),
    addLink: function(){
      this.ADD_LINK(this.newLink)
      this.newLink = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

a {
  color: #42b983;
}
</style>
