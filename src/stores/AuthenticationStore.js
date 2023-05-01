import { defineStore } from 'pinia'

import router from '../router/index'

import { auth } from '../firebase-config'

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'

export const useAuthStore = defineStore('authStore', {
  state: () => ({

    users: [],
    errors: null,
    isLoggedIn: true
    // authIsReady: false
  }),

  actions: {
    async signUp({email, password}) {

      // try {
      //   await createUserWithEmailAndPassword(auth, email, password)

      //   const user = res.user
      //   this.users = user
      //   this.errors = null
      //   window.location.href = '#/'
      // } catch(err) {
        //   this.errors = err.message
        // }
        await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          router.push('/')
          this.errors = null
          this.users = userCredential.user
          localStorage.setItem('accessToken', userCredential.user.accessToken)
          console.log(this.users)
        })
        .catch((err) => {
          this.errors = err.message
        })
    },

    async signIn({ email, password }) {

      // try {
      //   const res = await signInWithEmailAndPassword(auth, email, password)
        
      //   const user = res.user
      //   this.users = user
      //   this.errors = null
      //   localStorage.setItem('accessToken', this.users.accessToken)
      //   window.location.href= '#/'
      // } catch (err) {
      //   this.errors = err.message
      // }
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          router.push('/')
          this.errors = null
          this.users = userCredential.user
          localStorage.setItem('accessToken', userCredential.user.accessToken)
          console.log(this.users)
        })
        .catch((err) => {
          this.errors = err.message
        })


    
    },

    async logout() {

      // await signOut(auth)
      // window.location.href = '#/signIn'
      
      await signOut(auth)
      .then(() => {
          localStorage.removeItem('accessToken')
          router.push('/signIn')
        })
        .catch((err) => {
          this.errors = err.message
        })

    }
  }
})
