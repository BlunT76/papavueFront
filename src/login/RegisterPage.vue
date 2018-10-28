<template>
    <div v-show="!getLoggedIn">
        <h2>Register</h2>
        <b-card class="w-50 mx-auto">
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" v-model="user.name"  name="name" class="form-control"  />
                <!-- <div v-if="submitted && errors.has('name')" class="invalid-feedback">{{ errors.first('name') }}</div> -->
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" v-model="user.email"  name="email" class="form-control"  />
                <!-- <div v-if="submitted && errors.has('email')" class="invalid-feedback">{{ errors.first('email') }}</div> -->
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" v-model="user.password"  name="password" class="form-control"  />
                <!-- <div v-if="submitted && errors.has('password')" class="invalid-feedback">{{ errors.first('password') }}</div> -->
            </div>
            <div class="form-group">
                <label htmlFor="password_confirmation">Password confirmation</label>
                <input type="password" v-model="user.password_confirmation"  name="password_confirmation" class="form-control"  />
                <!-- <div v-if="submitted && errors.has('password_confirmation')" class="invalid-feedback">{{ errors.first('password_confirmation') }}</div> -->
            </div>
            <div class="form-group">
                <button class="btn btn-primary">Register</button>
                <!-- <button class="btn btn-primary" :disabled="status.registering">Register</button> -->
                <!-- <img v-show="status.registering" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" /> -->
                <!-- <router-link to="/login" class="btn btn-link">Cancel</router-link> -->
            </div>
        </form>
        </b-card>
    </div>
</template>

<script>
import { mapState, mapActions, mapMutations, getters } from 'vuex'

export default {
    name: 'RegisterPage',
    data () {
        return {
            user: {
                name: '',
                email: '',
                password: '',
                password_confirmation: ''
            },
            submitted: false,
            errors: null,
        }
    },
    computed: {
        getLoggedIn: function () {
            return this.$store.getters.getLoggedIn
        }
        //...mapState(['loggedIn'])
    },
    methods: {
        ...mapMutations([
            'REGISTER'
        ]),
        register: function(user){
            this.REGISTER(user)
         },
        handleSubmit(e) {
            this.submitted = true;
            //this.$validator.validate().then(valid => {
                //if (valid) {
                    this.register(this.user);
               // }
            //});
        }
    }
};
</script>