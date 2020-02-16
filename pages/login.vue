<template>
    <div class="w-full min-h-screen bg-teal-600">
        <div class="w-full max-w-xs mx-auto">
            <h2 class="font-bold py-5 text-center text-white">A Stupidly Simple Login Page</h2>
            <form class="auth-form">
                <div class="mb-4">
                    <label for="username">
                        Email Address
                    </label>
                    <input id="email" type="email" name="email" required v-validate="'required|email'"   v-model="email" placeholder="jane@doe.com">
                    <p class="text-red-500">{{ errors.first('email') }}</p>
                </div>
                <div class="mb-6">
                    <label for="password">
                        Password
                    </label>
                    <input id="password" type="password" name="password" required v-validate="'required'"  v-model="password" placeholder="******************">
                    <p class="text-red-500">{{ errors.first('password') }}</p>
                </div>
            
                
                <div class="flex items-center justify-between">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" native-type="submit" v-on:click.prevent="requestLogin()">
                        Sign In
                    </button>
                    <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                        Forgot Password?
                    </a>
                </div>
            </form>
            <p class="text-center text-teal-200  text-xs">
                Don’t have an account? <a class="inline-block align-baseline font-bold text-sm text-teal-200 hover:text-white" href="/register">Create one.</a>
            </p>
            </div>
        </div>
    </template>

<script>
    export default {
        layout: 'login',  
        middleware: 'guest',
         data: function () {
            return {
                email: '',
                password: '',
            };
        },
        methods: {
            async requestLogin() {
                this.$validator.validateAll().then((result) => {
                  
                if (result) {
                    this.login()             
                 }                
               })
            },
            async login() {
              try {                
                await this.$auth.loginWith('local', {
                  data: {
                    email: this.email,
                    password: this.password
                  },
                })
                //this.$router.push('/')
                
              } catch (e) {
                this.$toast.error('Credentials are incorrect.')
              }
            }  
        }
    }
</script>