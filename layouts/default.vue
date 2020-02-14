<template>
  <div>
    <Alert/>
    <MainNav/>
    <nuxt />
    <Footer/>
  </div>
</template>

<script>
import Alert from '~/components/Alert.vue'
import MainNav from '~/components/MainNav.vue'
import Footer from '~/components/Footer.vue'
export default {
  components: {            
    Alert,
    MainNav,
    Footer
  }, 
}
</script>