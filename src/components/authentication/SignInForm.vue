<template>
  <h1 class="text-center mt-8">Sign In</h1>

  <v-container>
    <v-card
      class="mx-auto flex flex-col w-50 mb-8 pa-8"
      color="grey-darken-4"
      max-width="600"
    >

    <form @submit.prevent="submit">
      <v-text-field
        v-model="userEmail.value.value"
        :error-messages="userEmail.errorMessage.value"
        placeholder="User Email Address"
      >
      </v-text-field>

      <v-text-field
        type="password"
        v-model="userPassword.value.value"
        :error-messages="userPassword.errorMessage.value"
        placeholder="User Password"
        autocomplete="on"
      >
      </v-text-field>

      <p v-if="errors" class="text-red my-5">{{ errors }}</p>

      <p class="text-white">If you dont have <span class="text-decoration-underline">Please Sign Up!!!</span></p>
      <v-row class="justify-center mt-5">
        <v-btn
          class="me-4"
          type="submit"
          color="orange-lighten-2"
        >
          <v-icon class="me-3" icon="fas fa-shopping-cart"></v-icon>
          <span class="text-menu text-capitalized">Submit</span>
        </v-btn>
      </v-row>
    </form>

    </v-card>
  </v-container>
</template>

<script>
import { useField, useForm } from 'vee-validate'

import { useAuthStore } from '../../stores/AuthenticationStore.js'
import { storeToRefs } from 'pinia'

export default {
  setup() {

    const authStore = useAuthStore()

    const { errors, users } = storeToRefs(authStore)

    const { handleSubmit } = useForm({
      validationSchema: {
        userEmail (value) {
          if(value) return true
          return 'User Email needs to be inputted'
        },
        userPassword (value) {
          if(value) return true
          return 'User Password must be required'
        },
      },
      initialValues: {
        userEmail: '',
        userPassword: ''
      }
    })

    const userEmail = useField('userEmail')
    const userPassword = useField('userPassword')

    const submit = handleSubmit(values => {
      authStore.signIn({
        email: values.userEmail, 
        password: values.userPassword
      })
    })

  

    return {
      userEmail, 
      userPassword,
      errors,
      users,
      submit
    }
  }
}
</script>

<style>

</style>