<template>    
    <nav class="bg-teal-500">
        <div class="max-w-5xl mx-auto">
                <div class="flex items-center justify-between flex-wrap p-6">
                <a href="/" class="flex items-center flex-shrink-0 text-white mr-10">
                    <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
                    <span class="font-semibold text-xl tracking-tight hidden lg:inline-block">Stupidly Simple App</span>
                    <span class="font-semibold text-xl tracking-tight lg:hidden">SSA</span>
                </a>
                <div class="block lg:hidden">
                    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white" @click="toggleHidden">
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>
                <div class="w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto" :class="{hidden: isHidden}">
                    <div class="text-md lg:flex-grow">
                        <nuxt-link to="/" class="block mt-4 lg:inline-block lg:mt-0 text-purple-100 hover:text-white mr-6">
                            Chat Widget
                        </nuxt-link>
                        <a href="https://lorenzut.com" target="_blank" class="block mt-4 lg:inline-block lg:mt-0 text-purple-100 hover:text-white mr-6">
                            Hire Me
                        </a>
                        <a href="https://wip.chat/products/3293" target="_blank" class="block mt-4 lg:inline-block lg:mt-0 text-purple-100 hover:text-white mr-6">
                            Roadmap
                        </a>
                        </div>
                        <template v-if="$store.getters.isLoggedIn">
                            <nuxt-link to="/logout" class="block mt-4 lg:inline-block lg:mt-0 text-purple-100 hover:text-white">Logout</nuxt-link>
                        </template>
                        <template v-else>
                            <div>
                                <nuxt-link to="/register" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-transparent bg-teal-800 hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 mr-4">Create Account</nuxt-link>
                            </div>
                            <nuxt-link to="/login" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Login</nuxt-link>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>


<script>

    export default {
        data: function () {
            return {
                isHidden: true
            };
        }, 
        head: {
            title: 'Stupidly Simple',
        },
        methods: {
            toggleHidden(){
                this.isHidden = !this.isHidden;
            }
        },
    }
</script>