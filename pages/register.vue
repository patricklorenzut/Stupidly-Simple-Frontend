<template>
    <div class="w-full min-h-screen bg-teal-600">
        <div class="w-full max-w-xs mx-auto">
            <h2 class="font-bold py-5 text-center text-white">Create a Stupidly Simple Account</h2>
            <Notification :message="error" v-if="error"/>
            <form class="auth-form" method="post" @submit.prevent="register">
                <div class="mb-4">
                    <label for="name">
                        Full Name
                    </label>
                    <input name="name" id="name" type="text" required placeholder="Jane Elizabeth Doe" v-model="name" v-validate="'required'">
                    <p class="text-red-500">{{ errors.first('name') }}</p>
                </div>
                <div class="mb-4">
                    <label for="email">
                        Email Address
                    </label>
                    <input name="email" id="email" v-model="email" type="email" required placeholder="jane@doe.com" v-validate="'required|email'">
                    <p class="text-red-500">{{ errors.first('email') }}</p>
                </div>
                <div class="mb-4">
                    <label for="password">
                        Password
                    </label>
                    <input name="password" id="password" v-model="password" ref="password" required type="password" placeholder="******************" v-validate="'required'">
                    <p class="text-red-500">{{ errors.first('password') }}</p>
                </div>
                 <div class="mb-4">
                    <label for="password_confirmation">
                        Password, Again
                    </label>
                    <input name="password_confirmation" id="password_confirmation" v-model="password_confirmation" required type="password" placeholder="******************" v-validate="'required|confirmed:password'">
                    <p class="text-red-500">{{ errors.first('password_confirmation') }}</p>
                </div>
                
                <div class="flex items-center justify-between">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" native-type="submit" v-on:click.prevent="requestRegister()">
                        Create Account
                    </button>
                </div>
            </form>
            <p class="text-center text-teal-200 text-xs">
                Already have an account? <a class="inline-block align-baseline font-bold text-sm text-teal-200 hover:text-white" href="/login">Sign in.</a>
            </p>
        </div>
    </div>
</template>

<script>
    import Notification from '~/components/Notification'
    export default {
        layout: 'login',  
        middleware: 'guest',
        components: {
            Notification,
        },

        data() {
            return {
                name: '',
                email: '',
                password: '',
                password_confirmation: '',
                error: null
            }
        },

        methods: {
            async requestRegister() {
                this.$validator.validateAll().then((result) => {
                  
                if (result) {
                    this.register()             
                 }                
               })
            },
            async register() {
                try {
                    await this.$axios.post('register', {
                        name: this.name,
                        email: this.email,
                        password: this.password,
                        password_confirmation: this.password_confirmation
                    })

                    await this.$auth.loginWith('local', {
                        data: {
                            email: this.email,
                            password: this.password
                        },
                    })

                    this.$router.push('/')
                } catch (e) {
                    var error_message = 'Unable to register.'
                    if(e.response.data.email){
                        error_message = e.response.data.email
                    }else if(e.response.data.password){
                        error_message = e.response.data.password
                    }else if(e.response.data.name){
                        error_message = e.response.data.name
                    }
                    this.$toast.error(error_message)
                }
            }
        }
    }
</script>