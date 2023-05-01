<template>
    <nav>
      <v-toolbar color="green-accent-4" flat app>
        <v-toolbar-title class="text-uppercase grey--text">
          <span class="font-weight-bold">Borgonia</span> 
          Store
        </v-toolbar-title>
        <v-spacer></v-spacer>

        <div v-if="authStore.isLoggedIn">
          <router-link style="color:inherit;text-decoration:none;" to="/">
            <v-btn class="menu-btn rounded-0" >
              <v-icon class="me-3" icon="fas fa-home"></v-icon>
              <span class="text-menu">Home</span>
            </v-btn>
          </router-link>
  
          <router-link style="color:inherit;text-decoration:none;" to="/marketPlace">
            <v-btn class="menu-btn rounded-0">
              <v-icon class="me-3" icon="fas fa-store"></v-icon>
              <span class="text-menu">MarketPlace</span>
            </v-btn>
          </router-link>
  
          <router-link v-if="carts.length > 0" style="color:inherit;text-decoration:none;" to="/shoppingCart">
            <v-btn class="menu-btn rounded-0">
              <v-badge color="red-accent-4" :content="carts.length">
                <v-icon icon="fas fa-shopping-cart" size="x-large"></v-icon>
              </v-badge>
            </v-btn>
          </router-link>

          <v-btn class="rounded-0">
            <v-icon class="me-3" icon="fas fa-user"></v-icon>
            <span class="text-lowercase">{{ authStore.users.email}}</span>
          </v-btn>
  
          <v-btn class="menu-btn rounded-0 bg-red-darken-4" @click="handleClick">
            <v-icon class="me-3" icon="fas fa-door-closed"></v-icon>
            <span class="text-menu">Sign Out</span>
          </v-btn>
        </div>

        <div v-if="!authStore.isLoggedIn">
          <router-link style="color:inherit;text-decoration:none;" to="/signUp">
            <v-btn class="menu-btn rounded-0" >
              <v-icon class="me-3" icon="fas fa-user-plus"></v-icon>
              <span class="text-menu">Sign Up</span>
            </v-btn>
          </router-link>

          <router-link style="color:inherit;text-decoration:none;" to="/signIn">
            <v-btn class="menu-btn rounded-0" >
              <v-icon class="me-3" icon="fas fa-door-open"></v-icon>
              <span class="text-menu">Sign In</span>
            </v-btn>
          </router-link>
  
          <v-btn class="rounded-0">
            <v-icon class="me-3" icon="fas fa-user"></v-icon>
            <span class="text-menu">Welcome Guest</span>
          </v-btn>
          
        </div>

      </v-toolbar>
    </nav>
</template>

<script>

import Banner from '../layouts/Banner.vue'

import { useShoppingStore } from '../stores/ShoppingStore'
import { useAuthStore } from '../stores/AuthenticationStore'

import { storeToRefs } from 'pinia' 

export default {
  name:"Header",
  components: {
    Banner
  },
  setup() {

    const authStore = useAuthStore()
    const shoppingStore = useShoppingStore()

    const { users } = storeToRefs(authStore)

    const { carts, loading  } = storeToRefs(shoppingStore)


    shoppingStore.getCarts()

    const handleClick = () => {
      authStore.logout()
    }

    return { 
      authStore, 
      shoppingStore,
      users,  
      // hasToken,
      carts, 
      loading, 
      handleClick }
  }
}
</script>

<style>
  .menu-btn:hover {
    border-bottom: 0.5px solid rgb(0, 38, 7);
  }

  .text-menu {
    text-transform: capitalize;
  }

  
</style>