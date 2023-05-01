<script>
  import Header from './layouts/Header.vue'
  import Footer from './layouts/Footer.vue'

  import { useAuthStore } from './stores/AuthenticationStore'

  import {  onAuthStateChanged } from 'firebase/auth'
  import { auth } from './firebase-config'


  export default {
    name: "App",
    components: { 
      Header,
      Footer,
    }, 
    setup() {
      const authStore = useAuthStore()

      onAuthStateChanged(auth, (users) => {
        if(users) {
          const uid = users.id
          authStore.isLoggedIn = true
          console.log(uid)
        } else {
          authStore.isLoggedIn = false
          console.log('false')
        }
      })
    }
  }
</script>

<template>
  <v-app>
    
    <v-content>
      <Header />
      <router-view></router-view>
    </v-content>

    <Footer />

  </v-app>
</template>


<style scoped>
  
</style>
