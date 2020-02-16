<template>
    <div class="w-full min-h-screen bg-teal-600">
        <div class="w-full max-w-xs mx-auto">
            <h2 class="font-bold py-5 text-center text-white">Create a Stupidly Simple Account</h2>
            <Notification :message="error" v-if="error"/>
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" method="post" @submit.prevent="register">
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                        Full Name
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="name" id="name" type="text" required placeholder="Jane Elizabeth Doe" v-model="name">
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                        Email Address
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="email" id="email" v-model="email" type="email" required placeholder="jane@doe.com">
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Password
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="password" id="password" v-model="password" required type="password" placeholder="******************">
                </div>
                
                <div class="flex items-center justify-between">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
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
        components: {
            Notification,
        },

        data() {
            return {
                name: '',
                email: '',
                password: '',
                error: null
            }
        },

        methods: {
            async register() {
                try {
                    await this.$axios.post('register', {
                        name: this.name,
                        email: this.email,
                        password: this.password
                    })

                    await this.$auth.loginWith('local', {
                        data: {
                            email: this.email,
                            password: this.password
                        },
                    })

                    this.$router.push('/')
                } catch (e) {
                    this.error = e.response.data.message
                }
            }
        }
    }
</script>