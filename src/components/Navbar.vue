<template>
    <b-navbar toggleable="md" type="dark" variant="info">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand href="#">{{title}}</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>
      <!-- <b-nav-item href="#">Link</b-nav-item>
      <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
    </b-navbar-nav>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">

      <b-nav-form>
        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
      </b-nav-form>

      <b-nav-item-dropdown right>
        <!-- Using button-content slot -->
        <template slot="button-content">
          <em>User</em>
        </template>
        <b-dropdown-item><router-link to="/login">Login</router-link></b-dropdown-item>
        <!-- <b-dropdown-item><router-link :to="{ name: 'LoginPage' }">Login</router-link></b-dropdown-item> -->
        <b-dropdown-item><router-link to="/register">Register</router-link></b-dropdown-item>
        <b-dropdown-item href="#" >Profile</b-dropdown-item>
        <b-dropdown-item @click="logout()">Logout
          <!-- <b-button size="sm" class="my-2 my-sm-0" @click="logout()">Logout</b-button> -->
        </b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>

<!-- navbar-1.vue -->
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { mapState , mapActions} from 'vuex'

export default {
  name: 'Navbar',
  computed: mapState([
    'title'
  ]),
  methods: {
    logout: function(){
      this.$store.dispatch('logout')
    //this.$store.dispatch('fetchCat')
    }    
  }
}
</script>